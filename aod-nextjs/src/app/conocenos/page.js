'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Conocenos() {
  return (
    <>
      <Header />
      <main>
        {/* Imagen de cabecera */}
        <section className="relative">
          <div className="aspect-[21/9] relative w-full">
            <Image
              src="/images/6_Conocenos.webp"
              alt="Nuestro equipo de diseño"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white">Conócenos</h1>
            </div>
          </div>
        </section>

        {/* Sección quiénes somos */}
        <section className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
              <p className="text-lg text-gray-700 mb-4">
                El proyecto web AOD - All Office Designs se concibe como una plataforma digital elegante y funcional que presenta la selecta colección de mobiliario de oficina de INTEGRADORA empresa que ha confiado en nosotros para realizar este proyecto.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nuestro equipo está formado por expertos en diseño de interiores y especialistas en ergonomía, trabajando juntos para crear espacios de trabajo que combinan funcionalidad, comodidad y estética.
              </p>
              <p className="text-lg text-gray-700">
                Nos apasiona crear entornos de trabajo que inspiren productividad y bienestar, utilizando materiales de alta calidad y diseños innovadores que se adaptan a las necesidades modernas.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/7_DiseñoDesarrollo.webp"
                alt="Nuestro proceso de diseño"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sección de nuestros valores */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4">Calidad Superior</h3>
                <p className="text-gray-700">
                  Utilizamos solo los mejores materiales y procesos de fabricación para asegurar productos duraderos y de alta calidad.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4">Diseño Innovador</h3>
                <p className="text-gray-700">
                  Nuestros diseños combinan estética contemporánea con funcionalidad práctica, creando piezas que son tan bellas como útiles.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4">Sostenibilidad</h3>
                <p className="text-gray-700">
                  Nos comprometemos con prácticas sostenibles, seleccionando materiales respetuosos con el medio ambiente y procesos de producción eficientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 h-72 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-5xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold">Carlos Martínez</h3>
              <p className="text-gray-600">Director de Diseño</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 h-72 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-5xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold">Ana González</h3>
              <p className="text-gray-600">Especialista en Ergonomía</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 h-72 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-5xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold">Miguel López</h3>
              <p className="text-gray-600">Desarrollador Web</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 