const testimonials = [
    {
        id: 1,
        image: "/images/pe1.png",
        name: "Devindi Wijesekara",
        review: "One of the best travel group as a familly ever.",
    },

    {
        id: 2,
        image: "/images/pe2.png",
        name: "Malki Dias",
        review: "The Sri Lanka tour felt magical. Beautiful beaches, mountains, and incredible memories.",
    },

    {
        id: 3,
        image: "/images/pe3.png",
        name: "Kavindu Silva",
        review: "Amazing destinations, friendly guides, and breathtaking views throughout the journey.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-[#f8f8f8] py-24 px-6 md:px-12">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-gray-500 mb-4">
                        Traveler Reviews 
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-black">
                        What Travelers Say About Us 
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                        Hear unforgettable experiences from travelers who explored 
                        Sri Lanka with our guided adventures.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        testimonials.map((item) => (
                            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

                                {/* Profile */}
                                <div className="flex items-center gap-4 mb-6">

                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-16 h-16 rounded-full object-cover" 
                                    />

                                    <div>
                                        <h3 className="text-xl font-semibold text-black">
                                            {item.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            Traveler 
                                        </p>
                                    </div>


                                </div>

                                {/* Review */}
                                <p className="text-gray-600 leading-relaxed">
                                    "{item.review}"
                                </p>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;