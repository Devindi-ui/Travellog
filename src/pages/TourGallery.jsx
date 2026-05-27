import { useParams } from "react-router-dom";
import tours from "../data/tours";
import { image } from "framer-motion/client";

const TourGallery = () => {

    const { tourName } = useParams();

    const tour = tours.find(
        (item) => item.slug === tourName
    );

    if (!tour) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
                Tour Not Found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-black text-white py-24 px-5 sm:px-8 md:px-12 lg:px-20">

            {/* Heading */}
            <div className="text-center mb-16">

                <h1 className="text-5xl font-semibold">
                    {tour.title}
                </h1>

            </div>

            {/* images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {tour.images.map((image, index) => (
                    <div 
                        key={index}
                        className="overflow-hidden rounded-3xl group"
                    >

                        <img 
                            src={image}
                            alt={tour.title}
                            className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700" 
                        />

                    </div>
                ))}

            </div>

        </section>
    );

};

export default TourGallery;