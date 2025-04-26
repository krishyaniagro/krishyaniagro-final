
"use client";
import Link from "next/link";
import { useLanguage } from "@/app/languagecontext";
import { motion } from "framer-motion";

const Insectisides = () => {
   const { language } = useLanguage();

  const translations = {
    en: { title: "Insecticide Products", viewDetails: "View Details" },
    mr: { title: "कीटकनाशक उत्पादने", viewDetails: "विवरण पहा" },
    hi: { title: "कीटनाशक उत्पाद", viewDetails: "विवरण देखें" },
  };

  const products = [
    {
      id: "hy_chloro",
      name: { en: "Hy Chloro", mr: "हाय क्लोरो", hi: "हाय क्लोरो" },
      MRP: "₹ 342",
      price: "₹ 280",
      image: "/images/humc.jpg",
      description: {
        en: "Hy-Chloro Insecticide is an effective solution for controlling various pests in crops.",
        mr: "हाय क्लोरो कीटकनाशक पिकांमध्ये विविध किड्यांचा नियंत्रणासाठी प्रभावी उपाय आहे.",
        hi: "हाय क्लोरो कीटनाशक फसलों में विभिन्न कीड़ों को नियंत्रित करने के लिए एक प्रभावी समाधान है।",
      },
    },
    {
      id: "Correct",
      name: { en: "Correct", mr: "सही", hi: "सही" },
      MRP: "₹ 650",
      price: "₹ 460",
      image: "/images/correct.jpg",
      description: {
        en: "Correct Insecticide is a broad-spectrum foliar insecticide with acaricidal properties.",
        mr: "सही कीटकनाशक एक व्यापक स्पेक्ट्रम पानावर लागणारे कीटकनाशक आहे ज्यामध्ये अकारिसाइडल गुणधर्म आहेत.",
        hi: "सही कीटनाशक एक व्यापक स्पेक्ट्रम पत्तों पर उपयोग के लिए कीटनाशक है जिसमें अकारिसाइडल गुण हैं।",
      },
    },
    {
      id: "Synergy505",
      name: { en: "Synergy 505", mr: "सिनर्जी 505", hi: "सिनर्जी 505" },
      MRP: "₹ 700",
      price: "₹ 470",
      image: "/images/synergy.jpg",
      description: {
        en: "It is a systemic and contact insecticide belonging to synthetic pyrethroid.",
        mr: "हे एक प्रणालीगत आणि संपर्क कीटकनाशक आहे जे संश्लेषित पायरिथ्रोइडशी संबंधित आहे.",
        hi: "यह एक प्रणालीगत और संपर्क कीटनाशक है जो संश्लेषित पायरिथ्रॉइड से संबंधित है।",
      },
    },
    {
      id: "megaking",
      name: { en: "Megaking", mr: "मेगाकिंग", hi: "मेगाकिंग" },
      MRP: "₹ 2220",
      price: "₹ 850",
      image: "/images/meta-king.jpg",
      description: {
        en: "Megaking has two active ingredients, offering low dose and highly effective controls against pests.",
        mr: "मेगाकिंगमध्ये दोन सक्रिय घटक आहेत, जे कमी मात्रा आणि कीटकांविरूद्ध अत्यंत प्रभावी नियंत्रण देतात.",
        hi: "मेगाकिंग में दो सक्रिय सामग्री हैं, जो कीटों के खिलाफ कम खुराक और अत्यधिक प्रभावी नियंत्रण प्रदान करती हैं।",
      },
    },
    {
      id: "hydromida",
      name: { en: "Hydromida", mr: "हायड्रोमिडा", hi: "हायड्रोमिडा" },
      MRP: "₹ 476",
      price: "₹ 210",
      image: "/images/hydroma.jpg",
      description: {
        en: "Hydromida is a systemic insecticide that controls sucking insects and termites effectively.",
        mr: "हायड्रोमिडा एक प्रणालीगत कीटकनाशक आहे जे चुसणारे कीटक आणि दीमक प्रभावीपणे नियंत्रित करते.",
        hi: "हायड्रोमिडा एक प्रणालीगत कीटनाशक है जो चूसने वाले कीड़ों और दीमक को प्रभावी रूप से नियंत्रित करता है।",
      },
    },
  ];

  return (
    <main className="container mx-auto px-4 py-24 lg:py-32">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 text-green-700"
      >
        {translations[language].title}
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-4 transition-transform duration-300 flex flex-col items-center text-center hover:shadow-2xl border border-gray-100"
          >
            <Link href={`/products/${product.id}`} className="w-full h-full flex flex-col justify-between">
              <img
                src={product.image}
                alt={product.name[language]}
                className="h-40 object-contain w-full mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.name[language]}</h2>
              <div className="text-sm text-gray-600 mt-1 mb-2">{product.description[language]}</div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-gray-400 line-through">{product.MRP}</span>
                <span className="text-green-600 font-bold">{product.price}</span>
              </div>
              <button className="bg-green-600 hover:bg-green-700 transition-colors text-white font-medium px-4 py-2 mt-auto rounded-full w-full">
                {translations[language].viewDetails}
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Insectisides;
