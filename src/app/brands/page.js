"use client"
import { useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../languagecontext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const BrandProducts = () => {
    const { language } = useLanguage();
    const carouselRef = useRef(null);

    const translations = {
        en: {
            title: 'All Brands',
            viewDetails: 'View Details',
        },
        mr: {
            title: 'सर्व ब्रँड्स',
            viewDetails: 'विवरण पहा',
        },
        hi: {
            title: 'सभी ब्रांड्स',
            viewDetails: 'विवरण देखें',
        },
    };

    const products = [
      { id: 1, name: { en: 'Nitrogen Fertilizer', mr: 'नायट्रोजन खत', hi: 'नाइट्रोजन उर्वरक' }, price: '$15.00/kg', image: '/images/brands/brand1.jpg', description: { en: 'High-quality nitrogen fertilizer.', mr: 'उच्च गुणवत्ता वाले नायट्रोजन खत.', hi: 'उच्च गुणवत्ता वाला नाइट्रोजन उर्वरक.' } },
      { id: 2, name: { en: 'Phosphorus Fertilizer', mr: 'फॉस्फरस खत', hi: 'फॉस्फोरस उर्वरक' }, price: '$20.00/kg', image: '/images/brands/brand2.jpg', description: { en: 'Effective phosphorus fertilizer.', mr: 'प्रभावी फॉस्फरस खत.', hi: 'प्रभावी फॉस्फोरस उर्वरक.' } },
      { id: 3, name: { en: 'Potassium Fertilizer', mr: 'पोटॅशियम खत', hi: 'पोटैशियम उर्वरक' }, price: '$18.00/kg', image: '/images/brands/brand3.jpeg', description: { en: 'Premium potassium fertilizer.', mr: 'उच्च श्रेणीचे पोटॅशियम खत.', hi: 'उच्च गुणवत्ता वाला पोटैशियम उर्वरक.' } },
      { id: 4, name: { en: 'Organic Fertilizer', mr: 'सेंद्रिय खत', hi: 'जैविक उर्वरक' }, price: '$25.00/kg', image: '/images/brands/brand4.png', description: { en: 'Eco-friendly organic fertilizer.', mr: 'पर्यावरणपूरक सेंद्रिय खत.', hi: 'पर्यावरण के अनुकूल जैविक उर्वरक.' } },
      { id: 1, name: { en: 'Nitrogen Fertilizer', mr: 'नायट्रोजन खत', hi: 'नाइट्रोजन उर्वरक' }, price: '$15.00/kg', image: '/images/brands/brand1.jpg', description: { en: 'High-quality nitrogen fertilizer.', mr: 'उच्च गुणवत्ता वाले नायट्रोजन खत.', hi: 'उच्च गुणवत्ता वाला नाइट्रोजन उर्वरक.' } },
      { id: 2, name: { en: 'Phosphorus Fertilizer', mr: 'फॉस्फरस खत', hi: 'फॉस्फोरस उर्वरक' }, price: '$20.00/kg', image: '/images/brands/brand2.jpg', description: { en: 'Effective phosphorus fertilizer.', mr: 'प्रभावी फॉस्फरस खत.', hi: 'प्रभावी फॉस्फोरस उर्वरक.' } },
      { id: 3, name: { en: 'Potassium Fertilizer', mr: 'पोटॅशियम खत', hi: 'पोटैशियम उर्वरक' }, price: '$18.00/kg', image: '/images/brands/brand3.jpeg', description: { en: 'Premium potassium fertilizer.', mr: 'उच्च श्रेणीचे पोटॅशियम खत.', hi: 'उच्च गुणवत्ता वाला पोटैशियम उर्वरक.' } },
      { id: 4, name: { en: 'Organic Fertilizer', mr: 'सेंद्रिय खत', hi: 'जैविक उर्वरक' }, price: '$25.00/kg', image: '/images/brands/brand4.png', description: { en: 'Eco-friendly organic fertilizer.', mr: 'पर्यावरणपूरक सेंद्रिय खत.', hi: 'पर्यावरण के अनुकूल जैविक उर्वरक.' } },
    
    ];

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
    };

    return (
        <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">{translations[language].title}</h1>
        <div className="relative flex items-center justify-center space-x-4 overflow-hidden p-4 mb-12">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md z-10">
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div ref={carouselRef} className="flex items-center space-x-4 overflow-x-auto p-4 gap-16" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                    ::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 text-center">
                        <Link href={`/brands/${product.id}`}>
                            <div className="block">
                                <img src={product.image} alt={product.name[language]} className="rounded-full w-40 h-40 object-cover" />
                                <p className="mt-2 text-sm font-medium">{product.name[language]}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md z-10">
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
    </main>
    
    );
};

export default BrandProducts;
