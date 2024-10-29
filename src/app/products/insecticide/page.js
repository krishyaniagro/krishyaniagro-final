"use client"
import Link from 'next/link';
// import { useLanguage } from '../languagecontext';
import { useLanguage } from '@/app/languagecontext';

const Insectisides = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: 'Insectiside Products',
            viewDetails: 'View Details',
        },
        mr: {
            title: 'कीटकनाशक उत्पादने',
            viewDetails: 'विवरण पहा',
        },
        hi: {
            title: 'कीटनाशक उत्पाद',
            viewDetails: 'विवरण देखें',
        },
    };

    const products = [

        {
            "id": "hy_chloro",
            "name": {
                "en": "Hy Chloro",
                "mr": "हाय क्लोरो",
                "hi": "हाय क्लोरो"
            },
            "MRP": "₹ 342",
            "price": "₹ 280",
            "image": "/images/humc.jpg",
            "description": {
                "en": "Hy-Chloro Insecticide is an effective solution for controlling various pests in crops.",
                "mr": "हाय क्लोरो कीटकनाशक पिकांमध्ये विविध किड्यांचा नियंत्रणासाठी प्रभावी उपाय आहे.",
                "hi": "हाय क्लोरो कीटनाशक फसलों में विभिन्न कीड़ों को नियंत्रित करने के लिए एक प्रभावी समाधान है।"
            }
        },
        {
            "id": "Correct",
            "name": {
                "en": "Correct",
                "mr": "सही",
                "hi": "सही"
            },
            "MRP": "₹ 650",
            "price": "₹ 460",
            "image": "/images/correct.jpg",
            "description": {
                "en": "Correct Insecticide is a broad-spectrum foliar insecticide with acaricidal properties.",
                "mr": "सही कीटकनाशक एक व्यापक स्पेक्ट्रम पानावर लागणारे कीटकनाशक आहे ज्यामध्ये अकारिसाइडल गुणधर्म आहेत.",
                "hi": "सही कीटनाशक एक व्यापक स्पेक्ट्रम पत्तों पर उपयोग के लिए कीटनाशक है जिसमें अकारिसाइडल गुण हैं।"
            }
        },
        {
            "id": "Synergy505",
            "name": {
                "en": "Synergy 505",
                "mr": "सिनर्जी 505",
                "hi": "सिनर्जी 505"
            },
            "MRP": "₹ 700",
            "price": "₹ 470",
            "image": "/images/synergy.jpg",
            "description": {
                "en": "It is a systemic and contact insecticide belonging to synthetic pyrethroid.",
                "mr": "हे एक प्रणालीगत आणि संपर्क कीटकनाशक आहे जे संश्लेषित पायरिथ्रोइडशी संबंधित आहे.",
                "hi": "यह एक प्रणालीगत और संपर्क कीटनाशक है जो संश्लेषित पायरिथ्रॉइड से संबंधित है।"
            }
        },
        {
            "id": "megaking",
            "name": {
                "en": "Megaking",
                "mr": "मेगाकिंग",
                "hi": "मेगाकिंग"
            },
            "MRP": "₹ 2220",
            "price": "₹ 850",
            "image": "/images/meta-king.jpg",
            "description": {
                "en": "Megaking has two active ingredients, offering low dose and highly effective controls against pests.",
                "mr": "मेगाकिंगमध्ये दोन सक्रिय घटक आहेत, जे कमी मात्रा आणि कीटकांविरूद्ध अत्यंत प्रभावी नियंत्रण देतात.",
                "hi": "मेगाकिंग में दो सक्रिय सामग्री हैं, जो कीटों के खिलाफ कम खुराक और अत्यधिक प्रभावी नियंत्रण प्रदान करती हैं।"
            }
        },
        {
            "id": "hydromida",
            "name": {
                "en": "Hydromida",
                "mr": "हायड्रोमिडा",
                "hi": "हायड्रोमिडा"
            },
            "MRP": "₹ 476",
            "price": "₹ 210",
            "image": "/images/hydroma.jpg",
            "description": {
                "en": "Hydromida is a systemic insecticide that controls sucking insects and termites effectively.",
                "mr": "हायड्रोमिडा एक प्रणालीगत कीटकनाशक आहे जे चुसणारे कीटक आणि दीमक प्रभावीपणे नियंत्रित करते.",
                "hi": "हायड्रोमिडा एक प्रणालीगत कीटनाशक है जो चूसने वाले कीड़ों और दीमक को प्रभावी रूप से नियंत्रित करता है।"
            }
        },
        {
            "id": "megaking",
            "name": {
                "en": "Megaking",
                "mr": "मेगाकिंग",
                "hi": "मेगाकिंग"
            },
            "MRP": "₹ 2220",
            "price": "₹ 850",
            "image": "/images/meta-king.jpg",
            "description": {
                "en": "Megaking has two active ingredients, offering low dose and highly effective controls against pests.",
                "mr": "मेगाकिंगमध्ये दोन सक्रिय घटक आहेत, जे कमी मात्रा आणि कीटकांविरूद्ध अत्यंत प्रभावी नियंत्रण देतात.",
                "hi": "मेगाकिंग में दो सक्रिय सामग्री हैं, जो कीटों के खिलाफ कम खुराक और अत्यधिक प्रभावी नियंत्रण प्रदान करती हैं।"
            }
        },


    ];

    return (
        <main className="container mx-auto p-10 pt-[250px] lg:pt-[160px]">
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

export default Insectisides;