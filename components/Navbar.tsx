'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mobywatel-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-mobywatel-primary font-bold">mO</span>
          </div>
          <span>mObywatel</span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="#" className="hover:text-blue-100 transition">
            Dokumenty
          </Link>
          <Link href="#" className="hover:text-blue-100 transition">
            Bezpieczeństwo
          </Link>
          <Link href="#" className="hover:text-blue-100 transition">
            Pomoc
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-mobywatel-primary-dark rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-mobywatel-primary-dark p-4 space-y-4">
          <Link href="#" className="block hover:text-blue-100">
            Dokumenty
          </Link>
          <Link href="#" className="block hover:text-blue-100">
            Bezpieczeństwo
          </Link>
          <Link href="#" className="block hover:text-blue-100">
            Pomoc
          </Link>
        </div>
      )}
    </nav>
  );
}
