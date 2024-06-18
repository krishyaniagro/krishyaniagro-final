"use client"
import { notFound } from 'next/navigation';
import { useLanguage } from '@/app/languagecontext';

const products = [
    { id: 1, name: { en: 'Nitrogen Fertilizer', mr: 'नायट्रोजन खत', hi: 'नाइट्रोजन उर्वरक' }, price: '$15.00/kg', image: '/nitrogen_fertilizer.jpg', description: { en: 'High-quality nitrogen fertilizer.', mr: 'उच्च गुणवत्ता वाले नायट्रोजन खत.', hi: 'उच्च गुणवत्ता वाला नाइट्रोजन उर्वरक.' } },
    { id: 2, name: { en: 'Phosphorus Fertilizer', mr: 'फॉस्फरस खत', hi: 'फॉस्फोरस उर्वरक' }, price: '$20.00/kg', image: '/phosphorus_fertilizer.jpg', description: { en: 'Effective phosphorus fertilizer.', mr: 'प्रभावी फॉस्फरस खत.', hi: 'प्रभावी फॉस्फोरस उर्वरक.' } },
    { id: 3, name: { en: 'Potassium Fertilizer', mr: 'पोटॅशियम खत', hi: 'पोटैशियम उर्वरक' }, price: '$18.00/kg', image: '/potassium_fertilizer.jpg', description: { en: 'Premium potassium fertilizer.', mr: 'उच्च श्रेणीचे पोटॅशियम खत.', hi: 'उच्च गुणवत्ता वाला पोटैशियम उर्वरक.' } },
    { id: 4, name: { en: 'Organic Fertilizer', mr: 'सेंद्रिय खत', hi: 'जैविक उर्वरक' }, price: '$25.00/kg', image: '/organic_fertilizer.jpg', description: { en: 'Eco-friendly organic fertilizer.', mr: 'पर्यावरणपूरक सेंद्रिय खत.', hi: 'पर्यावरण के अनुकूल जैविक उर्वरक.' } },
];

export default function SeparateBrandProduct({ params }) {
    const { language } = useLanguage();
    const { id } = params;
    const product = products.find(p => p.id == id);

    if (!product) {
        notFound();
    }

    return (
        <main className="container mx-auto p-4">
            <div className="max-w-2xl mx-auto">
                <img src={product.image} alt={product.name[language]} className="w-full h-64 object-cover rounded-lg" />
                <h1 className="text-4xl font-bold mt-4">{product.name[language]}</h1>
                <p className="text-gray-700 mt-2">{product.price}</p>
                <p className="mt-4">{product.description[language]}</p>
                <button className="bg-green-500 text-white mt-4 p-2 rounded">Buy Now</button>
            </div>
        </main>
    );
}
