import { useEffect, useState } from 'react'
import Head from 'next/head'
import { client } from '../lib/shopify'

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    client.product.fetchAll().then((products) => {
      console.log(products)
      setProducts(
        products.map((product) => {
          return {
            id: product.id,
            title: product.title,
            image: product.images[0].src,
          }
        })
      )
    })
  }, [])

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

        <div className="grid grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
