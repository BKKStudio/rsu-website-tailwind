import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

export default function DocumentsPage() {
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
              เอกสารประกอบการยื่นคำขอกู้ยืม
            </span>
            <span className="text-xl max-md:text-xs">หน้าแรก/กยศ.</span>
          </figure>
        </article>

        <article className="flex justify-center items-center  ">
          <figure className="max-w-7xl  w-full my-3 mx-2">
            <div>
              <p className="text-2xl text-pink-600 max-md:text-xl">
                เอกสารประกอบการยื่นคำขอกู้ยืม
                กองทุนเงินให้กู้ยืมเพื่อการศึกษาแบบดิจิทัล ( DSL)
              </p>
            </div>
            <p className="bg-gray-600 w-full h-1"></p>
            <p className="text-xl max-md:text-base">
              1. หนังสือให้ความยินยอมในการเปิดเผยข้อมูล
              พร้อมแนบสำเนาบัตรประจำตัวประชาชน
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - ผู้กู้ยืม ,ผู้ปกครอง ,คู่สมรส (ถ้ามี)
            </p>
            <p className="text-xl max-md:text-base">
              2. เอกสารประกอบการรับรองรายได้ (ผู้ปกครอง)
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - กรณีมีรายได้ประจำ เช่น
              การทำงานที่ได้รับเงินเดือนเป็นประจำทุกเดือน (พนักงานของรัฐ /
              พนักงานโรงแรม พนักงานบริษัท )
              โดยต้องแนบสลิปเงินเดือน/หนังสือรับรองเงินเดือน
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - กรณีไม่มีรายได้ประจำ / ไม่มีรายได้ เช่น อาชีพค้าขาย อาชีพรับจ้าง
              เกษตรกร ใช้ แบบฟอร์ม กยศ.102
              พร้อมแนบสำเนาบัตรประจำตัวเจ้าหน้าที่ของรัฐ / ข้าราชการ /
              หัวหน้าสถานศึกษา{" "}
            </p>
            <p className="text-xl max-md:text-base">
              3. เอกสารรับรองสถานภาพครอบครัว ของผู้ขอกู้ยืมเงิน
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - กรณีบิดาและมารดา แยกทางกัน โดยไม่มีใบหย่าหรือไม่ได้จดทะเบียนสมรส
              ใช้ หนังสือรับรองสถานภาพครอบครัว
              พร้อมแนบสำเนาบัตรประจำตัวเจ้าหน้าที่ของรัฐ / ข้าราชการ /
              หัวหน้าสถานศึกษา
            </p>

            <p className="text-xl max-md:text-base underline">
            หมายเหตุ
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - ผู้กู้ยืมต้องเตรียมเอกสารเพื่อทำการ Upload ในระบบ DSL ให้มีความครบถ้วนสมบูรณ์ เห็นรายละเอียดชัดเจนโดยสามารถใช้โทรศัพท์มือถือถ่ายภาพเอกสารแทนการสแกนเอกสารได้
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -  ระบบรองรับไฟล์สกุล PDF / JPEG / GIF / TIFF / PNG ขนาดไม่เกิน 10 MB 
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - ชื่อเจ้าของเอกสารต้องเป็นบุคคลเดียวกันกับที่จะบันทึกในระบบ
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - สำเนาบัตรประจำตัวต้องรับรองสำเนาถูกต้องโดยเจ้าของเอกสาร
            </p>
            <p className="text-xl max-md:text-base ">
            สามารถดูรายละเอียดเพิ่มเติมได้ที่ :<span className="text-gray-600 text-sm max-md:text-sm"><Link href={"https://www.studentloan.or.th/th/highlight/1622797834"}>https://www.studentloan.or.th/th/highlight/1622797834</Link></span>
            </p>
            
            <p className="text-xl max-md:text-base ">
            บุคคลใดเป็นผู้รับรองรายได้ ได้บ้าง?
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - เจ้าหน้าที่ของรัฐหรือเจ้าหน้าที่ของรัฐผู้รับบำเหน็จบำนาญ ตามพระราชบัญญัติบัตรประจำตจัวเจ้าหน้าที่ของรัฐ พ.ศ.2542
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - สมาชิกสภาเขต สมาชิกสภากรุงเทพมหานคร / ผู้ว่าราชการกรุงเทพมหานคร
            </p>
            <p className="text-xl max-md:text-base ">
            เจ้าหน้าที่ของรัฐ ได้แก่ใครบ้าง? 
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - ข้าราชการเมือง
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -ข้าราชการกรุงเทพมหานคร
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -  ข้าราชการครู
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - ข้าราชการตำรวจ
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - ข้าราชการทหาร
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -ข้าราชการฝ่ายตุลาการ
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -ข้าราชการฝ่ายรัฐสภา
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -ข้าราชการฝ่ายอัยการ
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -ข้าราชการพลเรือน
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -ข้าราชการพลเรือนในมหาวิทยาลัย
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -สมาชิกสภาผู้แทนราษฎร และสมาชิกวุฒิสภา
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - สมาชิกสภาท้องถิ่น และหรือผู้บริหารท้องถิ่น
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              - กำนัน ผู้ใหญ่บ้าน แพทย์ประจำตำบล สารวัตรกำนัน และผู้ช่วยผู้ใหญ่บ้าน
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -เจ้าหน้าที่หรือพนักงานของรัฐวิสาหกิจ องค์การของรัฐ หรือองค์การมหาชน
            </p>
            <p className="text-xl max-md:text-base ">
            ผู้แทนโดยชอบธรรมคือใคร?
            </p>
            <p className="text-gray-600 text-sm max-md:text-sm">
              -บิดา มารดา หรือผู้ปกครอง
            </p>
          </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
