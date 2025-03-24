
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/app/languagecontext';
// Mock data
const blogPosts = [
    {
        id: '1',
       title: {
      en: 'Modern Agricultural Technologies: A Path to Higher Productivity and Profitability',
      hi: 'आधुनिक कृषि तकनीक: उच्च उत्पादकता और लाभप्रदता का मार्ग',
      mr: 'आधुनिक शेती तंत्रज्ञान: अधिक उत्पादकता आणि नफ्याचा मार्ग'
    },
        author: 'John Doe',
        authorImg: '/author1.jpg',
        image: '/blog1.jpg',
        date: '2024-02-10',
        description: {en:`<p>In today's era of increasing population and the need for maximum profitability, the adoption of modern agricultural technologies can significantly enhance farm productivity and income. These technologies not only improve crop yields but also reduce labor dependency, enhance soil health, and make farming more sustainable and efficient.</p>
            <br/><p>1. Use of Hybrid and Improved Seeds
Farmers can significantly increase their yield by using high-quality hybrid and improved seeds that are more resistant to pests and weather variations.
<br/><br/>
2. Balanced and Specialized Fertilizers
The use of balanced and crop-specific fertilizers helps in maintaining soil health and enhancing crop growth, leading to better productivity.
<br/><br/>
3. Automation and Robotics
Robotics in agriculture helps in reducing the dependency on manual labor. Tasks such as sowing, harvesting, and monitoring can be done more efficiently using automated machinery.
<br/><br/>
4. Drone Technology
Drones enable farmers to spray over large areas efficiently, including places that are difficult to reach manually. Drones also help in crop monitoring and disease detection through aerial imaging.
<br/><br/>
5. Data Analytics, IoT & Artificial Intelligence (AI)
Modern farming is increasingly driven by data and technology. Real-time data from IoT sensors and AI-based analytics help farmers make better decisions about irrigation, fertilization, pest control, and crop health monitoring.
<br/><br/>
6. Use of Organic Fertilizers and Pest Control
The use of organic fertilizers and biological pest control reduces the dependence on harmful chemicals and promotes eco-friendly farming practices.
<br/><br/>
7. Drip Irrigation Systems
Drip irrigation ensures water is delivered directly to the plant roots, saving water and improving crop efficiency.
<br/><br/>
8. Farm Mechanization
The use of advanced machinery like combine harvesters, rice transplanters, and weeders helps in saving time and labor while increasing overall productivity.
<br/><br/>
9. Big Data & Cloud Computing
With big data and cloud computing, farmers can analyze large volumes of data to make accurate predictions about weather patterns, crop performance, and market trends.

</p><br/><br/>
<strong>Conclusion</strong>
<p>
Modern agricultural technologies are revolutionizing the farming sector by improving productivity, reducing costs, and enhancing farmers’ 
livelihoods. Adoption of these innovations can ensure sustainable, profitable, and future-ready agriculture.</p>`,
hi:`<p>आज के समय में बढ़ती जनसंख्या और अधिक लाभ कमाने की दृष्टि से आधुनिक कृषि तकनीकों का उपयोग अत्यंत आवश्यक हो गया है। इन तकनीकों की मदद से किसान उत्पादन बढ़ा सकते हैं, श्रम पर निर्भरता कम कर सकते हैं और फसलों की गुणवत्ता बढ़ा सकते हैं।</p>
<br/><p>1. संकरित और उन्नत बीजों का उपयोग
बेहतर गुणवत्ता के संकरित व उन्नत बीजों के उपयोग से किसान उपज में काफी वृद्धि कर सकते हैं।
<br/><br/>
2. संतुलित और विशेष उर्वरकों का उपयोग
संतुलित और फसल-विशेष उर्वरकों का उपयोग मिट्टी की गुणवत्ता बनाए रखने और फसल की बेहतर वृद्धि में मदद करता है।
<br/><br/>
3. यंत्रीकरण और रोबोटिक्स
स्वचालित कृषि यंत्रों की मदद से समय और श्रम की बचत होती है। रोबोटिक्स से खेती की प्रक्रियाएं तेज और प्रभावी बनती हैं।
<br/><br/>
4. ड्रोन तकनीक
ड्रोन के माध्यम से छिड़काव और फसल की निगरानी करना संभव होता है, जो कठिन क्षेत्रों में भी प्रभावी है।
<br/><br/>
5. डेटा एनालिटिक्स, IoT और AI
IoT सेंसर और AI आधारित विश्लेषण से सिंचाई, उर्वरक, कीट नियंत्रण और फसल निगरानी को बेहतर बनाया जा सकता है।
<br/><br/>
6. जैविक उर्वरक और कीट नियंत्रण
जैविक उर्वरकों और जैविक कीटनाशकों के उपयोग से रासायनिक उर्वरकों की आवश्यकता कम हो जाती है और पर्यावरण भी सुरक्षित रहता है।
<br/><br/>
7. ड्रिप सिंचाई प्रणाली
ड्रिप सिंचाई से पानी की बचत होती है और फसलों को आवश्यकतानुसार पानी मिलता है जिससे उत्पादन में वृद्धि होती है।
<br/><br/>
8. आधुनिक कृषि यंत्र
कंबाइन हार्वेस्टर, ट्रांसप्लांटर, वीडर जैसे यंत्र खेती को सरल और प्रभावी बनाते हैं।
<br/><br/>
9. बिग डेटा और क्लाउड कंप्यूटिंग
बाजार, मौसम और फसलों की जानकारी का विश्लेषण करके बेहतर निर्णय लिए जा सकते हैं।

</p><br/><br/>
<strong>निष्कर्ष</strong>
<p>आधुनिक कृषि तकनीक के उपयोग से खेती क्षेत्र में क्रांतिकारी परिवर्तन संभव हैं। इससे किसान की आमदनी बढ़ेगी और खेती अधिक लाभकारी बन सकेगी।`,
mr:`<p>आजच्या लोकसंख्या वाढीच्या युगात आणि अधिकाधिक नफा मिळवण्याच्या दृष्टीने आधुनिक कृषी तंत्रज्ञानाचा वापर अत्यावश्यक झाला आहे. या तंत्रज्ञानाच्या साहाय्याने शेतकरी उत्पादन वाढवू शकतात, श्रमाचा वापर कमी करू शकतात आणि मातीची गुणवत्ता व पिकांचे आरोग्य सुधारू शकतात.</p>
<br/><p>1. संकरित आणि सुधारित बियाण्यांचा वापर
शेतकरी चांगल्या दर्जाचे संकरित व सुधारित बियाणे वापरून उत्पादनात लक्षणीय वाढ करू शकतात.
<br/><br/>
2. संतुलित आणि विशेष खतांचा वापर
मातीची गुणवत्ता टिकवण्यासाठी संतुलित आणि पीकविशेष खतांचा वापर महत्त्वाचा आहे.
<br/><br/>
3. यांत्रिकीकरण व रोबोटिक्स
शेतीतील स्वयंचलित यंत्रांचा वापर करून श्रम व वेळ वाचतो. रोबोटिक्सच्या सहाय्याने अनेक प्रक्रिया जलद व कार्यक्षम होतात.
<br/><br/>
4. ड्रोन तंत्रज्ञान
ड्रोनच्या मदतीने फवारणी आणि हवाई निरीक्षण शक्य होते, जे माणसाला शक्य नाही अशा भागातही फायदेशीर ठरते.
<br/><br/>
5. डेटा अ‍ॅनालिटिक्स, IoT आणि AI
IoT सेन्सर व AI आधारित विश्लेषणामुळे पाणी, खत, कीड नियंत्रण आणि पीक निरीक्षण सोपे होते.
<br/><br/>
6. सेंद्रिय खत व जैविक कीड नियंत्रण
जैविक खत व जैविक कीटकनाशकांचा वापर रासायनिक घटकांवरील अवलंबित्व कमी करतो आणि पर्यावरणाचे रक्षण करतो.
<br/><br/>
7. ठिबक सिंचन पद्धत
ठिबक सिंचन प्रणालीने पाण्याचा कार्यक्षम वापर करता येतो, ज्यामुळे पाणी वाचते व उत्पादन वाढते.
<br/><br/>
8. आधुनिक कृषी यंत्रसामग्री
कंबाईन हार्वेस्टर, ट्रान्सप्लांटर, तण काढणी यंत्र वापरून उत्पादनप्रक्रिया सुलभ व कार्यक्षम होते.
<br/><br/>
9. बिग डेटा आणि क्लाऊड कम्प्युटिंग
बाजारभाव, हवामान व पीक आरोग्यावर आधारित अचूक अंदाज लावण्यासाठी मोठ्या डेटाचा उपयोग करता येतो.

</p><br/><br/>
<strong>निष्कर्ष</strong><p>आधुनिक कृषी तंत्रज्ञानामुळे शेतीत क्रांतिकारी बदल घडून आले आहेत. उत्पादन वाढ, खर्च नियंत्रण व शेतकऱ्यांचे जीवनमान उंचावणे ही यशस्वी शेतीची गुरुकिल्ली ठरू शकते.

</p>`},
        bgImage: "/blogs/blog1.jpg"
    },
    {
        id: '2',
        title: 'Second Blog Post',
        author: 'Jane Smith',
        authorImg: '/author2.jpg',
        image: '/blog2.jpg',
        date: '2024-02-15', // Added date field
        description: `<p>This is the second blog post content.</p>`,
        bgImage: "/images/services/agri_hero.jpg"
    },
    {
        id: '3',
        title: 'Third Blog Post',
        author: 'Jane Smith',
        authorImg: '/author2.jpg',
        image: '/blog2.jpg',
        date: '2024-02-20', // Added date field
        description: `<p>This is the third blog post content.</p>`,
        bgImage: "/images/services/agri_hero.jpg"
    }
];

const Page = () => {
    const params = useParams();
    const [data, setData] = useState(null);
  const { language } = useLanguage();
    useEffect(() => {
        if (params?.id) {
            // Find blog post based on ID
            const foundPost = blogPosts.find(post => post.id === params.id);
            setData(foundPost || null);
        }
    }, [params.id]);

    if (!data) return <div className='mt-50'>Blog post not found</div>;

    return (
        <>
            <div className='relative top-12 lg:p-[4rem]'>

                {/* Breadcrumb */}
             

                <div className='text-center my-24 relative flex flex-col items-center justify-center' 
                     style={{
        position: 'relative', // Needed for absolute positioning
        padding: '100px 20px',
        borderRadius: '10px',
        overflow: 'hidden'
    }}>
    
    {/* Background Image with Opacity */}
    {/* <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${data.bgImage})`,
            opacity: 0.5, // Adjust opacity as needed
            zIndex: -1 // Ensures it's behind the text
        }}
    ></div> */}
    <div>
    <div><img src={data.bgImage}></img></div>
                    {/* <h1 className='text-2xl sm:text-5xl font-semibold '>
                        {data.title?.[language]}
                    </h1> */}
                </div>
            </div>
            <div className='mx-5 md:mx-auto mt-[-100px] mb-10 lg:px-[4rem]'>
                   <div className="text-sm text-gray-600 mb-4">
                    <span className="cursor-pointer hover:underline">Blog</span> &gt; {new Date(data.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
                {/* <h2>{data.title?.[language]}</h2> */}
                <div
                    className='blog-content'
                    dangerouslySetInnerHTML={{ __html: data.description[language] }}
                ></div>
            </div>
            </div>
        </>
    );
};

export default Page;
