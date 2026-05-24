import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 shadow-lg">
            {/* LOGO */}
                <div className="text-white text-2xl font-semibold">
                    Travel With Me
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8 text-white text-sm">

                    <li>
                        <a href=""className="hover:text-gray-300 cursor-pointer transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href=""className="hover:text-gray-300 cursor-pointer transition">
                            Packages
                        </a>
                    </li>

                    <li>
                        <a href=""className="hover:text-gray-300 cursor-pointer transition">
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href=""className="hover:text-gray-300 cursor-pointer transition">
                            Reviews
                        </a>
                    </li>

                </ul>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="md:hidden text-white text-3xl"
                >
                    {menuOpen ? <HiX/> : <HiMenuAlt3/>}
                </button>

                {/* Button */}
                <button className="hidden bg-white text-black px-5 py-2 rounded-full items-center gap-2 hover:scale-105 transition">
                    Book Now
                    <FaArrowRight/>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white">

                    <ul className="flex flex-col gap-6 text-center">

                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#packages">Packages</a>
                        </li>

                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>

                        <li>
                            <a href="#testimonials">Reviews</a>
                        </li>

                        <button className="bg-white text-black py-3 rounded-full">
                            Book Now
                        </button>

                    </ul>

                </div>
            )}

        </nav>
    )
}

export default Navbar;