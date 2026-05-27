import { motion } from "framer-motion";
import { path } from "framer-motion/client";
import { Link } from "react-router-dom";

const galleryImages = [
    {
        id: 1,
        image: "/images/ba1.png",
        title: "Baththalangunduwa",
        path: "/gallery/baththalangunduwa",
    },
    {
        id: 2,
        image: "/images/bell3.png",
        title: "Bellwood",  
        path: "/gallery/bellwood",
    },
    {
        id: 3,
        image: "/images/char4.png",
        title: "Chariot Path",
        path: "/gallery/chariotpath",
    },
    {
        id: 4,
        image: "/images/mas4.png",
        title: "Maskeliya",
        path: "/gallery/maskeliya",
    },
    {
        id: 5,
        image: "/images/loo3.png",
        title: "Loolkandura",
        path: "/gallery/loolkandura",
    },
    {
        id: 6,
        image: "/images/pl3.png",
        title: "Madulsima",
        path: "/gallery/madulsima",
    },
    {
        id: 7,
        image: "/images/riv1.png",
        title: "Riverston",
        path: "/gallery/riverston",
    },
    {
        id: 8,
        image: "/images/su4.png",
        title: "Sudagala Jungle Glamping",
        path: "/gallery/sudagala",
    },
];

const Gallery = () => {
    return (
        <section 
            id="gallery"
            className="py-24 px-6 md:px-12 bg-white">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-gray-500 mb-4">
                        Travel Moments 
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-black">
                        Explore Sri Lanka Through Our Gallery
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                        Discover breathtaking landscapes, tropical beaches,
                        mountain adventures, and unforgettable memories.
                    </p>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {galleryImages.map((item) => (
                        <Link 
                            to={item.path}
                            key={item.id}
                            className="relative overflow-hidden rounded-3xl group cursor-pointer h-[300px] md:h-[400px] block"
                        >

                            {/* image */}
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full group-hover:scale-110 group-hover:rotate-1 group transition duration-700" 
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                            {/* title */}
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white text-3xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                        </Link>
                    ))}

                </div>
            </motion.div>

        </section>
    );
};

export default Gallery;