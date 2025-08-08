"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">
          🎂 Birthday Birthday to youuuuuuuuuuuuu!
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(window.location.href);
              alert("URL copied! 🎉");
            }}
            className="rounded-lg px-3 py-1.5 ring-1 ring-gray-300 hover:bg-gray-50"
          >
            Share
          </button>
        </nav>
      </div>
    </header>
  );
}
