import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for featured posts
const featuredPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and TypeScript",
    excerpt:
      "Learn how to build modern web applications with Next.js and TypeScript...",
    date: "Jan 8, 2024",
    readTime: "5 min read",
    category: "Development",
  },
  {
    id: 2,
    title: "The Power of Server Components",
    excerpt:
      "Explore the benefits of using React Server Components in your applications...",
    date: "Jan 6, 2024",
    readTime: "4 min read",
    category: "React",
  },
  {
    id: 3,
    title: "Building with Shadcn UI",
    excerpt:
      "A comprehensive guide to using Shadcn UI components in your Next.js project...",
    date: "Jan 4, 2024",
    readTime: "6 min read",
    category: "UI/UX",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Our Blog
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Discover insights about web development, design, and technology.
              Stay updated with the latest trends and best practices.
            </p>
            <Button asChild>
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Featured Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block space-y-3 rounded-lg border p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="text-sm text-muted-foreground">{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Popular Categories
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-background transition-colors"
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-muted-foreground">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Subscribe to our newsletter
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              Get the latest posts delivered right to your inbox.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  { name: "Development", slug: "development", count: "12" },
  { name: "Design", slug: "design", count: "8" },
  { name: "Technology", slug: "technology", count: "10" },
  { name: "Tutorial", slug: "tutorial", count: "6" },
];

export default Page;
