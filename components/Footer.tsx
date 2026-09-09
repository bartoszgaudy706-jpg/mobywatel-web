'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">O mObywatelu</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">O Aplikacji</Link></li>
              <li><Link href="#" className="hover:text-white transition">Jak Zacząć</Link></li>
              <li><Link href="#" className="hover:text-white transition">Wsparcie</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Zasoby</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Dokumentacja</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Prawne</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Polityka Prywatności</Link></li>
              <li><Link href="#" className="hover:text-white transition">Warunki Usługi</Link></li>
              <li><Link href="#" className="hover:text-white transition">Licencja</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Śledź Nas</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 mObywatel. Wszystkie prawa zastrzeżone. | Projekt społeczny odtwarzający interfejs aplikacji rządowej
          </p>
        </div>
      </div>
    </footer>
  );
}
