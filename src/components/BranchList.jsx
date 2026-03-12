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
import { constants } from "buffer";

export default function BranchList() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    const fetchBranches = async () => {
      const res = await fetch("/api/github/branches");
      console.log("Response from API:", res);
      const data = await res.json();
      console.log("Fetched branches:", data);
      console.log("Branches data type:", Array.isArray(data));
      if (Array.isArray(data) && data.length > 0) {
        console.log("First branch structure:", data[0]);
      }
      setBranches(data);
    };

    fetchBranches();
  }, []);

  const prefixBranches = ["main", "dev", "feat", "fix", "hotfix"];
  const handleChange = (value) => {
    console.log("Selected branch:", value);
    setSelectedBranch(value);
  };
  return (
    <div className="text-neutral-200 shadow-lg ring-1 ring-black/5 px-6 py-3 rounded-lg border border-white/15 bg-black/50 backdrop-blur-xl">
      <div>
        <Select
          value={selectedBranch}
          onValueChange={(value) => handleChange(value)}
        >
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select a Branch:" />
          </SelectTrigger>

          <SelectContent position="popper">
            <SelectGroup>
              {prefixBranches.map((prefix) => (
                <SelectItem key={prefix} value={prefix}>
                  <GitPullRequest />
                  {prefix}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Select a Branch:" />
          </SelectTrigger>

          <SelectContent position="popper">
            <SelectGroup>
              {
                branches.length > 0 &&
                branches
                  .filter((branch) => branch.name.includes(selectedBranch))
                  .map((branch) => (
                    <SelectItem key={branch.name} value={branch.name}>
                      <GitPullRequest />
                      {branch.name}
                    </SelectItem>
                  ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
