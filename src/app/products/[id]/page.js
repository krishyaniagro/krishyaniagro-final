
  // "use client";
  // import { useRouter } from "next/navigation";
  // import { useLanguage } from "@/app/languagecontext";
  // import Cookies from "js-cookie";
  // import Image from "next/image";
  // import { products } from "@/app/productjson.js/product";
  // import { motion } from "framer-motion";// You can replace icons with your branding
  // import style from "../product.module.scss"

  // const Product = ({ params }) => {
  //   const { id } = params;
  //   const { language } = useLanguage();
  //   const router = useRouter();
  //   const product = products.find((p) => p.id == id);

  //   if (!product) {
  //     return (
  //       <div className="container mx-auto p-6 text-center text-lg font-bold text-red-600">
  //         🚫 Product not found.
  //       </div>
  //     );
  //   }

  //   const { name, price, image, about, MRP, ratings, Quantity,usage } = product;

  // const handleBuyNow = () => {
  //   const phoneNumber = "+919359213421";
  //   const productName = name[language];

  //   const msg = `I want to buy ${productName} (${price}). Please confirm my order.`;
  //   const encodedMessage = encodeURIComponent(msg);
  //   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  //   window.open(whatsappUrl, "_blank");
  // };

  //   return (
  //     <><div className="mb-4 px-6 mt-32">
        
  //     </div>
  //     <div className="flex flex-col lg:flex-row">
  //     <div className="w-full lg:w-[70%]">

  //         <motion.div
  //           initial={{ scale: 0.96, opacity: 0 }}
  //           animate={{ scale: 1, opacity: 1 }}
  //           transition={{ delay: 0.4, duration: 0.5 }}
  //           className="z-20 relative rounded-3xl p-8 md:p-10"
  //         >
  //           <div className="flex flex-col lg:flex-row gap-10 ">
  //             {/* Image */}
  //             <div className="w-full lg:w-[40%] flex items-center justify-center">
  //               <Image
  //                 src={image}
  //                 alt="product"
  //                 width={300}
  //                 height={100}
  //                 className="rounded-xl" />
  //             </div>

  //             {/* Details */}
  //             <div className="w-full lg:w-1/2 space-y-4">
  //               <div className="flex justify-between items-center gap-2 text-yellow-600">

  //                 <span className="text-lg font-medium">
  //                   {ratings.average} {ratings.count}
  //                 </span>
                  
  //               </div>

  //               <h2 className="text-3xl font-bold text-gray-800">
  //                 {name[language]}
  //               </h2>
  //               <div style={{ display: "flex", gap: "1rem" }}>
  //                 <div className="text-green-600 text-xl font-semibold">
  //                   Price: {price}
  //                 </div>
  //                 <div className="text-gray-500 line-through">M.R.P: {MRP}</div>
  //               </div>
  //               <div className="text-bold text-gray-700 underline">Available Quantity: {Quantity}</div>

  //               {/* USPs / Badges */}
  //               <div className="flex gap-3 mt-4">
  //                 <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
  //                   Fastest Delivery
  //                 </div>

  //               </div>
  //   <motion.button
  //                 whileHover={{ scale: 1.05 }}
  //                 whileTap={{ scale: 0.95 }}
  //                 onClick={handleBuyNow}
  //                 className={` ${style.buy_button} mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold  px-6 rounded-xl shadow-lg transition-all duration-200`}
  //               >
  //                 Buy Product
  //               </motion.button>
  //               {/* Description */}
  //               <div className="pt-6 text-gray-700 leading-relaxed border-t border-gray-200">
  //                 <div
  //                   dangerouslySetInnerHTML={{ __html: about[language] }}
  //                   className="prose prose-sm max-w-full" />
  //               </div>

            
  //             </div>
  //           </div>
            
  //         </motion.div>

  //         {/* Sticky CTA for Mobile */}
  //         <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-xl flex justify-between items-center px-6 py-3">
  //           <div className="text-sm">
  //             <div className="text-gray-800 font-semibold">{name[language]}</div>
  //             <div className="text-green-600 font-bold">{price}</div>
  //           </div>
  //           <button
  //             onClick={handleBuyNow}
  //             className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-5 rounded-lg"
  //           >
  //             Buy Now
  //           </button>
  //         </div>
  //       </div> <div className="w-full lg:w-[30%] p-4">
  //   <h3 className="text-xl font-bold mb-4 text-gray-800">Explore More Products</h3>
  //   <div className="grid gap-4">
  //     {products
  //       .filter(p => p.id !== id) .slice(0, 3) // Exclude current product
  //       .map((item) => (
  //         <div
  //           key={item.id}
  //           onClick={() => router.push(`/products/${item.id}`)}
  //           className={` ${style.productCard} cursor-pointer p-4 border rounded-lg hover:shadow-lg transition lg:w-[400px]`}
            
  //         >
  //           <Image
  //             src={item.image}
  //             alt={item.name[language]}
  //             width={150}
  //             height={150}
  //             className={style.productImage}
  //           />
  //           <div className="flex flex-col p-4">
  //         <h3 className="text-lg font-bold mb-2">{item.name[language]}</h3>
  //         <p className="text-sm text-gray-600">{item.usage[language]}</p>
  //         <div className="flex gap-3 mt-4">
  //           <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
  //             Fastest Delivery
  //           </div>
  //         </div>
  //       </div>
  //         </div>
          

  //       ))}
  //   </div>
  // </div>
  // </div></>
  //   );
  // };

  // export default Product;
"use client";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/languagecontext";
import Cookies from "js-cookie";
import Image from "next/image";
import { products } from "@/app/productjson.js/product";
import { motion } from "framer-motion";
import style from "../product.module.scss";
import { useState, useEffect } from "react";

const Product = ({ params }) => {
  const { id } = params;
  const { language } = useLanguage();
  const router = useRouter();
  const product = products.find((p) => p.id == id);

  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

useEffect(() => {
  if (product?.images?.length > 0) {
    setSelectedImage(product.images[0]);
  }
}, [product]);
  useEffect(() => {
    if (product?.Quantity?.length > 0) {
      setSelectedQuantity(product.Quantity[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center text-lg font-bold text-red-600">
        🚫 Product not found.
      </div>
    );
  }

  const { name, image, about, MRP, ratings, Quantity, price: defaultPrice, usage } = product;
  const price = selectedQuantity?.price || defaultPrice;
  const mrp = selectedQuantity?.MRP || MRP;

  const handleBuyNow = () => {
    const phoneNumber = "+919359213421";
    const productName = name[language];
    const selectedQty = selectedQuantity?.label || "";
    const msg = `I want to buy ${productName} - ${selectedQty} (${price}). Please confirm my order.`;
    const encodedMessage = encodeURIComponent(msg);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleQuantityChange = (qty) => {
    setSelectedQuantity(qty);
  };

  return (
    <>
      <div className="mb-4 px-6 mt-32" />
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[70%]">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="z-20 relative rounded-3xl p-8 md:p-10"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Image */}
              {/* <div className="w-full lg:w-[40%] flex items-center justify-center">
                <Image src={image} alt="product" width={300} height={100} className="rounded-xl" />
              </div> */}
           <div className="w-full lg:w-[40%] flex flex-col md:flex-col [@media(max-width:1366px)]:flex-col lg:flex-row items-center justify-center gap-4">
  {/* Thumbnail Images */}
  <div className="flex flex-row lg:flex-col [@media(max-width:1366px)]:flex-row gap-2 lg:justify-center">
    {product.images.map((img, idx) => (
      <Image
        key={idx}
        src={img}
        alt={`product-thumbnail-${idx}`}
        width={60}
        height={60}
        onClick={() => setSelectedImage(img)}
        className={`cursor-pointer rounded-md border ${
          selectedImage === img ? "border-green-600" : "border-gray-300"
        }`}
      />
    ))}
  </div>

  {/* Main Selected Image */}
  <Image
    src={selectedImage || product.images[0]}
    alt="product"
    width={300}
    height={300}
    className="rounded-xl mb-4"
  />
</div>

              {/* Details */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex justify-between items-center gap-2 text-yellow-600">
                  <span className="text-lg font-medium">
                    {ratings.average} {ratings.count}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-800">{name[language]}</h2>

                <div>
                  <div className="flex gap-2">
                  <div className="text-green-600 text-xl font-semibold mb-2">Price: {price}</div>
<div className="text-gray-500 line-through">M.R.P: {mrp}</div></div>
                  <div className="flex gap-2 flex-wrap">
                    {Quantity?.map((qty, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuantityChange(qty)}
                        className={`px-3 py-1 rounded-full border ${
                          selectedQuantity?.label === qty.label
                            ? "bg-[#e9f2e9] text-black font-bold border-2 border-green-500"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {qty.label}
                      </button>
                    ))}
                  </div>
                </div>

                
                <div className="text-bold text-gray-700 underline">
                  Available Quantity Options: {Quantity?.length}
                </div>

                <div className="flex gap-3 mt-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Fastest Delivery
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBuyNow}
                  className={`${style.buy_button} mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold px-6 rounded-xl shadow-lg transition-all duration-200`}
                >
                  Buy Product
                </motion.button>

                <div className="pt-6 text-gray-700 leading-relaxed border-t border-gray-200">
                  <div
                    dangerouslySetInnerHTML={{ __html: about[language] }}
                    className="prose prose-sm max-w-full"
                  />
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
        </div>

        {/* Sidebar - Explore More Products */}
        <div className="w-full lg:w-[30%] p-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Explore More Products</h3>
          <div className="grid gap-4">
            {products
              .filter((p) => p.id !== id)
              .slice(0, 3)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(`/products/${item.id}`)}
                  className={`${style.productCard} cursor-pointer p-4 border rounded-lg hover:shadow-lg transition lg:w-[400px]`}
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
                    <p className="text-sm text-gray-600">{item.usage[language]}</p>
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
      </div>
    </>
  );
};

export default Product;
