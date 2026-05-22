const galleryImages = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
        title: "Mirissa",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1170&auto=format&fit=crop",
        title: "Ella",  
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format&fit=crop",
        title: "Sigiriya",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format&fit=crop",
        title: "Nuwara Eliya",
    },
];

const Gallery = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">

            <div className="max-w-7xl mx-auto">

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
                        <div 
                            key={item.id}
                            className="relative overflow-hidden rounded-3xl group cursor-pointer h-[300px] md:h-[400px]"
                        >

                            {/* image */}
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                            {/* title */}
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white text-3xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Gallery;