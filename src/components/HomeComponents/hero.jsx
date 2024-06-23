"use client"
import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/app/languagecontext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            slogans: [
                {
                    heading: "Premium Quality Fertilizers",
                    subheading: "Boost Your Farm's Productivity with Our Natural Solutions",
                },
                {
                    heading: "Organic Farming Solutions",
                    subheading: "Sustainable solutions for better yields.",
                },
                {
                    heading: "Natural Farming Practices",
                    subheading: "Promoting eco-friendly farming methods.",
                },
                {
                    heading: "Farm Innovation",
                    subheading: "Innovative solutions for modern farms.",
                },
            ],
            exploreProducts: "Explore Products",
            contactUs: "Contact Us",
        },
        mr: {
            slogans: [
                {
                    heading: "उत्कृष्ट गुणवत्ताचे खते",
                    subheading: "आमच्या प्राकृतिक उपायांसह आपल्या शेताचे उत्पादकत्व वाढवा",
                },
                {
                    heading: "संजीवनी शेती समाधान",
                    subheading: "श्रमांकनसह बेहतर उत्पादनसाठी सातत्यपूर्ण समाधाने.",
                },
                {
                    heading: "प्राकृतिक शेती कल्याण",
                    subheading: "पर्यावरणमित्र शेतीपद्धतींचे प्रमोशन.",
                },
                {
                    heading: "शेतीसाठी अभिनव अभ्यास",
                    subheading: "आधुनिक शेतकरीसाठी आधुनिक समाधाने.",
                },
            ],
            exploreProducts: "उत्पादने शोधा",
            contactUs: "आमच्याशी संपर्क साधा",
        },
        hi: {
            slogans: [
                {
                    heading: "प्रीमियम गुणवत्ता के खाद",
                    subheading: "हमारे प्राकृतिक समाधानों के साथ अपने खेत की उत्पादकता बढ़ाएं",
                },
                {
                    heading: "कृषि विकास के लिए प्रकृति के समाधान",
                    subheading: "स्थायी विकास के लिए समर्थनीय समाधान",
                },
                {
                    heading: "प्राकृतिक शेती प्रथाएं",
                    subheading: "पर्यावरण के अनुकूल शेती के विकास में सहायक",
                },
                {
                    heading: "शेती में नवाचार",
                    subheading: "आधुनिक शेती के लिए नवाचारी समाधान",
                },
            ],
            exploreProducts: "उत्पादों का अन्वेषण करें",
            contactUs: "हमसे संपर्क करें",
        },
    };

    const heroRef = useRef(null);
    const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
    const images = [
        "/images/home/hero4.jpg",
        "/images/home/hero5.jpg",
        "/images/home/hero6.jpg",
        "/images/home/hero7.jpg",
    ];

    // Preload images
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);

    useEffect(() => {
        const cycleImages = () => {
            setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
        const interval = setInterval(cycleImages, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentSloganIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div
            ref={heroRef}
            className="relative overflow-hidden pt-16 top-12 h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${images[currentSloganIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-l from-[#EAF7BA] to-transparent opacity-75"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-dark px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
                    {translations[language].slogans[currentSloganIndex].heading}
                </h1>
                <p className="text-2xl md:text-2xl mb-8 animate-fade-in-up max-w-xl">
                    {translations[language].slogans[currentSloganIndex].subheading}
                </p>
                <div className="flex space-x-8 pt-8 animate-fade-in">
                    <a
                        href="/products"
                        className="bg-[#044203] hover:bg-white hover:text-[#044a67] text-white py-2 px-8 rounded-lg transition duration-300"
                    >
                        {translations[language].exploreProducts}
                    </a>
                </div>
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
            >
                <FaChevronLeft className="text-[#044203] w-6 h-6" />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
            >
                <FaChevronRight className="text-[#044203] w-6 h-6" />
            </button>
        </div>
    );
};

export default Hero;
