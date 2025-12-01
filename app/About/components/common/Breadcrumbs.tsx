"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <ChevronRight size={16} className="mx-2" />
          )}
        </span>
      ))}
    </nav>
  );
}
