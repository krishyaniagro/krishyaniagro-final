"use client"
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/languagecontext';
import Cookies from 'js-cookie';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: { en: 'Real Power', mr: 'रियल पावर ', hi: 'रियल पावर ' },
    usage: {
      en: 'Ideal for all types of plants, including flowers, vegetables, fruits, and herbs.',
      mr: 'फुले, भाज्या, फळे आणि ऑषधी च्या सर्व प्रकारांसाठी उपयुक्त आहे.',
      hi: 'फूल, सब्जियां, फल और जड़ी-बूटियों सहित सभी प्रकार के पौधों के लिए आदर्श है।'
    },
    Quantity: '1000 ML',
    price: '₹ 650',
    MRP: '₹ 998',
    image: '/images/krushi_f1.jpg',
    about: {
      en: `
       Ingredients:<br />
            Seaweed extract, Fulvic acid, Folic acid, Amino acid, Vitamin 'C', Soluble components <br />
            Features:<br />
            1) Increases the number of white roots.<br />
            2) Helps in growth, branching, and darkening.<br />
            3) Enhances disease resistance.<br />
            4) Aids in increased flowering.<br />
            5) Real Power helps in increasing the size and weight of flowers, fruits, and pods.<br />
            Dosage:<br />
            Spraying: 2 ml per liter <br />
            Through drip: 2 liters per acre <br />
      `,
      mr: `
       घटक - <br />
          सीव्हीड अर्क, फुलविक ऍसिड फॉलिक ऍसिड, अमीनो ऍसिड व्हिटॅमिन 'सी', विरघळणारे घटक <br />
          वैशिष्ट्य <br />
          1) पांढऱ्या मुळींची संख्या वाढवते. <br />
          २) वाढ, फुटवा आणि काळोखी करायला मदत करते  <br />
          3) रोग प्रतिकार क्षमता वाढवते  <br />
          4) फुलधारणा जास्त करायला मदत करते  <br />
          5) रियल पावर हे फुले, फळे,शेंगांचा आकार व वजन वाढवायला मदत करते. <br />
          प्रमाण  <br />
          फवारणी 2 मिली प्रति लिटर  <br />
          ड्रिपद्वारे 2 लिटर प्रति एक
      `,
      hi: `
        सामग्री:<br />
            सीवीड अर्क, फुलविक एसिड, फॉलिक एसिड, अमीनो एसिड, विटामिन 'सी', घुलनशील घटक<br />
            विशेषताएं:<br />
          1) सफेद जड़ों की संख्या बढ़ाता है।<br />
          2) वृद्धि, शाखाओं और कालेपन में मदद करता है।<br />
          3) रोग प्रतिरोधक क्षमता बढ़ाता है।<br />
          4) फूलों की संख्या बढ़ाने में मदद करता है।<br />
          5) रियल पावर फूलों, फलों, और फली के आकार और वजन को बढ़ाने में मदद करता है।<br />
            मात्रा:<br />
            स्प्रे करने के लिए: 2 मिली प्रति लीटर<br />
            ड्रिप के माध्यम से: 2 लीटर प्रति एकड़
      `
    },
    ratings: {
      average: '★ ★ ★ ★ ☆',
      count: '(1,995 ratings)'
    }
  },
  {
    id: 2,
    name: { en: 'Sticky', mr: 'स्टिकी ', hi: 'चिपचिपा ' },
    usage: {
      en: 'Adhesive fertilizer that improves nutrient absorption.',
      mr: 'संपीटनक  ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.',
      hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा ।'
    },
    Quantity: '500 ML',
    price: '₹ 230',
    MRP: '₹ 450',
    image: '/images/krushi_f2.jpg',
    about: {
      en: `
        Sticky Fertilizer enhances nutrient absorption in plants, resulting in healthier growth.</br>
        is a high-quality adhesive fertilizer designed to significantly improve nutrient absorption in plants. It ensures that essential nutrients are effectively delivered to the plant roots, promoting healthier and more robust growth.
      `,
      mr: `
        स्टिकी  रोगांची नियंत्रण करणारी, तज्ज्ञ संसाधनांच्या संग्रहाचे वापर करते.</br>
        स्टिकी  म्हणजे पोषण सोडविण्यासाठी अत्यंत उच्च-गुणवत्तेचे संपीटनक  आहे. हे महत्वाचे पोषक तत्त्वे वनस्पतींच्या मुळांपर्यंत प्रभावीपणे पोहोचवते, ज्यामुळे आरोग्यदायी आणि अधिक मजबूत वाढ होण्यास मदत होते.
      `,
      hi: `
        चिपचिपा  पौधों में पोषक अवशोषण में सुधार करता है, जिससे उनकी स्वस्थ वृद्धि होती है।</br>
        चिपचिपा  एक उच्च गुणवत्ता वाला चिपकने वाला  है, जिसे पौधों में पोषक तत्वों के अवशोषण को काफी हद तक सुधारने के लिए डिजाइन किया गया है। यह सुनिश्चित करता है कि आवश्यक पोषक तत्व प्रभावी ढंग से पौधों की जड़ों तक पहुंचें, जिससे स्वस्थ और अधिक मजबूत वृद्धि को बढ़ावा मिलता है।
      `
    },
    ratings: {
      average: '★ ★ ★ ★ ☆',
      count: '(1,700 ratings)'
    }
  },
  {
    id: 3,
    name: { en: 'kelper', mr: 'केपलर ', hi: 'केपलर ' },
    usage: {
      en: 'Revolutionary fertilizer with advanced growth formulas.',
      mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी .',
      hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी ।'
    },
    Quantity: '1000 ML',
    price: '₹ 1355',
    MRP: '₹ 1100',
    image: '/images/krushi_f3.jpg',
    about: {
      en: `
        1) Kelpar is a natural biostimulant. <br />
        2) Kelpar helps in stimulating root growth and promoting full development.<br />
        3) Kelpar aids in overall plant growth and development.<br />
        4) By using Kelpar, plants quickly establish a strong canopy due to the size of the organs.<br />
        5) Improves the color and size of the fruit.<br />
        6) Increases weight and sugar content.
        Dosage:<br />
        Spraying - 1.5 ml per liter<br />
        Drip - 1 liter per acre
      `,
      mr: `
        1) केल्पर है नैसर्गिक बायोस्टिम्युलंट आहे.<br />
        २) केल्पर हे मुळांच्या वाढीस आणि पूर्ण आकारास उत्तेजन देण्यासाठी मदत करते<br />
        3) केल्पर हे फुटवा आणि सर्वांगीण<br />
        विकास करण्यासाठी मदत करते.<br />
        4) केल्पर वापरून, अवयवांच्या आकारामुळे झाडे जलद छत स्थापन करतात.<br />
        5) फळांचा रंग आणि आकार सुधारते.<br />
        6) वजन आणि साखरेचे प्रमाण वाढवते.<br />
        प्रमाण-<br />
        फवारणी-1.5 मिली प्रति लिटर<br />
        ड्रिपद्वारे-1 लिटर प्रति एक
      `,
      hi: `
        1) केल्पर एक प्राकृतिक बायोस्टिम्युलेंट है। <br />
        2) केल्पर मुलायम विकास और पूर्ण विकास को बढ़ावा देने में मदद करता है। <br />
        3) केल्पर पौधे के समग्र विकास में मदद करता है। <br />
        4) केल्पर का उपयोग करके, अंग के आकार के कारण पौधे जल्दी से मजबूत पत्तियों की स्थापना करते हैं। <br />
        5) फलों के रंग और आकार में सुधार करता है। <br />
        6) वजन और शर्करा की मात्रा बढ़ाता है। <br />
        मात्रा: <br />
        फवारणी - 1.5 मिली प्रति लीटर <br />
        ड्रिप - 1 लीटर प्रति एकड़
      `
    },
    ratings: {
      average: '★ ★ ★ ★ ★',
      count: '(2,500 ratings)'
    }
  },
  {
    id: 4,
    name: { en: 'Quality Change ', mr: 'क्वालिटी चेंज ', hi: 'क्वालिटी बदलें ' },
    price: '₹ 1050',
    MRP: '₹ 850',
    image: '/images/krushi_f4.jpg',
    usage: {
      en: 'Ideal for improving soil health and enhancing nutrient absorption.',
      mr: 'माटीचे आरोग्य सुधारण्यासाठी आणि पोषक अवशोषण सुधारण्यासाठी उपयुक्त.',
      hi: 'मृदा स्वास्थ्य में सुधार करने और पोषक अवशोषण को बढ़ाने के लिए आदर्श है।'
    },
    Quantity: '1000 ML',
    about: {
      en: `
          1 ) Quality is a herbal product. <br />
          2 ) When sprayed on plants, it helps in absorbing potassium from the soil.<br />
          3 ) It increases the flexibility and turgidity of the roots.<br />
          4 ) Quality helps in increasing the ion exchange capacity of the roots.<br />
          5 ) Nutrients like K, Mg, Zn, Fe are easily absorbed by the roots.<br />
          6 ) It helps in increasing the color, size, taste, and sugar content of fruits while maintaining their quality.  <br />
          Dosage for spraying - 1.5 to 2 ml per liter <br /> through drip - 1 liter per acre.
      `,
      mr: `
        1 ) क्वालिटी हे हर्बल उत्पादन आहे. <br /> 
        2 ) जेव्हा वनस्पतीवर फवारणी केली जाते तेव्हा जमिनीतून पोटॅशियम चे प्रमाण शोषून घेण्यासाठी मदत करते. </br> 
        3 ) मुळ्यांची लवचिकता आणि टर्जिडिटी वाढवते  <br />
        4 ) गुणवत्तेमुळे मुळ्यांच्या आयन एक्सचेंजा क्षमतेत वाढ करण्यासाठी मदत करते <br /> 
        5 ) K,Mg, Zn, Fe सारखे अन्नद्रव्ये सहजपणे मुळांद्वारे शोषले जातात. <br /> 
        6 ) हे फळांचा दर्जा राखून रंग, आकार, चव, साखर वाढवण्यासाठी मदत करते. <br /> 
        प्रमाण - <br /> फवारणी : 1.5 ते 2 मिली प्रति लिटर <br /> ड्रिपद्वारे : 1 लिटर प्रति एकर'
      `,
      hi: `
      क्वालिटी एक हर्बल उत्पाद है। <br />
      जब इसे पौधों पर छिड़का जाता है, तो यह मिट्टी से पोटेशियम को अवशोषित करने में मदद करता है। <br />
      यह जड़ों की लचीलापन और तर्जता को बढ़ाता है। <br />
      क्वालिटी जड़ों की आयन विनिमय क्षमता को बढ़ाने में मदद करता है। <br />
      के, Mg, Zn, Fe जैसे पोषक तत्व जड़ों द्वारा आसानी से अवशोषित होते हैं। <br />
      यह फलों के रंग, आकार, स्वाद और शर्करा सामग्री को बढ़ाने में मदद करता है जबकि उनकी गुणवत्ता बनाए रा है। <br />
      छिड़काव की खुराक - 1.5 से 2 मिली प्रति लीटर,<br />  ड्रिप के माध्यम से - 1 लीटर प्रति एकड़।
            `
    },
    ratings: {
      average: '★ ★ ★ ★ ☆',
      count: '(1,200 ratings)'
    }
  },
  // {
  //   id: 5,
  //   name: { en: 'Seaweed extract ', mr: 'सिवीड अर्क', hi: 'सिवीड अर्क ' },
  //   price: '₹ 1050',
  //   MRP: '₹ 850',
  //   image: '/images/krushi_f4.jpg',
  //   usage: {
  //     en: 'Ideal for improving soil health and enhancing nutrient absorption.',
  //     mr: 'माटीचे आरोग्य सुधारण्यासाठी आणि पोषक अवशोषण सुधारण्यासाठी उपयुक्त.',
  //     hi: 'मृदा स्वास्थ्य में सुधार करने और पोषक अवशोषण को बढ़ाने के लिए आदर्श है।'
  //   },
  //   Quantity: '1000 ML',
  //   about: {
  //     en: `
  //         Constituents-Amino Acids, Nutrient Carbohydrates <br />
  //       Feature -<br />
  //       1) Helps reduce atmospheric stress and water stress,<br />
  //       2) Increases the number of roots,<br />
  //       3) Helps in blackening and improves the number of flowers and fruit quality.<br />

  //       Proportion-<br />
  //       Spray 2 ml per liter<br />
  //       1 liter per one by drip
  //     `,
  //     mr: `
  //       घटक-अमीनो आम्ल, पोषक तत्वांचे कर्बोदके <br />
  //       वैशिष्ट्य -<br />
  //       1) वातावरणातील ताण व पाण्याचा ताणतणाव कमी करायला मदत करते <br />
  //       २) मुळ्यांची संख्या वाढवते,<br />
  //       3) काळोखीपणा आणण्यास मदत करते आणि फुलांची संख्या आणि फळांची गुणवत्ता सुधरवायला मदत करते.<br />

  //       प्रमाण-<br />
  //       फवारणी 2 मिली प्रति लिटर<br />
  //       ड्रिपद्वारे 1 लिटर प्रति एक
  //     `,
  //     hi: `
  //     घटक-अमीनो एसिड, पोषक तत्व कार्बोहाइड्रेट <br />
  //       फ़ीचर-<br/>
  //       1) वायुमंडलीय तनाव और जल तनाव को कम करने में मदद करता है .<br />
  //       2) जड़ों की संख्या बढ़ जाती है,<br />
  //       3) काला करने में मदद करता है और फूलों की संख्या और फलों की गुणवत्ता में सुधार करता है।<br />

  //       अनुपात-<br />
  //       2 मिलीलीटर प्रति लीटर का छिड़काव करें
  //       1 लीटर प्रति ड्रिप द्वारा
  //           `
  //   },
  //   ratings: {
  //     average: '★ ★ ★ ★ ☆',
  //     count: '(1,200 ratings)'
  //   }
  // },
  {
    id: 5,
    name: { en: 'Humic plus', mr: 'हयुमिक प्लस ', hi: 'हयुमिक प्लस ' },
    price: '₹ 430',
    MRP: '₹ 750',
    image: '/images/humic.jpg',
    usage: {
      en: 'Ideal for improving soil health and enhancing nutrient absorption.',
      mr: 'माटीचे आरोग्य सुधारण्यासाठी आणि पोषक अवशोषण सुधारण्यासाठी उपयुक्त.',
      hi: 'मृदा स्वास्थ्य में सुधार करने और पोषक अवशोषण को बढ़ाने के लिए आदर्श है।'
    },
    Quantity: '1 kg',
    about: {
      en: `
          Composition: <br />
          Humic Acid: 70%
          Fulvic Acid: 5%
          Potassium: 10%
          Features:<br />
          1) Increases the number of white roots.<br />
          2) Enhances the soil's water retention capacity.<br />
          3) Improves soil texture.<br />
          4) Helps maintain soil pH balance.<br />
          5) Improves both the quantity and quality of produce and extends its shelf life.<br />
          Dosage:<br />
          1 kg per acre applied to the soil.
      `,
      mr: `
        घटक-ह्युमिक 70%, फुलविक 5%  पोटॅशियम 10% <br />
        वैशिष्ट्य -<br />
        1) पांढऱ्या मुळींची संख्या वाढवते<br />
        2) जमिनीमध्ये पाणी धरून ठेवण्याची क्षमता वाढवते<br />
        3) जमिनीचा पोत सुधारते.<br />
        4] जमिनीचा सामू समतोल राखण्यासाठी  मदत करते<br />
        5) उत्पाद‌नाचे प्रमाण आणि गुणवत्ता सुधारते आणि उत्पादनाचे शेल्फ लाईफ वाढवते.<br />
        प्रमाण -<br />
        जमिनीतून 1 किलो प्रति एकर

      `,
      hi: `
      घटक:
          ह्युमिक एसिड: 70%
          फुलविक एसिड: 5%
          पोटैशियम: 10%
          वैशिष्ट्य: <br />
          1) सफेद जड़ों की संख्या बढ़ जाती है। <br />
          2) मिट्टी में पानी को रोकने की क्षमता बढ़ाता है। <br />
          3) मिट्टी की बनावट सुधारता है। <br />
          4) मिट्टी के pH संतुलन को बनाए रखने में मदद करता है। <br />
          5) उत्पादन की मात्रा और गुणवत्ता दोनों में सुधार करता है और उत्पादन का शेल्फ लाइफ बढ़ाता है। <br />
          प्रमाण: <br />

          1 एकड़ के लिए मिट्टी में 1 किलोग्राम।
            `
    },
    ratings: {
      average: '★ ★ ★ ★ ☆',
      count: '(1,200 ratings)'
    }
  }
];

const Product = ({ params }) => {
  const { id } = params;
  const { language } = useLanguage();
  const router = useRouter();
  const product = products.find(p => p.id == id);

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        Product not found.
      </div>
    );
  }

  const { name, price, image, usage, about, MRP, ratings, Quantity } = product;

  const handleBuyNow = () => {
    const phoneNumber = '+919359213421';
    const productName = name[language];
    const productDescription = about[language];

    const userPhoneNumber = Cookies.get('user_phone_number');

    if (userPhoneNumber) {
      const msg = `My name is ${userPhoneNumber}. I want to buy${productName} ( ${price}). Please confirm my order`
      // const message = `My name is ${username}. I want to buy ${productName} (${price}). Please confirm my order. Product details: ${productName} - ${productDescription}. My address is ${address}.`;
      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Please provide your  phone number before purchasing.');
      router.push('/auth/login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-[250px] lg:pt-[120px]">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <Image
              src={image}
              alt="Product Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4 ">
            <h2 className="text-2xl font-bold mb-4">🌿 {name[language]} 🌿</h2>
            {/* <p className="text-gray-700 text-xl mb-4">
              {usage[language]}
            </p> */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">{ratings.average}</span>
              <span className="text-gray-600">{ratings.count}</span>
            </div>
            <div className="text-xl font-bold text-green-500 mb-2">Quantity : {Quantity}</div>
            <div className="text-xl font-bold text-green-500 mb-2">Price : {price}</div>
            <div className="text-sm text-gray-600 mb-4 line-through">M.R.P : {MRP}</div>
            <div className="mb-4">
              {/* <h2 className="text-2xl font-bold mb-4">Features :</h2> */}
              <div dangerouslySetInnerHTML={{ __html: about[language] }} />
            </div>
            <div className="text-gray-600 mb-4">
              <p>Fastest delivery</p>
            </div>
            <div className="flex space-x-4">
              <button onClick={handleBuyNow} className="bg-yellow-500 text-white py-2 px-16 rounded hover:bg-yellow-600">Buy Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
