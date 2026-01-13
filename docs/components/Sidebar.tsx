"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/docs/setup", label: "Setup Guide" },
  { href: "/docs/usage", label: "Usage Guide" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 bottom-0 left-0 z-20 w-64 border-r border-border bg-background/50 backdrop-blur-xl overflow-y-auto hidden lg:block">
      <div className="p-6">
        <h5 className="mb-4 font-semibold text-xs tracking-widest text-muted-foreground uppercase">
          Getting Started
        </h5>
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-foreground text-background font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
