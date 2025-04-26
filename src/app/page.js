


import Hero from "@/components/HomeComponents/hero";
import Products from "./products/page";
import FAQSection from "@/components/HomeComponents/FAQ";
import ContactPage from "@/components/HomeComponents/ContactPage";
import Head from "next/head";
import TopProducts from "@/components/HomeComponents/topProducts";

export const metadata = {
  title: "Krishi Agro: Leading the Way in Agricultural Excellence",
  description: "Krishi Agro is dedicated to advancing sustainable farming through innovative solutions, cutting-edge technology, and expert support, empowering farmers to enhance productivity, efficiency, and environmental responsibility in modern agriculture.",
  keywords:"sheti,gav,bajar,indian farming,khate,aushadhe,Krishyani agro,kissan,kissankesath,hamsathsath,agrytech,agriculture,agri,bharatseva,krushiseva,agricompany,ecomerce, agriinput,Farming techniques,Crop cultivation,Advanced farming equipment,Innovative agricultural practices,Indian farmers,Crop yield optimization,Farm management services,Sustainable agriculture,Precision farming,Soil fertility management,Pest control solutions,Crop protection products,Agri-inputs and fertilizers,Agricultural consultancy",
  verification: {
    google: "vvzb4VDojObD5cBKZ56tz36Cu0B7dIDVblkfv2S6COg",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <TopProducts />
      <FAQSection />
      <ContactPage />
    </>
  );
}
