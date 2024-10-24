// import Hero from "@/components/HomeComponents/hero";
// import Products from "./products/page";
// import BrandProducts from "./brands/page";
// import FAQSection from "@/components/HomeComponents/FAQ";
// import ContactPage from "@/components/HomeComponents/ContactPage";

// export const metadata = {
//   page: "home",
//   title: "Krishyani Agro - Home",
//   description: "Welcome to Krishyani Agro, the leading agricultural solutions provider.",
//   keywords: "agriculture, farming, solutions"
// };
// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Products />
//       <FAQSection />
//       <ContactPage />
//     </>
//   );
// }


import Hero from "@/components/HomeComponents/hero";
import Products from "./products/page";
import FAQSection from "@/components/HomeComponents/FAQ";
import ContactPage from "@/components/HomeComponents/ContactPage";
import Head from "next/head";

// export async function generateMetadata() {
//   let fetchedMetadata;

//   try {
//     const page = 'home';
//     const res = await fetch(`https://www.krishyaniagro.com/api/metadata/${page}`);
//     const res2 = await fetch(`https://www.krishyaniagro.in/api/metadata/${page}`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch metadata");
//     }
//     fetchedMetadata = await res.json();
//     fetchedMetadata = await res2.json();

//   } catch (error) {
//     console.error("Error fetching metadata:", error);

//     fetchedMetadata = {
//       title: "Fallback Title",
//       description: "Fallback description",
//       keywords: "fallback, keywords",
//     };
//   }

//   return {
//     title: fetchedMetadata.title,
//     description: fetchedMetadata.description,
//     keywords: fetchedMetadata.keywords,
//   };
// }
export const metadata = {
  title: "Krishyani Agro - Home",
  description: "Welcome to Krishyani Agro, the leading agricultural solutions provider.",
  keywords:"griculture, farming, solutions",
  verification: {
    google: "vvzb4VDojObD5cBKZ56tz36Cu0B7dIDVblkfv2S6COg",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <FAQSection />
      <ContactPage />
    </>
  );
}
