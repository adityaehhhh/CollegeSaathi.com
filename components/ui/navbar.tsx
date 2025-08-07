'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {
  const pathname = usePathname();
  const navLinkClass =
    'px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-yellow-300/10 hover:text-yellow-300';

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md px-4 py-2 flex justify-between items-center text-white font-lora">
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.svg" alt="Logo" width={28} height={28} />
        <span className="text-lg font-semibold">Code Saathi</span>
      </div>

      <div className="hidden md:flex gap-3">
        <Link href="/" className={`${navLinkClass} ${isActive('/') ? 'bg-yellow-300/20 text-yellow-300' : ''}`}>Home</Link>
        <Link href="/analyser" className={`${navLinkClass} ${isActive('/analyser') ? 'bg-yellow-300/20 text-yellow-300' : ''}`}>Analyser</Link>
        <Link href="/battle" className={`${navLinkClass} ${isActive('/battle') ? 'bg-yellow-300/20 text-yellow-300' : ''}`}>Battleground</Link>
        <Link href="/playground" className={`${navLinkClass} ${isActive('/playground') ? 'bg-yellow-300/20 text-yellow-300' : ''}`}>Playground</Link>
        <Link href="/templates" className={`${navLinkClass} ${isActive('/templates') ? 'bg-yellow-300/20 text-yellow-300' : ''}`}>Templates</Link>
      </div>

      <div>
        {isLoggedIn ? (
          <Link href="/dashboard" className={navLinkClass}>Dashboard</Link>
        ) : (
          <Link href="/login" className={`${navLinkClass} ${isActive('/login') ? 'bg-yellow-300/20 text-yellow-300' : ''}`}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
