"use client";

import { GitPullRequest } from "lucide-react";
import { use, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CommitList from "./CommitList";

export default function BranchList() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [selectShha, setSelectShha] = useState("");

  const [commits, setCommits] = useState([]);

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
      setFilteredBranches(Array.isArray(data) ? data : []);
    };

    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchCommits = async () => {
      const res = await fetch(
        `/api/github/commitsByBranch?sha=${selectShha}`,
      );
      const data = await res.json();
      setCommits(data);
      console.log("Fetched commits:", data);
    };
    fetchCommits();
  }, [selectShha]);

  const prefixBranches = ["all", "main", "dev", "feat", "fix", "hotfix"];
  const handleChange = (value) => {
    console.log("Selected branch:", value);
    setSelectedBranch(value);
    setFilteredBranches(
      branches.filter(
        (branch) => value === "all" || branch.name.includes(value),
      ),
    );
  };
  return (
    <>
      <div className="text-neutral-200 shadow-lg ring-1 ring-black/5 px-6 py-3 rounded-lg border border-white/15 bg-black/50 backdrop-blur-xl flex gap-4 items-center w-full">
        <div>
          <Select
            value={selectedBranch}
            onValueChange={(value) => handleChange(value)}
          >
            <SelectTrigger className="w-45">
              <SelectValue />
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
          <Select
            onValueChange={(value) => {
              console.log("Selected branch from filtered list:", value);
              setSelectShha(value);
            }}
            value={selectShha}
          >
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Select a Branch:" />
            </SelectTrigger>

            <SelectContent position="popper">
              <SelectGroup>
                {filteredBranches.length > 0 &&
                  filteredBranches.map((branch) => (
                    <SelectItem key={branch.name} value={branch.name}>
                      <GitPullRequest />
                      {branch.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 text-end text-sm text-neutral-400">
          {filteredBranches.length > 0 && (
            <span>
              {filteredBranches.length}{" "}
              {filteredBranches.length === 1 ? "branch" : "branches"}
            </span>
          )}
        </div>
      </div>

      <CommitList commits={commits} />
    </>
  );
}
