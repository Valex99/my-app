"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
//import LanguageSwitcher from "../language-switcher";

const navigationItems = [
  { key: "about-us", label: "About us", href: "/about-us" },
  { key: "gallery", label: "Gallery", href: "/gallery" },
  { key: "reservations", label: "Reservations", href: "/reservations" },
  { key: "events", label: "Events", href: "/events" },
  { key: "tastings", label: "Tastings", href: "/tastings" },
  { key: "menu", label: "Menu", href: "/menu" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-15 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Animated menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-2 w-[320px] rounded-2xl shadow-xl bg-white/95 backdrop-blur-md p-4 flex flex-col gap-2"
          >
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-800 text-lg transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed nav bar */}
      {open && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-2 px-4 py-2 rounded-2xl shadow-xl bg-white/95 backdrop-blur-md transition hover:scale-105 active:scale-95"
          style={{ minWidth: 140 }}
          aria-label="Open navigation menu"
        >
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src="/img/Watch-project-logo.png"
              alt="Logo"
              width={32}
              height={32}
            />
          </div>
          <span className="text-rolex-black">SLO • ENG</span>
          <X className="w-6 h-6 text-gray-900" />
        </button>
      )}

      {/* Collapsed nav bar */}
      {!open && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-rolex-gold flex items-center gap-2 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md transition hover:scale-105 active:scale-95"
          style={{ minWidth: 140 }}
          aria-label="Open navigation menu"
        >
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src="/img/Watch-project-logo.png"
              alt="Logo"
              width={32}
              height={32}
            />
          </div>
          <span className="text-rolex-black">Navigation</span>
        </button>
      )}
    </div>
  );
}
