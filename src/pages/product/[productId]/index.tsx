import { useRouter } from "next/router";
import { useState } from "react";
import data from "@/data/data.json";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function ProductDetail() {
  const router = useRouter();

  const [count, setCount] = useState(1);

  const { productId } = router.query;

  const item = data.find((product) => product.id === Number(productId));

  console.log(productId);

  return (
    <>
      <Navbar />
      {item ? (
        <div>
          <div className="font-poppins float-right md:max-w-md p-5 md:mr-64">
            <h1 className="font-semibold text-3xl">{item.name}</h1>
            <p className="text-base md:mt-3 ">{item.description} </p>
            <div className="flex items-center space-x-6 text-lg font-medium md:mt-3">
              <p>Material : {item.material}</p>
              <p> Stock : {item.stock}</p>
            </div>
            <p className="text-lg font-semibold mt-8">Rp. {item.price},-</p>
            <div className="flex items-center space-x-5 mt-4">
              <button
                className="text-4xl"
                onClick={() => setCount(count - 1)}
                disabled={count <= 1}
              >
                <AiOutlineMinusCircle />
              </button>
              <p className="text-center text-2xl max-w-[24px]">{count}</p>
              <button 
              className="text-4xl" 
              onClick={() => setCount(count + 1)}
              disabled={count >= item.stock}>
                <AiOutlinePlusCircle />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="button2">Check Out</button>
              <button className="button2">Add to Chart</button>
            </div>
          </div>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt={item.name}
            className="md:ml-32"
          />
        </div>
      ) : (
        <div className="p-64">
          <div className="text-center text-5xl font-poppins font-semibold">
            Product not found
          </div>
          <Link href={"/product"}>
            <div className="text-center font-poppins font-medium mt-4">
              Back to product
            </div>
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
}
