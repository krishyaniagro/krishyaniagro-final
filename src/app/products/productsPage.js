"use client"
import Link from 'next/link';
import { useLanguage } from '../languagecontext';
import { motion } from "framer-motion";

const Products = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'All Products',
      viewDetails: 'View Details',
    },
    mr: {
      title: 'सर्व उत्पादने',
      viewDetails: 'विवरण पहा',
    },
    hi: {
      title: 'सभी उत्पाद',
      viewDetails: 'विवरण देखें',
    },
  };

  const products = [
    
    {
      id: "quality",
      name: { en: 'Quality ', mr: 'क्वालिटी', hi: 'क्वालिटी' },
      description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' },
      image: '/product new images/quality1.png',
      MRP: '₹ 1150', price: '₹ 850',
    },
    {
      id: "sugarcane_special",
      name: { en: 'Sugarcane Special ', mr: 'ऊस स्पेशल ', hi: 'ऊस स्पेशल ' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: 'product new images/sugarcane_special`.png',
      MRP: '₹ 1200', price: '₹ 900',
    },
    {
      id: "onion_special",
      name: { en: 'Onion Special ', mr: 'कांदा स्पेशल', hi: 'कांदा स्पेशल' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: '/product new images/onion_special1.png',
      MRP: '₹ 1155', price: '₹ 850',
    },
    {
      id: "agro_fert",
      name: { en: 'Agrofert ', mr: 'ऍग्रो फर्ट ', hi: 'ऍग्रो फर्ट ' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: '/product new images/agrofert1.png',
      MRP: '₹ 950', price: '₹ 560',
    },
    { id: "real_power", name: { en: 'Real Power ', mr: 'रिअल पॉवर', hi: 'रिअल पॉवर' }, MRP: '₹ 998', price: '₹ 850', image: '/product new images/real_power.png', description: { en: 'High-performance fertilizer for healthy plant growth.', mr: 'आरोग्यकर्ता पाऊस उभारण्यासाठी उच्च-क्रियाशील खत.', hi: 'स्वस्थ पौधे के विकास के लिए उच्च प्रदर्शन उर्वरक।' } },
    { id: "sticker", name: { en: 'A Stick ', mr: 'ए स्टिक', hi: 'ए स्टिक' }, MRP: '₹ 260', price: '₹ 240', image: '/product new images/astick1.png', description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' } },
    { id: "ASRP", name: { en: 'ASRP ', mr: 'ए यस आर पी', hi: 'ए यस आर पी' }, MRP: '₹ 370', price: '₹ 350', image: '/product new images/asrp1.png', description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' } },
    { id: "Mycorhiza", name: { en: 'Mycorhiza ', mr: 'मायकोरायजा', hi: 'मायकोरायजा ' }, MRP: '₹ 850', price: '₹ 550', image: '/product new images/active_micorrizha1.png', description: { en: 'Transformative fertilizer for improved soil health.', mr: 'मातीच्या आरोग्यासाठी सुधारित करण्यासाठी परिवर्तक खत.', hi: 'बेहतर मृदा स्वास्थ्य के लिए बदलावपूर्ण उर्वरक।' } },
    { id: "humi_drip", name: { en: 'Humi Drip ', mr: 'ह्युमी ड्रिप ', hi: 'ह्युमी ड्रिप ' }, MRP: '₹ 650', price: '₹ 430', image: '/product new images/humi_drip1.png', description: { en: 'Increases the number of white roots', mr: 'पांढऱ्या मुळींची संख्या वाढवते.', hi: 'सफेद जड़ों की संख्या बढ़ जाती है |' } },
    { id: "humi_acid", name: { en: 'Humic Acid ', mr: 'हह्यूमिक ऍसिड ', hi: 'हह्यूमिक ऍसिड ' }, MRP: '₹ 980', price: '₹ 480', image: '/product new images/_DSC2878 (1).png', description: { en: 'Increases the number of white roots', mr: 'पांढऱ्या मुळींची संख्या वाढवते.', hi: 'सफेद जड़ों की संख्या बढ़ जाती है |' } },
   

  ];

  return (
    <main className="container mx-auto p-10">
       <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 text-green-700"
      >
        {translations[language].title}
      </motion.h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> */}
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center place-items-center"
      >
        {products?.map(product => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#e9f2e9] rounded-2xl shadow-lg p-4 transition-transform duration-300 flex flex-col items-center text-center hover:shadow-2xl border border-gray-100 w-[250px]"
          >
          <Link key={product.id} href={`/products/${product.id}`}>
            {/* <div className="border p-3 rounded-lg shadow-lg cursor-pointer animate-scale-in flex flex-col items-center justify-between h-96 w-64"> */}
              <img
                src={product.image}
                alt={product.name[language]}
                className="w-full h-40 object-contain rounded-t-lg"
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
            {/* </div> */}
          </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>

  );
};

export default Products;