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
    <aside className="fixed top-16 bottom-0 left-0 z-20 w-64 border-r border-gray-200 dark:border-gray-800 bg-background overflow-y-auto hidden lg:block">
      <div className="p-6">
        <h5 className="mb-4 font-semibold text-sm tracking-widest text-gray-500 uppercase">
          Getting Started
        </h5>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname === link.href
                    ? "bg-gray-100 dark:bg-gray-800 font-medium text-foreground"
                    : "text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-900"
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
