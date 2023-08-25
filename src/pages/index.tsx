import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <nav className="flex px-8 py-4 justify-between items-center bg-black">
        <h2 className="font-semibold text-2xl">Play Ecom API</h2>
        <a href="https://allcodeapp.com" target="_blank">
          Allcode Platform
        </a>
      </nav>
      <main className="flex flex-col px-16 gap-8 mb-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">API Docs</h1>
          <p>
            Use our powerful API for the most powerful products.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">
            Base URL
          </h2>
          <p>
            The base URL for API access
          </p>
          <div className="p-4 bg-black rounded-xl">
            https://play-ecom-api.allcodeapp.com/api/
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">
            Products
          </h2>
          <p>
            Returns a list of all products
          </p>
          <div className="p-4 bg-black rounded-xl">
            https://play-ecom-api.allcodeapp.com/api/products
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">
            Single Product
          </h2>
          <p>
            Returns a specific product by its ID.
          </p>
          <div className="p-4 bg-black rounded-xl">
            https://play-ecom-api.allcodeapp.com/api/products/2
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">
            Featured Product
          </h2>
          <p>
            Returns the current featured product with its ID.
          </p>
          <div className="p-4 bg-black rounded-xl">
            https://play-ecom-api.allcodeapp.com/api/featured
          </div>
        </div>
      </main>
      <footer className="text-center p-8">
        <p>Made with Love by Allcode</p>
      </footer>
    </div>
  )
}
