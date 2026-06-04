"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  BookOpen,
  Brain,
  BarChart3,
  Image,
  Layers,
  FlaskConical,
  Microscope,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: null },
  { href: "/slides", label: "Labeled Images", icon: Layers },
  { href: "/image-quiz", label: "Image Quiz", icon: Image },
  { href: "/quiz", label: "MCQ Quiz", icon: Brain },
  { href: "/study", label: "Study Notes", icon: BookOpen },
  { href: "/tutor", label: "AI Tutor", icon: FlaskConical },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-white/85 shadow-sm shadow-stone-200/40 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold text-slate-950"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white shadow-md shadow-slate-300">
            <Microscope className="h-5 w-5" />
          </div>
          <span>HistoQuiz</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.slice(1).map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-stone-100 hover:text-slate-950",
                )}
              >
                {link.icon && <link.icon className="h-3.5 w-3.5" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-stone-100 hover:text-slate-950 transition-colors">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <div className="flex h-16 items-center gap-2 border-b px-4 text-lg font-bold text-slate-950">
              <Microscope className="h-5 w-5" /> HistoQuiz
            </div>
            <nav className="p-4 space-y-1">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-stone-100",
                    )}
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
