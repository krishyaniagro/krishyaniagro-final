

"use client";

import Link from "next/link";
import { useLanguage } from "@/app/languagecontext";
import styles from "./footer.module.scss";
import { products } from "@/app/productjson.js/product";

export default function Footer() {
  const { language } = useLanguage();

    const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      careers: "Careers",
      products:"Products",
      followUs: "Follow Us",
      contactUs: "Contact Us",
      blogs:"Blogs",
      email: "Email",
      phone: "Phone",
      address: "Address:",
      add:"Office No 308, Sai Sanskruti Comercial Complex, Baif Rd, near Parvatibai Genba Moze College Of Engineering, Wagholi, Pune, Maharashtra 412207",
      companyInfo: "Empowering farmers with technology and providing fresh produce to everyone.",
      pages: "Pages",
      copyright: "&copy; 2025 Krishyaniagro. All rights reserved.",
      service1:"Agricultural consultation",
      service2:"Organic & chemical fertilizers",
      service3:"Soil testing & analysis",
      serivce4:"Sustainable farming practices",

    },
    mr: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      services: "सेवा",
      contact: "संपर्क",
      careers: "करिअर",
      products:"उत्पादने",
      blogs:"ब्लॉग",
      careers:"करिअर",
      followUs: "आमचं अनुसरण करा",
      contactUs: "आमच्याशी संपर्क साधा",
      email: "ईमेल",
      phone: "फोन",
      address: "पत्ता: ",
      add:"ऑफिस क्रमांक ३०८, साई संस्कृती कमर्शियल कॉम्प्लेक्स, बाफ रोड, परवतीबाई जेंबा मोझे कॉलेज ऑफ इंजिनिअरिंगजवळ, वाघोली, पुणे, महाराष्ट्र 412207",
      companyInfo: "तंत्रज्ञानासह शेतकऱ्यांना सक्षम बनवणे आणि सर्वांना ताजे उत्पादन प्रदान करणे.",
      pages: "पृष्ठे",
      copyright: "&copy; 2025 Krishyaniagro. सर्व हक्क राखीव आहेत.",
      service1:"कृषी सल्ला",
      service2:"सेंद्रिय आणि रासायनिक खत",
      serivce3:"माती चाचणी आणि विश्लेषण",
      service4:"शाश्वत शेती पद्धती",
    },
    hi: {
      home: "मुखपृष्ठ",
      about: "हमारे बारे में",
      services: "सेवाएं",
      contact: "संपर्क करें",
      products:"उत्पाद",
      careers :"करियर",
      blogs:"ब्लॉग",
      followUs: "हमें फॉलो करें",
      contactUs: "संपर्क करें",
      email: "ईमेल",
      phone: "फ़ोन",
      address: "पता: ",
      add:"ऑफिस नंबर 308, साई संस्कृती कमर्शियल कॉम्प्लेक्स, बाफ रोड, परवतीबाई जेनबा मोझे कॉलेज ऑफ इंजीनियरिंग के पास, वाघोली, पुणे, महाराष्ट्र 412207",
      companyInfo: "किसानों को प्रौद्योगिकी के साथ सशक्त बनाना और सभी को ताजा उत्पाद प्रदान करना।",
      pages: "पृष्ठ",
      copyright: "&copy; 2025 Krishyaniagro. सर्वाधिकार सुरक्षित।",
      service1:"कृषि परामर्श",
      service2:"जैविक और रासायनिक उर्वरक",
      service3:"मिट्टी परीक्षण और विश्लेषण",
      service4:"शाश्वत कृषि पद्धतियाँ",
    }
  };

  return (
    <footer className="bg-[#e9f2e9] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid layout with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-xl font-bold text-[#304330]
            ">Krishyaniagro</h2>
            <p className="mt-2 text-[#304330]">{translations[language].companyInfo}</p>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-lg font-semibold text-[#304330]">{translations[language].pages}</h3>
            <ul className="mt-2 space-y-2 text-[#304330]">
              <li>
                <Link href="/">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].home}</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].about}</p>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].products}</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].services}</p>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].blogs}</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/contact">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].contact}</p>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].careers}</p>
                </Link>
              </li>
            </ul>
          </div>

        
<div>
            <h3 className="text-lg font-semibold text-[#304330]">{translations[language].services}</h3>
            <ul className="mt-2 space-y-2 text-[#304330]">
              <li>
                <Link href="/services">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].service1}</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].service2}</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].service3}</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="hover:underline underline underline-offset-5 text-[#304330]">{translations[language].serivce4}</p>
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#304330]">{translations[language].contactUs}</h3>
            <p className="mt-2 font-bold text-[#304330]">
              {translations[language].email}:{" "}<br></br>
              <a href="mailto:info@Krishyaniagro.com" className="hover:underline font-normal text-sm text-[#304330]">
                krishyaniagro24@gmail.com
              </a>
            </p>
            <p className="mt-2 font-bold text-[#304330]">
              {translations[language].phone}:{" "}<br></br>
              <a href="tel:+123456789" className="hover:underline font-normal text-sm text-[#304330]">
                9359213421
              </a>
            </p>
            <p className="mt-2 font-bold text-[#304330]">
              {translations[language].address}{" "}
              <br></br>
             <span className="font-normal text-sm text-[#304330]">{translations[language].add}</span>
            </p>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white-700 pt-4 text-center text-sm text-[#304330]">
          <p dangerouslySetInnerHTML={{ __html: translations[language].copyright }}></p>
        </div>
      </div>
    </footer>
  );
}
