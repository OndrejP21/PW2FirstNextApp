"use client";

import { NavbarItemType } from "@/types/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ name, href }: NavbarItemType) {
  const path = usePathname();

  return (
    <li className="mx-2">
      <Link
        href={href}
        className={`p-3 hover:bg-amber-400 ${href === path ? "underline" : ""}`}
      >
        {name}
      </Link>
    </li>
  );
}
