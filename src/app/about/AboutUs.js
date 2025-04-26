

'use client';
import { useLanguage } from '@/app/languagecontext';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.scss';
import icon1 from '/public/images/a013a23637a7c9187727c70ddf6f3bd4-removebg-preview.png';
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const { language } = useLanguage();
  const router = useRouter();

  // const translations = {
  //   en: {
  //     title: 'About',
  //     companyName: 'Krishyani Agro',
  //     companyOverviewPoints: [
  //       {
  //         icon: icon1.src,
  //         text: "<strong>Wide Range of Products –</strong> We offer a comprehensive selection of fertilizers, soil enhancers, and crop protection solutions tailored to different soil types and climatic conditions."
  //       },
  //       {
  //         icon: icon1.src,
  //         text: "<strong>Innovative Solutions –</strong> Our research-driven approach integrates the latest advancements in agricultural science and technology to provide farmers with cutting-edge solutions for improved crop yields."
  //       },
  //       {
  //         icon: icon1.src,
  //         text: "<strong>Customized Farming Guidance –</strong> Our team of agronomists and experts provide personalized recommendations based on soil health analysis and crop requirements, ensuring farmers get the best results."
  //       },
  //       {
  //         icon: icon1.src,
  //         text: "<strong>Cost-Effective & Efficient –</strong> Our high-quality fertilizers and crop enhancement products are designed to maximize yield while minimizing input costs, helping farmers achieve better profitability."
  //       },
  //       {
  //         icon: icon1.src,
  //         text: "<strong>Farmer-Centric Approach –</strong> We work closely with farmers, understanding their challenges and providing hands-on training, workshops, and expert consultation to empower them with modern farming techniques."
  //       },
  //       {
  //         icon: icon1.src,
  //         text: "<strong>Quality Assurance –</strong> Our products undergo rigorous quality testing and adhere to the highest industry standards, ensuring safety and effectiveness for both farmers and the environment."
  //       }
  //     ],
  //     visionStatement:
  //       "Our vision is to build a future where agriculture is productive, sustainable, and in harmony with nature. We strive to be a leader in eco-friendly farming by developing innovative solutions, educating farmers, and promoting responsible agricultural practices. Krushi Services envisions a world where every farmer, regardless of their farm size, has access to the best tools, knowledge, and techniques to grow healthier crops while preserving natural resources. By driving innovation and sustainability, we aim to strengthen global food security, improve rural livelihoods, and create a greener planet for future generations.",
  //     missionStatement:
  //       "At Krishyani Agro, our mission is to support farmers by providing high-quality, eco-friendly fertilizers and innovative agricultural solutions. We aim to improve crop yield, soil health, and farm efficiency while reducing the environmental impact of farming. Through advanced technology, expert guidance, and sustainable practices, we help farmers overcome challenges such as soil depletion, climate changes, and resource management. Our goal is to make modern farming easier, more productive, and environmentally responsible, ensuring long-term success for farmers and a secure food supply for future generations.",
  //     contactUs: 'Contact Us',
  //     address: '123 Main Street, Cityville, Country',
  //     email: 'contact@example.com',
  //     phone: '+1234567890',
  //     visitUs: 'Visit Us',
  //   },
  // };
  const translations = {
  en: {
    title: 'About',
    companyName: 'Krishyani Agro',
    companyOverviewPoints: [
      {
        icon: icon1.src,
        text: "<strong>Wide Range of Products –</strong> We offer a comprehensive selection of fertilizers, soil enhancers, and crop protection solutions tailored to different soil types and climatic conditions."
      },
      {
        icon: icon1.src,
        text: "<strong>Innovative Solutions –</strong> Our research-driven approach integrates the latest advancements in agricultural science and technology to provide farmers with cutting-edge solutions for improved crop yields."
      },
      {
        icon: icon1.src,
        text: "<strong>Customized Farming Guidance –</strong> Our team of agronomists and experts provide personalized recommendations based on soil health analysis and crop requirements, ensuring farmers get the best results."
      },
      {
        icon: icon1.src,
        text: "<strong>Cost-Effective & Efficient –</strong> Our high-quality fertilizers and crop enhancement products are designed to maximize yield while minimizing input costs, helping farmers achieve better profitability."
      },
      {
        icon: icon1.src,
        text: "<strong>Farmer-Centric Approach –</strong> We work closely with farmers, understanding their challenges and providing hands-on training, workshops, and expert consultation to empower them with modern farming techniques."
      },
      {
        icon: icon1.src,
        text: "<strong>Quality Assurance –</strong> Our products undergo rigorous quality testing and adhere to the highest industry standards, ensuring safety and effectiveness for both farmers and the environment."
      }
    ],
    visionStatement:
      "Our vision is to build a future where agriculture is productive, sustainable, and in harmony with nature. We strive to be a leader in eco-friendly farming by developing innovative solutions, educating farmers, and promoting responsible agricultural practices. Krushi Services envisions a world where every farmer, regardless of their farm size, has access to the best tools, knowledge, and techniques to grow healthier crops while preserving natural resources. By driving innovation and sustainability, we aim to strengthen global food security, improve rural livelihoods, and create a greener planet for future generations.",
    missionStatement:
      "At Krishyani Agro, our mission is to support farmers by providing high-quality, eco-friendly fertilizers and innovative agricultural solutions. We aim to improve crop yield, soil health, and farm efficiency while reducing the environmental impact of farming. Through advanced technology, expert guidance, and sustainable practices, we help farmers overcome challenges such as soil depletion, climate changes, and resource management. Our goal is to make modern farming easier, more productive, and environmentally responsible, ensuring long-term success for farmers and a secure food supply for future generations.",
    contactUs: 'Contact Us',
    address: '123 Main Street, Cityville, Country',
    email: 'contact@example.com',
    phone: '+1234567890',
    visitUs: 'Visit Us',
  },
  hi: {
    title: 'के बारे में',
    companyName: 'कृष्यानी एग्रो',
    companyOverviewPoints: [
      {
        icon: icon1.src,
        text: "<strong>उत्पादों की विस्तृत श्रृंखला –</strong> हम विभिन्न मृदा प्रकारों और जलवायु स्थितियों के अनुसार उर्वरकों, मृदा संवर्धकों और फसल सुरक्षा समाधानों की व्यापक श्रृंखला प्रदान करते हैं।"
      },
      {
        icon: icon1.src,
        text: "<strong>नवीन समाधान –</strong> हमारा अनुसंधान-आधारित दृष्टिकोण कृषि विज्ञान और प्रौद्योगिकी में नवीनतम प्रगति को अपनाकर किसानों को बेहतर उपज के लिए अत्याधुनिक समाधान प्रदान करता है।"
      },
      {
        icon: icon1.src,
        text: "<strong>अनुकूलित कृषि मार्गदर्शन –</strong> हमारे एग्रोनोमिस्ट्स और विशेषज्ञों की टीम मृदा स्वास्थ्य विश्लेषण और फसल आवश्यकताओं के आधार पर व्यक्तिगत सिफारिशें प्रदान करती है, जिससे किसानों को सर्वोत्तम परिणाम मिलते हैं।"
      },
      {
        icon: icon1.src,
        text: "<strong>लागत प्रभावी और कुशल –</strong> हमारे उच्च गुणवत्ता वाले उर्वरक और फसल संवर्धन उत्पाद उपज को अधिकतम करने और लागत को न्यूनतम करने के लिए डिज़ाइन किए गए हैं, जिससे किसानों को बेहतर लाभ मिलता है।"
      },
      {
        icon: icon1.src,
        text: "<strong>किसान-केंद्रित दृष्टिकोण –</strong> हम किसानों के साथ मिलकर काम करते हैं, उनकी चुनौतियों को समझते हैं और उन्हें आधुनिक कृषि तकनीकों से सशक्त बनाने के लिए प्रशिक्षण, कार्यशालाएं और विशेषज्ञ परामर्श प्रदान करते हैं।"
      },
      {
        icon: icon1.src,
        text: "<strong>गुणवत्ता आश्वासन –</strong> हमारे उत्पाद कठोर गुणवत्ता परीक्षण से गुजरते हैं और उच्चतम उद्योग मानकों का पालन करते हैं, जिससे किसानों और पर्यावरण दोनों के लिए सुरक्षा और प्रभावशीलता सुनिश्चित होती है।"
      }
    ],
    visionStatement:
      "हमारा विजन एक ऐसा भविष्य बनाना है जहाँ कृषि उत्पादक, टिकाऊ और प्रकृति के साथ संतुलन में हो। हम पर्यावरण अनुकूल खेती में अग्रणी बनने का प्रयास करते हैं, नवाचार, किसान शिक्षा और जिम्मेदार कृषि प्रथाओं के माध्यम से। कृष्य सेवा एक ऐसी दुनिया की कल्पना करती है जहाँ हर किसान को, चाहे उसकी ज़मीन का आकार कुछ भी हो, सर्वोत्तम उपकरण, ज्ञान और तकनीक तक पहुँच प्राप्त हो। नवाचार और स्थिरता को बढ़ावा देकर, हम वैश्विक खाद्य सुरक्षा को मजबूत करने, ग्रामीण जीवन स्तर सुधारने और भविष्य की पीढ़ियों के लिए एक हरित ग्रह बनाने का लक्ष्य रखते हैं।",
    missionStatement:
      "कृष्यानी एग्रो में हमारा मिशन किसानों को उच्च गुणवत्ता वाले, पर्यावरण-अनुकूल उर्वरकों और नवीन कृषि समाधानों के माध्यम से समर्थन देना है। हमारा उद्देश्य फसल की उपज, मृदा स्वास्थ्य और खेत की दक्षता को बेहतर बनाना है, जबकि खेती के पर्यावरणीय प्रभाव को कम करना है। उन्नत तकनीक, विशेषज्ञ मार्गदर्शन और टिकाऊ प्रथाओं के माध्यम से, हम किसानों को मृदा क्षरण, जलवायु परिवर्तन और संसाधन प्रबंधन जैसी चुनौतियों का समाधान करने में सहायता करते हैं। हमारा लक्ष्य आधुनिक खेती को आसान, अधिक उत्पादक और पर्यावरणीय रूप से जिम्मेदार बनाना है।",
    contactUs: 'संपर्क करें',
    address: '123 मेन स्ट्रीट, सिटीविले, देश',
    email: 'contact@example.com',
    phone: '+1234567890',
    visitUs: 'हमसे मिलें',
  },
  mr: {
    title: 'आमच्याबद्दल',
    companyName: 'कृष्यानी अ‍ॅग्रो',
    companyOverviewPoints: [
      {
        icon: icon1.src,
        text: "<strong>उत्पादनांची विस्तृत श्रेणी –</strong> आम्ही विविध माती प्रकार व हवामान परिस्थितींसाठी योग्य अशी खते, माती सुधारक व पीक संरक्षण उपायांची सुसंगत श्रेणी पुरवतो।"
      },
      {
        icon: icon1.src,
        text: "<strong>नवीन उपाय –</strong> आमचा संशोधन आधारित दृष्टिकोन कृषी विज्ञान व तंत्रज्ञानातील ताज्या प्रगतीचा समावेश करून शेतकऱ्यांना अधिक उत्पादनासाठी आधुनिक उपाय पुरवतो।"
      },
      {
        icon: icon1.src,
        text: "<strong>सानुकूलित शेती मार्गदर्शन –</strong> आमचे कृषितज्ज्ञ आणि विशेषज्ञ मातीच्या आरोग्य विश्लेषणावर आधारित वैयक्तिक शिफारसी देतात, ज्यामुळे शेतकऱ्यांना सर्वोत्तम निकाल मिळतो।"
      },
      {
        icon: icon1.src,
        text: "<strong>किफायतशीर आणि कार्यक्षम –</strong> आमची उच्च दर्जाची खते आणि पीक संवर्धन उत्पादने उत्पादन वाढवण्यासाठी आणि खर्च कमी करण्यासाठी डिझाइन केलेली आहेत, ज्यामुळे शेतकऱ्यांना अधिक नफा मिळतो।"
      },
      {
        icon: icon1.src,
        text: "<strong>शेतकरी-केंद्रित दृष्टिकोन –</strong> आम्ही शेतकऱ्यांच्या समस्या समजून घेत त्यांच्यासोबत काम करतो आणि त्यांना आधुनिक शेती तंत्रज्ञान शिकवण्यासाठी प्रशिक्षण, कार्यशाळा आणि तज्ज्ञ सल्ला देतो।"
      },
      {
        icon: icon1.src,
        text: "<strong>गुणवत्तेची खात्री –</strong> आमची उत्पादने काटेकोर गुणवत्ता चाचणीतून जातात आणि सर्वोच्च उद्योग मानकांचे पालन करतात, त्यामुळे ती शेतकरी आणि पर्यावरण दोघांसाठीही सुरक्षित आणि प्रभावी असतात।"
      }
    ],
    visionStatement:
      "आमचे स्वप्न म्हणजे असे भविष्य घडवणे जेथे शेती उत्पादनक्षम, टिकाऊ आणि निसर्गाशी सुसंगत असेल। आम्ही पर्यावरणपूरक शेतीचे नेतृत्व घेण्यासाठी नाविन्यपूर्ण उपाय, शेतकऱ्यांचे शिक्षण आणि जबाबदार शेती पद्धतींचा प्रसार करण्याचा प्रयत्न करतो। कृषी सेवा अशा जगाची कल्पना करते जिथे प्रत्येक शेतकऱ्याला, त्यांच्या शेताच्या आकाराची पर्वा न करता, सर्वोत्तम साधने, ज्ञान व तंत्र मिळावे। नाविन्यपूर्णता आणि शाश्वततेद्वारे आम्ही जागतिक अन्न सुरक्षा बळकट करणे, ग्रामीण जीवनमान सुधारणे आणि पुढील पिढ्यांसाठी हिरवे ग्रह निर्माण करणे हे उद्दिष्ट ठेवतो।",
    missionStatement:
      "कृष्यानी अ‍ॅग्रोचे मिशन म्हणजे शेतकऱ्यांना उच्च दर्जाची, पर्यावरणपूरक खते व नाविन्यपूर्ण शेती उपाय प्रदान करून त्यांना पाठिंबा देणे। आमचा हेतू म्हणजे पीक उत्पादन, मातीचे आरोग्य व शेत कार्यक्षमतेत वाढ करणे आणि शेतीचा पर्यावरणावर होणारा परिणाम कमी करणे। आधुनिक तंत्रज्ञान, तज्ज्ञ मार्गदर्शन व शाश्वत पद्धतींनी आम्ही शेतकऱ्यांना मातीचा ऱ्हास, हवामान बदल व संसाधन व्यवस्थापन यांसारख्या अडचणींवर मात करण्यास मदत करतो। आमचे ध्येय म्हणजे आधुनिक शेती सोपी, अधिक उत्पादक व पर्यावरणपूरक करणे।",
    contactUs: 'संपर्क करा',
    address: '123 मेन स्ट्रीट, सिटीविले, देश',
    email: 'contact@example.com',
    phone: '+1234567890',
    visitUs: 'भेट द्या',
  },
};


  return (
    <main className="w-full max-w-7xl mx-auto px-6 pb-16 pt-[200px] lg:pt-[140px]">
      {/* Company Overview */}
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#304330] text-center mb-3"
        >
          Why Choose Krishyani Agro?
        </motion.h1>
        <div className="w-16 h-1 bg-[#304330] mx-auto mb-10 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {translations[language].companyOverviewPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-4 flex gap-4"
            >
              <img src={point.icon} alt={`Icon ${index + 1}`} className="w-10 h-10 object-contain mt-1" />
              <p className="text-gray-700 text-[16px]" dangerouslySetInnerHTML={{ __html: point.text }} />
            </motion.div>
          ))}
        </div>
      </section>~

      {/* Mission & Vision Section */}
      <section className="bg-[#F7FAF6] p-10 rounded-2xl flex flex-col lg:flex-row gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-semibold text-[#304330] mb-3 text-center lg:text-left">Mission</h2>
          <div className="w-12 h-[3px] bg-[#304330] mb-4 lg:mx-0 mx-auto rounded"></div>
          <p className="text-lg text-gray-700 text-justify">{translations[language].missionStatement}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-semibold text-[#304330] mb-3 text-center lg:text-left">Vision</h2>
          <div className="w-12 h-[3px] bg-[#304330] mb-4 lg:mx-0 mx-auto rounded"></div>
          <p className="text-lg text-gray-700 text-justify">{translations[language].visionStatement}</p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-[#304330] mb-2">
          Interested in Partnering With Us?
        </h3>
        <p className="text-gray-600 mb-4">
          Let’s grow sustainable agriculture together.
        </p>
        <button onClick={() => router.push("/pages/contact")} className="bg-[#304330] text-white py-2 px-6 rounded-xl hover:bg-[#3e5a45] transition">
          {translations[language].contactUs}
        </button>
      </motion.section>
    </main>
  );
};

export default AboutUs;
