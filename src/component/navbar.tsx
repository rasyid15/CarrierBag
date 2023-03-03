import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNav] = useState(false);
  return (
    <>
      <nav className="items-center w-full z-1">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold font-poppins transition-colors duration-300">
                CarrierBag
              </h2>
            </Link>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=" font-semibold font-poppins hover:text-gray-500 transition-colors duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className=" font-semibold font-poppins hover:text-gray-500 transition-colors duration-300">
                  <Link href="/product">Product</Link>
                </li>
                <li className=" font-semibold font-poppins hover:text-gray-500 transition-colors duration-300">
                  <Link href="/favorite">Favorite</Link>
                </li>
                <li className=" font-semibold font-poppins hover:text-gray-500 transition-colors duration-300">
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
