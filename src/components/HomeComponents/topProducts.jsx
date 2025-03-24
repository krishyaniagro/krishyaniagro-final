"use client";
import React from "react";
import style from "../HomeComponents/topproducts.module.scss";
import { useLanguage } from "@/app/languagecontext";

const TopProducts = () => {
     const { language } = useLanguage();
  const products = [
    {
      id: 1,
      title: { en: 'Real Power ', mr: 'रिअल पॉवर', hi: 'रिअल पॉवर' },
       description: { en: 'High-performance fertilizer for healthy plant growth.', mr: 'आरोग्यकर्ता पाऊस उभारण्यासाठी उच्च-क्रियाशील खत.', hi: 'स्वस्थ पौधे के विकास के लिए उच्च प्रदर्शन उर्वरक।' } ,
      image: '/product new images/real_power.png',
    },
    {
      id: 2,
      title: { en: 'Quality ', mr: 'केपलर', hi: 'केपलर' },
      description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' },
      image: '/product new images/quality1.png',
    },
    {
      id: 3,
      title: { en: 'Sugarcane Special ', mr: 'स्टिकी', hi: 'चिपचिपा' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: 'product new images/sugarcane_special`.png',
    },
    {
      id: 4,
      title: { en: 'Onion Special ', mr: 'स्टिकी', hi: 'चिपचिपा' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: '/product new images/onion_special1.png',
    },
    {
      id: 5,
      title: { en: 'Agrofert ', mr: 'स्टिकी', hi: 'चिपचिपा' },
     description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' },
      image: '/product new images/agrofert1.png',
    },
  ];

  return (
    <section className={style.topProductsSection}>
      <h2 className={style.sectionTitle}>Featured Products</h2>
      <div className={style.productsContainer}>
        {products.map((product) => (
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
        ))}
      </div>
    </section>
  );
};

export default TopProducts; 