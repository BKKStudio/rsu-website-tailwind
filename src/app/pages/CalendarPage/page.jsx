import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

export default function CalendarPage() {
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
            <span className="text-2xl max-md:text-xl">ปฎิทินการศึกษา</span>
            <span className="text-xl max-md:text-base">
              ประจำปีการศึกษา 2566
            </span>
          </figure>
        </article>
        <article className="flex justify-center items-center">
          <figure className="max-w-7xl  w-full my-3 ">
            <div>
              <table className="w-full text-center">
                <thead className="bg-gray-700 text-white">
                  <tr className="border ">
                    <th className="border p-3 max-lg:p-2 max-lg:text-sm">
                      Date(DD/MM/YYYY)
                    </th>
                    <th className="border p-3 max-lg:p-2 max-lg:text-sm">
                      รายละเอียด
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border bg-gray-500 text-white">
                    <th
                      colspan="4"
                      className="border text-center text-2xl  p-2 max-lg:p-1  max-md:text-xs "
                    >
                      ภาคฤดูร้อน ปีการศึกษา 2566-2567 (S/2566)
                    </th>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 19 เมษายน 2566 - วันพุธ, 3 พฤษภาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนเรียนล่วงหน้า พิมพ์ใบโอนเงินผ่านทางธนาคาร
                      ผ่านระบบ Intranet ภาค S/2566 และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพฤหัสบดี, 4 พฤษภาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันฉัตรมงคล
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 10 พฤษภาคม 2566 - วันพุธ, 17 พฤษภาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนล่าช้าโดยยกเว้นค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนรายวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet ภาค S/2566 และ
                      ชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันเสาร์, 3 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันเฉลิมพระชนมพรรษาสมเด็จพระราชินี และวันวิสาขบูชา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 5 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันเฉลิมพระชนมพรรษาสมเด็จพระราชินี
                      และวันวิสาขบูชา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 12 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันเริ่มการเรียนการสอน/วันแรกของการลงทะเบียนล่าช้าโดยเสียค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranetและชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 16 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการลงทะเบียนล่าช้าโดยเสียค่าธรรมเนียมปรับ/เพิ่มวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet และชำระเงินผ่านทางธนาคาร
                      และวันสุดท้ายของการถอนวิชาเรียนโดยไม่บันทึก “W” และ
                      ได้รับค่าหน่วยกิตคืนเป็นเงินโอนเก็บ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 19 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันปฐมนิเทศนักศึกษาใหม่
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 19 มิถุนายน 2566 - วันศุกร์, 23 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันตรวจสุขภาพนักศึกษาใหม่
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 26 มิถุนายน 2566 - วันศุกร์, 30 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันแจ้งจบการศึกษาสำหรับนักศึกษาที่คาดว่าจะจบภาคเรียนที่
                      S/2566
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 30 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการเปลี่ยนสัญลักษณ์ I
                      และวันสุดท้ายของการตัดรายชื่อ ผู้สำเร็จการศึกษา ภาค 2/2565
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 3 กรกฎาคม 2566 - วันศุกร์, 7 กรกฎาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      พักระหว่างเทอม (Term Break)
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 5 กรกฎาคม 2566 - วันศุกร์, 28 กรกฎาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันกีฬาน้องใหม่รังสิตสัมพันธ์
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 10 กรกฎาคม 2566 - วันอังคาร, 1 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนเรียนล่วงหน้า พิมพ์ใบโอนเงินผ่านทางธนาคาร
                      ผ่านระบบ Intranet ภาค 1/2566 และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพฤหัสบดี, 20 กรกฎาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันพิธีไหว้ครู
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 28 กรกฎาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันเฉลิมพระชนมพรรษาสมเด็จพระเจ้าอยู่หัวฯ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 28 กรกฎาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการถอนวิชาเรียนโดยการบันทึก “W”
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 1 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันอาสาฬหบูชา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 2 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันเข้าพรรษา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 4 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการเรียนการสอน
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 7 สิงหาคม 2566 - วันศุกร์, 11 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสอบปลายภาค
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 8 สิงหาคม 2566 - วันอังคาร, 15 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนล่าช้าโดยยกเว้นค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนรายวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet ภาค 1/2566 และ
                      ชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันเสาร์, 12 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันแม่แห่งชาติ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 14 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันแม่แห่งชาติ
                    </td>
                  </tr>

                  <tr className="border bg-gray-500 text-white">
                    <th
                      colspan="4"
                      className="border text-center text-2xl  p-2 max-lg:p-1  max-md:text-xs "
                    >
                      ภาคเรียนที่ 1 ปีการศึกษา 2566-2567
                    </th>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 10 กรกฎาคม 2566 - วันอังคาร, 1 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนเรียนล่วงหน้า พิมพ์ใบโอนเงินผ่านทางธนาคาร
                      ผ่านระบบ Intranet ภาค 1/2566 และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 8 สิงหาคม 2566 - วันอังคาร, 15 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนล่าช้าโดยยกเว้นค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนรายวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet ภาค 1/2566
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 21 สิงหาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันเริ่มการเรียนการสอน/วันแรกของการลงทะเบียนล่าช้าโดยเสียค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 1 กันยายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการลงทะเบียนล่าช้าโดยเสียค่าธรรมเนียมปรับ/เพิ่มวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet และชำระเงินผ่านทางธนาคาร
                      และวันสุดท้ายของการถอนวิชาเรียนโดยไม่บันทึก “W”
                      และได้รับค่าหน่วยกิตคืนเป็นเงินโอนเก็บ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 5 มิถุนายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันเฉลิมพระชนมพรรษาสมเด็จพระราชินี
                      และวันวิสาขบูชา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 4 กันยายน 2566 - วันศุกร์, 8 กันยายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันแจ้งจบการศึกษาสำหรับนักศึกษาที่คาดว่าจะจบภาคเรียนที่
                      1/2566
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 8 กันยายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการเปลี่ยนสัญลักษณ์ I
                      และวันสุดท้ายของการตัดรายชื่อผู้สำเร็จการศึกษา ภาค S/2566
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 9 ตุลาคม 2566 - วันศุกร์, 13 ตุลาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      พักระหว่างเทอม (Term Break)
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 13 ตุลาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันคล้ายวันสวรรคตของพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช
                      บรมนาถบพิตร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 23 ตุลาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันปิยมหาราช
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 13 พฤศจิกายน 2566 - วันพุธ, 6 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนเรียนล่วงหน้า
                      พิมพ์ใบโอนเงินผ่านทางธนาคารผ่านระบบ Intranet ภาค 2/2566
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 24 พฤศจิกายน 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการถอนวิชาเรียนโดยการบันทึก “W”
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 5 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันคล้ายวันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระปรมินทร-มหาภูมิพลอดุลยเดช
                      บรมนาถบพิตร/ วันชาติ/ วันพ่อแห่งชาติ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 8 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการเรียนการสอน
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอาทิตย์, 10 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันนประสาทปริญญา (บัณฑิตที่จบภาค 1/2565, 2/2565 และ
                      S/2566)
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอาทิตย์, 10 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันรัฐธรรมนูญ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 11 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันรัฐธรรมนูญ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 12 ธันวาคม 2566 - วันพฤหัสบดี, 21 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสอบปลายภาค
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 13 ธันวาคม 2566 - วันพุธ, 20 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนล่าช้าโดยยกเว้นค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนรายวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet ภาค 2/2566
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>

                  <tr className="border bg-gray-500 text-white">
                    <th
                      colspan="4"
                      className="border text-center text-2xl  p-2 max-lg:p-1  max-md:text-xs "
                    >
                      ภาคเรียนที่ 2 ปีการศึกษา 2566-2567
                    </th>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 13 พฤศจิกายน 2566 - วันพุธ, 6 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนเรียนล่วงหน้า
                      พิมพ์ใบโอนเงินผ่านทางธนาคารผ่านระบบ Intranet ภาค 2/2566
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 13 ธันวาคม 2566 - วันพุธ, 20 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนล่าช้าโดยยกเว้นค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนรายวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet ภาค 2/2566
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอาทิตย์, 31 ธันวาคม 2566
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันสิ้นปี
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 1 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันขึ้นปีใหม่
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 2 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันสิ้นปี
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 8 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันเริ่มการเรียนการสอน/วันแรกของการลงทะเบียนล่าช้าโดยเสียค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 19 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการลงทะเบียนล่าช้าโดยเสียค่าธรรมเนียมปรับ/เพิ่มวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet และชำระเงินผ่านทางธนาคาร
                      และวันสุดท้ายของการถอนวิชาเรียนโดยไม่บันทึก “W”
                      และได้รับค่าหน่วยกิตคืนเป็นเงินโอนเก็บเ
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 22 มกราคม 2567 - วันศุกร์, 26 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันแจ้งจบการศึกษาสำหรับนักศึกษาที่คาดว่าจะจบภาคเรียนที่
                      2/2565
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพฤหัสบดี, 25 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสถาปนามหาวิทยาลัยรังสิต
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 26 มกราคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการเปลี่ยนสัญลักษณ์ I
                      และวันสุดท้ายของการตัดรายชื่อผู้สำเร็จการศึกษา ภาค 1/2566
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันเสาร์, 24 กุมภาพันธ์ 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันมาฆบูชา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 26 กุมภาพันธ์ 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันมาฆบูชา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 27 กุมภาพันธ์ 2567 - วันศุกร์, 1 มีนาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      พักระหว่างเทอม (Term Break)
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 11 มีนาคม 2567 - วันพุธ, 13 มีนาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันเลือกตั้งสโมสรนักศึกษาและคณะกรรมการนักศึกษา
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 18 มีนาคม 2567 - วันศุกร์, 29 มีนาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันกีฬาพะยอมเกมส์ ครั้งที่ 16
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันเสาร์, 6 เมษายน 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันมหาจักรี
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 8 เมษายน 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันมหาจักรี
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 12 เมษายน 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการถอนวิชาเรียนโดยการบันทึก “W”
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันเสาร์, 13 เมษายน 2567 - วันจันทร์, 15 เมษายน 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันมหาสงกรานต์
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันอังคาร, 16 เมษายน 2567 - วันพุธ, 17 เมษายน 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันมหาสงกรานต์
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพฤหัสบดี, 18 เมษายน 2567 - วันพฤหัสบดี, 2 พฤษภาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนเรียนล่วงหน้า
                      พิมพ์ใบโอนเงินผ่านทางธนาคารผ่านระบบ Intranet ภาค S/2567
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันศุกร์, 26 เมษายน 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสุดท้ายของการเรียนการสอน
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 29 เมษายน 2567 - วันพฤหัสบดี, 9 พฤษภาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันสอบปลายภาค (เว้นวันที่ 6 พฤษภาคม 2567)
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันเสาร์, 4 พฤษภาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดวันฉัตรมงคล
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันจันทร์, 6 พฤษภาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      หยุดชดเชยวันฉัตรมงคล
                    </td>
                  </tr>
                  <tr className="border ">
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      {" "}
                      วันพุธ, 8 พฤษภาคม 2567 - วันพุธ, 15 พฤษภาคม 2567
                    </td>
                    <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
                      วันลงทะเบียนล่าช้าโดยยกเว้นค่าธรรมเนียมปรับ/เพิ่มวิชา/ถอนรายวิชา/จองกลุ่มเรียน
                      (Waiting List) ผ่านระบบ Intranet ภาค S/2567
                      และชำระเงินผ่านทางธนาคาร
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
