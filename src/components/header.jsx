"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/app/languagecontext";
import { useGlobalState } from "./GlobalState";
import Image from "next/image";

const translations = {
    en: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        login: "Login",
        logout: "Logout",
        Insecticides: "Insecticides",
        fungicide: "Fungicide",
        PlantGrowthRegulators: "Plant Growth Regulators",
        Growthpromoters: "Growth Promoters",
        Hardware: "Hardware",
        cinfo:"Call To Order: +91 9359213421",
        clanguage:"Change language"
    },
    mr: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        products: "उत्पादने",
        contact: "संपर्क",
        login: "लॉगिन",
        logout: "लॉगआउट",
        Insecticides: "कीटकनाशके",
        fungicide: "कवकनाशके",
        PlantGrowthRegulators: "वनस्पती वाढ नियामक",
        Growthpromoters: "वाढ प्रोत्साहक",
        Hardware: "हार्डवेअर",
        cinfo:"ऑर्डर करण्यासाठी कॉल करा: +91 9359213421",
        clanguage:"भाषा बदला"
    },
    hi: {
        home: "मुखपृष्ठ",
        about: "हमारे बारे में",
        products: "उत्पाद",
        contact: "संपर्क करें",
        login: "लॉगिन",
        logout: "लॉगआउट",
        Insecticides: "कीटनाशक",
        fungicide: "फफूंदनाशक",
        PlantGrowthRegulators: "पौधों की वृद्धि नियामक",
        Growthpromoters: "वृद्धि प्रमोटर",
        Hardware: "हार्डवेयर",
        cinfo:"ऑर्डर करने के लिए कॉल करें: +91 9359213421",
        clanguage:"भाषा बदलें"
        
    },
};

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { language, setLanguage } = useLanguage();
    const { isLoggedIn, setIsLoggedIn } = useGlobalState();

    const links = [
        { id: 1, key: "home", url: "/" },
        { id: 2, key: "about", url: "/about" },
        {
            id: 3, key: "products", url: "/products", sublinks: [
                { id: 31, key: "Insecticides", url: "/products" },
                { id: 32, key: "fungicide", url: "/products" },
                { id: 33, key: "PlantGrowthRegulators", url: "/products" },
                { id: 34, key: "Growthpromoters", url: "/products" },
                { id: 35, key: "Hardware", url: "/products" },
            ]
        },
        { id: 4, key: "contact", url: "/pages/contact" },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNav(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleLogout = () => {
        document.cookie = "user_phone_number=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        alert("You have been logged out.");
    };

    return (
        <>
            {/* <div className="flex justify-between items-center w-full py-2 px-4 text-white fixed top-0 left-0 z-50 bg-[#07bc0c]">

                <div className="flex items-center justify-center flex-grow space-x-4">
                    Call To Order: +91- 78382 69440
                </div>
                <div className="flex items-center space-x-2">
                    <span className="pr-2"> Change language : </span>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="bg-[#07bc0c] text-white border border-white px-2 py-1rounded"
                    >
                        <option value="en">English</option>
                        <option value="mr">मराठी</option>
                        <option value="hi">हिंदी</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap justify-between items-center w-full py-2 px-4 text-white fixed top-10 left-0 z-50 bg-white">
                <div className="flex flex-grow items-center justify-start space-x-4 pl-4">
                    <Image src="/images/website_logobg.png" alt="krishyaniagro" width={40} height={40} />
                    <span className="text-xl sm:text-2xl font-bold ml-2 text-black">Krishyani Agro</span>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center mt-2 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-black border border-black px-4 py-1 rounded-full w-full md:w-64"
                    />
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="pl-8 text-black nav-links cursor-pointer capitalize font-bold hover:scale-105 hover:text-black duration-200 link-underline mt-2 md:mt-0"
                        >
                            {translations[language].logout}
                        </button>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="text-black nav-links cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline mt-2 md:mt-0"
                        >
                            {translations[language].login}
                        </Link>
                    )}
                </div>
            </div> */}
             <div className="flex flex-wrap justify-between items-center w-full py-2 px-4 text-white fixed top-0 left-0 z-50 bg-[#07bc0c]">
                <div className="flex flex-grow items-center justify-center space-x-4">
                {translations[language]?.cinfo}
                </div>
                <div className="flex items-center space-x-2">
                    <span className="pr-2"> {translations[language]?.clanguage} : </span>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="bg-[#07bc0c] text-white border border-white px-2 py-1 rounded"
                    >
                        <option value="en">English</option>
                        <option value="mr">मराठी</option>
                        <option value="hi">हिंदी</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center w-full py-2 px-4 text-white fixed top-16 lg:top-11 md:top-8 left-0 z-40 bg-white">
                <div className="flex flex-grow items-center justify-start space-x-4 pl-4">
                    <Image src="/images/website_logobg.png" alt="krishyaniagro" width={40} height={40} />
                    <span className="text-xl sm:text-2xl font-bold ml-2 text-black">Krishyani Agro</span>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center mt-2 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-black border border-black px-4 py-1 rounded-full w-full md:w-64"
                    />
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="pl-8 text-black nav-links cursor-pointer capitalize font-bold hover:scale-105 hover:text-black duration-200 link-underline mt-2 md:mt-0"
                        >
                            {translations[language].logout}
                        </button>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="pl-8 text-black nav-links cursor-pointer capitalize font-medium hover:scale-105 hover:text-black duration-200 link-underline mt-2 md:mt-0"
                        >
                            {translations[language].login}
                        </Link>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-center w-full py-2 px-4 text-white fixed top-48 lg:top-24 md:top-24 left-0 bg-[#07bc0c] z-50">
                <ul className="hidden md:flex flex-grow justify-start gap-14 pl-24">
                    {links.map(({ id, key, url, sublinks }) => (
                        <li
                            key={id}
                            className="relative nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
                            onMouseEnter={() => setHoveredLink(id)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link href={url}>{translations[language][key]}</Link>
                            {sublinks && hoveredLink === id && (
                                <ul className="absolute top-full left-0 bg-[#07bc0c] text-white py-2">
                                    {sublinks.map(({ id, key, url }) => (
                                        <li key={id} className=" p-2 hover:bg-[#033203] w-36 text-sm">
                                            <Link href={url}>{translations[language][key]}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-white md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className="flex flex-col py-10 items-start absolute top-0 left-0 w-full h-screen bg-[#07bc0c] text-white">
                        {links.map(({ id, key, url, sublinks }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-2 text-xl">
                                <Link onClick={() => setNav(!nav)} href={url}>
                                    {translations[language][key]}
                                </Link>
                                {sublinks && (
                                    <ul className="pl-4">
                                        {sublinks.map(({ id, key, url }) => (
                                            <li key={id} className="py-2">
                                                <Link onClick={() => setNav(!nav)} href={url}>
                                                    {translations[language][key]}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li className="px-4 cursor-pointer capitalize py-2 text-xl">
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="text-white">
                                    {translations[language].logout}
                                </button>
                            ) : (
                                <Link onClick={() => setNav(!nav)} href="/auth/login">
                                    {translations[language].login}
                                </Link>
                            )}
                        </li>
                    </ul>
                )}
            </div>
        </>

    );
};

export default Navbar;
