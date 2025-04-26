
"use client";
import { useLanguage } from "@/app/languagecontext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqTranslations = {
  en: [
    {
      question: "Do you offer eco-friendly fertilizers?",
      answer:
        "Yes, we have a range of eco-friendly fertilizers that are sustainable and environmentally friendly.",
    },
    {
      question: "What are the benefits of using organic fertilizers?",
      answer:
        "Organic fertilizers improve soil fertility, promote healthier plants, and reduce environmental impact.",
    },
    {
      question: "How often should I fertilize my plants?",
      answer:
        "Fertilizing frequency depends on factors like plant type, growth stage, and soil conditions. Generally, once every few weeks during growing seasons is recommended.",
    },
    {
      question: "Can fertilizers harm my plants?",
      answer:
        "Using fertilizers in proper amounts and following recommended guidelines usually benefits plants. However, over-application or improper use can harm them.",
    },
  ],
  mr: [
    {
      question: "तुम्हाला पर्यावरणातील अपशिष्टांचा वापर कसा करावा लागेल?",
      answer:
        "आम्ही संवेदनशील आणि पर्यावरणसौंदर्यात नुकसान न करणारे कार्यकर्त्यांसोबत पर्यावरणातील अपशिष्ट वापरतो.",
    },
    {
      question: "जैविक खतांचा वापर करण्याचे काय फायदे आहेत?",
      answer:
        "जैविक खते मातीची प्रौढता वाढवतात, आरोग्यकर पाऊस वाढवतात आणि पर्यावरणीय परिणाम कमी करतात.",
    },
    {
      question: "माझ्या दवळांसाठी खत कसं वापरावं?",
      answer:
        "खत वापरण्याच्या अंदाजांसाठी पादप प्रकार, वृद्धी टप्प्याची स्थिती आणि मातीच्या अवस्थेवर निर्भरतो. सामान्यतः, वाढत्या कालावधीत किमान एकदा सप्ताहात एकदा वापरणे सिफारसले जाते.",
    },
    {
      question: "खतांचा वापर करणे माझ्या दवळांना अवस्थित करू शकतात का?",
      answer:
        "सुसंगत मात्रेत खतांचा वापर करणे आमच्या दवळांवर अवधारणा आणि सिफारसलेल्या मार्गानुसार सुधारण्यांचा फायदा देते. परंतु, अधिक वापर व कमीचा वापर वापरल्याने त्यांना हानि होऊ शकते.",
    },
  ],
  hi: [
    {
      question: "क्या आप पर्यावरण संबंधी खाद्य पदार्थ प्रदान करते हैं?",
      answer:
        "हां, हमारे पास सतत और पर्यावरण में अनुकूल खाद्य पदार्थ हैं जो पर्यावरण के संरक्षण के लिए उपयुक्त हैं।",
    },
    {
      question: "जैविक खाद्य पदार्थों का उपयोग करने के फायदे क्या हैं?",
      answer:
        "जैविक खाद्य पदार्थ माटी की उर्वरता में सुधार करते हैं, स्वस्थ पौधे प्रोत्साहित करते हैं, और पर्यावरणीय प्रभाव को कम करते हैं।",
    },
    {
      question: "मेरे पौधों के लिए सही खाद्य पदार्थ कैसे चुनें?",
      answer:
        "सही खाद्य पदार्थ चुनने में पौधे के प्रकार, मृदा की स्थिति, और वृद्धि स्थिति जैसे कारकों पर निर्भर करता है। हमारे विशेषज्ञ आपको सबसे अच्छा विकल्प चुनने में मदद कर सकते हैं।",
    },
    {
      question: "मेरे पौधों को कितनी बार खाद्य पदार्थ देना चाहिए?",
      answer:
        "खाद्य पदार्थ देने की आवश्यकता पौधे के प्रकार, वृद्धि स्थिति, और मृदा की स्थिति जैसे कारकों पर निर्भर करती है। सामान्यत: वृद्धि के मौसम में हर कुछ हफ्ते में एक बार देना सिफारिश किया जाता है।",
    },
  ],
};

const FAQSection = () => {
  const { language } = useLanguage();
  const faqs = faqTranslations[language];
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
    <section className="p-4 lg:p-16 bg-gray-50">
      <div className=" mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
          {faqTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#e9f2e9] shadow-md rounded-2xl transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left p-5 text-gray-800 font-medium hover:text-black focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
