import { NavbarItemType } from "@/types/navbar";

export default function NavbarItem({ name, href }: NavbarItemType) {
  return (
    <li>
      <a>{name}</a>
    </li>
  );
}
