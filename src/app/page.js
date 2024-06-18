import Hero from "@/components/HomeComponents/hero";
import Products from "./products/page";
import BrandProducts from "./brands/page";
import FAQSection from "@/components/HomeComponents/FAQ";
import ContactPage from "@/components/HomeComponents/ContactPage";


export default function Home() {
  return (
   <>
   <Hero />
   <Products />
   <BrandProducts />
   <FAQSection />
   <ContactPage />
   </>
  );
}
