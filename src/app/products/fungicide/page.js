"use client"
import Link from 'next/link';
import { useLanguage } from '@/app/languagecontext';

const Products = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: 'fungicide Products',
            viewDetails: 'View Details',
        },
        mr: {
            title: 'बुरशीनाशक उत्पादने',
            viewDetails: 'विवरण पहा',
        },
        hi: {
            title: 'कवकनाशी उत्पाद',
            viewDetails: 'विवरण देखें',
        },
    };

    const products = [
        {
            "id": "meta_manco",
            "name": {
                "en": "Meta-Manco",
                "mr": "मेटा-मनको",
                "hi": "मेटा-मनको"
            },
            "MRP": "₹ 823",
            "price": "₹ 640",
            "image": "/images/meta-manco.jpg",
            "description": {
                "en": "Meta-Manco Fungicide is a combi product that can help you protect your crops from fungal diseases.",
                "mr": "मेटा-मनको फंगीसाइड एक संयोगित उत्पादन आहे जे आपल्याला आपल्या पिकांना बुरशीच्या आजारांपासून संरक्षण करण्यास मदत करू शकते.",
                "hi": "मेटा-मनको फंगीसाइड एक संयोजक उत्पाद है जो आपकी फसलों को फंगल रोगों से बचाने में मदद कर सकता है।"
            }
        },
        {
            "id": "hy_carb",
            "name": {
                "en": "Hy Carb",
                "mr": "हाय कार्ब",
                "hi": "हाय कार्ब"
            },
            "MRP": "₹ 790",
            "price": "₹ 670",
            "image": "/images/hy-carb.jpg",
            "description": {
                "en": "Hy Carb Fungicide is the most trusted brand in the agrochemical industry.",
                "mr": "हाय कार्ब फंगीसाइड हा कृषी रासायनिक उद्योगातील सर्वात विश्वासार्ह ब्रँड आहे.",
                "hi": "हाय कार्ब फंगीसाइड कृषि रसायन उद्योग में सबसे विश्वसनीय ब्रांड है।"
            }
        },
        {
            "id": "miltop",
            "name": {
                "en": "Miltop",
                "mr": "मिल्टॉप",
                "hi": "मिल्टॉप"
            },
            "MRP": "₹ 640",
            "price": "₹ 490",
            "image": "/images/miltop.jpg",
            "description": {
                "en": "Miltop Fungicide is a broad-spectrum systemic fungicide with unique properties.",
                "mr": "मिल्टॉप फंगीसाइड एक व्यापक स्पेक्ट्रम प्रणालीगत फंगीसाइड आहे ज्यामध्ये अनोखे गुणधर्म आहेत.",
                "hi": "मिल्टॉप फंगीसाइड एक व्यापक स्पेक्ट्रम प्रणालीगत फंगीसाइड है जिसमें अद्वितीय गुण हैं।"
            }
        }
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

export default Products;