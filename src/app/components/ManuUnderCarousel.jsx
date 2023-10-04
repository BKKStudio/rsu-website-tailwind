import Link from "next/link";
import ImgManu1 from "../../../public/image/Manu/1.png";
import ImgManu2 from "../../../public/image/Manu/2.png";
import ImgManu3 from "../../../public/image/Manu/3.png";
import ImgManu4 from "../../../public/image/Manu/4.png";
import ImgManu5 from "../../../public/image/Manu/5.png";
import ImgManu6 from "../../../public/image/Manu/6.png";
import ImgManu7 from "../../../public/image/Manu/7.png";
import ImgManu8 from "../../../public/image/Manu/8.png";
import Image from "next/image";

export default function ManuUnderCarousel() {
    return(
        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full my-3">
            <div className="grid grid-cols-8 max-lg:grid-cols-4 max-sm:text-xs">
              <Link href={"/pages/Coursesoffered"} className="flex justify-center">
                <div className={"text-center"}>
                  <Image
                    src={ImgManu1}
                    alt=""
                    className="hover:animate-animation-manu"
              
                  ></Image>
                  <p className="">หลักสูตรที่เปิดสอน</p>
                </div>
              </Link>
              <Link href={"/pages/AnotherPage/tuition"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu2}
                    alt=""
                    className="hover:animate-animation-manu"
              
                  ></Image>
                  <p>ค่าเทอม</p>
                </div>
              </Link>
              <Link href={"/pages/AnotherPage/Scholarships"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu3}
                    alt=""
                    className="hover:animate-animation-manu"
              
                  ></Image>
                  <p>ทุนการศึกษา</p>
                </div>
              </Link>
              <Link href={"/pages/AnotherPage/LoanFund"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu4}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></Image>
                  <p>กองทุนกู้ยืมฯ</p>
                </div>
              </Link>
              <Link href={"/pages/CalendarPage"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu5}
                    alt=""
                    className="hover:animate-animation-manu"
        
                  ></Image>
                  <p>ปฎิทินการศึกษา</p>
                </div>
              </Link>
              <Link href={"/pages/MaptoRsu"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu6}
                    alt=""
                    className="hover:animate-animation-manu"
        
                  ></Image>
                  <p>เส้นทางมา ม.รังสิต</p>
                </div>
              </Link>
              <Link href={"https://itsc.rsu.ac.th/"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu7}
                    alt=""
                    className="hover:animate-animation-manu"
        
                  ></Image>
                  <p>RSU-NET</p>
                </div>
              </Link>
              <Link href={"https://www.sbs.ac.th/"} className="flex justify-center">
                <div className={"text-center"}>
                <Image
                    src={ImgManu8}
                    alt=""
                    className="hover:animate-animation-manu"
              
                  ></Image>
                  <p>Satit Rangsit</p>
                </div>
              </Link>
            </div>
          </figure>
        </article>
    )
}