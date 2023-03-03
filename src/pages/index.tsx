import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import Carrier from "/public/Carrier.jpg";
import Link from "next/link";
import Head from "next/head";
import data from "@/data/data";
import useFavorites from "@/hooks/useFavorites";
import { useRouter } from "next/router";

export default function Home() {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div>
        <div className="h-screen">
          <div className="space-x-12 pt-16 ml-12">
            <Image
              alt=""
              src={Carrier}
              width={500}
              height={500}
              className="float-right"
            />
            <div className="pt-24">
              <h1 className="text-5xl font-poppins font-semibold md:max-w-xl">
                Explore the world with CarrierBag
              </h1>
              <p className="mt-6 md:max-w-lg font-poppins font-medium text-lg">
                Experience the Ultimate Hiking Adventure with CarrierBag`s
                Durable and Feature-Packed Backpacks!
              </p>
            </div>
            <button className="button">Buy Now!</button>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {data.map((item, index) => (
            <div className="" key={index}>
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
      </div>
      <Footer />
    </>
  );
}
