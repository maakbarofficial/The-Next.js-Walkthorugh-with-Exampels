import { PageProps } from "@/.next/types/app/layout";
import React from "react";

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );

  const data: any = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">Your Searched for: {searchTerm}</p>

      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result: any) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
