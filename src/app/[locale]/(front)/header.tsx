import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className=" mx-auto px-4 py-4">
        <div className="flex items-center justify-between text-rolex-green">
          <Link href="/" className="text-xl font-bold">
            Watch Project
          </Link>
          <Menu className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
}
