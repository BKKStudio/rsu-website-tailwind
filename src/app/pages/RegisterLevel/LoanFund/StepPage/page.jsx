import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

export default function StepPage() {
  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center my-2">
          <figure className="max-w-7xl  w-full my-1 ">
            <div className="flex justify-between items-center max-md:flex-col">
              <Image
                src="/image/Logo_universe/Rsu_logo.png"
                alt=""
                width={300}
                height={200}
                className="max-md:w-2/3"
              />
              <div className="flex flex-col  max-md:hidden">
                <div className="flex gap-4 justify-center  max-md:hidden">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      สมัครเรียน
                    </button>
                    <ul className="dropdown-menu">
                      <li className="">
                        <Link href="#" className="dropdown-item">
                          ปริญญาตรี2566
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="dropdown-item">
                          ปริญญาโท-เอก 2566
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="dropdown-item">
                          International Program
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      วิทยาลัย/คณะ
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          วิทยาศาสตร์ - สุขภาพ
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          วิศวกรรมศาสตร์ - เทคโนโลยี
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          มนุษยศาสตร์ - สังคมศาสตร์
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          เศรษฐกิจ - ธุรกิจ
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          ศิลปะ - การออกแบบ
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          หลักสูตรออนไลน์ / นานาชาติ / ป.โท-เอก
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href={"/pages/RegisterLevel/tuition"}
                    className="no-underline text-black"
                  >
                    ค่าเทอม
                  </Link>
                </div>
                <div className=" mt-4 flex text-center  max-md:grid">
                  <Link
                    href={"/pages/RegisterLevel"}
                    className="no-underline text-white py-3 px-5 bg-pink-500 text-lg "
                  >
                    สมัครเรียน
                  </Link>
                  <span className="no-underline text-black text-lg p-3 flex items-center gap-2">
                    <BsTelephoneFill size={20} /> <span>02-791-6000</span>
                  </span>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <article className="hidden max-md:flex justify-center items-center bg-gray-500 ">
          <figure className="w-full  my-3 mx-2  text-white">
            {/* Responsive menu mobile */}
            <div className="  flex justify-between items-center gap-3 mx-3">
              <Link
                href={"/pages/RegisterLevel"}
                className="no-underline text-white py-2 px-10 bg-red-500 text-lg animate-animation-shakebtn"
              >
                สมัครเรียน
              </Link>
              <Link
                href={""}
                className="no-underline text-white flex bg-green-500 p-2 gap-2"
              >
                <BsTelephone size={25} />
                <span>02-790-6000</span>
              </Link>
            </div>
            <div className="  flex justify-between items-center gap-3 mx-3 mt-3">
              <Link
                href={"https://www.facebook.com/rangsituniversity"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/facebook.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={"https://www.instagram.com/rangsitu/"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/Ig.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/rangsit-university-thailand"
                }
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/linkedin.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={"https://twitter.com/RangsitU"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/Twiter.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link
                href={"https://www.youtube.com/@RangsitUniversity"}
                className="no-underline text-white  "
              >
                <Image
                  src={"/image/Iconcontact/Youtube.png"}
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </div>
          </figure>
        </article>

        <article className="flex justify-center items-center  bg-sky-500">
          <figure className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl max-md:text-base">
            ขั้นตอนการยื่นกู้ในระบบ DSL
            </span>
            <span className="text-xl max-md:text-xs">หน้าแรก/DSL</span>
          </figure>
        </article>

        <article className="flex justify-center items-center  ">
          <figure className="max-w-7xl  w-full my-3 mx-2">
            <div>
              <p className="text-2xl text-pink-600 max-md:text-xl">
              ขั้นตอนการยื่นกู้ในระบบ DSL
              </p>
            </div>
            <p className="bg-gray-600 w-full h-1"></p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            1. ดาวน์โหลดแอพกยศ. Connect เพื่อขอรหัสผ่าน 
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            2. ยื่นคำขอกู้ยืมในระบบ DSL พร้อมแนบเอกสารประกอบ และรอการอนุมัติ
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            3. บันทึกสัญญากู้ยืมในระบบ DSL 
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            4. บันทึกแบบยืนยันเบิกเงินกู้ยืมในระบบ DSL
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            5. พิมพ์สัญญากู้ยืมและแบบยืนยันเบิกเงินกู้ยืมพร้อมแนบสำเนาบัตรประชาชนและผู้แทน(ถ้ามี) ส่งที่สำนักงานทุนการศึกษา 
            </p>
            <p className="text-xl max-md:text-base ">
            หมายเหตุ 
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            1. ทุกขั้นตอนให้ติดตามกำหนดการและวิธีดำเนินการที่เพจสำนักงานทุนการศึกษา มหาวิทยาลัยรังสิต RSU
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
            2. สำหรับนักศึกษาปัจจุบันให้ส่งเฉพาะแบบยืนยันเบิกเงินกู้ยืมและสำเนาบัตรประชาชนและผู้แทน(ถ้ามี)
            </p>
            <p className="text-xl max-md:text-base mt-4">
            สามารถดูรายละเอียดเพิ่มเติมได้ที่ :<span className="text-gray-600 text-sm max-md:text-sm"><Link href={"https://www.studentloan.or.th/th/highlight/1622797834"}>https://www.studentloan.or.th/th/highlight/1622797834</Link></span>
            </p>

            <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
              สอบถามรายละเอียดเพิ่มเติม :
              </p>
              <p className=" text-base max-md:text-sm">
              สำนักงานรับสมัครนักศึกษา ตึก 1 อาคารอาทิตย์ อุไรรัตน์ (BUILDING 1)
              </p>
              <p className=" text-base max-md:text-sm">
              มหาวิทยาลัยรังสิต 52 347 ถ. พหลโยธิน ตำบล หลักหก อำเภอเมืองปทุมธานี ปทุมธานี 12000
              </p>
              <p className=" text-base max-md:text-sm">
              โทร : 02-791-6000
              </p>
              <p className=" text-base max-md:text-sm">
              แฟ็กซ์ : 02-791-5577
              </p>
              <p className=" text-base max-md:text-sm">
              อีเมล : info@rsu.ac.th
              </p>
              <p className=" text-base max-md:text-sm">
              รับสมัครนักศึกษา : 02-791-5510 ต่อ 15
              </p>
            <p className="w-full h-0.5 bg-pink-600 mt-4"></p>
          </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
