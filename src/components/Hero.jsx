import { section } from "framer-motion/client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import TourCard from "./TourCard";

const Hero = () => {
    return (
        <section 
            id="home"
            className="relative min-h-[100svh] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/images/main.png')",
                }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <div className="relative z-10 px-6 md:px-12 pt-40 pb-40">

                {/* Heading */}
                <motion.div 
                    initial={{ opacity: 0, y:40 }}
                    animate={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-4xl mx-auto"
                >

                    <p className="text-white/80 mb-4 tracking-[4px] uppercase">
                        Explore Sri Lanka
                    </p>

                    <h1 className="text-white text-5xl md:text-7xl font-semibold leading-tight">
                        Discover The Beauty Of Sri Lanka
                    </h1>

                    <p className="text-white/70 mt-6 max-w-2xl text-lg mx-auto">
                        Experience golden beaches, misty mountains, ancient cities, 
                        and unforgettable adventures across paradise island.
                    </p>

                    <button className="mt-8 bg-white text-black px-8 py-4 rounded-full hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
                        Explore Tours
                    </button>
                    
                </motion.div>

                {/* Floating Cards */}
                <div className="mt-24 flex flex-wrap justify-center gap-6">

                    <TourCard
                        image="https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=987&auto=format&fit=crop"
                        title="Baththalangunduwa Tour"
                        description="Explore stunning mountain views and train journeys."                    
                    />

                    <TourCard
                        image="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=987&auto=format&fit=crop"
                        title="Sigiriya Rock"
                        description="Discover Sri Lanka's iconic ancient rock fortress."                   
                    />

                    <TourCard
                        image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=987&auto=format&fit=crop"
                        title="Mirissa Beach"
                        description="Relax with tropical sunsets and whale watching."
                    />

                </div>

            </div>

        </section>
    )
}

export default Hero;