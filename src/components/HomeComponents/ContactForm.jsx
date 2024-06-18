// components/ContactForm.js
import React from "react";
// import { useLanguage } from "@/app/languagecontext";
// import contactTranslations from "@/translations/contact";
import { useLanguage } from "@/app/languagecontext";
import contactTranslations from "./translations";

const ContactForm = () => {
  const { language } = useLanguage();
  const translations = contactTranslations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="flex justify-center">
      <form className="max-w-md w-full space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            {translations.nameLabel}
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            {translations.emailLabel}
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            {translations.messageLabel}
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {translations.submitButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
