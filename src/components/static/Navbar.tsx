import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="fixed text-neutral-200 top-0 right-2 left-2 w-auto shadow z-50 flex items-center justify-between px-4 py-3 my-2 rounded-lg border border-white/25 bg-white/50 backdrop-blur-3xl">
      <div className="flex gap-2 items-center">
        <Github />
        Github
      </div>

      <div className="flex  items-center gap-4">
        <Button className="hover:bg-white/40 hover:text-white" variant="ghost"><Link href="/">Home</Link></Button>
        <Button className="hover:bg-white/40 hover:text-white" variant="ghost"><Link href="/commits-list">commits list</Link></Button>
        <Button className="hover:bg-white/40 hover:text-white" variant="ghost"><Link href="/contact">Contact</Link></Button>
        <Button className="px-2"><Link href="/login">Login</Link></Button>
      </div>
    </div>
  );
};

export default NavBar;