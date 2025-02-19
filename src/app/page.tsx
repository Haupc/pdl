// src/app/products/page.tsx
// import pool from "@/lib/db";
// import Image from "next/image";
import { Product } from "@/types/types";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import "./page.css";
import Navbar from "./components/Navbar";

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
