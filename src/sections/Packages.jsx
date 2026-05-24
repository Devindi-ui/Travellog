import { image } from "framer-motion/client";
import { motion } from "framer-motion";

const packages = [
    {
        id: 1,
        image: "/images/jaf1.png",
        title: "Jaffna Tour",
        duration: "3 Days",
        price: "Rs 18,500/=",
    },

    {
        id: 2,
        image: "/images/walapane.png",
        title: "Walapane Tour",
        duration: "June 27/28",
        price: "Rs 9499/=",
    },

    {
        id: 3,
        image: "/images/diyaluma.png",
        title: "Diyaluma Tour",
        duration: "June 20",
        price: "Rs 7800/=",
    },

    {
        id: 4,
        image: "/images/narangala.png",
        title: "Narangala Hike",
        duration: "June 06",
        price: "Rs 7800/=",
    },

    {
        id: 5,
        image: "/images/katharagama.png",
        title: "Katharagama Tour",
        duration: "July 11/12",
        price: "Rs 7800/=",
    },
];

const Packages = () => {
    return (
        <section 
            id="packages"
            className="bg-[#f8f8f8] py-24 px-6 md:px-12"
        >

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >

                <div className="text-center mb-16">
                    <p className="uppercase tracking-[4px] text-gray-500 mb-4">
                        Travel Packages
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-black">
                        Popular Sri Lanka Tours 
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                        Choose Unforgettable experiences across Sri Lanka with carefully
                        crafted travel packages for every explorer.
                    </p>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {packages.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
                        >
                            {/* image */}
                            <div className="h-[260px] overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover hover:scale-110 transition duration-500" 
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-gray-500">
                                        {item.duration}
                                    </span>
                                    
                                    <span className="text-lg font-semibold text-black">
                                        {item.price}
                                    </span>
                                </div>
                                    
                                <h3 className="text-2xl font-semibold text-black">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 mt-4">
                                    Explore beautiful destinations, local culture, and unforgettable adventures.
                                </p>

                                <button className="mt-6 w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                                    View Package 
                                </button>
                                    
                            </div>

                        </motion.div>
                    ))}
                </div>
            </motion.div>
            
        </section>
    )
}

export default Packages;