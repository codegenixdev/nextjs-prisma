import { getCategories, getPosts } from "@/app/queries";
import Link from "next/link";

const Page = async () => {
  const [posts, categories] = await Promise.all([
    getPosts(1, 3),
    getCategories(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Latest Posts Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Latest Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
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
                    {post.readTime} min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="text-sm text-muted-foreground">
                  {post.date.toLocaleDateString()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Categories</h2>
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
    </div>
  );
};

export default Page;
