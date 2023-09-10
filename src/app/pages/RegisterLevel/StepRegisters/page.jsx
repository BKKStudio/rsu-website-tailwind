import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

export default function StepRegistersPage() {
  return (
    <>
      <NavbarRegister />
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
          <span className="text-2xl max-md:text-xl">วิธีสมัครเรียน</span>
          <span className="text-xl max-md:text-base">
            หน้าแรก/ปริญญาตรี 2566
          </span>
        </figure>
      </article>

      <article className="flex justify-center items-center">
        <figure className="max-w-7xl  w-full my-3 mx-2 ">
          <div className="mt-3 flex justify-center">
            <Image
              src={"/image/RegisterPageimage/1.jpg"}
              alt=""
              width={1300}
              height={500}
            ></Image>
          </div>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-4">
            สมัครเรียนภาคปกติ:
          </p>
          <p className=" text-base max-md:text-sm text-red-500">
            <span className="text-black ">
              ปีการศึกษา 2567 (สำหรับผู้ที่กำลังศึกษาระดับ ม.6 ปวช. ปวส. )
            </span>
            สมัครและลงทะเบียน ตั้งแต่วันนี้เป็นต้นไป
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl ">
            การลงทะเบียน:
          </p>
          <p className=" text-base max-md:text-sm text-red-500">
            <span className="text-black "> สำหรับผู้ชำระด้วยตนเอง</span>
            การลงทะเบียน สามารถแบ่งชำระได้คือ งวดแรกชำระ 15,000 บาท
            ส่วนที่เหลือชำระก่อนเปิดภาคเรียน
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl ">
            วิธีการสมัคร:
          </p>
          <p className=" text-base max-md:text-sm text-red-500">
            <span className="text-black ">
              สมัครผ่านอินเทอร์เน็ตที่เว็บไซต์ :
            </span>
            <Link href={""}>Test</Link> ตามขั้นตอนดังนี้
          </p>

          <p className=" text-base max-md:text-sm text-red-500">
            <span className="text-black ">
              เข้าเมนูสมัครออนไลน์ ที่เว็บไซต์ :
            </span>
            <Link href={""}>Test</Link>
          </p>
          <p className=" text-base max-md:text-sm ">1.กรอกข้อมูลสมัครเรียน</p>
          <p className=" text-base max-md:text-sm ">
            2.พิมพ์ใบชำระเงินค่าสมัคร
          </p>
          <p className=" text-base max-md:text-sm ">
            3.ชำระเงินค่าสมัคร 200 บาท ได้ที่ 7-11 หรือ ตามธนาคารที่กำหนด
          </p>
          <p className=" text-base max-md:text-sm ">
            4.นำเอกสารสมัครเรียน เข้ามาสัมภาษณ์
            และลงทะเบียนรายงานตัวที่มหาวิทยาลัย
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
            มหาวิทยาลัยรังสิต:
          </p>
          <p className=" text-base max-md:text-sm">
            สำนักงานรับสมัครนักศึกษา ตึก 1 อาคารอาทิตย์ อุไรรัตน์ (BUILDING 1)
          </p>
          <p className=" text-base max-md:text-sm">
            มหาวิทยาลัยรังสิต 52 347 ถ. พหลโยธิน ตำบล หลักหก อำเภอเมืองปทุมธานี
            ปทุมธานี 12000
          </p>
          <p className=" text-base max-md:text-sm">โทร : 02-791-6000</p>
          <p className=" text-base max-md:text-sm">แฟ็กซ์ : 02-791-5577</p>
          <p className=" text-base max-md:text-sm">อีเมล : info@rsu.ac.th</p>
          <p className=" text-base max-md:text-sm">
            รับสมัครนักศึกษา : 02-791-5510 ต่อ 15
          </p>

          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
            หลักฐานการสมัคร:
          </p>
          <p className=" text-base max-md:text-sm">
            ใบรับรองเฉลี่ยสะสม(CGPA) 5 ภาคการศึกษา (ม.6, ปวช.3), 3 ภาคการศึกษา
            (ปวส.) หรือ สำเนาหลักฐานการสำเร็จการศึกษา ระดับ ม.6, ปวช.3, กศน.
            ม.6, ปวส.2
          </p>
          <p className=" text-base max-md:text-sm">
            สำเนาบัตรประจำตัวประชาชน................. จำนวน 1 ชุด
          </p>
          <p className=" text-base max-md:text-sm">
            สำเนาทะเบียนบ้าน.................จำนวน 1 ชุด
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">อื่นๆ:</p>
          <p className=" text-base max-md:text-sm">
            สำเนาใบเทียบวุฒิ (กรณีจบจากต่างประเทศ).................จำนวน 1 ชุด
          </p>
          <p className=" text-base max-md:text-sm">
            {" "}
            สำเนาหลักฐานการเปลี่ยนชื่อ-สกุล (ถ้ามี).................จำนวน 2 ชุด
          </p>
          <p className="text-gray-800 text-2xl max-md:text-xl mt-3">
            หมายเหตุ :
          </p>
          <p className=" text-base max-md:text-sm">
            เอกสารประกอบการสมัคร สำเนาเป็น A4 พร้อมรับรองสำเนาถูกต้องทุกฉบับ
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
            คุณสมบัติผู้สมัคร:
          </p>
          <p className=" text-base max-md:text-sm">
            ต้องสำเร็จการศึกษาไม่ต่ำกว่ามัธยมศึกษาตอนปลาย หรือเทียบเท่า
            หรือกำลังศึกษาอยู่ปีสุดท้ายของการศึกษา
          </p>
          <p className=" text-base max-md:text-sm">
            ไม่เป็นผู้วิกลจริต ไม่เป็นผู้มีโรคติดต่อร้ายแรง โรคที่สังคมรังเกียจ
            หรือโรคที่เป็นอุปสรรคต่อการศึกษา
          </p>
          <p className=" text-base max-md:text-sm">
            ไม่เป็นผู้ที่มีความประพฤติเสื่อมเสีย
            หรือถูกไล่ออกเนื่องจากถูกลงโทษทางวินัยจากสถาบันการศึกษาใดมาก่อน
          </p>
          <p className=" text-base max-md:text-sm">
            มีภูมิลำเนาที่พักอยู่เป็นหลักแหล่ง ซึ่งมหาวิทยาลัยสามารถติดต่อได้
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
            คุณสมบัติของผู้สมัครเข้าศึกษา:
          </p>
          <p className=" text-base max-md:text-sm">
            มหาวิทยาลัยจะสัมภาษณ์ที่ศูนย์รับสมัคร หรือสัมภาษณ์ผ่านระบบออนไลน์
            โดยจะแจ้งผลให้ทราบทันทีในวันเดียวกัน
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
            การสัมภาษณ์และการสอบความถนัดทางด้านวิชาชีพ:
          </p>
          <p className=" text-base max-md:text-sm">
            มหาวิทยาลัยจะสัมภาษณ์ที่ศูนย์รับสมัคร หรือสัมภาษณ์ผ่านระบบออนไลน์
            โดยจะแจ้งผลให้ทราบทันทีในวันเดียวกัน
          </p>
          <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
            เงื่อนไขต่างๆ ในการพิจารณาคัดเลือกบุคคลเข้าศึกษาในมหาวิทยาลัยรังสิต:
          </p>
          <p className=" text-base max-md:text-sm">
            หากผู้สมัครขาดคุณสมบัติข้อใดข้อหนึ่ง หรือพบว่าข้อมูลไม่เป็นความจริง
            มหาวิทยาลัยจะตัดสิทธิ์ในการสมัคร โดยไม่มีเงื่อนไขใดๆ ทั้งสิ้น
          </p>
          <p className=" text-base max-md:text-sm">
            หากผู้สมัครคนใดมีคุณสมบัติไม่ครบถ้วนตามที่ระบุไว้
            จะถือว่าการสมัครครั้งนี้เป็นโมฆะ
          </p>
          <p className=" text-base max-md:text-sm">
            หากผู้ที่มารายงานตัวเข้าศึกษาคนใดไม่สำเร็จการศึกษาในระดับมัธยมศึกษาตอนปลาย(ม.6)/ระดับประกาศนียบัตรวิชาชีพชั้นสูง(ปวส.)
            หรือเทียบเท่า
          </p>
          <p className=" text-base max-md:text-sm">
            มหาวิทยาลัยถือว่าการรายงานตัวเข้าศึกษาในครั้งนี้เป็นโมฆะ
          </p>
          <p className=" text-base max-md:text-sm">
            มหาวิทยาลัยขอสงวนสิทธิ์ในการคืนเงินให้ ไม่ว่ากรณีใดๆ ทั้งสิ้น
          </p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gTQ1D9aopAU?si=nM0gBul9AKEEGdzK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
    </>
  );
}
