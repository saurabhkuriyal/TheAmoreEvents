"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/MainNavbar";
import Image from "next/image";
import { useEffect, useState } from "react";

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1519225421980-6e9ad150b4ee?q=80&w=2070&auto=format&fit=crop",
    title: "Royal Indian Weddings",
    subtitle: "Creating timeless memories in palace-themed settings",
  },
  {
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070&auto=format&fit=crop",
    title: "Vibrant Sangeet Nights",
    subtitle: "A fusion of colors, dance, and celebration",
  },
  {
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    title: "Enchanting Receptions",
    subtitle: "Modern elegance meets traditional values",
  },
];

export default function page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#fffdfa] font-sans selection:bg-amber-200">
      <Navbar />

      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover brightness-[0.7]"
              priority={index === 0}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div
                className={`transform transition-all duration-1000 delay-300 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                <span className="text-amber-400 font-serif tracking-[0.4em] uppercase text-sm md:text-base mb-4 block drop-shadow-lg">
                  Amore Events Presents
                </span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                  {item.title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? "text-amber-400 italic" : ""}>{word} </span>
                  ))}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 drop-shadow-md">
                  {item.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button className="group relative px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-amber-900/40">
                    <span className="relative z-10 tracking-widest uppercase text-sm">Plan Your Dream Wedding</span>
                  </button>
                  <button className="px-10 py-4 border border-white/50 hover:border-white text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10 uppercase tracking-widest text-sm">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {carouselItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? "w-12 bg-amber-400" : "w-3 bg-white/40"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 bg-[#fffdfa] relative overflow-hidden">
        {/* Mandap Silhouette Background Pattern (Pseudo) */}
        <div className="absolute top-0 right-0 opacity-[0.03] scale-150 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 100L250 150H150L200 100Z" fill="#ff0000" />
            <rect x="170" y="150" width="60" height="150" fill="#ff0000" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block animate-pulse mb-6">
            <span className="px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50/50 text-rose-600 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Not just décor, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 italic px-2">
              we design events
            </span>
            <span className="text-rose-500 inline-block hover:animate-ping">♥️</span>
          </h2>

          <p className="text-xl md:text-3xl font-serif text-gray-600 italic font-light mb-8">
            :) Haldi to Happily Ever After <span className="not-italic ml-2">🧿</span>
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-10" />

          <div className="bg-white/60 backdrop-blur-xl border border-rose-100 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto mb-12">
            <div className="text-lg md:text-xl font-medium text-gray-800 flex flex-col items-center gap-2">
              <span className="flex items-center gap-2">
                Delhi <span className="text-rose-500">📍</span> | Celebrations crafted with soul & style 🦋
              </span>

            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Weddings Orchestrated" },
              { num: "25+", label: "Cities Covered" },
              { num: "100%", label: "Bespoke Designs" },
              { num: "15yrs", label: "Experience" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-2 group-hover:scale-110 transition-transform">{stat.num}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Image Cards */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-rose-700 font-semibold tracking-[0.2em] uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Comprehensive <br /> <span className="italic">Wedding Services</span></h2>
            </div>
            <p className="text-gray-500 max-w-sm">From venue selection and decor to guest management and entertainment—we handle it all with finesse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Bespoke Decor",
                desc: "Grand mandaps and floral art that leaves your guests in awe.",
                img: "https://images.unsplash.com/photo-1595914618776-804369b0fa6e?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Entertainment",
                desc: "Dazzling Sangeet choreography and world-class live performers.",
                img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
              },
              {
                title: "Guest Experience",
                desc: "Flawless logistics and royal hospitality for your loved ones.",
                img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <div key={i} className="group relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                  <button className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                    Learn More <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview (Grid) */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-16 text-gray-900">Captured <span className="italic text-rose-800">Moments</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 h-[800px] gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-3xl">
              <Image src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1974&auto=format&fit=crop" alt="Gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
            </div>
            <div className="relative overflow-hidden group rounded-3xl">
              <Image src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative overflow-hidden group rounded-3xl">
              <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="md:col-span-2 relative overflow-hidden group rounded-3xl">
              <Image src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <button className="mt-12 px-12 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-rose-800 transition-colors shadow-lg">
            View Full Gallery
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-rose-50 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-rose-200 text-9xl absolute -top-10 left-10 font-serif pointer-events-none opacity-50">“</div>
          <p className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-10 leading-relaxed relative z-10">
            &quot;Amore Events turned our wedding into a royal fairytale. The attention to detail during the pheras and the energy they brought to our Sangeet was beyond what we imagined. They don't just plan weddings; they create magic.&quot;
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-400 mb-4 overflow-hidden border-2 border-white shadow-md">
              <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="Author" width={64} height={64} className="object-cover" />
            </div>
            <h4 className="font-serif font-bold text-xl text-gray-900">Ananya & Rahul</h4>
            <p className="text-sm text-rose-700 font-semibold tracking-widest uppercase mt-1">Taj Palace, Mumbai</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070&auto=format&fit=crop" alt="bg" fill className="object-cover" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to Write Your <br /> <span className="text-amber-400 italic">Love Story?</span></h2>
          <p className="text-gray-400 text-lg mb-12">Book a private consultation today and let's start planning the most beautiful day of your life.</p>
          <button className="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/20 uppercase tracking-widest">
            Contact Us Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
