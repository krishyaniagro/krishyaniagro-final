// "use client"
// import React, { useRef, useEffect, useState } from "react";
// import { useLanguage } from "@/app/languagecontext";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import style from "../HomeComponents/hero.module.scss"
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// const Hero = () => {
//     const { language } = useLanguage();

//     const translations = {
//         en: {
//             slogans: [
//                 {
//                     heading: "Premium Quality Fertilizers",
//                     subheading: "Boost Your Farm's Productivity with Our Natural Solutions",
//                 },
//                 {
//                     heading: "Organic Farming Solutions",
//                     subheading: "Sustainable solutions for better yields.",
//                 },
//                 {
//                     heading: "Natural Farming Practices",
//                     subheading: "Promoting eco-friendly farming methods.",
//                 },
//                 {
//                     heading: "Farm Innovation",
//                     subheading: "Innovative solutions for modern farms.",
//                 },
//             ],
//             exploreProducts: "Explore Products",
//             contactUs: "Contact Us",
//         },
//         mr: {
//             slogans: [
//                 {
//                     heading: "उत्कृष्ट गुणवत्ताचे खते",
//                     subheading: "आमच्या प्राकृतिक उपायांसह आपल्या शेताचे उत्पादकत्व वाढवा",
//                 },
//                 {
//                     heading: "संजीवनी शेती समाधान",
//                     subheading: "श्रमांकनसह बेहतर उत्पादनसाठी सातत्यपूर्ण समाधाने.",
//                 },
//                 {
//                     heading: "प्राकृतिक शेती कल्याण",
//                     subheading: "पर्यावरणमित्र शेतीपद्धतींचे प्रमोशन.",
//                 },
//                 {
//                     heading: "शेतीसाठी अभिनव अभ्यास",
//                     subheading: "आधुनिक शेतकरीसाठी आधुनिक समाधाने.",
//                 },
//             ],
//             exploreProducts: "उत्पादने शोधा",
//             contactUs: "आमच्याशी संपर्क साधा",
//         },
//         hi: {
//             slogans: [
//                 {
//                     heading: "प्रीमियम गुणवत्ता के खाद",
//                     subheading: "हमारे प्राकृतिक समाधानों के साथ अपने खेत की उत्पादकता बढ़ाएं",
//                 },
//                 {
//                     heading: "कृषि विकास के लिए प्रकृति के समाधान",
//                     subheading: "स्थायी विकास के लिए समर्थनीय समाधान",
//                 },
//                 {
//                     heading: "प्राकृतिक शेती प्रथाएं",
//                     subheading: "पर्यावरण के अनुकूल शेती के विकास में सहायक",
//                 },
//                 {
//                     heading: "शेती में नवाचार",
//                     subheading: "आधुनिक शेती के लिए नवाचारी समाधान",
//                 },
//             ],
//             exploreProducts: "उत्पादों का अन्वेषण करें",
//             contactUs: "हमसे संपर्क करें",
//         },
//     };

//     const heroRef = useRef(null);
//     const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
//     // const images = [
//     //     "/images/carousel11.jpg",
//     //      "/images/carousel2.jpg",
//     //     // "/images/home/hero5.jpg",
//     //     // "/images/home/hero6.jpg",
//     //     // "/images/home/hero7.jpg",
//     // ];
//     const fixedImage = "/images/carousel11.jpg";

//     // // Preload images
//     // useEffect(() => {
//     //     images.forEach((image) => {
//     //         const img = new Image();
//     //         img.src = image;
//     //     });
//     // }, [images]);

//      useEffect(() => {
//         const cycleSlogans = () => {
//             setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % translations[language].slogans.length);
//         };
//         const interval = setInterval(cycleSlogans, 5000);
//         return () => clearInterval(interval);
//     }, [language]);

//     const handleNext = () => {
//         setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % translations[language].slogans.length);
//     };

//     const handlePrev = () => {
//         setCurrentSloganIndex((prevIndex) => (prevIndex - 1 + translations[language].slogans.length) % translations[language].slogans.length);
//     };

//     return (
//         <>
//         <div style={{position:"relative", height:"100vh", background:"#e9f2e9"}} className="top-12 p-16 overflow-hidden">
//         <img src="images/carousel11.jpg" className={style.home_iamge1}/></div></>
       
//     );
// };

// export default Hero;
"use client";
import React from "react";
import { useLanguage } from "@/app/languagecontext";
import style from "../HomeComponents/hero.module.scss";
import { useRouter } from "next/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Hero = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const translations = {
    en: {
      heading: "Premium Quality Fertilizers",
      subheading: "Boost Your Farm's Productivity with Our Natural Solutions",
      exploreProducts: "Explore Products",
      contactUs: "Contact Us",
    },
    mr: {
      heading: "उत्कृष्ट गुणवत्ताचे खते",
      subheading: "आमच्या प्राकृतिक उपायांसह आपल्या शेताचे उत्पादकत्व वाढवा",
      exploreProducts: "उत्पादने शोधा",
      contactUs: "आमच्याशी संपर्क साधा",
    },
    hi: {
      heading: "प्रीमियम गुणवत्ता के खाद",
      subheading: "हमारे प्राकृतिक समाधानों के साथ अपने खेत की उत्पादकता बढ़ाएं",
      exploreProducts: "उत्पादों का अन्वेषण करें",
      contactUs: "हमसे संपर्क करें",
    },
  };

  const { heading, subheading, exploreProducts, contactUs } = translations[language];

  return (
    <section className={style.heroSection}>
      <div className={style.heroOverlay}>
        <div className={style.heroContent}>
          <h1>{heading}</h1>
          <p>{subheading}</p>
          <div className={style.heroButtons}>
            <button onClick={() => router.push("/products")} className={style.primaryBtn}>
              {exploreProducts} <ArrowRightAltIcon />
            </button>
            <button onClick={() => router.push("/pages/contact")}className={style.secondaryBtn}>
              {contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
