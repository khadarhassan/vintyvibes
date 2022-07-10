import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { client } from '../lib/shopify';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    /* client.product.fetchAll().then((products) => {
      console.log(products);
      setProducts(
        products.map((product) => {
          return {
            id: product.id,
            title: product.title,
            image: product.images[0].src,
          };
        })
      );
    }); */

    const getProducts = async () => {
      const response = await fetch('/api/products', { method: 'GET' });

      const products = await response.json();

      console.log(products);

      if (products) {
        setProducts(
          products.products.map((product) => {
            return {
              id: product.id,
              title: product.title,
              image: product.images[0].src,
            };
          })
        );
      }
      return products;
    };

    getProducts();
  }, []);

  const imageRef = useRef(null);
  return (
    <div>
      <Head>
        <title>Vinty Vibes - Clothing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-6 mx-auto">
        <h1 className="py-20 text-2xl font-bold text-center text-blue-700">
          Vinty Vibes - Clothing
        </h1>

        <div className="grid grid-cols-2 gap-10">
          {products.map((product) => (
            <div key={product.id} className="border-[10px] border-black">
              <h4 className="text-xl text-purple-500 whitespace-pre-wrap">
                {product.title}
              </h4>
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                className="w-full max-w-md aspect-square"
                ref={imageRef}
                src={product.image}
                alt={product.title}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
