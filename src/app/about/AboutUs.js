
// // "use client";
// // import { useLanguage } from '@/app/languagecontext';
// // import styles from './AboutUs.module.scss';
// // import icon1 from '/public/images/a013a23637a7c9187727c70ddf6f3bd4-removebg-preview.png';

// // const AboutUs = () => {
// //     const { language } = useLanguage();

// //     const translations = {
// //         en: {
// //             title: 'About',
// //             companyName: 'Krishyani Agro',
// //          companyOverview: `<strong>Why Choose Krushi Services?</strong>

// // <img src="${icon1.src}" alt="Icon 1" width="24" height="24" style="vertical-align: middle; margin-right: 8px; display:inline-flex"><strong>Wide Range of Products –</strong> We offer a comprehensive selection of fertilizers, soil enhancers, and crop protection solutions tailored to different soil types and climatic conditions.  

// // <img src="${icon1.src}" alt="Icon 2" width="24" height="24" style="vertical-align: middle; margin-right: 8px; display:inline-flex""><strong>Innovative Solutions –</strong> Our research-driven approach integrates the latest advancements in agricultural science and technology to provide farmers with cutting-edge solutions for improved crop yields.  

// // <img src="${icon1.src}" alt="Icon 3" width="24" height="24" style="vertical-align: middle; margin-right: 8px; display:inline-flex""><strong>Customized Farming Guidance –</strong> Our team of agronomists and experts provide personalized recommendations based on soil health analysis and crop requirements, ensuring farmers get the best results.  

// // <img src="${icon1.src}" alt="Icon 4" width="24" height="24" style="vertical-align: middle; margin-right: 8px; display:inline-flex""><strong>Cost-Effective & Efficient –</strong> Our high-quality fertilizers and crop enhancement products are designed to maximize yield while minimizing input costs, helping farmers achieve better profitability.  

// // <img src="${icon1.src}" alt="Icon 5" width="24" height="24" style="vertical-align: middle; margin-right: 8px; display:inline-flex""><strong>Farmer-Centric Approach –</strong> We work closely with farmers, understanding their challenges and providing hands-on training, workshops, and expert consultation to empower them with modern farming techniques.  

// // <img src="${icon1.src}" alt="Icon 6" width="24" height="24" style="vertical-align: middle; margin-right: 8px; display:inline-flex""><strong>Quality Assurance –</strong> Our products undergo rigorous quality testing and adhere to the highest industry standards, ensuring safety and effectiveness for both farmers and the environment.`  ,


// //             visionStatement: "Our vision is to build a future where agriculture is productive, sustainable, and in harmony with nature. We strive to be a leader in eco-friendly farming by developing innovative solutions, educating farmers, and promoting responsible agricultural practices. Krushi Services envisions a world where every farmer, regardless of their farm size, has access to the best tools, knowledge, and techniques to grow healthier crops while preserving natural resources. By driving innovation and sustainability, we aim to strengthen global food security, improve rural livelihoods, and create a greener planet for future generations.",

// //             missionStatement: "At Krushi Services, our mission is to support farmers by providing high-quality, eco-friendly fertilizers and innovative agricultural solutions. We aim to improve crop yield, soil health, and farm efficiency while reducing the environmental impact of farming. Through advanced technology, expert guidance, and sustainable practices, we help farmers overcome challenges such as soil depletion, climate changes, and resource management. Our goal is to make modern farming easier, more productive, and environmentally responsible, ensuring long-term success for farmers and a secure food supply for future generations.",
// //             contactUs: 'Contact Us',
// //             address: '123 Main Street, Cityville, Country',
// //             email: 'contact@example.com',
// //             phone: '+1234567890',
// //             visitUs: 'Visit Us',
// //         },
// //     };

// //     return (
// //         <main className="container mx-auto p-20 pb-10 pt-[250px] lg:pt-[160px]">
// //             <section className={`${styles.main_container}flex items-center text-center`}>
// //                 <div className={styles.about_container}>
// //                     <p className={`${styles.companyOverview} text-lg text-gray-700 whitespace-pre-line`} 
// //                         dangerouslySetInnerHTML={{ __html: translations[language].companyOverview }} 
// //                     />
// //                 </div>
// //                 <div className='flex flex-col gap-4 mt-8' style={{ width: "50%" }}>
// //                     <div className={styles.mission_vision}>
// //                         <h2 className="text-3xl font-semibold mb-4 text-[#304330] text-center">Mission</h2>
// //                         <p className="text-lg text-gray-700 text-left">{translations[language].missionStatement}</p>
// //                     </div>
// //                     <div className={styles.mission_vision}>
// //                         <h2 className="text-3xl font-semibold mb-4 text-[#304330] text-center">Vision</h2>
// //                         <p className="text-lg text-gray-700 text-left">{translations[language].visionStatement}</p>
// //                     </div>
// //                     {/* <img src='/images/website_logobg.png' style={{width:"40%"}}></img> */}
// //                 </div>
// //             </section>
// //         </main>
// //     );
// // };

// // export default AboutUs;

// "use client";
// import { useLanguage } from '@/app/languagecontext';
// import styles from './AboutUs.module.scss';
// import icon1 from '/public/images/a013a23637a7c9187727c70ddf6f3bd4-removebg-preview.png';

// const AboutUs = () => {
//     const { language } = useLanguage();

//     const translations = {
//         en: {
//             title: 'About',
//             companyName: 'Krishyani Agro',
//             companyOverviewPoints: [
//                 {
//                     icon: icon1.src,
//                     text: "<strong>Wide Range of Products –</strong> We offer a comprehensive selection of fertilizers, soil enhancers, and crop protection solutions tailored to different soil types and climatic conditions."
//                 },
//                 {
//                     icon: icon1.src,
//                     text: "<strong>Innovative Solutions –</strong> Our research-driven approach integrates the latest advancements in agricultural science and technology to provide farmers with cutting-edge solutions for improved crop yields."
//                 },
//                 {
//                     icon: icon1.src,
//                     text: "<strong>Customized Farming Guidance –</strong> Our team of agronomists and experts provide personalized recommendations based on soil health analysis and crop requirements, ensuring farmers get the best results."
//                 },
//                 {
//                     icon: icon1.src,
//                     text: "<strong>Cost-Effective & Efficient –</strong> Our high-quality fertilizers and crop enhancement products are designed to maximize yield while minimizing input costs, helping farmers achieve better profitability."
//                 },
//                 {
//                     icon: icon1.src,
//                     text: "<strong>Farmer-Centric Approach –</strong> We work closely with farmers, understanding their challenges and providing hands-on training, workshops, and expert consultation to empower them with modern farming techniques."
//                 },
//                 {
//                     icon: icon1.src,
//                     text: "<strong>Quality Assurance –</strong> Our products undergo rigorous quality testing and adhere to the highest industry standards, ensuring safety and effectiveness for both farmers and the environment."
//                 }
//             ],
//             visionStatement:
//                 "Our vision is to build a future where agriculture is productive, sustainable, and in harmony with nature. We strive to be a leader in eco-friendly farming by developing innovative solutions, educating farmers, and promoting responsible agricultural practices. Krushi Services envisions a world where every farmer, regardless of their farm size, has access to the best tools, knowledge, and techniques to grow healthier crops while preserving natural resources. By driving innovation and sustainability, we aim to strengthen global food security, improve rural livelihoods, and create a greener planet for future generations.",
//             missionStatement:
//                 "At Krushi Services, our mission is to support farmers by providing high-quality, eco-friendly fertilizers and innovative agricultural solutions. We aim to improve crop yield, soil health, and farm efficiency while reducing the environmental impact of farming. Through advanced technology, expert guidance, and sustainable practices, we help farmers overcome challenges such as soil depletion, climate changes, and resource management. Our goal is to make modern farming easier, more productive, and environmentally responsible, ensuring long-term success for farmers and a secure food supply for future generations.",
//             contactUs: 'Contact Us',
//             address: '123 Main Street, Cityville, Country',
//             email: 'contact@example.com',
//             phone: '+1234567890',
//             visitUs: 'Visit Us',
//         },
//     };

//     return (
//         <main className="w-full px-8 pb-10 pt-[250px] lg:pt-[160px]">
//             <section className={`${styles.main_container} flex flex-col gap-10`}>
//                 {/* Left Section: Company Overview */}
//                 <div className={styles.about_container}>
//                     <h2 className="text-3xl font-semibold mb-6 text-[#304330] text-center">
//                         Why Choose Krushi Services?
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left mb-10">
//                         {translations[language].companyOverviewPoints.map((point, index) => (
//                             <div key={index} className="flex items-start gap-3">
//                                 <img
//                                     src={point.icon}
//                                     alt={`Icon ${index + 1}`}
//                                     width="24"
//                                     height="24"
//                                     className="mt-1"
//                                 />
//                                 <p
//                                     className="text-gray-700 text-[16px]"
//                                     dangerouslySetInnerHTML={{ __html: point.text }}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Section: Mission & Vision */}
//                 <div className="flex flex-row gap-8">
//                     <div className={styles.mission_vision}>
//                         <h2 className="text-3xl font-semibold mb-4 text-[#304330] text-center">Mission</h2>
//                         <p className="text-lg text-gray-700 text-left">
//                             {translations[language].missionStatement}
//                         </p>
//                     </div>
//                     <div className={styles.mission_vision}>
//                         <h2 className="text-3xl font-semibold mb-4 text-[#304330] text-center">Vision</h2>
//                         <p className="text-lg text-gray-700 text-left">
//                             {translations[language].visionStatement}
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default AboutUs;

'use client';
import { useLanguage } from '@/app/languagecontext';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.scss';
import icon1 from '/public/images/a013a23637a7c9187727c70ddf6f3bd4-removebg-preview.png';
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const { language } = useLanguage();
  const router = useRouter();

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
