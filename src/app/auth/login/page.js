

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

