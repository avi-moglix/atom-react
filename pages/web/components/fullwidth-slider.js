import { useState, useEffect } from "react";

const Slider = () => {
    const slides = [
        { content: "Slide 1 - Welcome!", background: "#d9232d" },
        { content: "", background: "url('/assets/img/sliderImg.jpg')" },
        { content: "Explore", background: "#d9232d" },
        { content: "", background: "url('/assets/img/sliderImg.jpg')" },
        { content: "Thank You!", background: "#d9232d" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const dotsClass = (index) => {
        return (
            "w-3 h-3 rounded-full " +
            (currentIndex === index
                ? "bg-[#d9232d]"
                : "bg-gray-400 hover:bg-[#d9232d]")
        );
    };

    const slideClass = (index) => {
        return (
            "absolute inset-0 flex justify-center items-center text-lg font-semibold transition-opacity duration-1000 ease-in-out " +
            (index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0")
        );
    };

    const backgroundStyle = (background) => {
        return background.includes("url")
            ? { background: background + " center/cover no-repeat" }
            : { background: background };
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full overflow-hidden h-80">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={slideClass(index)}
                        style={backgroundStyle(slide.background)}
                    >
                        <h1 className="text-white">{slide.content}</h1>
                    </div>
                ))}
                 <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 text-white p-2 rounded-full hover:bg-gray-200 z-20">
                    <i className="ri-arrow-left-s-line text-[#3c3c3c] text-lg"></i>
                </button>

                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 text-white p-2 rounded-full hover:bg-gray-200 z-20">
                    <i className="ri-arrow-right-s-line text-[#3c3c3c] text-xl"></i>
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex space-x-2 bg-gray-100 rounded-xl p-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={dotsClass(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
