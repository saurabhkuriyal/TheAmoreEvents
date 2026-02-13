"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/MainNavbar";
import Image from "next/image";

const services = [
    {
        title: "Wedding Planning",
        description: "From the first consultation to the final farewell, we orchestrate every detail with precision and grace, ensuring a seamless experience.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        icon: "📋"
    },
    {
        title: "Décor & Design",
        description: "Transforming venues into dreamscapes with bespoke floral arrangements, lighting, and thematic mastery that reflects your unique style.",
        image: "https://images.unsplash.com/photo-1519225421980-6e9ad150b4ee?q=80&w=2070&auto=format&fit=crop",
        icon: "🌸"
    },
    {
        title: "Catering",
        description: "Curating culinary journeys with gourmet menus, live stations, and exquisite presentation that delights every palate.",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
        icon: "🥂"
    },
    {
        title: "Entertainment",
        description: "Setting the perfect mood with world-class musicians, DJs, and choreographers to keep the celebration alive and vibrant.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
        icon: "🎵"
    },
    {
        title: "Cinematography",
        description: "Capturing fleeting moments and turning them into timeless cinematic films that tell the beautiful story of your union.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop",
        icon: "🎥"
    },
    {
        title: "Hospitality",
        description: "Ensuring your guests feel like royalty with seamless logistics, warm welcomes, and personalized care throughout the event.",
        image: "https://images.unsplash.com/photo-1561582847-fdf2d005fe43?q=80&w=1887&auto=format&fit=crop",
        icon: "🤝"
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#fffdfa] text-gray-900 font-sans selection:bg-rose-100">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-100/30 rounded-full blur-3xl -z-10" />
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                    Our <span className="text-rose-600 italic">Signature</span> Services
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                    We don’t just plan weddings; we curate experiences. Discover our range of bespoke services designed to make your special day truly unforgettable.
                </p>
            </section>

            {/* Services Grid */}
            <section className="px-4 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="group relative h-[450px] w-full [perspective:1000px]">
                            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl">

                                {/* Front of Card */}
                                <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden [backface-visibility:hidden]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 text-white">
                                        <div className="text-4xl mb-3 opacity-90">{service.icon}</div>
                                        <h3 className="text-3xl font-serif font-bold mb-2">{service.title}</h3>
                                        <div className="w-12 h-1 bg-amber-400 rounded-full mb-4" />
                                        <p className="text-sm font-medium tracking-widest uppercase opacity-80">View Details →</p>
                                    </div>
                                </div>

                                {/* Back of Card */}
                                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 text-center flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-rose-100 shadow-2xl relative overflow-hidden">
                                    {/* Decorative background pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-2xl -z-10 translate-x-10 -translate-y-10" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl -z-10 -translate-x-10 translate-y-10" />

                                    <div className="text-6xl mb-6 bg-rose-50 w-20 h-20 flex items-center justify-center rounded-full text-rose-600 shadow-inner">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-rose-600 transition-colors shadow-lg hover:shadow-rose-200">
                                        Enquire Now
                                    </button>
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
