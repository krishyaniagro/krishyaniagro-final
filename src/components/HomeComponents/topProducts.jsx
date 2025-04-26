"use client";
import Link from 'next/link';
import React from "react";
import style from "../HomeComponents/topproducts.module.scss";
import { useLanguage } from "@/app/languagecontext";

const TopProducts = () => {
     const { language } = useLanguage();
  const products = [
    {
      id: "real_power",
      title: { en: 'Real Power ', mr: 'रिअल पॉवर', hi: 'रिअल पॉवर' },
       description: { en: 'High-performance fertilizer for healthy plant growth.', mr: 'आरोग्यकर्ता पाऊस उभारण्यासाठी उच्च-क्रियाशील खत.', hi: 'स्वस्थ पौधे के विकास के लिए उच्च प्रदर्शन उर्वरक।' } ,
      image: '/product new images/real_power.png',
    },
    {
      id: "quality",
      title: { en: 'Quality ', mr: 'क्वालिटी', hi: 'क्वालिटी' },
      description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' },
      image: '/product new images/quality1.png',
    },
    {
      id: "sugarcane_special",
      title: { en: 'Sugarcane Special ', mr: 'ऊस स्पेशल', hi: 'ऊस स्पेशल' },
     description: { en: 'Ideal for improving soil health and enhancing nutrient absorption.', mr: 'माटीचे आरोग्य सुधारण्यासाठी आणि पोषक अवशोषण सुधारण्यासाठी उपयुक्त', hi: 'मृदा स्वास्थ्य में सुधार करने और पोषक अवशोषण को बढ़ाने के लिए आदर्श है।' },
      image: 'product new images/sugarcane_special`.png',
    },
    {
      id: "onion_special",
      title: { en: 'Onion Special ', mr: 'कांदा स्पेशल', hi: 'कांदा स्पेशल' },
     description: { en: 'Enhances crop yield, oil content, and root growth while improving soil health', mr: 'पीक उत्पादन, तेलाचे प्रमाण आणि मुळे वाढवतो, तसेच मातीची गुणवत्ता सुधारतो ', hi: 'फसल की उपज, तेल की मात्रा और जड़ों की वृद्धि को बढ़ाता है।' },
      image: '/product new images/onion_special1.png',
    },
    {
      id: "agro_fert",
      title: { en: 'Agrofert ', mr: 'ऍग्रो फर्ट ', hi: 'ऍग्रो फर्ट ' },
     description: { en: 'Agro Fert is a micronutrient blend that boosts yield', mr: 'अ‍ॅग्रो फर्ट हे सूक्ष्म अन्नद्रव्यांचे मिश्रण असून उत्पादन वाढवते.', hi: 'एग्रो फर्ट एक सूक्ष्म पोषक तत्वों का मिश्रण है जो उपज बढ़ाता है ।' },
      image: '/product new images/agrofert1.png',
    },
  ];

  return (
    <section className={style.topProductsSection}>
      <h2 className={style.sectionTitle}>Featured Products</h2>
      <div className={style.productsContainer}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
          <div key={product.id} className={style.productCard}>
            <img src={product.image} alt={product.title} className={style.productImage} />
             <div className="d-flex flex-col">
            <h3 style={{fontWeight:"bold"}}>{product.title[language]}</h3>
            <p>{product.description[language]}</p>
            <div className="flex gap-3 mt-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                 Fastest Delivery
              </div>
            </div>
            </div>
            {/* <button className={style.viewMoreBtn}>View More</button> */}
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopProducts; 