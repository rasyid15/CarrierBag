import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Head from "next/head";
import Image from "next/image";
import Carrier from "/public/Carrier.jpg";
import Link from "next/link";
import aboutData from "@/data/about.json";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />
      <div>
        <div className="space-x-12 flex pt-16 mb-6">
          <Image
            alt=""
            src={Carrier}
            width={400}
            height={400}
            className="ml-24"
          />
          {aboutData.map((item, index) => (
            <div className="justify-center max-w-2xl" key={index}>
              <h1 className="text-3xl font-poppins font-semibold text-center p-0">
                About Us
              </h1>
              <p className="font-poppins leading-7 indent-14 text-justify mt-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
