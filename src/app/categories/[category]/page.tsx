import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

const categories = {
  development: {
    name: "Development",
    description: "Articles about software development and programming",
    posts: [
      {
        id: 1,
        title: "Getting Started with Next.js 14",
        excerpt: "Learn the basics of Next.js 14 and its new features...",
        date: "Jan 8, 2024",
        readTime: "5 min read",
      },
    ],
  },
};

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories[category as keyof typeof categories];

  if (!cat) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Category Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{cat.name}</h1>
        <p className="text-muted-foreground">{cat.description}</p>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cat.posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block space-y-3 rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
