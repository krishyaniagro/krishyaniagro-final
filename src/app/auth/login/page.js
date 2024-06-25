// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import PhoneEmailSignInButton from "@/components/PhoneEmailSignInButton";
// import { useGlobalState } from '@/components/GlobalState';
// import { useLanguage } from '@/app/languagecontext';
// import Cookies from 'js-cookie';

// const Login = () => {
//   const { isLoggedIn } = useGlobalState();
//   const { language } = useLanguage();
//   const router = useRouter();
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [isButtonEnabled, setIsButtonEnabled] = useState(false);

//   useEffect(() => {
//     if (isLoggedIn) {
//       router.push('/');
//     }
//   }, [isLoggedIn, router, language]);

//   useEffect(() => {
//     if (name && address) {
//       setIsButtonEnabled(true);
//     } else {
//       setIsButtonEnabled(false);
//     }
//   }, [name, address]);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     console.log("name for saving ==>",name)

//     Cookies.set('name', name, { expires: 7 });
//     Cookies.set('address', address, { expires: 7 });
//     setName('');
//     setAddress('');
//     router.push('/');
//   };

//   const translations = {
//     en: {
//       loginTitle: "Log In",
//       nameLabel: "Name",
//       addressLabel: "Address",
//       signInButton: "Sign In with Phone",
//       alreadyLoggedIn: "You are already logged in!",
//     },
//     mr: {
//       loginTitle: "लॉग इन",
//       nameLabel: "नाव",
//       addressLabel: "पत्ता",
//       signInButton: "फोनसह साइन इन करा",
//       alreadyLoggedIn: "आपण आधीच लॉग इन केले आहे!",
//     },
//     hi: {
//       loginTitle: "लॉग इन करें",
//       nameLabel: "नाम",
//       addressLabel: "पता",
//       signInButton: "फोन के साथ साइन इन करें",
//       alreadyLoggedIn: "आप पहले से ही लॉग इन हैं!",
//     },
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">{translations[language].loginTitle}</h2>
//         <form onSubmit={handleFormSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">{translations[language].nameLabel}</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">{translations[language].addressLabel}</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             {isButtonEnabled ? (
//               <PhoneEmailSignInButton name={name} address={address}/>
//             ) : (
//               <button
//                 type="button"
//                 className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-md cursor-not-allowed"
//                 disabled
//               >
//                 {translations[language].signInButton}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PhoneEmailSignInButton from "@/components/PhoneEmailSignInButton";
import { useGlobalState } from '@/components/GlobalState';
import { useLanguage } from '@/app/languagecontext';

const Login = () => {
  const { isLoggedIn } = useGlobalState();
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router, language]);

  const translations = {
    en: {
      loginTitle: "Log In",
      signInButton: "Sign In with Phone",
      alreadyLoggedIn: "You are already logged in!",
    },
    mr: {
      loginTitle: "लॉग इन",
      signInButton: "फोनसह साइन इन करा",
      alreadyLoggedIn: "आपण आधीच लॉग इन केले आहे!",
    },
    hi: {
      loginTitle: "लॉग इन करें",
      signInButton: "फोन के साथ साइन इन करें",
      alreadyLoggedIn: "आप पहले से ही लॉग इन हैं!",
    },
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">{translations[language].loginTitle}</h2>
        <div className="flex items-center justify-center">
          <PhoneEmailSignInButton />
        </div>
      </div>
    </div>
  );
};

export default Login;

