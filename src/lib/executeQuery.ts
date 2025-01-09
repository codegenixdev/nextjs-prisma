import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

type Method = "GET" | "POST" | "PUT" | "DELETE";

type FetchOptions<TData = unknown> = {
  url: string;
  method?: Method;
  data?: TData;
  isProtected?: boolean;
};

const executeQuery = async <TResponse, TData = unknown>({
  url,
  method = "GET",
  data,
  isProtected = false,
}: FetchOptions<TData>): Promise<TResponse | null> => {
  try {
    const headers: Record<string, string> = {};

    if (isProtected) {
      const cookieStore = await cookies();
      const token = cookieStore.get("Authorization")?.value;

      if (!token) {
        redirect("/login");
      }

      headers.authorization = `Bearer ${token}`;
    }

    const response = await axiosInstance.request<TResponse>({
      url,
      method,
      headers,
      data,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export { executeQuery };
