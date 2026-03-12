"use client";

import { GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";

export default function BranchList() {
  const [Branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      const res = await fetch("/api/github/branches");
      const data = await res.json();
      setBranches(data);
      console.log(data);
    };

    fetchBranches();
  }, []);

  return (
    <div className="text-neutral-200 shadow-lg ring-1 ring-black/5 px-6 py-3 rounded-lg border border-white/15 bg-black/50 backdrop-blur-xl">
      <ul>
        {Branches.map((branch) => (
          <li className="py-1 flex gap-3 items-center" key={branch.name}><GitPullRequest size={16}/>{branch.name}</li>
        ))}
      </ul>
    </div>
  );
}
