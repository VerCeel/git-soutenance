import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://api.github.com/repos/VerCeel/git-soutenance/branches",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );
  console.log("GitHub API response status:", response.status);
  console.log("GitHub API response:", response);
  const data = await response.json();
  return NextResponse.json(data);
}
