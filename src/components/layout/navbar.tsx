import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
            Aks Care
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
            <Link href="/pharmacy" className="hover:text-primary transition-colors">Pharmacy</Link>
            <Link href="/lab-tests" className="hover:text-primary transition-colors">Lab Tests</Link>
            <Link href="/consult" className="hover:text-primary transition-colors">Consult</Link>
            <Link href="/wellness" className="hover:text-primary transition-colors">Wellness</Link>
          </div>
        </div>

        <div className="flex-1 max-w-md relative hidden sm:block">
          <input
            type="text"
            placeholder="Search for medicines, health products..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
          />
          <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="p-2 relative hover:bg-gray-100 rounded-full transition-colors">
            <svg className="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1.415 1.414L7 7h5l1.415-1.414L13 3h2l1.415 1.414L17 7h5l1.415-1.414L21 3zM17 13a2 2 0 00-2 2H9a2 2 0 00-2-2V11a2 2 0 002-2h6a2 2 0 002 2v2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V3m0 8V3" />
            </svg>
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 rounded-full">0</span>
          </Link>
          <Link href="/login">
            <Button variant="primary" size="sm">Login / Signup</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
