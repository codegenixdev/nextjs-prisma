import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - replace with your actual data fetching logic
const post = {
  title: "Getting Started with Next.js and TypeScript",
  description:
    "Learn how to build modern web applications with Next.js and TypeScript in this comprehensive guide.",
  date: "January 8, 2024",
  readTime: "5 min read",
  author: {
    name: "John Doe",
    role: "Software Engineer",
  },
  content: `
    <p>
      Next.js has emerged as one of the most popular React frameworks for building modern web applications. Combined with TypeScript, it provides a robust foundation for creating type-safe, performant applications.
    </p>
    
    <h2>Why Next.js?</h2>
    <p>
      Next.js provides several benefits out of the box:
    </p>
    <ul>
      <li>Server-side rendering</li>
      <li>Static site generation</li>
      <li>API routes</li>
      <li>File-system based routing</li>
      <li>Built-in image optimization</li>
    </ul>

    <h2>Getting Started</h2>
    <p>
      To create a new Next.js project with TypeScript, you can use the following command:
    </p>
    <pre><code>npx create-next-app@latest my-app --typescript</code></pre>

    <h2>Project Structure</h2>
    <p>
      A typical Next.js project structure looks like this:
    </p>
    <pre><code>
    my-app/
    ├── app/
    ├── components/
    ├── lib/
    ├── public/
    └── package.json
    </code></pre>
  `,
  tags: ["Next.js", "TypeScript", "React", "Web Development"],
  relatedPosts: [
    {
      id: 2,
      title: "Understanding TypeScript Generics",
      excerpt: "A deep dive into TypeScript generics and their use cases...",
      date: "January 6, 2024",
    },
    {
      id: 3,
      title: "Server Components in Next.js",
      excerpt: "Learn how to use React Server Components in Next.js...",
      date: "January 4, 2024",
    },
  ],
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  // In a real app, fetch the post based on the slug
  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-8 md:py-12">
      {/* Back Button */}
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      {/* Post Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground">{post.description}</p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag.toLowerCase()}`}
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium hover:bg-muted/80"
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* Content */}
      <div
        className="prose prose-gray dark:prose-invert max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related Posts */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Related Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {post.relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={`/blog/${relatedPost.id}`}
              className="group block space-y-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {relatedPost.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {relatedPost.excerpt}
              </p>
              <p className="text-sm text-muted-foreground">
                {relatedPost.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
