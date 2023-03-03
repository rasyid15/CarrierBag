import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-white z-3 border-t-2 border-gray-500 md:mt-16 w-full">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <Link 
                  href="/" 
                  className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold">
                    Home
                  </Link >
                  <Link
                    href="/product"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Product
                  </Link>
                  <Link
                    href="/favorite"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Favorite
                  </Link>
                  <Link
                    href="/about"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    About Us
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://rasyid15.vercel.app/"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Developer
                  </Link>
                  <Link
                    href="https://www.instagram.com/rasyidrdh05/"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/rasyidrdh05/"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/rasyid15"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Github
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold "
                  >
                    Terms & Condition
                  </Link>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase ">
                    Contact
                  </h3>
                  <span className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold ">
                    +62 5006 6154 8061
                  </span>
                  <span className="block mt-2 text-sm text-gray-800 font-[450] hover:underline hover:font-semibold ">
                    CarrierBag@company.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
          <div>
            <p className="text-center text-bl8ck">
               © CarrierBag 2023 
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
