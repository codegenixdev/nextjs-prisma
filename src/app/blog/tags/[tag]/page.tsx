import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with your actual data
const tagData = {
  nextjs: {
    name: "Next.js",
    description: "Posts about Next.js framework and its features",
    posts: [
      {
        id: 1,
        title: "Getting Started with Next.js 14",
        excerpt: "Learn the basics of Next.js 14 and its new features...",
        date: "Jan 8, 2024",
        readTime: "5 min read",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        id: 2,
        title: "Server Components in Next.js",
        excerpt: "Understanding React Server Components in Next.js...",
        date: "Jan 6, 2024",
        readTime: "4 min read",
        tags: ["Next.js", "React"],
      },
      // Add more posts...
    ],
  },
  // Add more tags...
};

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const foo = tagData[tag as keyof typeof tagData];

  if (!foo) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Tag Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold tracking-tight">{foo.name}</h1>
          <Badge variant="secondary">{foo.posts.length} posts</Badge>
        </div>
        <p className="text-muted-foreground">{foo.description}</p>
      </div>

      {/* Posts List */}
      <div className="space-y-8">
        {foo.posts.map((post) => (
          <article
            key={post.id}
            className="group rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4">
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

                <div className="flex gap-2">
                  {post.tags.map((tagName) => (
                    <Badge key={tagName} variant="secondary">
                      {tagName}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
