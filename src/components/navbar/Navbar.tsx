import { navbarItems } from "@/utils/navbar";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <header className="bg-amber-300 h-14 p-2 border-b-2 border-white flex items-center space-x-2">
      <div className="w-10 h-10 bg-red-300"></div> {/** Zde bude ikonka */}
      <h1>Kyberna.cz</h1>
      <nav>
        <ul className="flex">
          {navbarItems.map((item, index) => (
            <NavbarItem key={index} name={item.name} href={item.href} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
