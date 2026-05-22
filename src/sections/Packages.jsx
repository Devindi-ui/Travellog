import { image } from "framer-motion/client";

const packages = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
        title: "Jaffna Tour",
        duration: "3 Days",
        price: "$180",
    },

    {
        id: 2,
        image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1170&auto=format&fit=crop",
        title: "Ella Mountain Journey",
        duration: "5 Days",
        price: "$250",
    },

    {
        id: 3,
        image:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format&fit=crop",
        title: "Sigiriya Heritage Tour",
        duration: "2 Days",
        price: "$150",
    },
];

const Packages = () => {
    return (
        <section className="bg-[#f8f8f8] py-24 px-6 md:px-12">

            {/* Heading */}
            <div className="max-w-7xl mx-auto">

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
                        <div 
                            key={item.id} 
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
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

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Packages;