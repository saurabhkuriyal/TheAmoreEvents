"use client";

import Navbar from "@/components/MainNavbar";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fffdfa] text-gray-900 selection:bg-rose-100 font-sans">
            <Navbar />

            {/* Hero / Main Content Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">

                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-100/40 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-100/40 rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-12">

                    {/* Header Tag */}
                    <div className="inline-block animate-pulse">
                        <span className="px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50/50 text-rose-600 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                            About Us
                        </span>
                    </div>

                    {/* Main Statement */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                            Not just décor, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 italic pr-2">
                                we design events
                            </span>
                            <span className="text-rose-500 inline-block hover:animate-ping">♥️</span>
                        </h1>

                        <p className="text-xl md:text-3xl font-serif text-gray-600 italic font-light">
                            :) Haldi to Happily Ever After <span className="not-italic ml-2">🧿</span>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto rounded-full opacity-50"></div>

                    {/* Location & Details Card */}
                    <div className="relative group mx-auto max-w-lg">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-amber-200 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-rose-50 rounded-full text-2xl shadow-sm animate-bounce [animation-duration:3s]">
                                    🦋
                                </div>
                                <div className="space-y-2">
                                    <p className="text-lg md:text-xl font-medium text-gray-800">
                                        Delhi <span className="text-rose-500">📍</span>
                                    </p>
                                    <p className="text-gray-600 font-serif italic text-lg border-y border-rose-100 py-2 my-2">
                                        Celebrations crafted with soul & style
                                    </p>
                                    <p className="text-sm font-bold tracking-widest text-rose-900/60 font-mono">
                                        110091
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Simple Footer for context */}
            <footer className="py-8 text-center text-gray-400 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} Amore Events
            </footer>
        </main>
    );
}
