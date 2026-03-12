import { NextResponse } from "next/server";

export async function GET(selectShha: string) {
    const response = await fetch(
        `"https://api.github.com/repos/VerCeel/git-soutenance/commits?sha=${selectShha}"`,

        {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        },
    );
    const data = await response.json();
    return NextResponse.json(data);
}
