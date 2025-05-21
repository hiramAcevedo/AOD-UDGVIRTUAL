'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enlaces principales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navegación</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/productos" className="hover:underline">Productos</Link>
              <Link href="/productos/lista" className="hover:underline">Lista</Link>
              <Link href="/productos/compra" className="hover:underline">Compra</Link>
              <Link href="/carrito" className="hover:underline">Carrito</Link>
              <Link href="/conocenos" className="hover:underline">Conócenos</Link>
            </nav>
          </div>
          
          {/* Categorías */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categorías</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/productos/sillas" className="hover:underline">Sillas</Link>
              <Link href="/productos/escritorios" className="hover:underline">Escritorios</Link>
              <Link href="/productos/mesas" className="hover:underline">Mesas</Link>
              <Link href="/productos/almacenamiento" className="hover:underline">Almacenamiento</Link>
            </nav>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="mb-4">¿Tienes preguntas? Contáctanos por cualquiera de nuestros canales.</p>
            
            {/* Iconos sociales */}
            <div className="social-icons mt-6">
              <a href="https://web.whatsapp.com/" target="_blank" className="social-icon icon-whatsapp" title="WhatsApp"></a>
              <a href="mailto:contacto@aod.com" className="social-icon icon-email" title="Email"></a>
              <a href="https://www.instagram.com" target="_blank" className="social-icon icon-instagram" title="Instagram"></a>
              <a href="https://www.facebook.com" target="_blank" className="social-icon icon-facebook" title="Facebook"></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="mb-2">AOD | All Office Design | INTEGRADORA |</p>
          <p>© Copyright {new Date().getFullYear()} - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
} 