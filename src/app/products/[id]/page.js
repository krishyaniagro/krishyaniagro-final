// Product.js
"use client";
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/languagecontext';
import Cookies from 'js-cookie'; // Import js-cookie library

const products = [
  { id: 1, name: { en: 'Real Power Fertilizer', mr: 'रियल पावर खत', hi: 'रियल पावर उर्वरक' }, price: '$10.99', image: '/images/krushi_f1.jpg', description: { en: 'High-performance fertilizer for healthy plant growth.', mr: 'आरोग्यकर्ता पाऊस उभारण्यासाठी उच्च-क्रियाशील खत.', hi: 'स्वस्थ पौधे के विकास के लिए उच्च प्रदर्शन उर्वरक।' } },
  { id: 2, name: { en: 'Sticky Fertilizer', mr: 'स्टिकी खत', hi: 'चिपचिपा उर्वरक' }, price: '$8.50', image: '/images/krushi_f2.jpg', description: { en: 'Adhesive fertilizer that improves nutrient absorption.', mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.', hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।' } },
  { id: 3, name: { en: 'Kepler Fertilizer', mr: 'केपलर खत', hi: 'केपलर उर्वरक' }, price: '$12.99', image: '/images/krushi_f3.jpg', description: { en: 'Revolutionary fertilizer with advanced growth formulas.', mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.', hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।' } },
  { id: 4, name: { en: 'Quality Change Fertilizer', mr: 'क्वालिटी चेंज खत', hi: 'क्वालिटी बदलें उर्वरक' }, price: '$9.99', image: '/images/krushi_f4.jpg', description: { en: 'Transformative fertilizer for improved soil health.', mr: 'माटीच्या आरोग्यासाठी सुधारित करण्यासाठी परिवर्तक खत.', hi: 'बेहतर मृदा स्वास्थ्य के लिए बदलावपूर्ण उर्वरक।' } },
];

const Product = ({ params }) => {
  const { id } = params;
  const { language } = useLanguage();
  const router = useRouter();
  const product = products.find(p => p.id == id);

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        Product not found.
      </div>
    );
  }

  const { name, price, image, description } = product;

  const handleBuyNow = () => {
    const phoneNumber = '+918459574080';
    const productName = name[language];
    const productDescription = description[language];
    
    // Check if user information exists in cookies
    const username = Cookies.get('username');
    const address = Cookies.get('address');
    const userPhoneNumber = Cookies.get('user_phone_number');

    if (username && address && userPhoneNumber) {
      const message = `my name is ${username}I want to buy ${productName} (${price}). Please confirm my order. Product details: ${productName} - ${productDescription}. My address is ${address}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    } else {
      alert('Please provide your username, address, and phone number before purchasing.');
    }
  };

  return (
    <main className="container mx-auto p-4 mt-16 h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="w-full h-400px flex items-center justify-center">
            <img src={image} alt={name[language]} className="max-w-full h-auto max-h-full object-contain rounded-lg" />
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/2">
          <h1 className="text-4xl font-bold mt-4 md:mt-0">{name[language]}</h1>
          <p className="text-gray-700 mt-2">{price}</p>
          <p className="mt-4">{description[language]}</p>
          <button onClick={handleBuyNow} className="bg-green-500 text-white mt-4 p-2 rounded">Buy Now</button>
        </div>
      </div>
    </main>
  );
};

export default Product;
