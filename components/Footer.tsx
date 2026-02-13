"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-rose-600 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="group flex items-center space-x-3">
                            <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-400 to-amber-200 rounded-2xl shadow-inner overflow-hidden">
                                <Image
                                    src="/logo.jpg"
                                    alt="Amore Events Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif font-bold tracking-tight text-white leading-none">
                                    AMORE
                                </span>
                                <span className="text-[10px] tracking-[0.2em] font-medium text-rose-400 uppercase leading-none mt-1">
                                    Events
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting timeless Indian weddings with soul, style, and grandeur.
                            From Delhi to destinations worldwide, we bring your dream celebration to life.
                        </p>
                        <div className="flex space-x-4">
                            {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-600 transition-all duration-300 group"
                                    aria-label={social}
                                >
                                    <span className="text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-wider">
                                        {social[0]}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-2">
                            Explore <span className="h-px w-8 bg-rose-600 block"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Our Gallery", href: "/gallery" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-rose-400 transition-colors text-sm tracking-wide flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-2">
                            Services <span className="h-px w-8 bg-rose-600 block"></span>
                        </h4>
                        <ul className="space-y-3">
                            {["Wedding Planning", "Decor & Design", "Catering", "Entertainment", "Hospitality"].map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400 text-sm tracking-wide hover:text-white cursor-default transition-colors">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-2">
                            Get in Touch <span className="h-px w-8 bg-rose-600 block"></span>
                        </h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-rose-500 mt-1">📍</span>
                                <p>New Delhi, India <br /> 110091</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-rose-500">📞</span>
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-rose-500">✉️</span>
                                <p>hello@amoreevents.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Amore Events. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
