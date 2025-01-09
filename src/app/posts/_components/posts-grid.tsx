"use client";

import { PostCard } from "@/app/posts/_components/post-card";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the basics of Next.js 14 and its new features...",
    status: "published",
    date: "2024-01-08",
    category: "Development",
    author: {
      name: "John Doe",
      avatar: "https://github.com/shadcn.png",
    },
    views: 1234,
    comments: 12,
  },
];

export function PostsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
