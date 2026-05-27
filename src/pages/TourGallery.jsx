import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
    HiX,
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi";
import tours from "../data/tours";
import { image } from "framer-motion/client";

const TourGallery = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { tourName } = useParams();

    const tour = tours.find(
        (item) => item.slug === tourName
    );

    const nextImage = () => {

        const next = 
        (currentIndex + 1) % tour.images.length;

        setCurrentIndex(next);
        setSelectedImage(tour.images[next]);
    };

    const prevImage = () => {

        const prev =
        (currentIndex - 1 + tour.images.length) % tour.images.length;

        setCurrentIndex(prev);
        setSelectedImage(tour.images[prev]);
    };

    useEffect(() => {

        const handleKeyDown = (e) => {

            if (!selectedImage) return;
    
            if (e.key === "ArrowRight") {
                nextImage();
            }
    
            if (e.key === "ArrowLeft") {
                prevImage();
            }
    
            if (e.key === "Escape") {
                setSelectedImage(null);
            }

        };

        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage, currentIndex]);


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
                        onClick={() => {
                            setSelectedImage(image);
                            setCurrentIndex(index);
                        }}
                        className="overflow-hidden rounded-3xl group cursor-pointer"
                    >

                        <img 
                            src={image}
                            alt={tour.title}
                            className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700" 
                        />

                    </div>
                ))}

            </div>

            {/* Fullscreen Modal */}
            {selectedImage && (

                <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-5">

                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white text-5xl"
                    >
                        <HiX/>
                    </button>
                    
                    <button 
                        onClick={prevImage}
                        className="absolute left-5 text-white text-6xl cursor-pointer"
                    >
                        <HiChevronLeft/>
                    </button>

                    <div className="absolute top-6 left-6 text-white text-xl">
                        {currentIndex + 1} / {tour.images.length}
                    </div>

                    {/* Image */}
                    <img 
                        src={selectedImage}
                        alt="Tour" 
                        className="max-w-full max-h-[900vh] rounded-3xl" 
                    />

                    <button 
                        onClick={nextImage}
                        className="button absolute right-5 text-white text-6xl cursor-pointer"
                    >
                        <HiChevronRight/>
                    </button>

                </div>
            )}

        </section>
    );

};

export default TourGallery;