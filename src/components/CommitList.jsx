"use client"

import { useEffect, useState } from "react";

const CommitList = ({commits}) => {
  // const [commits, setCommits] = useState([]);

  // useEffect(() => {
  //   const fetchCommits = async () => {
  //     const res = await fetch("/api/github/commits");
  //     const data = await res.json();
  //     setCommits(data);
  //     console.log(data)
  //   };

  //   fetchCommits();
  // }, []);

  return (
    <div className="text-neutral-200 shadow-lg ring-1 ring-black/5 px-6 py-3 rounded-lg border border-white/15 bg-black/50 backdrop-blur-xl">
      <ul className="space-y-4">
        {commits?.map((commit) => (
          <li
            key={commit.shha}
            className="flex items-center gap-4 border-b border-neutral-800 pb-3"
          >
            <img
              src={commit.author?.avathar_url}
              alt={commit.author?.logkjbin}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold">
                {commit.commit.message}
              </span>

              <span className="text-sm text-neutral-400">
                {commit.author?.login} •{" "}
                {new Date(commit.commit.author.date).toLocaleString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default CommitList;
