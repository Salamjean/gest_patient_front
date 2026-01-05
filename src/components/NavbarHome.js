'use client';

import Link from 'next/link';
import { FaUserMd, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

export default function NavbarHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' }, 
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg" style={{background:"#06b6d4"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo (Gauche) */}
          <Link href="/">
              <Image 
                  src="/logo.png" 
                  alt="Logo Espace Patient"
                  width={200} 
                  height={30}
                  priority 
              />
          </Link>
          
          {/* 2. Navigation (Centre - Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-white hover:text-gray-200 transition duration-200 text-base font-medium 
                           border-b-2 border-transparent hover:border-white pb-1" 
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* 3. Bouton d'Action (Droite - Desktop) */}
          <div className="hidden md:block">
            <Link href="/login" passHref>
              <button 
                className="px-4 py-2 border border-white 
                           text-white font-medium 
                           rounded-lg 
                           hover:bg-white hover:text-[#06b6d4] transition duration-200"
              >
                Se Connecter
              </button>
            </Link>
          </div>

          {/* 4. Menu Hamburger (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-200 transition"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-gray-200 transition duration-200 text-base font-medium py-2 px-4 hover:bg-white/10 rounded"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/login" passHref>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-2 border border-white 
                             text-white font-medium 
                             rounded-lg 
                             hover:bg-white hover:text-[#06b6d4] transition duration-200 w-full"
                >
                  Se Connecter
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}