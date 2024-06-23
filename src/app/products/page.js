"use client"
import Link from 'next/link';
import { useLanguage } from '../languagecontext';

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
        { id: 1, name: { en: 'Real Power Fertilizer', mr: 'रियल पावर खत', hi: 'रियल पावर उर्वरक' }, MRP: '₹ 998', price: '₹ 650', image: '/images/krushi_f1.jpg', description: { en: 'High-performance fertilizer for healthy plant growth.', mr: 'आरोग्यकर्ता पाऊस उभारण्यासाठी उच्च-क्रियाशील खत.', hi: 'स्वस्थ पौधे के विकास के लिए उच्च प्रदर्शन उर्वरक।' } },
        { id: 2, name: { en: 'Sticky Fertilizer', mr: 'स्टिकी खत', hi: 'चिपचिपा उर्वरक' }, MRP: '₹ 450', price: '₹ 230', image: '/images/krushi_f2.jpg', description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' } },
        { id: 3, name: { en: 'Kepler Fertilizer', mr: 'केपलर खत', hi: 'केपलर उर्वरक' }, MRP: '₹ 1355', price: '₹ 1100', image: '/images/krushi_f3.jpg', description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' } },
        { id: 4, name: { en: 'Quality Change Fertilizer', mr: 'क्वालिटी चेंज खत', hi: 'क्वालिटी बदलें उर्वरक' }, MRP: '₹ 1050', price: '₹ 850', image: '/images/krushi_f4.jpg', description: { en: 'Transformative fertilizer for improved soil health.', mr: 'माटीच्या आरोग्यासाठी सुधारित करण्यासाठी परिवर्तक खत.', hi: 'बेहतर मृदा स्वास्थ्य के लिए बदलावपूर्ण उर्वरक।' } },
    ];

    return (
        <main className="container mx-auto p-2 lg:p-16">
            <h1 className="text-4xl font-bold mb-8 text-center">{translations[language].title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                        <div className="border p-4 rounded-lg shadow-lg cursor-pointer animate-scale-in flex flex-col items-center justify-center">
                            <img src={product.image} alt={product.name[language]} className="w-full h-full  rounded-t-lg" />
                            <h2 className="text-xl font-semibold mt-4">{product.name[language]}</h2>
                            <div className="flex items-center mt-2">
                                <span className="text-gray-700 line-through mr-2">{product.MRP}</span>
                                <p className="text-gray-700">{product.price}</p>
                            </div>
                            <p className="text-gray-600 mt-2">{product.description[language]}</p>
                            <button className="bg-green-500 text-white mt-4 p-2 rounded">{translations[language].viewDetails}</button>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Products;
