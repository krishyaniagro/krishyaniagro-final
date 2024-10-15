
import ContactPage from "@/components/HomeComponents/ContactPage";
export async function generateMetadata() {
    let fetchedMetadata;
  
    try {
      const page = 'contact';
      const res = await fetch(`https://www.krishyaniagro.com/api/metadata/${page}`);
  
      if (!res.ok) {
        throw new Error("Failed to fetch metadata");
      }
      fetchedMetadata = await res.json();
    } catch (error) {
      console.error("Error fetching metadata:", error);
  
      fetchedMetadata = {
        title: "Fallback Title",
        description: "Fallback description",
        keywords: "fallback, keywords",
      };
    }
  
    return {
      title: fetchedMetadata.title,
      description: fetchedMetadata.description,
      keywords: fetchedMetadata.keywords,
    };
  }
const ContactUs = () => {
    return (
        <div className="mt-[30vh] md:mt-[20vh] lg:mt-[10vh] ">
            <ContactPage />
        </div>

    );
};

export default ContactUs;
