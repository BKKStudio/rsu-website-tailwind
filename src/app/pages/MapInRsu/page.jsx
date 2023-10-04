import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";

export default function MapInRsu() {
  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center  bg-sky-500">
          <figure className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl max-md:text-xl">RSU MAP</span>
            <Link href={"/pages/MaptoRsu"} className="text-xl text-white max-md:text-base">
              หน้าแรก
            </Link>
          </figure>
        </article>

        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full my-3 mx-2 ">
            <div>
              <p className="text-pink-600 text-2xl max-md:text-base ">
              แผนที่ใน | RSU MAP
              </p>
              <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            </div>
            <Image
              src="/image/MaptoRsu/MAP_RSU-2017.jpg"
              width={1000}
              height={500}
              alt=""
              className="w-full mt-3"
            ></Image>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
