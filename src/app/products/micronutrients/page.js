"use client"
import Link from 'next/link';
import { useLanguage } from '@/app/languagecontext';
import { motion } from "framer-motion";

const Products = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: 'Plant growth regulators',
            viewDetails: 'View Details',
        },
        mr: {
            title: 'वनस्पती वाढ नियामक',
            viewDetails: 'विवरण पहा',
        },
        hi: {
            title: 'पादप वृद्धि नियामक',
            viewDetails: 'विवरण देखें',
        },
    };

    const products = [
    {
      id: "agro_fert",
      name: { en: 'Agrofert ', mr: 'ऍग्रो फर्ट ', hi: 'ऍग्रो फर्ट ' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: '/product new images/agrofert1.png',
      MRP: '₹ 950', price: '₹ 560',
    },
    { id: "zinc", name: { en: 'Zinc ', mr: 'झिंक ', hi: 'झिंक ' }, MRP: '₹ 280', price: '₹ 360', image: '/product_multiple/zinc1.jpg', description: { en: 'By ensuring plants have sufficient zinc, Zinc EDTA helps to optimize crop yields.', mr: 'झाडांना पुरेसा झिंक मिळाल्यामुळे पीक उत्पादन जास्त होते.', hi: 'पौधों को पर्याप्त जिंक मिलने से फसल उत्पादन में वृद्धि होती है।' } },
     { id: "combi", name: { en: 'Combi ', mr: 'कॉम्बी ', hi: 'कॉम्बी ' }, MRP: '₹ 320', price: '₹ 390', image: '/product_multiple/combi1.jpg', description: { en: 'Combi contains a mixture of highly soluble chelated form of micronutrients which are essential elements for plant growth.', mr: 'कॉम्बीमध्ये अत्यंत विद्राव्य चिलेटेड स्वरूपातील सूक्ष्म अन्नद्रव्यांचे मिश्रण असते, जे वनस्पतीच्या वाढीसाठी आवश्यक असतात.', hi: 'कॉम्बी में सूक्ष्म पोषक तत्वों के अत्यधिक घुलनशील चीलेटेड रूप का मिश्रण होता है जो पौधों की वृद्धि के लिए आवश्यक होते हैं।' } },
   
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