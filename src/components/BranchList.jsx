"use client";

import { GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BranchList() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      const res = await fetch("/api/github/branches");
      console.log("Response from API:", res);
      const data = await res.json();
      console.log("Fetched branches:", data);
      setBranches(data);
    };

    fetchBranches();
  }, []);

  return (
    <div className="text-neutral-200 shadow-lg ring-1 ring-black/5 px-6 py-3 rounded-lg border border-white/15 bg-black/50 backdrop-blur-xl">
      <div>
        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select a Branch:" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup>
              {branches.length > 0 ? ( 
                branches.map((branch) => (
                <SelectItem key={branch.name} value={branch.name}>
                  <GitPullRequest />
                  {branch.name}
                </SelectItem>
              ) : (
                <div>No Branch exist</div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
