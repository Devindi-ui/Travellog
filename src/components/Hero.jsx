import { section } from "framer-motion/client";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section 
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
                }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Navbar */}
            <Navbar/>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                <p className="text-white/80 mb-4 tracking-widest uppercase">
                    Natural Wonder
                </p>

                <h1 className="text-white text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
                    Unforgettable Travel Experience
                </h1>

                <p className="text-white/70 mt-6 max-w-2xl text-lg">
                    Explore new travel ideas with us by mountains, waterfalls, sun views and the sea in Sri Lanka.
                </p>

                <div className="mt-8 bg-white text-black px-8 py-4 rounded-fullhover:scale-105 transition duration-300">
                    Explore Tours
                </div>
            </div>

        </section>
    )
}

export default Hero;