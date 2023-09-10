import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";

import Swipercontent from "./Swipercontent";
import Swipernewgen from "./Swipernewgen";


export default function Rsuvideo() {
  return (
    <>
      <article className="flex justify-center items-center my-4">
        {/* RSU Video */}
        <figure className="max-w-7xl  w-full my-1">
          <div className="text-4xl flex justify-between mb-1 items-center">
            <span className="max-sm:text-xl">RSU CONTENTS</span>
            <Link
              href={""}
              className="bg-pink-500 text-sm text-white p-2 rounded-lg flex items-center max-sm:text-xs"
            >
              All Contents
              <BsFillPlayFill size={19} />
            </Link>
          </div>
          <div className="bg-pink-500 w-full h-1"></div>
          <div className="mt-4 grid grid-cols-2 p-3 max-lg:grid-cols-1 gap-5">
            <div className="flex justify-center items-center">
              <Link href={"https://youtu.be/GnXc8RZadMo?si=hxIzp6jX6eRUFi3y"} className="shadow-3xl relative">
                <div className="bg-white opacity-5  hover:opacity-50  w-full h-full absolute z-1"></div>
                <Image
                  src={"/image/rsuvideo/rsuvideo01.jpg"}
                  alt=""
                  width={700}
                  height={500}
                ></Image>
                <p className="text-center bg-black text-white p-3">
                  นิเทศศาสตร์การกีฬา ม.รังสิต ท้าดวล ขอบสนาม ในงาน Gaming Sport
                </p>
              </Link>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
              <div className="flex justify-center items-center">
                <Link href={"https://youtu.be/KXYGR875dc4?si=_WktZUAXutTR9ykp"} className="shadow-3xl  relative">
                  <div className="bg-white opacity-5  hover:opacity-50  w-full h-full absolute z-1"></div>
                  <Image
                    src={"/image/rsuvideo/Freshchy.jpg"}
                    alt=""
                    width={400}
                    height={200}
                  ></Image>
                  <p className="text-center bg-black text-white p-3 ">
                    RANGSIT NEW GEN 2023
                  </p>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={"https://youtu.be/gTQ1D9aopAU?si=AseTnuZgrx-TkqMn"} className="shadow-3xl relative">
                  <div className="bg-white opacity-5  hover:opacity-50  w-full h-full absolute z-1"></div>
                  <Image
                    src={"/image/rsuvideo/maxresdefault (4).jpg"}
                    alt=""
                    width={400}
                    height={200}
                  ></Image>
                  <p className="text-center bg-black text-white p-3">
                    How To .. สมัครเรียน ม.รังสิต
                  </p>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={"https://youtu.be/QtJaGbnjx3g?si=G5WaEs3rk3-81oR-"} className="shadow-3xl relative">
                  <div className="bg-white opacity-5  hover:opacity-50  w-full h-full absolute z-1"></div>
                  <Image
                    src={"/image/rsuvideo/Threeword.jpg"}
                    alt=""
                    width={400}
                    height={200}
                  ></Image>
                  <p className="text-center bg-black text-white p-3">
                    สามคำให้ ม.รังสิต | รับปริญญา 2565
                  </p>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={"https://youtu.be/4gOiUMEEPnk?si=Jdybw9ai2SQENKPF"} className="shadow-3xl  relative">
                  <div className="bg-white opacity-5  hover:opacity-50  w-full h-full absolute z-1"></div>
                  <Image
                    src={"/image/rsuvideo/rsuvideo05.jpg"}
                    alt=""
                    width={400}
                    height={200}
                  ></Image>
                  <p className="text-center bg-black text-white p-3">
                    มหาวิทยาลัยแห่งความหลากหลาย
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </figure>
      </article>
      <article className="flex justify-center items-center my-4">
        <figure className="max-w-7xl  w-full my-1">
          <div className="flex justify-center  mx-3 max-lg:grid  max-lg:grid-cols-1">
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <Image
                  src={"/image/rsuvideo/logotiktok.png"}
                  alt=""
                  width={400}
                  height={300}
                  className="lg:hover:animate-animation-manu"
                ></Image>
                <Link
                  href={"https://www.tiktok.com/@rangsituniversity?is_from_webapp=1&sender_device=pc"}
                  className="bg-pink-500 text-sm text-white p-2 w-48 max-sm:w-full max-lg:w-full text-center rounded-lg flex justify-center items-center max-sm:text-xs"
                >
                  All Video Tiktok <BsFillPlayFill size={19} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 max-lg:grid max-md:grid-cols-1 max-lg:justify-center max-lg:mt-4">
              <Link href={"https://www.tiktok.com/@rangsituniversity/video/7242903677822930182?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"} className="flex justify-center">
                <Image
                  src={"/image/rsuvideo/tt1.jpg"}
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-lg shadow-3xl lg:hover:animate-animation-shake "
                ></Image>
              </Link>
              <Link href={"https://www.tiktok.com/@rangsituniversity/video/7235106599155617029?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"} className="flex justify-center">
                <Image
                  src={"/image/rsuvideo/tt2.jpg"}
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-lg shadow-3xl lg:hover:animate-animation-shake"
                ></Image>
              </Link>
              <Link href={"https://www.tiktok.com/@rangsituniversity/video/7257837474888600837?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"} className="flex justify-center">
                <Image
                  src={"/image/rsuvideo/tt3.jpg"}
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-lg shadow-3xl lg:hover:animate-animation-shake"
                ></Image>
              </Link>
            </div>
          </div>
        </figure>
      </article>

      {/* Carousels RSU Contents */}
      <article className="flex justify-center items-center my-4">
        <figure className="max-w-7xl w-full mt-4 grid grid-cols-2 gap-5 max-md:grid-cols-1  ">
          {/* RSU location */}
          <div className=" shadow-3xl mx-3  ">
              <Swipernewgen/>
          </div>
          {/* ------ENd---------- */}
          <div className=" shadow-3xl mx-3">
            <Swipercontent />
          </div>
        </figure>
      </article>
      {/*---------------Carousels RSU Contents----END */}
    </>
  );
}
