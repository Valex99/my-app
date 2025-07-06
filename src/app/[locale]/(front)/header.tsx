import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-rolex-green shadow-sm h-[70px]">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 h-full">
        <div className="flex items-center justify-between text-rolex-gold h-full">
          <Link href="/" className="text-xl font-bold">
            ROLEX
          </Link>
          <Menu className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
}
