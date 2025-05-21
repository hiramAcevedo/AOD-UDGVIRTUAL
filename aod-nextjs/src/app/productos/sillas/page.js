'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Sillas() {
  const productos = [
    {
      id: 1,
      nombre: 'Silla Ergonómica Premium',
      categoria: 'sillas',
      precio: '$3,999',
      oferta: '$3,499',
      imagen: '/images/2_CatSillas.webp',
      rating: 5,
      descripcion: 'Silla ergonómica con soporte lumbar ajustable, apoyabrazos y reposacabezas.'
    },
    {
      id: 2,
      nombre: 'Silla Ejecutiva Comfort',
      categoria: 'sillas',
      precio: '$4,299',
      oferta: null,
      imagen: '/images/2_CatSillas.webp',
      rating: 4,
      descripcion: 'Silla ejecutiva con tapizado de cuero genuino y sistema de reclinación avanzado.'
    },
    {
      id: 3,
      nombre: 'Silla Minimalista Moderna',
      categoria: 'sillas',
      precio: '$2,499',
      oferta: '$1,999',
      imagen: '/images/2_CatSillas.webp',
      rating: 4,
      descripcion: 'Silla de diseño minimalista con estructura metálica y asiento acolchado.'
    },
    {
      id: 4,
      nombre: 'Silla Gaming Profesional',
      categoria: 'sillas',
      precio: '$5,999',
      oferta: null,
      imagen: '/images/2_CatSillas.webp',
      rating: 5,
      descripcion: 'Silla gaming con sistema de audio integrado y soporte lumbar.'
    },
    {
      id: 5,
      nombre: 'Silla de Conferencia',
      categoria: 'sillas',
      precio: '$1,999',
      oferta: null,
      imagen: '/images/2_CatSillas.webp',
      rating: 3,
      descripcion: 'Silla para salas de conferencia con ruedas y altura ajustable.'
    },
    {
      id: 6,
      nombre: 'Silla Plegable Premium',
      categoria: 'sillas',
      precio: '$1,299',
      oferta: '$999',
      imagen: '/images/2_CatSillas.webp',
      rating: 4,
      descripcion: 'Silla plegable de alta calidad, ideal para espacios reducidos.'
    }
  ];

  // Función para renderizar estrellas de calificación
  const renderRating = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "none" : "currentColor"}
        className="w-5 h-5 text-yellow-500"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ));
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero de categoría Sillas */}
        <section className="relative">
          <div className="aspect-[21/9] relative w-full">
            <Image
              src="/images/10_PortadaSeccionSillas.webp"
              alt="Sillas ergonómicas"
              fill
              className="object-cover brightness-90"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sillas</h1>
                <p className="text-xl text-white">Ergonomía y estilo para largas jornadas de trabajo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros y productos */}
        <section className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar con filtros */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-8">
                <h2 className="text-xl font-bold mb-6">Filtros</h2>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Precio</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <span>Menos de $1,500</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <span>$1,500 - $3,000</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <span>$3,000 - $5,000</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <span>Más de $5,000</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Valoración</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <div className="flex text-yellow-500">
                        {renderRating(5)}
                      </div>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <div className="flex text-yellow-500">
                        {renderRating(4)}
                      </div>
                      <span className="ml-1">y superior</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <div className="flex text-yellow-500">
                        {renderRating(3)}
                      </div>
                      <span className="ml-1">y superior</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Ofertas</h3>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 mr-2" />
                    <span>En oferta</span>
                  </label>
                </div>
                
                <button className="w-full bg-black text-white py-2 rounded mt-8 hover:bg-gray-800 transition-colors">
                  Aplicar filtros
                </button>
              </div>
            </div>
            
            {/* Lista de productos */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Sillas de Oficina</h2>
                <div className="flex items-center">
                  <span className="mr-2">Ordenar por:</span>
                  <select className="border p-2 rounded">
                    <option>Relevancia</option>
                    <option>Precio: menor a mayor</option>
                    <option>Precio: mayor a menor</option>
                    <option>Valoración</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {productos.map((producto) => (
                  <div key={producto.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
                    <Link href={`/productos/${producto.categoria}/${producto.id}`}>
                      <div className="relative h-64">
                        <Image 
                          src={producto.imagen}
                          alt={producto.nombre}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {producto.oferta && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded">
                            OFERTA
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6">
                      <Link href={`/productos/${producto.categoria}/${producto.id}`}>
                        <h3 className="text-xl font-bold mb-2 group-hover:underline">{producto.nombre}</h3>
                      </Link>
                      <p className="text-gray-600 mb-3 line-clamp-2">{producto.descripcion}</p>
                      <div className="flex text-yellow-500 mb-4">
                        {renderRating(producto.rating)}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          {producto.oferta ? (
                            <div>
                              <span className="text-red-500 font-bold text-lg">{producto.oferta}</span>
                              <span className="ml-2 text-gray-500 line-through">{producto.precio}</span>
                            </div>
                          ) : (
                            <span className="text-xl font-bold">{producto.precio}</span>
                          )}
                        </div>
                        <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Paginación */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <a href="#" className="px-4 py-2 border rounded hover:bg-gray-50">Anterior</a>
                  <a href="#" className="px-4 py-2 border rounded bg-black text-white">1</a>
                  <a href="#" className="px-4 py-2 border rounded hover:bg-gray-50">2</a>
                  <a href="#" className="px-4 py-2 border rounded hover:bg-gray-50">3</a>
                  <span className="px-2">...</span>
                  <a href="#" className="px-4 py-2 border rounded hover:bg-gray-50">Siguiente</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 