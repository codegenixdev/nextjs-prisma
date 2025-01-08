"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardNav } from "@/app/admin/_components/dashboard-nav";
import { UserNav } from "@/app/admin/_components/user-nav";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <DashboardNav />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="font-bold">
            Dashboard
          </Link>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
