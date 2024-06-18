"use client"
import React, { useState } from "react";
import { useLanguage } from '@/app/languagecontext';

export default function ContactUs() {
  const { language } = useLanguage();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }

    console.log(fullname, email, subject, message);
  };
  const translations = {
    en: {
      contact: {
        sendMessage: "Send a message",
        fullname: "Full name",
        email: "E-mail",
        subject: "Subject",
        message: "Message",
        send: "Send"
      }
    },
    mr: {
      contact: {
        sendMessage: "संदेश पाठवा",
        fullname: "पूर्ण नाव",
        email: "ई-मेल",
        subject: "विषय",
        message: "संदेश",
        send: "पाठवा"
      }
    },
    hi: {
      contact: {
        sendMessage: "संदेश भेजें",
        fullname: "पूरा नाम",
        email: "ई-मेल",
        subject: "विषय",
        message: "संदेश",
        send: "भेजें"
      }
    }
  };
  

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-1/2 max-w-sm hidden md:block">
        <img
          src="/images/home/hero2.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>
      <form className="flex flex-col px-8 py-3 bg-white dark:bg-blue-500 max-w-md w-full">
        <h1 className="text-2xl font-bold dark:text-gray-50 text-center">
          {translations[language].contact.sendMessage}
        </h1>

        <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">
          {translations[language].contact.fullname}<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
          {translations[language].contact.email}<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">
          {translations[language].contact.subject}<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">
          {translations[language].contact.message}<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        ></textarea>

        <div className="flex flex-row items-center justify-end">
          <button
            onClick={handleSubmit}
            className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
          >
            {translations[language].contact.send}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </main>
  );
}
