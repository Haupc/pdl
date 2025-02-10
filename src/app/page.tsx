// src/app/products/page.tsx
import pool from "@/lib/db";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const Navbar = () => {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <a
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="#"
          >
            <svg
              className="fill-current text-gray-800 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
            </svg>
            NORDICS
          </a>
        </div>
      </div>
    </nav>
  );
};

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
          >
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg w-4 h-4"
                src={product.image || "https://picsum.photos/200"}
                alt={product.name}
              />
              <Image
                src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                alt=""
                width="400"
                height="400"
                className="hover:grow hover:shadow-lg my-3"
              />
              <div className="pt-3 flex items-center justify-between">
                <p>{product.name}</p>
              </div>
              <p className="pt-1 text-gray-900">{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Carousel = () => {
  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: "1600px" }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          defaultChecked
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "50vh" }}
        >
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-black text-2xl my-4">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                  href="#"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Slides Can Be Added Here */}
      </div>
    </div>
  );
};

export default async function ProductsPage() {
  // Fetch data from MySQL using a server-side query.
  const [rows] = await pool.query(
    "SELECT id, name, description, image, price FROM products"
  );
  const products = rows as Product[];

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      
      <Navbar />
      <Carousel />
      <ProductList products={products} />
    </div>
  );
}
