// "use client"
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/header";
// import { LanguageProvider } from "./languagecontext";
// import Footer from "@/components/footer";
// import { GlobalStateProvider } from "@/components/GlobalState";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

// const inter = Inter({ subsets: ["latin"] });

// <Head>
//   <meta
//     name="google-site-verification"
//     content="google7bf86f0be96d396a"
//   />
// </Head>
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <GlobalStateProvider>
//           <LanguageProvider>
//             <Header />
//             <main>
//               {children}
//             </main>
//             <Footer />
//             <FloatingWhatsApp chatboxHeight="450px" phoneNumber="+91 9359213421" accountName="Krishyani Agro" avatar="/images/website_logobg.png" statusMessage="Active" placeholder="Message" chatMessage="नमस्कार सर कृष्याणी ॲग्रो मध्ये आपले स्वागत आहे 🙏🌱.
// कृष्याणी ॲग्रो च्या वेबसाईट ला भेट दिल्याबद्दल धन्यवाद! लवकरच आमचे कृषी डॉक्टर आपल्याशी संपर्क साधतील.
// शेतीविषयक नवनवीन माहिती व अपडेट मिळवण्यासाठी 9359213421 या नंबर वरती संपर्क साधा !!!
// "/>
//           </LanguageProvider>
//         </GlobalStateProvider>
//       </body>
//     </html>
//   );
// }

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { LanguageProvider } from "./languagecontext";
import Footer from "@/components/footer";
import { GlobalStateProvider } from "@/components/GlobalState";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Head from "next/head"; // Import Head from next/head

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="google7bf86f0be96d396a"
        />
      </Head>
      <body className={inter.className}>
        <GlobalStateProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingWhatsApp
              chatboxHeight="450px"
              phoneNumber="+91 9359213421"
              accountName="Krishyani Agro"
              avatar="/images/website_logobg.png"
              statusMessage="Active"
              placeholder="Message"
              chatMessage="नमस्कार सर कृष्याणी ॲग्रो मध्ये आपले स्वागत आहे 🙏🌱. कृष्याणी ॲग्रो च्या वेबसाईट ला भेट दिल्याबद्दल धन्यवाद! लवकरच आमचे कृषी डॉक्टर आपल्याशी संपर्क साधतील. शेतीविषयक नवनवीन माहिती व अपडेट मिळवण्यासाठी 9359213421 या नंबर वरती संपर्क साधा !!!"
            />
          </LanguageProvider>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
