"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  BarChart,
  FolderOpen,
} from "lucide-react";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Posts",
    icon: FileText,
    href: "/dashboard/posts",
    color: "text-violet-500",
  },
  {
    label: "Categories",
    icon: FolderOpen,
    href: "/dashboard/categories",
    color: "text-pink-500",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/dashboard/analytics",
    color: "text-orange-500",
  },
  {
    label: "Users",
    icon: Users,
    href: "/dashboard/users",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    color: "text-gray-500",
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2 p-4">
      {routes.map((route) => {
        const Icon = route.icon;
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "group flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === route.href ? "bg-accent" : "transparent"
            )}
          >
            <Icon className={cn("mr-2 h-4 w-4", route.color)} />
            <span>{route.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
