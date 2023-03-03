import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Head from "next/head";
import data from "../data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFavorites from "@/hooks/useFavorites";

export default function Product() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <Navbar />
      <div className="mt-16">
        <h1 className="text-4xl font-poppins font-semibold text-center">
          Our Product
        </h1>
        {data.map((item, index) => (
          <div
            className="grid gap-4 lg:pb-10 lg:grid-cols-5 pt-12 p-6"
            key={index}
          >
            <div className="card">
              <Image
                className="w-full"
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold font-poppins text-xl mb-2">
                  {item.name}
                </div>
                <p className="text-base font-poppins">Rp {item["price"]}</p>
                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="button"
                >
                  Buy Now!
                </button>
                <button
                  className="button bg-yellow-400"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id)
                    ? "Remove favorite"
                    : "Add Favorite"}
                </button>
              </div>
            </div>
            <div className="card">
              <Image
                className="w-full"
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold font-poppins text-xl mb-2">
                  {item.name}
                </div>
                <p className="text-base font-poppins">Rp {item["price"]}</p>
                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="button"
                >
                  Buy Now!
                </button>
                <button
                  className="button bg-yellow-400"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id)
                    ? "Remove favorite"
                    : "Add Favorite"}
                </button>
              </div>
            </div>
            <div className="card">
              <Image
                className="w-full"
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold font-poppins text-xl mb-2">
                  {item.name}
                </div>
                <p className="text-base font-poppins">Rp {item["price"]}</p>
                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="button"
                >
                  Buy Now!
                </button>
                <button
                  className="button bg-yellow-400"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id)
                    ? "Remove favorite"
                    : "Add Favorite"}
                </button>
              </div>
            </div>
            <div className="card">
              <Image
                className="w-full"
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold font-poppins text-xl mb-2">
                  {item.name}
                </div>
                <p className="text-base font-poppins">Rp {item["price"]}</p>
                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="button"
                >
                  Buy Now!
                </button>
                <button
                  className="button bg-yellow-400"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id)
                    ? "Remove favorite"
                    : "Add Favorite"}
                </button>
              </div>
            </div>
            <div className="card">
              <Image
                className="w-full"
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold font-poppins text-xl mb-2">
                  {item.name}
                </div>
                <p className="text-base font-poppins">Rp {item["price"]}</p>
                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="button"
                >
                  Buy Now!
                </button>
                <button
                  className="button bg-yellow-400"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id)
                    ? "Remove favorite"
                    : "Add Favorite"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
