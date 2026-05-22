const TourCard = ({image, title, description}) => {
    return (
        <div className="relative w-[220px] h-[320px] rounded-3xl overflow-hidden group cursor-pointer">
            
            {/* image */}
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* content */}
            <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-xl font-semibold">
                    {title}
                </h3>

                <p className="text-sm text-white/80 mt-2">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default TourCard;