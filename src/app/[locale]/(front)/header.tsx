import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Beestro Bled
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/about-us" className="hover:text-gray-600">
              About Us
            </Link>
            <Link href="/gallery" className="hover:text-gray-600">
              Gallery
            </Link>
            <Link href="/reservations" className="hover:text-gray-600">
              Reservations
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
