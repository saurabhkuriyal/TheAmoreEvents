"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/MainNavbar";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fffdfa] text-gray-900 selection:bg-rose-100 font-sans">
            <Navbar />

            {/* Section 1: Brand Identity (Hero) - The specific requested text */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-100/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-100/40 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
                </div>

                <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-12">
                    {/* Header Tag */}
                    <div className="inline-block animate-fade-in-up">
                        <span className="px-5 py-2 rounded-full border border-rose-200 bg-rose-50/50 text-rose-600 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm shadow-sm">
                            About Amore Events
                        </span>
                    </div>

                    {/* Main Statement */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight drop-shadow-sm">
                            Not just décor, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 italic pr-2">
                                we design events
                            </span>
                            <span className="text-rose-500 inline-block hover:animate-heartbeat cursor-pointer">♥️</span>
                        </h1>

                        <p className="text-2xl md:text-4xl font-serif text-gray-600 italic font-light">
                            :) Haldi to Happily Ever After <span className="not-italic ml-2">🧿</span>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto rounded-full opacity-50"></div>

                    {/* Location & Details Card */}
                    <div className="relative group mx-auto max-w-lg transform hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-amber-200 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className="w-14 h-14 flex items-center justify-center bg-rose-50 rounded-full text-3xl shadow-sm animate-float">
                                    🦋
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xl md:text-2xl font-medium text-gray-800">
                                        Delhi <span className="text-rose-500">📍</span>
                                    </p>
                                    <div className="w-full h-px bg-rose-100 my-2"></div>
                                    <p className="text-gray-600 font-serif italic text-xl">
                                        Celebrations crafted with soul & style
                                    </p>
                                    <p className="text-sm font-bold tracking-[0.2em] text-rose-900/60 font-mono mt-2">
                                        110091
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Philosophy / Story */}
            <section className="py-24 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
                        <Image
                            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop"
                            alt="Luxury Wedding Setup"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="font-serif italic text-2xl">Create. Celebrate. Cherish.</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            We Don’t Just Plan Weddings, <br />
                            <span className="text-rose-500 italic">We Tell Stories.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            At Amore Events, we believe that every couple has a unique love story that deserves to be told with grandeur and grace.
                            Founded on the principles of passion and precision, we have evolved from a small boutique agency into one of Delhi's most sought-after luxury wedding planners.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Our approach is simple yet profound: we listen, we visualize, and we execute. Whether it’s the delicate floral arrangement on the mandap or the grand entry of the baraat, every detail is a stroke of art in the canvas of your celebration.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-gray-900">500+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Weddings Planned</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-gray-900">15+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Journey (Haldi to Happily Ever After) */}
            <section className="py-24 px-4 bg-rose-50/30 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="text-rose-600 font-bold tracking-widest uppercase text-sm block mb-3">The Amore Experience</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">From the First <span className="italic text-rose-500">Hello</span> <br /> to the Final <span className="italic text-rose-500">Goodbye</span></h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
                    {[
                        {
                            icon: "✨",
                            title: "Conceptualization",
                            desc: "We start with a blank canvas and paint your dreams with mood boards, thematic designs, and personalized touches."
                        },
                        {
                            icon: "🛠️",
                            title: "Execution",
                            desc: "Our team of experts works tirelessly behind the scenes to ensure flawless logistics, vendor management, and decor setup."
                        },
                        {
                            icon: "🎉",
                            title: "Celebration",
                            desc: "You simply show up and shine. We handle the chaos so you can soak in every moment of your special day."
                        }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-rose-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="text-5xl mb-6">{step.icon}</div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Founders / Team Snippet */}
            <section className="py-24 px-4 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="relative w-24 h-24 mx-auto mb-8 bg-amber-100 rounded-full flex items-center justify-center text-4xl shadow-inner">
                        👑
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Meet The <span className="text-rose-600">Visionaries</span></h2>
                    <p className="text-xl text-gray-600 italic font-light mb-10">
                        "We don't just organize events; we curate emotions. Every smile, every tear of joy, reinforces our commitment to perfection."
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-rose-600 transition-colors shadow-lg">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
