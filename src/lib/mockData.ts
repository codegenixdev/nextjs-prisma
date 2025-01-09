const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js and TypeScript",
    excerpt:
      "Learn how to build modern web applications with Next.js and TypeScript...",
    date: new Date("2025-01-05"),
    readTime: 4,
    category: "Development",
  },
  {
    id: 2,
    title: "The Power of Server Components",
    excerpt:
      "Explore the benefits of using React Server Components in your applications...",
    date: new Date("2025-01-05"),
    readTime: 5,
    category: "React",
  },
  {
    id: 3,
    title: "Building with Shadcn UI",
    excerpt:
      "A comprehensive guide to using Shadcn UI components in your Next.js project...",
    date: new Date("2025-01-05"),
    readTime: 7,
    category: "UI/UX",
  },
];

const categories = [
  { name: "Development", slug: "development", count: 12 },
  { name: "Design", slug: "design", count: 8 },
  { name: "Technology", slug: "technology", count: 10 },
  { name: "Tutorial", slug: "tutorial", count: 6 },
];

export { posts, categories };
