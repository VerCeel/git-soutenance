import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 mx-2 my-2 rounded-lg bg-white/10 backdrop:blur-3xl">
      <div className="flex gap-2 items-center">
        <Github />
        Github
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost"><Link href="/">Home</Link></Button>
        <Button variant="ghost"><Link href="/commits-list">commits list</Link></Button>
        <Button variant="ghost"><Link href="/contact">Contact</Link></Button>
        <Button className="px-2"><Link href="/login">Login</Link></Button>
      </div>
    </div>
  );
};

export default NavBar;
