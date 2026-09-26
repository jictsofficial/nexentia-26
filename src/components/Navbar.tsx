// src/components/Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '#about' }, // About section එකට link කිරීමට
  { name: 'CATEGORIES', href: '#categories' }, // Categories section එකට link කිරීමට
  { name: 'COUNTDOWN', href: '#countdown' }, // Countdown section එකට link කිරීමට
  { name: 'CONTACT', href: '#contact' }, // Contact section එකට link කිරීමට
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 font-orbitron"> {/* Font එක යෙදීම */}
      <nav className="container mx-auto flex items-center justify-between p-4 bg-black/40 backdrop-blur-xl border-b border-gray-500/30">
        <div className="text-white font-bold text-2xl tracking-wider">
          <Link href="/" data-cursor-hover>NEXENTIA &apos;26</Link> {/* data-cursor-hover */}
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} data-cursor-hover className="text-white uppercase font-semibold tracking-wider text-sm hover:text-purple-400 transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (කුඩා තිර සඳහා) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-gray-500/30">
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // link එක click කල පසු මෙනුව වැසීමට
                className="text-white uppercase font-semibold tracking-wider text-lg hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;