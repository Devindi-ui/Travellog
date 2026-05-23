import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20 px-6 md:px-12">

            <div className="max-w-7xl mx-auto">

                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Logo */}
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Travellog
                        </h2>

                        <p className="text-gray-400 mt-5 leading-relaxed">
                            Explore the beauty of Sri Lanka with unforgettable
                            adventures, scenic destinations, and premium travel experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition">
                                Home
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Packages
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Gallery
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Testimonials
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>Colombo, Sri Lanka</li>
                            <li>+94 76 183 0157</li>
                            <li>lakmaliobesekara790@gmail.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Newsletter
                        </h3>

                        <p className="text-gray-400 mb-5">
                            Subscribe for travel updates and special tour offers.
                        </p>

                        <div className="flex items-center bg-white/10 rounded-full overflow-hidden">

                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="bg-transparent px-5 py-3 outline-none flex-1 text-white" 
                            />

                            <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition">
                                Join 
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-gray-500 text-sm">
                        © 2026 Travel With Me. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 text-lg">

                        <FaFacebookF className="cursor-pointer hover:text-gray-400 transition" />
                        <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
                        <FaWhatsapp className="cursor-pointer hover:text-gray-400 transition" />

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;