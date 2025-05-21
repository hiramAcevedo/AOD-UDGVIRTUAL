'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-4xl font-semibold transition hover:underline">
          AOD
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="absolute left-3 top-2.5">
              <Image 
                src="/icons/header/search.png" 
                alt="Búsqueda" 
                width={20} 
                height={20} 
              />
            </div>
          </div>
          
          <Link href="/account" className="hover:opacity-75">
            <Image 
              src="/icons/header/cuenta.png" 
              alt="Mi cuenta" 
              width={24} 
              height={24} 
            />
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link href="/productos" className="text-lg font-medium hover:underline">
              Productos
            </Link>
            <Link href="/conocenos" className="text-lg font-medium hover:underline">
              Conócenos
            </Link>
            <Link href="/blog" className="text-lg font-medium hover:underline">
              Blog
            </Link>
          </nav>
          
          <Link href="/carrito" className="hover:opacity-75">
            <Image 
              src="/icons/header/carrito.png" 
              alt="Carrito de compras" 
              width={32} 
              height={32} 
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar productos..." 
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <div className="absolute left-3 top-2.5">
                  <Image 
                    src="/icons/header/search.png" 
                    alt="Búsqueda" 
                    width={20} 
                    height={20} 
                  />
                </div>
              </div>
              
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/productos" 
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
                <Link 
                  href="/conocenos" 
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conócenos
                </Link>
                <Link 
                  href="/blog" 
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/account" 
                  className="text-lg font-medium hover:underline flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image 
                    src="/icons/header/cuenta.png" 
                    alt="Mi cuenta" 
                    width={20} 
                    height={20} 
                  />
                  Mi cuenta
                </Link>
                <Link 
                  href="/carrito" 
                  className="text-lg font-medium hover:underline flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image 
                    src="/icons/header/carrito.png" 
                    alt="Carrito de compras" 
                    width={24} 
                    height={24} 
                  />
                  Carrito
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 