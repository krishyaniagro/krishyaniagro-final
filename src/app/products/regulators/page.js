"use client"
import Link from 'next/link';
import { useLanguage } from '@/app/languagecontext';

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
        { id: "real_power", name: { en: 'Real Power ', mr: 'रिअल पॉवर', hi: 'रिअल पॉवर' }, MRP: '₹ 998', price: '₹ 650', image: '/images/krushi_f1.jpg', description: { en: 'High-performance fertilizer for healthy plant growth.', mr: 'आरोग्यकर्ता पाऊस उभारण्यासाठी उच्च-क्रियाशील खत.', hi: 'स्वस्थ पौधे के विकास के लिए उच्च प्रदर्शन उर्वरक।' } },
        { id: "sticky", name: { en: 'Sticky ', mr: 'स्टिकी', hi: 'चिपचिपा' }, MRP: '₹ 450', price: '₹ 230', image: '/images/krushi_f2.jpg', description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' } },
        { id: "Kelper", name: { en: 'Kelper ', mr: 'केपलर', hi: 'केपलर' }, MRP: '₹ 1355', price: '₹ 1100', image: '/images/krushi_f3.jpg', description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' } },
        { id: "quality_change", name: { en: 'Quality Change ', mr: 'क्वालिटी चेंज', hi: 'क्वालिटी बदलें ' }, MRP: '₹ 1050', price: '₹ 850', image: '/images/krushi_f4.jpg', description: { en: 'Transformative fertilizer for improved soil health.', mr: 'मातीच्या आरोग्यासाठी सुधारित करण्यासाठी परिवर्तक खत.', hi: 'बेहतर मृदा स्वास्थ्य के लिए बदलावपूर्ण उर्वरक।' } },
        { id: "humic_plus", name: { en: 'Humic plus ', mr: 'हयुमिक प्लस ', hi: 'हयुमिक प्लस ' }, MRP: '₹ 750', price: '₹ 430', image: '/images/humic.jpg', description: { en: 'Increases the number of white roots', mr: 'पांढऱ्या मुळींची संख्या वाढवते.', hi: 'सफेद जड़ों की संख्या बढ़ जाती है |' } },
      ];
    

    return (
        <main className="container mx-auto p-10 S lg:pt-[160px]">
            <h1 className="text-3xl font-bold mb-6 text-center">{translations[language].title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products?.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                        <div className="border p-3 rounded-lg shadow-lg cursor-pointer animate-scale-in flex flex-col items-center justify-between h-96 w-64">
                            <img
                                src={product.image}
                                alt={product.name[language]}
                                className="w-full h-40 object-contain rounded-t-lg"
                            />
                            <h2 className="text-lg font-semibold mt-3 text-center">{product.name[language]}</h2>
                            <div className="flex items-center mt-1">
                                <span className="text-gray-700 line-through mr-2">{product.MRP}</span>
                                <p className="text-gray-700">{product.price}</p>
                            </div>
                            <p className="text-gray-600 mt-1 text-sm text-center">{product.description[language]}</p>
                            <button className="bg-green-500 text-white mt-3 p-1 rounded">{translations[language].viewDetails}</button>
                        </div>
                    </Link>
                ))}
            </div>
        </main>

    );
};

export default Products;