'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Imagen Principal */}
        <section className="relative">
          <div className="aspect-video relative w-full">
            <Image
              src="/images/1_HomeIMG.webp"
              alt="Mobiliario de oficina elegante"
              fill
              className="object-cover shadow-md"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6 md:p-10 bg-black bg-opacity-40 rounded-lg">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Diseño de Oficina de Alto Nivel</h1>
              <p className="text-lg md:text-xl mb-6">Mobiliario ergonómico que eleva la productividad</p>
              <Link href="/productos" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Explorar Productos
              </Link>
            </div>
          </div>
        </section>

        {/* Categorías de Productos */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestras Categorías</h2>
          
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

        {/* Sección de Diseño y Desarrollo */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Diseño y Desarrollo a tu Medida</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Nuestro equipo de expertos trabaja para crear soluciones a medida que se adapten perfectamente a las necesidades de tu espacio de trabajo. Combinamos estética, ergonomía y funcionalidad para transformar tu oficina.
                </p>
                <Link href="/conocenos" className="btn-primary">
                  Conoce nuestro proceso
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/7_DiseñoDesarrollo.webp"
                  alt="Proceso de diseño y desarrollo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Destacado de Producto */}
        <section className="container-custom py-16">
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-video relative w-full">
              <Image
                src="/images/8_ProductoPre.webp"
                alt="Producto destacado"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
              <div className="bg-white p-6 md:p-8 rounded-lg max-w-md shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestro producto más vendido</h2>
                <p className="text-gray-700 mb-6">
                  Descubre por qué nuestras sillas ergonómicas han sido la elección preferida para espacios de trabajo modernos.
                </p>
                <Link href="/productos/sillas" className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Ver colección
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 