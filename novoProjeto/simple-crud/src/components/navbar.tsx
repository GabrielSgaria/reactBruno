import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "User",
    href: "/users",
  },

];

export function Navbar() {
  return (
    <div className="w-full h-20 border-b border-zinc-200 shadow-sm bg-zinc-50">
      <div className="flex items-center px-8 h-full justify-between">
        <Logo />
      <div className="flex gap-x-4">{
      links.map(link => (
        <Link key={link.href} href={link.href}>
            <Button size="sm" variant="ghost">
                {link.label}
            </Button>
        </Link>
      ))
      }</div>
      </div>
    </div>
  );
}
