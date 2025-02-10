// src/app/products/page.tsx
// import pool from "@/lib/db";
// import Image from "next/image";
import Navbar from "./components/Navabar";
import Carousel from "./components/Carousel";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <section className="bg-white py-8">
      <nav id="store" className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            href="#"
          >
            Store
          </a>

          <div className="flex items-center" id="store-nav-content">
            <a
              className="pl-3 inline-block no-underline hover:text-black"
              href="#"
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
              </svg>
            </a>

            <a
              className="pl-3 inline-block no-underline hover:text-black"
              href="#"
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto items-center flex-wrap pt-4 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="w-full py-6 px-4 flex">
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg"
                src={product.image || "https://picsum.photos/200"}
                alt={product.name}
              />
              {/* <Image
                src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                alt=""
                width="400"
                height="400"
                className="hover:grow hover:shadow-lg my-3"
              /> */}
              <div className="pt-3 flex items-center justify-between">
                <p>{product.name}</p>
              </div>
              <p className="pt-1 text-gray-900">${product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default async function ProductsPage() {
  // Fetch data from MySQL using a server-side query.
  // const [rows] = await pool.query(
  //   "SELECT id, name, description, image, price FROM products"
  // );
  // const products = rows as Product[];
  const products: Product[] = [
    {
      id: 1,
      name: "test",
      description: "ddd",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 2,
      name: "test",
      description: "ddd",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 3,
      name: "test",
      description: "ddd",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 4,
      name: "test",
      description: "ddd",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 5,
      name: "test",
      description: "ddd",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <Carousel />
      <ProductList products={products} />
    </div>
  );
}
