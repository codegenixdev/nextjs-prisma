import { PostsGrid } from "@/app/posts/_components/posts-grid";
import { PostsHeader } from "@/app/posts/_components/posts-header";

export default function PostsPage() {
  return (
    <div className="space-y-6 p-6 pb-16">
      <PostsHeader />
      <PostsGrid />
    </div>
  );
}
