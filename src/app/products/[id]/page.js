import { notFound } from 'next/navigation';

const products = [
  { id: 1, name: 'Organic Apples', price: '$2.50/kg', image: '/apple.jpg', description: 'Fresh organic apples.' },
  { id: 2, name: 'Fresh Carrots', price: '$1.20/kg', image: '/carrot.jpg', description: 'Crunchy fresh carrots.' },
];

export default function Product({ params }) {
  const { id } = params;
  const product = products.find(p => p.id == id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 mt-2">{product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button className="bg-green-500 text-white mt-4 p-2 rounded">Buy Now</button>
      </div>
    </main>
  );
}
