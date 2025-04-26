
"use client";
import React from "react";
import { useLanguage } from "@/app/languagecontext";
import style from "../HomeComponents/hero.module.scss";
import { useRouter } from "next/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ImageSlider from "./ImageSlider";


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
    <><section className={style.heroSection}>
      <div className={style.heroOverlay}>
        <div className={style.heroContent}>
          <h1>{heading}</h1>
          <p>{subheading}</p>
          <div className={style.heroButtons}>
            <button onClick={() => router.push("/products")} className={style.primaryBtn}>
              {exploreProducts} <ArrowRightAltIcon />
            </button>
            <button onClick={() => router.push("/pages/contact")} className={style.secondaryBtn}>
              {contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* <ImageSlider /> */}
    </>
  );
};

export default Hero;
