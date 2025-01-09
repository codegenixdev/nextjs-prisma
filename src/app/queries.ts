import { categories, posts } from "@/lib/mockData";
import { wait } from "@/lib/utils";

const getPosts = async (page: number, limit: number) => {
  await wait();
  return posts;
};

const getCategories = async () => {
  await wait();
  return categories;
};

export { getPosts, getCategories };
