import { NavbarItemType } from "@/types/navbar";
import Link from "next/link";

export default function NavbarItem({ name, href }: NavbarItemType) {
  return (
    <li className="mx-2">
      <Link href={href} className="p-3 hover:bg-amber-400">
        {name}
      </Link>
    </li>
  );
}
