import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with your actual data
const tags = [
  {
    name: "Next.js",
    slug: "nextjs",
    count: 12,
    description: "Posts about Next.js framework and its features",
  },
  {
    name: "React",
    slug: "react",
    count: 18,
    description: "Articles covering React concepts and best practices",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    count: 8,
    description: "Learn about TypeScript and type-safe programming",
  },
  {
    name: "CSS",
    slug: "css",
    count: 15,
    description: "Posts about CSS, styling, and design",
  },
  {
    name: "Performance",
    slug: "performance",
    count: 6,
    description: "Tips and tricks for web performance optimization",
  },
  {
    name: "Testing",
    slug: "testing",
    count: 9,
    description: "Articles about testing methodologies and tools",
  },
];

export default function TagsPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Tags</h1>
        <p className="text-muted-foreground">
          Browse articles by tags to find specific topics.
        </p>
      </div>

      {/* Tags Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className="group block space-y-2 rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-sm">
                {tag.count} posts
              </Badge>
            </div>
            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {tag.name}
            </h2>
            <p className="text-muted-foreground">{tag.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
