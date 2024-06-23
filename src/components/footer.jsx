"use client"
import Link from 'next/link';
import { useLanguage } from '@/app/languagecontext';

export default function Footer() {
  const { language } = useLanguage();
  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      followUs: "Follow Us",
      contactUs: "Contact Us",
      email: "Email",
      phone: "Phone",
      address: "Address",
      companyInfo: "Empowering farmers with technology and providing fresh produce to everyone.",
      pages: "Pages",
      copyright: "&copy; 2024 Krishyaniagro. All rights reserved."
    },
    mr: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      services: "सेवा",
      contact: "संपर्क",
      followUs: "आमचं अनुसरण करा",
      contactUs: "आमच्याशी संपर्क साधा",
      email: "ईमेल",
      phone: "फोन",
      address: "पत्ता",
      companyInfo: "तंत्रज्ञानासह शेतकऱ्यांना सक्षम बनवणे आणि सर्वांना ताजे उत्पादन प्रदान करणे.",
      pages: "पृष्ठे",
      copyright: "&copy; 2024 Krishyaniagro. सर्व हक्क राखीव आहेत."
    },
    hi: {
      home: "मुखपृष्ठ",
      about: "हमारे बारे में",
      services: "सेवाएं",
      contact: "संपर्क करें",
      followUs: "हमें फॉलो करें",
      contactUs: "संपर्क करें",
      email: "ईमेल",
      phone: "फ़ोन",
      address: "पता",
      companyInfo: "किसानों को प्रौद्योगिकी के साथ सशक्त बनाना और सभी को ताजा उत्पाद प्रदान करना।",
      pages: "पृष्ठ",
      copyright: "&copy; 2024 Krishyaniagro. सर्वाधिकार सुरक्षित।"
    }
  };


  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Krishyaniagro</h2>
            <p className="mt-2">
              {translations[language].companyInfo}
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">{translations[language].pages}</h3>
            <ul className="mt-2">
              <li className="mt-1">
                <Link href="/">
                  <p className="hover:underline">{translations[language].home}</p>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="/about">
                  <p className="hover:underline">{translations[language].about}</p>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="/services">
                  <p className="hover:underline">{translations[language].services}</p>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="/contact">
                  <p className="hover:underline">{translations[language].contact}</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">{translations[language].followUs}</h3>
            <div className="mt-2 flex space-x-4">
              {/* Social Media Links */}
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56c-.88.39-1.82.66-2.8.78 1.01-.61 1.78-1.58 2.15-2.73-.95.56-2 .96-3.13 1.18-.89-.95-2.17-1.54-3.58-1.54-2.71 0-4.9 2.19-4.9 4.89 0 .38.04.75.13 1.11-4.07-.2-7.69-2.15-10.11-5.12-.42.73-.66 1.57-.66 2.48 0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.23-.62v.06c0 2.38 1.69 4.36 3.94 4.81-.41.11-.84.17-1.28.17-.31 0-.61-.03-.91-.08.61 1.9 2.39 3.29 4.5 3.33-1.65 1.29-3.74 2.06-6 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.41 2.17 8.89 0 13.76-7.36 13.76-13.75 0-.21 0-.42-.02-.63.95-.68 1.78-1.53 2.43-2.5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 0H3.55C1.6 0 0 1.6 0 3.55v16.9C0 22.4 1.6 24 3.55 24h16.9c1.95 0 3.55-1.6 3.55-3.55V3.55C24 1.6 22.4 0 20.45 0zM7.06 20.45H3.55V8.54h3.51v11.91zM5.31 6.92c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.45 20.45h-3.51v-5.81c0-1.39-.02-3.19-1.95-3.19-1.95 0-2.25 1.52-2.25 3.08v5.92h-3.51V8.54h3.37v1.63h.05c.47-.89 1.63-1.82 3.37-1.82 3.61 0 4.27 2.38 4.27 5.48v6.62z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">{translations[language].contactUs}</h3>
            <p className="mt-2">
              {translations[language].email}: <a href="mailto:info@Krishyaniagro.com" className="hover:underline">info@Krishyaniagro.com</a>
            </p>
            <p className="mt-2">
              {translations[language].phone}: <a href="tel:+123456789" className="hover:underline">9359213421</a>
            </p>
            <p className="mt-2">
              {translations[language].address}:Floor No.: Third Floor , SAI SANSKRUTI BAIF,Pune Nagar Road Wagheshwar Mandir
             Wagholi
            Pune
            pincode 412207
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white-700 pt-4">
          <p className="text-center text-sm" dangerouslySetInnerHTML={{ __html: translations[language].copyright }}></p>
        </div>
      </div>
    </footer>
  );
}
