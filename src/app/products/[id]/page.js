// "use client"
// import { useRouter } from 'next/navigation';
// import { useLanguage } from '@/app/languagecontext';
// import Cookies from 'js-cookie';
// import Image from 'next/image';
// import { products } from '@/app/productjson.js/product';
// const Product = ({ params }) => {
//   const { id } = params;
//   const { language } = useLanguage();
//   const router = useRouter();
//   const product = products.find(p => p.id == id);

//   if (!product) {
//     return (
//       <div className="container mx-auto p-4">
//         Product not found.
//       </div>
//     );
//   }

//   const { name, price, image, usage, about, MRP, ratings, Quantity } = product;

//   const handleBuyNow = () => {
//     const phoneNumber = '+919359213421';
//     const productName = name[language];
//     const productDescription = about[language];

//     const userPhoneNumber = Cookies.get('user_phone_number');

//     if (userPhoneNumber) {
//       const msg = `My name is ${userPhoneNumber}. I want to buy ${productName} (${price}). Please confirm my order`
//       // const message = `My name is ${username}. I want to buy ${productName} (${price}). Please confirm my order. Product details: ${productName} - ${productDescription}. My address is ${address}.`;
//       const encodedMessage = encodeURIComponent(msg);
//       const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
//       window.open(whatsappUrl, '_blank');
//     } else {
//       alert('Please provide your  phone number before purchasing.');
//       router.push('/auth/login');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen pt-[250px] lg:pt-[120px]">
//       <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 p-4">
//             <Image
//               src={image}
//               alt="Product Image"
//               width={500}
//               height={500}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="md:w-1/2 p-4 ">
//             <h2 className="text-2xl font-bold mb-4">🌿 {name[language]} 🌿</h2>
//             <div className="flex items-center mb-4">
//               <span className="text-yellow-500 mr-2">{ratings.average}</span>
//               <span className="text-gray-600">{ratings.count}</span>
//             </div>
//             <div className="text-xl font-bold text-green-500 mb-2">Quantity : {Quantity}</div>
//             <div className="text-xl font-bold text-green-500 mb-2">Price : {price}</div>
//             <div className="text-sm text-gray-600 mb-4 line-through">M.R.P : {MRP}</div>
//             <div className="mb-4">
//               {/* <h2 className="text-2xl font-bold mb-4">Features :</h2> */}
//               <div dangerouslySetInnerHTML={{ __html: about[language] }} />
//             </div>
//             <div className="text-gray-600 mb-4">
//               <p>Fastest delivery</p>
//             </div>
//             <div className="flex space-x-4">
//               <button onClick={handleBuyNow} className="bg-yellow-500 text-white py-2 px-16 rounded hover:bg-yellow-600">Buy Product</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
"use client";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/languagecontext";
import Cookies from "js-cookie";
import Image from "next/image";
import { products } from "@/app/productjson.js/product";
import { motion } from "framer-motion";// You can replace icons with your branding
import style from "../product.module.scss"

const Product = ({ params }) => {
  const { id } = params;
  const { language } = useLanguage();
  const router = useRouter();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center text-lg font-bold text-red-600">
        🚫 Product not found.
      </div>
    );
  }

  const { name, price, image, about, MRP, ratings, Quantity,usage } = product;

  const handleBuyNow = () => {
    const phoneNumber = "+919359213421";
    const productName = name[language];
    const userPhoneNumber = Cookies.get("user_phone_number");

    if (userPhoneNumber) {
      const msg = `My name is ${userPhoneNumber}. I want to buy ${productName} (${price}). Please confirm my order.`;
      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    } else {
      alert("Please provide your phone number before purchasing.");
      router.push("/auth/login");
    }
  };

  return (
     <><div className="mb-4 px-6 mt-32">
      
    </div>
    <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-[70%]">
        {/* HERO SECTION */}


        {/* PRODUCT CARD */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="z-20 relative rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-10 ">
            {/* Image */}
            <div className="w-full lg:w-[40%] flex items-center justify-center">
              <Image
                src={image}
                alt="product"
                width={300}
                height={100}
                // width={400}
                // height={200}
                className="rounded-xl shadow-lg" />
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex justify-between items-center gap-2 text-yellow-600">

                <span className="text-lg font-medium">
                  {ratings.average} {ratings.count}
                </span>
                
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                {name[language]}
              </h2>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="text-green-600 text-xl font-semibold">
                  Price: {price}
                </div>
                <div className="text-gray-500 line-through">M.R.P: {MRP}</div>
              </div>
              <div className="text-bold text-gray-700 underline">Available Quantity: {Quantity}</div>

              {/* USPs / Badges */}
              <div className="flex gap-3 mt-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Fastest Delivery
                </div>

              </div>
   <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBuyNow}
                className={` ${style.buy_button} mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold  px-6 rounded-xl shadow-lg transition-all duration-200`}
              >
                Buy Product
              </motion.button>
              {/* Description */}
              <div className="pt-6 text-gray-700 leading-relaxed border-t border-gray-200">
                <div
                  dangerouslySetInnerHTML={{ __html: about[language] }}
                  className="prose prose-sm max-w-full" />
              </div>

           
            </div>
          </div>
          
        </motion.div>

        {/* Sticky CTA for Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-xl flex justify-between items-center px-6 py-3">
          <div className="text-sm">
            <div className="text-gray-800 font-semibold">{name[language]}</div>
            <div className="text-green-600 font-bold">{price}</div>
          </div>
          <button
            onClick={handleBuyNow}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-5 rounded-lg"
          >
            Buy Now
          </button>
        </div>
      </div> <div className="w-full lg:w-[30%] p-4">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Explore More Products</h3>
  <div className="grid gap-4">
    {products
      .filter(p => p.id !== id) .slice(0, 3) // Exclude current product
      .map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(`/products/${item.id}`)}
          className={` ${style.productCard} cursor-pointer p-4 border rounded-lg hover:shadow-lg transition lg:w-[400px]`}
          
        >
          <Image
            src={item.image}
            alt={item.name[language]}
            width={150}
            height={150}
            className={style.productImage}
          />
          <div className="flex flex-col p-4">
        <h3 className="text-lg font-bold mb-2">{item.name[language]}</h3>
        <p className="text-sm text-gray-600">{usage[language]}</p>
        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Fastest Delivery
          </div>
        </div>
      </div>
        </div>
        

      ))}
  </div>
</div>
</div></>
  );
};

export default Product;
