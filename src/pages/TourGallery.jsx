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

            {/* Hero Banner */}
            <div className="h-[60vh] rounded-3xl overflow-hidden relative mb-20">

                <img 
                    src={tour.heroImage} 
                    alt={tour.title} 
                    className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                    <p className="uppercase tracking-[5px] text-gray-300 mb-4">
                        {tour.location}
                    </p>

                    <h1 className="text-5xl md:text-7xl font-semibold mb-6">
                        {tour.title}
                    </h1>

                    <p className="max-w-2xl text-gray-200 text-lg">
                        {tour.description}
                    </p>
                </div>

            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 justify-center mb-20">

                {tour.highlights.map((item,index) => (

                    <div 
                        key={index}
                        className="px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md"
                    >
                        {item}
                    </div>

                ))}

            </div>

            {/* Story */}
            <div className="max-w-4xl mx-auto text-center mb-24">

                <p className="uppercase tracking- text-gray-400 mb-5">
                    Travel Story
                </p>

                <h2 className="text-4xl font-semibold mb-8">
                    The Experience 
                </h2>

                <p className="text-gray-300 leading-8 text-lg">
                    {tour.description}
                </p>

            </div>

            {/* Date + Location */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-24">

                <div className="bg-white/10 px-8 py-5 rounded-3xl backdrop-blur-md">
                
                    <p className="text-gray-400 mb-2">
                        Location
                    </p>

                    <h3 className="text-2xl font-semibold">
                        {tour.location}
                    </h3>

                </div>

                <div className="bg-white/10 px-8 py-5 rounded-3xl backdrop-blur-md">
                
                    <p className="text-gray-400 mb-2">
                        Travel Date 
                    </p>

                    <h3 className="text-2xl font-semibold">
                        {tour.date}
                    </h3>
                
                </div>

            </div>

            {/* images */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                {tour.images.map((image, index) => (
                    <div 
                        key={index}
                        onClick={() => {
                            setSelectedImage(image);
                            setCurrentIndex(index);
                        }}
                        className="overflow-hidden rounded-3xl group cursor-pointer mb-6 break-inside-avoid"
                    >

                        <img 
                            src={image}
                            alt={tour.title}
                            className="w-full h-auto object-cover group-hover:scale-110 transition duration-700" 
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