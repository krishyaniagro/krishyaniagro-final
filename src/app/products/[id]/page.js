"use client"
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/languagecontext';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { products } from '@/app/productjson.js/product';
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
      const msg = `My name is ${userPhoneNumber}. I want to buy ${productName} (${price}). Please confirm my order`
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
