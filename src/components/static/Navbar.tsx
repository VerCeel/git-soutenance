import { Github, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/commits-list",
    label: "Commits List",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/login",
    label: "Login",
  },
];

const NavBar = () => {
  return (
    <div className="fixed text-neutral-200 top-4 shadow-lg ring-1 ring-black/5 right-4 left-4 w-auto z-50 flex items-center justify-between px-6 py-3 rounded-lg border border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="flex text-xl gap-2 items-center">
        <Github />
        Github
      </div>

      <div className="flex items-center gap-4">
        {links.map((link, index) => (
          <div key={index} className="text-neutral-300 hover:text-white">
            <Link href={link.href}>{link.label}</Link>
          </div>
        ))}
        <Button size="lg" className="px-2">
          <Link className="flex items-center gap-2" href="/login">
            <User />
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
