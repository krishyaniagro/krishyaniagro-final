"use client";
import { useLanguage } from '@/app/languagecontext';

const AboutUs = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: 'About Us',
            companyOverview: 'Krushi Services is a leading provider of premium quality fertilizers and innovative agricultural solutions. With years of experience in the industry, we are committed to enhancing farm productivity and promoting sustainable practices. Our range of products is designed to meet the specific needs of farmers, ensuring optimal crop growth and yield. By combining advanced technology with deep agricultural expertise, Krushi Services supports farmers in achieving long-term success while maintaining environmental balance. We strive to deliver reliable, effective, and eco-friendly solutions that contribute to a more sustainable future in agriculture.',
            servicesOffered: 'Our services include:',
            servicesList: [
                {
                    title: "Organic and chemical fertilizers",
                    desc: "Organic fertilizers enhance soil health naturally, improving long-term productivity, while chemical fertilizers provide quick nutrient boosts for immediate plant growth. Both serve crucial roles in optimizing crop yield and farm efficiency."
                },
                {
                    title: "Soil testing and analysis",
                    desc: "Soil testing and analysis provide essential insights into soil health, helping optimize nutrient levels for better crop growth. Krushi Services offers accurate soil assessments to enhance farm productivity and sustainable agriculture practices."
                },
                {
                    title: "Crop consultation and management",
                    desc: "Krushi Services offers expert crop consultation and management solutions, guiding farmers to optimize yields and sustainability. Our tailored advice helps ensure healthy crops, efficient resource use, and long-term farm success."
                },
                {
                    title: "Sustainable farming practices",
                    desc: "Sustainable farming practices focus on enhancing productivity while conserving resources. They promote soil health, reduce chemical inputs, and prioritize eco-friendly methods to ensure long-term agricultural viability and environmental protection."
                }
            ],
            missionStatement: 'Krushi Services mission is to empower farmers with premium, sustainable agricultural solutions, enhancing productivity and fostering environmental stewardship through innovation, expertise, and commitment to long-term success in farming.',
            contactUs: 'Contact Us',
            address: '123 Main Street, Cityville, Country',
            email: 'contact@example.com',
            phone: '+1234567890',
            visitUs: 'Visit Us',
        },
        // Other language translations...
    };

    return (
        <main className="container mx-auto p-20 pb-10 pt-[250px] lg:pt-[160px]">
            <h1 className="text-5xl font-bold mb-8 text-center text-green-700">{translations[language].title}</h1>

            <section className="flex flex-col items-center text-center">
                <p className="text-lg text-gray-700">{translations[language].companyOverview}</p>
            </section>

            <div className='mt-4'>
                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-green-600 text-center">{translations[language].servicesOffered}</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        {translations[language].servicesList.map((service, index) => (
                            <li key={index} className="mb-4">
                                <strong>{service.title}</strong>
                                <p>{service.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <div className='mt-4 '>
                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-green-600 text-center">Mission Statement</h2>
                    <p className="text-lg text-gray-700">{translations[language].missionStatement}</p>
                </section>
            </div>
        </main>
    );
};

export default AboutUs;
