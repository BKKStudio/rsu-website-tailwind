import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
export default function Reports() {
  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full mx-2">
            <div className="flex justify-between items-center">
              <Image
                src="/image/Logo_universe/Rsu_logo.png"
                alt=""
                width={300}
                height={200}
                className="max-md:w-2/3"
              />
              <div className="">
                <Link
                  href={""}
                  className="no-underline text-white p-3  rounded-lg bg-pink-600"
                >
                  สมัครเรียน
                </Link>
              </div>
            </div>
          </figure>
        </article>

        <article className="flex justify-center items-center  bg-sky-500">
            <figure  className="max-w-7xl  w-full my-3 mx-2 flex justify-between text-white">
            <span className="text-2xl max-md:text-xl">สมัครเรียน</span>
            </figure>
        </article>

        <article className="flex justify-center items-center ">
            <figure  className="max-w-7xl  w-full my-3 mx-2  text-pink-600">
            <div className="flex flex-col">
            <span className="text-3xl mb-3 max-md:text-xl">กำหนดการรายงานตัว</span>
            <p className="w-full h-0.5 bg-pink-600"></p>
            <div className="">
              <Image src={"/image/RsuGallery/gallary6.jpg"} alt="" width={1000} height={1000} className="w-full h-96 object-cover mb-3"></Image>
              <span className="flex items-center text-black"><h1 className="text-pink-600">-</h1>นักศึกษามารายงานตัวได้ที่ ศูนย์รับสมัครนักศึกษาใหม่ ตึก 1 อาคารอาทิตย์ อุไรรัตน์ ชั้น1 ตั้งแต่เวลา 9.00 -17.00 น. (จันทร์-ศุกร์)</span>
              <span className="flex items-center text-black"><h1 className="text-pink-600">-</h1>นักศึกษาต้องมารายงานตัวก่อนวันเปิดภาคเรียน 1-2/66 ภายในวันที่ 24 ส.ค. 66</span>
              <span className="flex items-center text-black mb-4"><h1 className="text-pink-600">-</h1>การแต่งกายชุดสุภาพหรือชุดนักเรียน</span>
              <span className="text-black text-2xl mt-3 max-md:text-xl ">สิ่งที่ต้องเตรียมและดำเนินการในวันรายงานตัว </span>
              <span className="flex items-center text-black mt-3 mb-2">1.แสดงใบเสร็จค่าสมัคร และค่าลงทะเบียน ให้กับเจ้าหน้าที่เคาน์เตอร์รับสมัคร</span>
              <span className="flex items-center text-black mb-2">2.ติดต่อเจ้าหน้าที่เคาน์เตอร์การเงิน (กรณีต้องชำระเพิ่มเติม)</span>
              <span className="flex items-center text-black mb-2">3.แสดงหลักฐานการสมัครเรียน ให้กับเจ้าหน้าที่เคาน์เตอร์ทะเบียน ดังนี้</span>
              <ul>
                <li className="text-black">- ใบรับรองเฉลี่ยสะสม(CGPA) 5 ภาคการศึกษา (ม.6, ปวช.3), 3 ภาคการศึกษา (ปวส.) หรือ สำเนาหลักฐานการสำเร็จการศึกษา ระดับ ม.6, ปวช.3, กศน. ม.6, ปวส.2หรือเทียบเท่า……………..จำนวน 2 ชุด</li>
                <li className="text-black">- สำเนาบัตรประจำตัวประชาชน…………….. จำนวน 1 ชุด</li>
                <li className="text-black">- สำเนาทะเบียนบ้าน……………..จำนวน 1 ชุด</li>
                <li className="text-black">- อื่นๆ ถ้ามี</li>
                <ul>
                <li className="text-black">- สำเนาใบเทียบวุฒิ (กรณีจบจากต่างประเทศ)……………..จำนวน 1 ชุด</li>
                <li className="text-black">- สำเนาหลักฐานการเปลี่ยนชื่อ-สกุล (ถ้ามี)……………..จำนวน 2 ชุด</li>
                </ul>
              </ul>
              <span className="flex items-center text-black mt-3 mb-2">4.ดำเนินการเรื่องทุนการศึกษา กับเจ้าหน้าที่เคาน์เตอร์ทุนการศึกษา *กรณีกู้เรียน</span>
              <span className="flex items-center text-black mb-2">5.ถ่ายรูปทำบัตรนักศึกษา จุดถ่ายรูป-ทำบัตร</span>
              <span className="flex items-center text-black mb-2">6.รับอุปกรณ์เรียน ห้องศูนย์หนังสือ</span>

              <span className="flex items-center text-black text-xl mt-5">ข้อกำหนดนี้ ใช้กับนักศึกษาที่สมัครเรียนผ่านออนไลน์ และนักศึกษาที่ยังทำขั้นตอนการสมัครเรียนยังไม่เสร็จสิ้น</span>
              <span className="flex items-center text-black mb-2 mt-2">****** เงื่อนไขเป็นไปตามที่มหาวิทยาลัยกำหนด</span>
            </div>
            
            </div>
            </figure>
        </article>
      
      </main>
      <Footer/>
    </>
  );
}
