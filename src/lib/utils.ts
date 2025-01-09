import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const wait = async () => {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
};

export { cn, wait };
