"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update isScrolled for background changes (synced with visibility)
            if (currentScrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (currentScrollY <= 10) {
                // At the top -> Always show
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling Down -> Appear
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling Up -> Diminish (hide)
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 py-6 md:px-8 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`flex items-center justify-between px-6 py-4 rounded-3xl transition-all duration-300 ${isScrolled
                        ? "bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl scale-100"
                        : "bg-white/10 backdrop-blur-md border border-white/10 scale-[1.02]"
                        }`}
                >
                    {/* Logo Section */}
                    <Link href="/" className="group flex items-center space-x-3">
                        <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-400 to-amber-200 rounded-2xl shadow-inner overflow-hidden transform group-hover:rotate-6 transition-transform duration-500">
                            <Image
                                src="/logo.png"
                                alt="Amore Events Logo"
                                fill
                                className="object-contain p-1"
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-serif text-white font-bold text-2xl pointer-events-none opacity-0 group-hover:opacity-10">
                                A
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-serif font-bold tracking-tight text-gray-900 leading-none">
                                AMORE
                            </span>
                            <span className="text-[10px] tracking-[0.2em] font-medium text-rose-500 uppercase leading-none mt-1">
                                Events
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold text-gray-800 hover:text-rose-600 transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-full hover:bg-rose-600 transition-all duration-300 shadow-md hover:shadow-rose-200"
                        >
                            PLAN YOUR EVENT
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/50 hover:bg-white transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`md:hidden mt-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-2xl flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-serif font-semibold text-gray-900 hover:text-rose-600 transition-colors flex justify-between items-center group"
                            >
                                {link.name}
                                <span className="text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-2xl shadow-lg"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
