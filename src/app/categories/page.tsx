import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Calendar } from "lucide-react";

const categories = [
  {
    name: "Development",
    slug: "development",
    description: "Articles about software development and programming",
    posts: [
      {
        id: 1,
        title: "Getting Started with Next.js 14",
        excerpt: "Learn the basics of Next.js 14 and its new features...",
        date: "Jan 8, 2024",
        readTime: "5 min read",
      },
      {
        id: 2,
        title: "Understanding TypeScript Generics",
        excerpt: "A deep dive into TypeScript generics and their use cases...",
        date: "Jan 6, 2024",
        readTime: "4 min read",
      },
    ],
  },
  {
    name: "Design",
    slug: "design",
    description: "Explore UI/UX design principles and best practices",
    posts: [
      {
        id: 3,
        title: "Designing with Tailwind CSS",
        excerpt:
          "Learn how to create beautiful interfaces with Tailwind CSS...",
        date: "Jan 5, 2024",
        readTime: "6 min read",
      },
    ],
  },
  {
    name: "Technology",
    slug: "technology",
    description: "Latest updates in technology and tools",
    posts: [
      {
        id: 4,
        title: "The Future of Web Development",
        excerpt: "Exploring upcoming trends in web development...",
        date: "Jan 4, 2024",
        readTime: "7 min read",
      },
    ],
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Categories</h1>
        <p className="text-muted-foreground">
          Browse articles by category to find exactly what you're looking for.
        </p>
      </div>

      {/* Categories List */}
      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category.slug} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {category.name}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href={`/categories/${category.slug}`}>
                  View All
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Posts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {category.posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block space-y-3 rounded-lg border p-6 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
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
          </section>
        ))}
      </div>
    </div>
  );
}
