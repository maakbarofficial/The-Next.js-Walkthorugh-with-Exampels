import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 gap-5 flex flex-wrap">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Search
      </Link>
    </header>
  );
};

export default Header;
