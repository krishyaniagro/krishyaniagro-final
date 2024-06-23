"use client"
import Link from 'next/link';
import { useLanguage } from '@/app/languagecontext';

const AboutUs = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: 'About Us',
            companyOverview: 'Krushi Services is dedicated to providing premium quality fertilizers and agricultural solutions. With years of experience in the industry, we aim to enhance farm productivity and sustainability through innovative products and services.',
            servicesOffered: 'Our services include:',
            servicesList: [
                'Organic and chemical fertilizers',
                'Soil testing and analysis',
                'Crop consultation and management',
                'Sustainable farming practices',
            ],
            missionStatement: 'Our mission is to empower farmers with the tools and knowledge needed to achieve greater yields while preserving natural resources.',
            contactUs: 'Contact Us',
            address: '123 Main Street, Cityville, Country',
            email: 'contact@example.com',
            phone: '+1234567890',
            visitUs: 'Visit Us',
        },
        mr: {
            title: 'आमच्याबद्दल',
            companyOverview: 'कृषी सेवांचा ध्येय उत्कृष्ट गुणवत्ताचे खते आणि कृषी समाधान प्रदान करणे आहे. उद्योगात वर्षांचा अनुभव असल्याने, आम्ही नवीनतम उत्पादने आणि सेवा प्रदान करून शेतीची उत्पादकता आणि सततता वाढवण्याच्या उद्दिष्टाने प्रयत्न करतो.',
            servicesOffered: 'आमची सेवांमध्ये भरपूर आहेत:',
            servicesList: [
                'प्राकृतिक आणि रासायनिक खते',
                'मृदाची चाचणी आणि विश्लेषण',
                'फसलांची सल्ला आणि व्यवस्थापन',
                'सतत शेती पद्धती',
            ],
            missionStatement: 'आमचे मिशन शेतकऱ्यांना महान पिके उत्पन्न करण्यासाठी आवश्यक उपकरणे आणि ज्ञान प्राप्त करण्याच्या मार्गाने अधिक यिल्ड्स मिळवणे आणि प्राकृतिक संसाधने संरक्षित करणे आहे.',
            contactUs: 'आमच्याशी संपर्क साधा',
            address: '१२३ मुख्य रोड, शहरगाव, देश',
            email: 'contact@example.com',
            phone: '+१२३४५६७८९०',
            visitUs: 'आमच्या स्थानावर येऊन पहा',
        },
        hi: {
            title: 'हमारे बारे में',
            companyOverview: 'कृषि सेवाओं का ध्यान देना, उत्कृष्ट गुणवत्ता के खाद और कृषि समाधान प्रदान करना है। उद्योग में वर्षों के अनुभव के साथ, हम नवाचारी उत्पादों और सेवाओं के माध्यम से खेती की उत्पादकता और स्थिरता को बढ़ाने का लक्ष्य रखते हैं।',
            servicesOffered: 'हमारी सेवाएं निम्नलिखित शामिल हैं:',
            servicesList: [
                'प्राकृतिक और रासायनिक खाद',
                'मृदा परीक्षण और विश्लेषण',
                'फसल सलाह और प्रबंधन',
                'सतत खेती प्रथाएँ',
            ],
            missionStatement: 'हमारा मिशन किसानों को उन्नत उत्पादन प्राप्त करने के लिए जरूरी उपकरणों और ज्ञान प्रदान करना है जबकि प्राकृतिक संसाधनों को संरक्षित रखना है।',
            contactUs: 'हमसे संपर्क करें',
            address: '१२३ मुख्य सड़क, शहरगाँव, देश',
            email: 'contact@example.com',
            phone: '+1234567890',
            visitUs: 'हमारे पास आएं',
        },
    };

    return (
        <main className="container mx-auto pt-20 p-20">
            <h1 className="text-5xl font-bold mb-8 text-center text-green-700">{translations[language].title}</h1>

                <div>
                    <section className="flex flex-col items-center">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4 text-green-600">Company Overview</h2>
                            <p className="text-lg text-gray-700">{translations[language].companyOverview}</p>
                        </div>
                    </section>
                </div>
                <div className='mt-4'>
                    <section>
                        <h2 className="text-3xl font-semibold mb-4 text-green-600">{translations[language].servicesOffered}</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700">
                            {translations[language].servicesList.map((service, index) => (
                                <li key={index} className="mb-2">{service}</li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className='mt-4'>
                    <section>
                        <h2 className="text-3xl font-semibold mb-4 text-green-600">Mission Statement</h2>
                        <p className="text-lg text-gray-700">{translations[language].missionStatement}</p>
                    </section>



            </div>
        </main>
    );
};

export default AboutUs;
