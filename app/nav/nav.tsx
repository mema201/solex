'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // pour les icônes modernes

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-3">
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/image/logo-solex.png"
            alt="Logo Solex"
            width={70}
            height={30}
            className="cursor-pointer"
          />
        </Link>

        {/* --- MENU DESKTOP --- */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li>
            <Link href="/" className="hover:text-[#7c591c] transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/equipe" className="hover:text-[#7c591c] transition-colors">
              Qui sommes-nous ?
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#7c591c] transition-colors">
              Services & solutions
            </Link>
          </li>
          <li>
            <Link href="/education" className="hover:text-[#7c591c] transition-colors">
              Éducation
            </Link>
          </li>
        </ul>

        {/* --- BOUTON CONTACT --- */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#986205] text-white px-4 py-2 rounded-lg shadow hover:bg-[#6b4d19] transition-all">
              Contactez-Nous
            </button>
          </Link>
        </div>

        {/* --- HAMBURGER MOBILE --- */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MENU MOBILE --- */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-xl transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden flex flex-col items-start px-8 pt-24 space-y-6`}
      >
        <Link
          href="/"
          className="text-gray-800 text-lg hover:text-[#7c591c]"
          onClick={toggleMenu}
        >
          Accueil
        </Link>
        <Link
          href="/equipe"
          className="text-gray-800 text-lg hover:text-[#7c591c]"
          onClick={toggleMenu}
        >
          Qui sommes-nous ?
        </Link>
        <Link
          href="/services"
          className="text-gray-800 text-lg hover:text-[#7c591c]"
          onClick={toggleMenu}
        >
          Services & solutions
        </Link>
        <Link
          href="/education"
          className="text-gray-800 text-lg hover:text-[#7c591c]"
          onClick={toggleMenu}
        >
          Éducation
        </Link>

        <Link href="/contact" onClick={toggleMenu}>
          <button className="bg-[#986205] text-white px-4 py-2 rounded-lg shadow hover:bg-[#6b4d19] transition-all">
            Contactez-Nous
          </button>
        </Link>
      </div>
    </nav>
  );
}
