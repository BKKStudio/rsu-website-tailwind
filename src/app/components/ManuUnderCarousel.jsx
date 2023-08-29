import Link from "next/link";
export default function ManuUnderCarousel() {
    return(
        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full my-3">
            <div className="grid grid-cols-8 max-lg:grid-cols-4 max-sm:text-xs">
              <Link href={"/pages/Register"} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/1.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p className="">ปริญญาตรี</p>
                </div>
              </Link>
              <Link href={"/pages/RegisterLevel/tuition"} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/2.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>ค่าเทอม</p>
                </div>
              </Link>
              <Link href={"/pages/RegisterLevel/Scholarships"} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/3.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>ทุนการศึกษา</p>
                </div>
              </Link>
              <Link href={""} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/4.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>ปฎิทินการศึกษา</p>
                </div>
              </Link>
              <Link href={""} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/5.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>เส้นทางมา ม.รังสิต</p>
                </div>
              </Link>
              <Link href={""} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/6.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>RSU-NET</p>
                </div>
              </Link>
              <Link href={""} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/7.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>ติดต่อคณะ</p>
                </div>
              </Link>
              <Link href={""} className="flex justify-center">
                <div className={"text-center"}>
                  <img
                    src={"/image/Manu/8.png"}
                    alt=""
                    className="hover:animate-animation-manu"
                  ></img>
                  <p>Satit Rangsit</p>
                </div>
              </Link>
            </div>
          </figure>
        </article>
    )
}