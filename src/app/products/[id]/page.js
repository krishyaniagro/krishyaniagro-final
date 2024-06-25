"use client"
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/languagecontext';
import Cookies from 'js-cookie';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: { en: 'Real Power', mr: 'रियल पावर खत', hi: 'रियल पावर उर्वरक' },
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
        👑 𝐇𝐈𝐆𝐇-𝐐𝐔𝐀𝐋𝐈𝐓𝐘 <br /> Real Power Fertilizer   Enhances the overall growth of plants by providing essential nutrients. Stimulates the growth of roots, stems, and leaves, leading to healthier and more robust plants.
      `,
      mr: `
        👑 𝐇𝐈𝐆𝐇-𝐐𝐔𝐀𝐋𝐈𝐓𝐘  <br /> उच्च गुणवत्ताचे असलेले रिअल पॉव्हर खत. आवश्यक खनिज प्रदान करून झाडांच्या समग्र वाढीला सुधारते. मूलवाहने, डोके आणि पानांची वाढी संवाद सुरू करते, अशी त्वरित वाढी करते, निरोगी आणि जोरदार झाडे होय.
      `,
      hi: `
        👑 𝐇𝐈𝐆𝐇-𝐐𝐔𝐀𝐋𝐈𝐓𝐘 <br /> उच्च गुणवत्ता वाले रियल पावर उर्वरक। आवश्यक पोषक तत्व प्रदान करके पौधों की समग्र वृद्धि को बढ़ावा देता है। जड़ों, डंठली और पत्तों की वृद्धि को उत्तेजित करता है, जिससे पौधे स्वस्थ और मजबूत होते हैं।
      `
    },
    ratings: {
      average: '★ ★ ★ ★ ☆',
      count: '(1,995 ratings)'
    }
  },
  {
    id: 2,
    name: { en: 'Sticky', mr: 'स्टिकी खत', hi: 'चिपचिपा उर्वरक' },
    usage: {
      en: 'Adhesive fertilizer that improves nutrient absorption.',
      mr: 'संपीटनक खत ज्यामध्ये पोषण सोडविण्यासाठी सुधारले जाते.',
      hi: 'पोषक अवशोषण में सुधार करने वाला चिपचिपा उर्वरक।'
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
        स्टिकी खत रोगांची नियंत्रण करणारी, तज्ज्ञ संसाधनांच्या संग्रहाचे वापर करते.</br>
        स्टिकी खत म्हणजे पोषण सोडविण्यासाठी अत्यंत उच्च-गुणवत्तेचे संपीटनक खत आहे. हे महत्वाचे पोषक तत्त्वे वनस्पतींच्या मुळांपर्यंत प्रभावीपणे पोहोचवते, ज्यामुळे आरोग्यदायी आणि अधिक मजबूत वाढ होण्यास मदत होते.
      `,
      hi: `
        चिपचिपा उर्वरक पौधों में पोषक अवशोषण में सुधार करता है, जिससे उनकी स्वस्थ वृद्धि होती है।</br>
        चिपचिपा उर्वरक एक उच्च गुणवत्ता वाला चिपकने वाला उर्वरक है, जिसे पौधों में पोषक तत्वों के अवशोषण को काफी हद तक सुधारने के लिए डिजाइन किया गया है। यह सुनिश्चित करता है कि आवश्यक पोषक तत्व प्रभावी ढंग से पौधों की जड़ों तक पहुंचें, जिससे स्वस्थ और अधिक मजबूत वृद्धि को बढ़ावा मिलता है।
      `
    },
    ratings: {
      average: '★ ★ ★ ★ ☆',
      count: '(1,700 ratings)'
    }
  },
  {
    id: 3,
    name: { en: 'kelper', mr: 'केपलर खत', hi: 'केपलर उर्वरक' },
    usage: {
      en: 'Revolutionary fertilizer with advanced growth formulas.',
      mr: 'प्रगत विकास सूत्रांसह क्रांतिकारी खत.',
      hi: 'उन्नत विकास सूत्रों वाला क्रांतिकारी उर्वरक।'
    },
    Quantity: '1000 ML',
    price: '₹ 1355',
    MRP: '₹ 1100',
    image: '/images/krushi_f3.jpg',
    about: {
      en: `
        kelper Fertilizer boosts plant growth significantly with its innovative formula.
      `,
      mr: `
        केपलर खत त्याच्या आविष्कारी सूत्राच्या सहकार्याने रोगांची वृद्धी वाढविते.
      `,
      hi: `
        केपलर उर्वरक अपने नवाचारी सूत्र से पौधों की वृद्धि में वृद्धि करता है।
      `
    },
    ratings: {
      average: '★ ★ ★ ★ ★',
      count: '(2,500 ratings)'
    }
  },
  {
    id: 4,
    name: { en: 'Quality Change ', mr: 'क्वालिटी चेंज खत', hi: 'क्वालिटी बदलें उर्वरक' },
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
        Transformative fertilizer for improved soil health. Quality Change Fertilizer enhances the nutrient content of the soil, ensuring healthier growth of plants.
      `,
      mr: `
        माटीच्या आरोग्यासाठी सुधारित करण्यासाठी परिवर्तक खत. क्वालिटी बदलें उर्वरक माटीच्या पोषण सामग्रीचे सुधारणा करते, पौधोंच्या आरोग्याचे विकास सुनिश्चित करते.
      `,
      hi: `
        बेहतर मृदा स्वास्थ्य के लिए बदलावपूर्ण उर्वरक। क्वालिटी बदलें उर्वरक मृदा के पोषक सामग्री को बढ़ावा देता है, जिससे पौधों की स्वस्थ वृद्धि होती है।
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

  const { name, price, image, usage, about ,MRP ,ratings,Quantity} = product;

  const handleBuyNow = () => {
    const phoneNumber = '+919359213421';
    const productName = name[language];
    const productDescription = about[language];

    const userPhoneNumber = Cookies.get('user_phone_number');

    if (userPhoneNumber) {
      const msg=`My name is ${userPhoneNumber}. I want to buy${productName} ( ${price}). Please confirm my order`
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
            <p className="text-gray-700 text-xl mb-4">
              {usage[language]}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">{ratings.average}</span>
              <span className="text-gray-600">{ratings.count}</span>
            </div>
            <div className="text-xl font-bold text-green-500 mb-2">{Quantity}</div>
            <div className="text-xl font-bold text-green-500 mb-2">Price : {price}</div>
            <div className="text-sm text-gray-600 mb-4 line-through">M.R.P : {MRP}</div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-4">Features :</h2>
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
