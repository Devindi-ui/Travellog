import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-lg">
            {/* LOGO */}
                <div className="text-white text-2xl font-semibold">
                    Travel With Me
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8 text-white text-sm">
                    <li className="hover:text-gray-300 cursor-pointer transition">
                        Home
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition">
                        Packages
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition">
                        Gallery
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition">
                        Contact
                    </li>
                </ul>

                {/* Button */}
                <button className="bg-white text-black px-5 py-2 rounded-full items-center gap-2 hover:scale-105 transition">
                    Book Now
                    <FaArrowRight/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;