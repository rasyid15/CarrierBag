import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Head from "next/head";
import data from "../data/data.json";
import Image from "next/image";
import useFavorites from "@/hooks/useFavorites";

export default function Favorite() {
  const { favorites } = useFavorites();

  // Filter the data array to only include items with IDs that are in the favorites array
  const favoriteItems = data.filter((item) => favorites.includes(item.id));

  return (
    <>
      <Head>
        <title>Favorite</title>
      </Head>
      <Navbar />
      <div className="mt-16">
        <h1 className="text-4xl font-poppins font-semibold text-center">
          Your Favorites
        </h1>
        {favoriteItems.length === 0 ? (
          <p className="text-center text-lg mt-8">
            You haven`t favorited any items yet.
          </p>
        ) : (
          <div className="grid gap-4 lg:pb-10 lg:grid-cols-5 pt-12 p-6">
            {favoriteItems.map((item) => (
              <div className="card" key={item.id}>
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
                  <p className="text-base font-poppins">Rp {item.price}</p>
                  <button
                    className="button"
                    onClick={() => alert("Sorry, this feature is not available yet!")}
                  >
                    Buy Now!
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
