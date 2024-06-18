// Example translations for FAQ in different languages
"use client"
import { useLanguage } from "@/app/languagecontext";
import { useState } from "react";
const faqTranslations = {
    en: [
        {
            question: 'Do you offer eco-friendly fertilizers?',
            answer: 'Yes, we have a range of eco-friendly fertilizers that are sustainable and environmentally friendly.',
        },
        {
            question: 'What are the benefits of using organic fertilizers?',
            answer: 'Organic fertilizers improve soil fertility, promote healthier plants, and reduce environmental impact.',
        },
        {
            question: 'How often should I fertilize my plants?',
            answer: 'Fertilizing frequency depends on factors like plant type, growth stage, and soil conditions. Generally, once every few weeks during growing seasons is recommended.',
        },
        {
            question: 'Can fertilizers harm my plants?',
            answer: 'Using fertilizers in proper amounts and following recommended guidelines usually benefits plants. However, over-application or improper use can harm them.',
        }
        
    ],
    mr: [
        {
            question: 'तुम्हाला पर्यावरणातील अपशिष्टांचा वापर कसा करावा लागेल?',
            answer: 'आम्ही संवेदनशील आणि पर्यावरणसौंदर्यात नुकसान न करणारे कार्यकर्त्यांसोबत पर्यावरणातील अपशिष्ट वापरतो.',
        },
        {
            question: 'जैविक खतांचा वापर करण्याचे काय फायदे आहेत?',
            answer: 'जैविक खते मातीची प्रौढता वाढवतात, आरोग्यकर पाऊस वाढवतात आणि पर्यावरणीय परिणाम कमी करतात.',
        },
        {
            question: 'माझ्या दवळांसाठी खत कसं वापरावं?',
            answer: 'खत वापरण्याच्या अंदाजांसाठी पादप प्रकार, वृद्धी टप्प्याची स्थिती आणि मातीच्या अवस्थेवर निर्भरतो. सामान्यतः, वाढत्या कालावधीत किमान एकदा सप्ताहात एकदा वापरणे सिफारसले जाते.',
        },
        {
            question: 'खतांचा वापर करणे माझ्या दवळांना अवस्थित करू शकतात का?',
            answer: 'सुसंगत मात्रेत खतांचा वापर करणे आमच्या दवळांवर अवधारणा आणि सिफारसलेल्या मार्गानुसार सुधारण्यांचा फायदा देते. परंतु, अधिक वापर व कमीचा वापर वापरल्याने त्यांना हानि होऊ शकते.',
        }
        
    ],
    hi: [
        {
            question: 'क्या आप पर्यावरण संबंधी खाद्य पदार्थ प्रदान करते हैं?',
            answer: 'हां, हमारे पास सतत और पर्यावरण में अनुकूल खाद्य पदार्थ हैं जो पर्यावरण के संरक्षण के लिए उपयुक्त हैं।',
        },
        {
            question: 'जैविक खाद्य पदार्थों का उपयोग करने के फायदे क्या हैं?',
            answer: 'जैविक खाद्य पदार्थ माटी की उर्वरता में सुधार करते हैं, स्वस्थ पौधे प्रोत्साहित करते हैं, और पर्यावरणीय प्रभाव को कम करते हैं।',
        },
        {
            question: 'मेरे पौधों के लिए सही खाद्य पदार्थ कैसे चुनें?',
            answer: 'सही खाद्य पदार्थ चुनने में पौधे के प्रकार, मृदा की स्थिति, और वृद्धि स्थिति जैसे कारकों पर निर्भर करता है। हमारे विशेषज्ञ आपको सबसे अच्छा विकल्प चुनने में मदद कर सकते हैं।',
        },
        {
            question: 'मेरे पौधों को कितनी बार खाद्य पदार्थ देना चाहिए?',
            answer: 'खाद्य पदार्थ देने की आवश्यकता पौधे के प्रकार, वृद्धि स्थिति, और मृदा की स्थिति जैसे कारकों पर निर्भर करती है। सामान्यत: वृद्धि के मौसम में हर कुछ हफ्ते में एक बार देना सिफारिश किया जाता है।',
        }
        
    ],
};
// components/FAQSection.

const FAQSection = () => {
  const { language } = useLanguage(); // Access the current language from context
  const faqs = faqTranslations[language]; // Fetch FAQs based on selected language

  const [openIndex, setOpenIndex] = useState(null);
  

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqTitle = {
    en: "Frequently Asked Questions",
    mr: "सामान्य प्रश्न",
    hi: "अक्सर पूछे जाने वाले प्रश्न",
  }[language];

  return (
    <section className="p-2 lg:p-16">
      <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">{faqTitle}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between w-full pb-2 pt-2 text-left text-lg font-medium text-gray-700 hover:text-gray-900"
            >
              <span>{faq.question}</span>
              <span className="lg:pr-3">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 pl-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FAQSection;
