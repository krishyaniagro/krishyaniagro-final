"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/app/languagecontext";

const translations = {
    en: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        login: "Login",
        Insecticides: "Insecticides",
        fungicide: "Fungicide",
        PlantGrowthRegulators: "Plant Growth Regulators",
        Growthpromoters: "Growth Promoters",
        Hardware: "Hardware"
    },
    mr: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        products: "उत्पादने",
        contact: "संपर्क",
        login: "लॉगिन",
        Insecticides: "कीटकनाशके",
        fungicide: "कवकनाशके",
        PlantGrowthRegulators: "वनस्पती वाढ नियामक",
        Growthpromoters: "वाढ प्रोत्साहक",
        Hardware: "हार्डवेअर"
    },
    hi: {
        home: "मुखपृष्ठ",
        about: "हमारे बारे में",
        products: "उत्पाद",
        contact: "संपर्क करें",
        login: "लॉगिन",
        Insecticides: "कीटनाशक",
        fungicide: "फफूंदनाशक",
        PlantGrowthRegulators: "पौधों की वृद्धि नियामक",
        Growthpromoters: "वृद्धि प्रमोटर",
        Hardware: "हार्डवेयर"
    },
};


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { language, setLanguage } = useLanguage();

    const links = [
        { id: 1, key: "home", url: "/" },
        { id: 2, key: "about", url: "/about" },
        { id: 3, key: "products", url: "/products", sublinks: [
            { id: 31, key: "Insecticides", url: "/products/Insecticides" },
            { id: 32, key: "fungicide", url: "/products/fungicide" },
            { id: 33, key: "PlantGrowthRegulators", url: "/products/PlantGrowthRegulators" },
            { id: 34, key: "Growthpromoters", url: "/products/Growthpromoters" },
            { id: 35, key: "Hardware", url: "/products/hardware" },
        ]},
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

    return (
        <div className="flex justify-between items-center w-full py-2 px-4 text-white fixed top-0 left-0 bg-[#044203] z-50">
            <div className="flex-shrink-0">
                <h1 className="text-2xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Logo
                    </a>
                </h1>
            </div>
            <ul className="hidden md:flex flex-grow justify-center">
                {links.map(({ id, key, url, sublinks }) => (
                    <li
                        key={id}
                        className="relative nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
                        onMouseEnter={() => setHoveredLink(id)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <Link href={url}>{translations[language][key]}</Link>
                        {sublinks && hoveredLink === id && (
                            <ul className="absolute top-full left-0 bg-[#044203] text-white py-2">
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
            <div className="hidden md:flex flex-shrink-0 items-center space-x-4">
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-[#044203] text-white border border-white px-2 py-1 rounded"
                >
                    <option value="en">English</option>
                    <option value="mr">मराठी</option>
                    <option value="hi">हिंदी</option>
                </select>
                <Link href="/auth/login" className="text-white nav-links cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline">
                    {translations[language].login}
                </Link>
            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col py-10 items-start absolute top-0 left-0 w-full h-screen bg-[#044203] text-white">
                    {links.map(({ id, key, url, sublinks }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-2 text-2xl">
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
                    <li className="px-4 cursor-pointer capitalize py-2 text-2xl">
                        <Link onClick={() => setNav(!nav)} href="/auth/login">
                            {translations[language].login}
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
