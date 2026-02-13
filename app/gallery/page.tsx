"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/MainNavbar";
import Image from "next/image";

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1974&auto=format&fit=crop", title: "Royal Baraat", desc: "A grand entrance" },
    { src: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop", title: "Mandap Details", desc: "Floral artistry" },
    { src: "https://images.unsplash.com/photo-1519225421980-6e9ad150b4ee?q=80&w=2070&auto=format&fit=crop", title: "Reception Night", desc: "Under the stars" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", title: "Sangeet Vibes", desc: "Dance & Music" },
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop", title: "Bridal Portrait", desc: "Elegance defined" },
    { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", title: "Ceremonial Joy", desc: "Rituals & Traditions" },
    { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop", title: "Event Styling", desc: "Table settings" },
    { src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2070&auto=format&fit=crop", title: "Mehendi Art", desc: "Intricate designs" },
    { src: "https://images.unsplash.com/photo-1595914618776-804369b0fa6e?q=80&w=2070&auto=format&fit=crop", title: "Wedding Vows", desc: "A lifetime promise" },
    { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop", title: "Guest Welcome", desc: "Warm hospitality" },
    { src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Couple Goals", desc: "Candid moments" },
    { src: "https://images.unsplash.com/photo-1522673607200-1645062cd95c?q=80&w=2070&auto=format&fit=crop", title: "Luxury Decor", desc: "Ambience creation" },
    { src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop", title: "Haldi Fun", desc: "Yellow hues" },
    { src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop", title: "Traditional Attire", desc: "Cultural richness" },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#fffdfa] font-sans selection:bg-rose-100">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 px-4 text-center">
                <span className="text-rose-600 font-serif italic text-xl tracking-wide block mb-2">Our Portfolio</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                    Captured <span className="text-rose-600 italic">Moments</span>
                </h1>
                <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                    A glimpse into the magical weddings we've had the honor of bringing to life. Every picture tells a story of love, laughter, and lifelong memories.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 rounded-full opacity-60" />
            </section>

            {/* Masonry / Pinterest Grid */}
            <section className="px-4 pb-24 max-w-7xl mx-auto">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            <div className="relative w-full">
                                {/* Next.js Image needs explicit height/width or fill. For masonry with 'fill', we need a container with aspect ratio. 
                                    However, since we want natural height images for masonry, we'll use a trick or just simple img tags for true masonry 
                                    if aspect ratios vary widely, or responsive Next/Image if we know ratios.
                                    For a true Pinterest feel with mixed aspect ratios, the 'width-only' approach (w-full h-auto) works best with standard img tags 
                                    or Next/Image with 'width/height' set to original.
                                    Here, we will let the image determine the height naturally.
                                */}
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    width={800} // Arbitrary width for optimization
                                    height={1200} // Arbitrary height, but masonry handles the natural flow if we don't force it
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1 block">
                                        Amore Events
                                    </span>
                                    <h3 className="text-white font-serif font-bold text-xl mb-1">
                                        {img.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm opacity-80 font-light italic">
                                        {img.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
