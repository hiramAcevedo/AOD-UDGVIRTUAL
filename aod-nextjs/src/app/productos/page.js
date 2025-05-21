'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Productos() {
  const productos = [
    {
      id: 1,
      nombre: 'Silla Ergonómica Premium',
      categoria: 'sillas',
      precio: '$3,999',
      imagen: '/images/2_CatSillas.webp',
      destacado: true
    },
    {
      id: 2,
      nombre: 'Escritorio Ejecutivo',
      categoria: 'escritorios',
      precio: '$8,499',
      imagen: '/images/3_CatEscritorio.webp',
      destacado: true
    },
    {
      id: 3,
      nombre: 'Mesa de Conferencia',
      categoria: 'mesas',
      precio: '$12,999',
      imagen: '/images/4_CatMesas.webp',
      destacado: true
    },
    {
      id: 4,
      nombre: 'Organizador Modular',
      categoria: 'almacenamiento',
      precio: '$4,250',
      imagen: '/images/5_CatAlmacenamiento.webp',
      destacado: false
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero de Productos */}
        <section className="relative">
          <div className="aspect-[21/9] relative w-full">
            <Image
              src="/images/9_PortadaCat.webp"
              alt="Nuestros productos"
              fill
              className="object-cover brightness-90"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nuestros Productos</h1>
                <p className="text-xl text-white">Calidad, diseño y confort para tu espacio de trabajo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Categorías</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Categoría: Sillas */}
            <div className="group">
              <Link href="/productos/sillas">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/2_CatSillas.webp"
                    alt="Sillas de oficina ergonómicas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold group-hover:underline">Sillas</h3>
                </div>
              </Link>
            </div>

            {/* Categoría: Escritorios */}
            <div className="group">
              <Link href="/productos/escritorios">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/3_CatEscritorio.webp"
                    alt="Escritorios modernos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold group-hover:underline">Escritorios</h3>
                </div>
              </Link>
            </div>

            {/* Categoría: Mesas */}
            <div className="group">
              <Link href="/productos/mesas">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/4_CatMesas.webp"
                    alt="Mesas para oficina"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold group-hover:underline">Mesas</h3>
                </div>
              </Link>
            </div>

            {/* Categoría: Almacenamiento */}
            <div className="group">
              <Link href="/productos/almacenamiento">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/5_CatAlmacenamiento.webp"
                    alt="Muebles de almacenamiento"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold group-hover:underline">Almacenamiento</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Productos destacados */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Productos Destacados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.destacado).map((producto) => (
                <div key={producto.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
                  <div className="relative h-64">
                    <Image 
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
                    <p className="text-gray-600 mb-4">Categoría: {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">{producto.precio}</span>
                      <Link 
                        href={`/productos/${producto.categoria}/${producto.id}`}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/productos/lista"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Ver todos los productos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 