"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/MainNavbar";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle the submission here
        alert("Thank you! We will get back to you shortly.");
    };

    return (
        <main className="min-h-screen bg-[#fffdfa] font-sans selection:bg-rose-100">
            <Navbar />

            {/* Hero / Header Section */}
            <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3 translate-y-1/3" />

                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-rose-600 font-serif italic text-xl tracking-wide">Get in Touch</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
                        Let's Plan Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                            Dream Celebration
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 font-light max-w-xl mx-auto">
                        From intimate gatherings to grand royal weddings, we differ in details.
                        Start your journey with Amore Events today.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="px-4 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Details Column */}
                    <div className="space-y-12">

                        {/* Image Card */}
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1654156577076-e0350ba86cc1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Luxury Wedding Setup"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-50 hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl mb-4 text-rose-600">
                                    📍
                                </div>
                                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Amore Events <br />
                                    New Delhi, India <br />
                                    <span className="font-semibold text-rose-800">110091</span>
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-50 hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-4 text-amber-600">
                                    📞
                                </div>
                                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">Contact</h3>
                                <div className="space-y-1 text-gray-600">
                                    <p>hello@amoreevents.com</p>
                                    <p>+91 98765 43210</p>
                                    <p>+91 11 2345 6789</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form Column */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/50 rounded-bl-[100px] -z-10" />

                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Event Date (Tentative)</label>
                                <input
                                    type="date"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">How can we help?</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your dream event..."
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 uppercase tracking-widest text-sm"
                            >
                                Send Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <Footer />

        </main>
    );
}
