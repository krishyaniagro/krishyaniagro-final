// "use client"
// import Link from 'next/link';
// import { useLanguage } from '../languagecontext';

// const Products = () => {
//     const { language } = useLanguage();

//     const translations = {
//         en: {
//             title: 'All Products',
//             viewDetails: 'View Details',
//         },
//         mr: {
//             title: 'सर्व उत्पादने',
//             viewDetails: 'विवरण पहा',
//         },
//         hi: {
//             title: 'सभी उत्पाद',
//             viewDetails: 'विवरण देखें',
//         },
//     };
//     const products = [
//       { id: 1, name: { en: 'Organic Apples', mr: 'स्वास्थ्यवर्धक सेब', hi: 'जैविक सेब' }, price: '$2.50/kg', image: '/apple.jpg', description: { en: 'Fresh organic apples.', mr: 'नवीन जैविक सेब.', hi: 'ताजा जैविक सेब.' } },
//       { id: 2, name: { en: 'Fresh Carrots', mr: 'ताजी गाजर', hi: 'ताज़ा गाजर' }, price: '$1.20/kg', image: '/carrot.jpg', description: { en: 'Crunchy fresh carrots.', mr: 'ओलंड ताजी गाजर.', hi: 'क्रंची ताजा गाजर.' } },
//       { id: 1, name: { en: 'Organic Apples', mr: 'स्वास्थ्यवर्धक सेब', hi: 'जैविक सेब' }, price: '$2.50/kg', image: '/apple.jpg', description: { en: 'Fresh organic apples.', mr: 'नवीन जैविक सेब.', hi: 'ताजा जैविक सेब.' } },
//       { id: 2, name: { en: 'Fresh Carrots', mr: 'ताजी गाजर', hi: 'ताज़ा गाजर' }, price: '$1.20/kg', image: '/carrot.jpg', description: { en: 'Crunchy fresh carrots.', mr: 'ओलंड ताजी गाजर.', hi: 'क्रंची ताजा गाजर.' } },
//   ];

//     return (
//       <main className="container mx-auto p-16">
//       <h1 className="text-4xl font-bold mb-8 text-center">{translations[language].title}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map(product => (
//               <Link key={product.id} href={`/products/${product.id}`}>
//                   <div className="border p-4 rounded-lg shadow-lg cursor-pointer">
//                       <img src={product.image} alt={product.name[language]} className="w-full h-48 object-cover rounded-t-lg" />
//                       <h2 className="text-xl font-semibold mt-4">{product.name[language]}</h2>
//                       <p className="text-gray-700 mt-2">{product.price}</p>
//                       <p className="text-gray-600 mt-2">{product.description[language]}</p>
//                       <button className="bg-green-500 text-white mt-4 p-2 rounded">{translations[language].viewDetails}</button>
//                   </div>
//               </Link>
//           ))}
//       </div>
//   </main>
//     );
// };

// export default Products;


"use client"
import Link from 'next/link';
import { useLanguage } from '../languagecontext';

const Products = () => {
    const { language } = useLanguage();

    const translations = {
        en: {
            title: 'All Products',
            viewDetails: 'View Details',
        },
        mr: {
            title: 'सर्व उत्पादने',
            viewDetails: 'विवरण पहा',
        },
        hi: {
            title: 'सभी उत्पाद',
            viewDetails: 'विवरण देखें',
        },
    };
    const products = [
      { id: 1, name: { en: 'Organic Apples', mr: 'स्वास्थ्यवर्धक सेब', hi: 'जैविक सेब' }, price: '$2.50/kg', image: '/apple.jpg', description: { en: 'Fresh organic apples.', mr: 'नवीन जैविक सेब.', hi: 'ताजा जैविक सेब.' } },
      { id: 2, name: { en: 'Fresh Carrots', mr: 'ताजी गाजर', hi: 'ताज़ा गाजर' }, price: '$1.20/kg', image: '/carrot.jpg', description: { en: 'Crunchy fresh carrots.', mr: 'ओलंड ताजी गाजर.', hi: 'क्रंची ताजा गाजर.' } },
      { id: 3, name: { en: 'Organic Apples', mr: 'स्वास्थ्यवर्धक सेब', hi: 'जैविक सेब' }, price: '$2.50/kg', image: '/apple.jpg', description: { en: 'Fresh organic apples.', mr: 'नवीन जैविक सेब.', hi: 'ताजा जैविक सेब.' } },
      { id: 4, name: { en: 'Fresh Carrots', mr: 'ताजी गाजर', hi: 'ताज़ा गाजर' }, price: '$1.20/kg', image: '/carrot.jpg', description: { en: 'Crunchy fresh carrots.', mr: 'ओलंड ताजी गाजर.', hi: 'क्रंची ताजा गाजर.' } },
  ];

    return (
      <main className="container mx-auto p-2 lg:p-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{translations[language].title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
              <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="border p-4 rounded-lg shadow-lg cursor-pointer animate-scale-in">
                      <img src={product.image} alt={product.name[language]} className="w-full h-48 object-cover rounded-t-lg" />
                      <h2 className="text-xl font-semibold mt-4">{product.name[language]}</h2>
                      <p className="text-gray-700 mt-2">{product.price}</p>
                      <p className="text-gray-600 mt-2">{product.description[language]}</p>
                      <button className="bg-green-500 text-white mt-4 p-2 rounded">{translations[language].viewDetails}</button>
                  </div>
              </Link>
          ))}
      </div>
  </main>
    );
};

export default Products;

