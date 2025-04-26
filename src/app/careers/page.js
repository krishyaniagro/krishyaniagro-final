


export async function generateMetadata() {
    let fetchedMetadata;
  
    try {
      const page = 'about';
      const res = await fetch(`https://www.krishyaniagro.com/api/metadata/${page}`);
  
      if (!res.ok) {
        throw new Error("Failed to fetch metadata");
      }
      fetchedMetadata = await res.json();
    } catch (error) {
      console.error("Error fetching metadata:", error);
  
      fetchedMetadata = {
        title: "Krishyani agro/Careers",
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
  

import Careers from "./Careers";

export default function Careerpage() {
    return <Careers/>;
}
