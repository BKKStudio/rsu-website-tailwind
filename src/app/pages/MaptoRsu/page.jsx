import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

export default function MaptoRsu() {
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
            <span className="text-2xl max-md:text-xl">เส้นทางมา ม.รังสิต</span>
            <span className="text-xl max-md:text-base">
              หน้าแรก / <Link href={"/pages/MapInRsu"} className="underline text-white ">แผนที่ใน ม.รังสิต</Link>
            </span>
          </figure>
        </article>

        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full my-3 mx-2 ">
            <div>
              <p className="text-pink-600 text-2xl max-md:text-base ">
                เส้นทางมา ม.รังสิต | Directions to RSU
              </p>
              <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.9050690013105!2d100.58411927595573!3d13.96425589233751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2816f1377fc17%3A0x63d330b7f8af6e16!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1694355174164!5m2!1sth!2sth"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-96 max-md:p-2"
            ></iframe>
            <Image
              src="/image/MaptoRsu/RSU-MAP.jpg"
              width={1000}
              height={500}
              alt=""
              className="w-full mt-3"
            ></Image>
            <p className=" text-base max-md:text-sm mt-1">
              มหาวิทยาลัยรังสิตตั้งอยู่เลขที่ 52/347 หมู่บ้านเมืองเอก ถ.พหลโยธิน
              ต.หลักหก อ.เมือง จ.ปทุมธานี 12000
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            <p className="text-pink-600 text-2xl max-md:text-xl mt-3">
              การเดินทางมา มหาวิทยาลัยรังสิต :
            </p>
            <p className="text-black text-xl max-md:text-xl mt-3">
              1. จากอนุสาวรีย์ชัยสมรภูมิ มา มหาวิทยาลัยรังสิต เดินทางโดย
            </p>
            <p className=" text-base max-md:text-sm">1.1 รถโดยสารประจำทาง</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 510 (พระประแดง - รังสิต) ใช้เส้นทางถ.วิภาวดีรังสิต
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 29, สาย 529 (ม.ธรรมศาสตร์รังสิต - หัวลำโพง)
                ใช้เส้นทางถ.วิภาวดีรังสิต
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 503 (สถานีขนส่งสายใต้ใหม่ - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 34 (หัวลำโพง - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (อนุสาวรีย์ชัยสมรภูมิ - ม.ธรรมศาสตร์รังสิต)
                ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (รถปรับอากาศ) (สนามหลวง - รังสิต) ใช้เส้นทางถ. พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 59 (สนามหลวง - รังสิต)
                ใช้เส้นทางถ.พหลโยธินและถ.วิภาวดีรังสิต
              </p>
            </div>
            <p className=" text-base max-md:text-sm">1.2 รถตู้ร่วมบริการ</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 83 (อนุสาวรีย์ชัยสมรภูมิ - ฟิวเจอร์ ปาร์ค รังสิต)
                ใช้เส้นทางถ.พหลโยธิน (จอดหน้ารพ.ราชวิถี)
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 84 (อนุสาวรีย์ชัยสมรภูมิ - ราชมงคล) ใช้เส้นทางถ.พหลโยธิน
                (จอดหน้าภัตตาคารพงหลี)
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 85 (อนุสาวรีย์ชัยสมรภูมิ - ม.ธรรมศาสตร์รังสิต)
                ใช้เส้นทางถ.พหลโยธิน (ป้ายรถเมล์ฝั่งเดียวกับ ร.พ.พระมงกุฎเกล้า)
              </p>
            </div>
            <p className=" text-base max-md:text-sm">หมายเหตุ:</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากดอนเมืองถึงป้ายรถเมล์หน้า หมู่บ้านเมืองเอกประมาณ 3 กิโลเมตร
              โดยสังเกตได้จากหัวมุมซอยพหลโยธิน 87 จะมีธนาคารทหารไทย
              สาขาย่อยตลาดสี่มุมเมือง ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2
              กิโลเมตรจากปากซอย โดยท่านสามารถเลือกโดยสารได้ 2 ทางเลือกคือ
              รถสองแถว หรือ รถจักรยานยนตร์รับจ้าง
              ก็จะมาถึงด้านในของมหาวิทยาลัยรังสิตทันที
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className=" text-base max-md:text-sm">1.3 รถยนต์ส่วนตัว</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ใช้เส้นทางสามเหลี่ยมดินแดง ถนนวิภาวดีรังสิต
              โดยวิ่งตรงผ่านท่าอากาศยานสนามบินดอนเมือง
              (ดินแดงมาถึงดอนเมืองระยะทางประมาณ 26 กิโลเมตร)
              ชิดซ้ายเข้าทางคู่ขนานผ่านอนุสรณ์สถานแห่งชาติทางด้านตรงข้ามขวามือ
              แล้วจะเจอตลาดสี่มุมเมืองทางด้านซ้ายมือและเซียร์รังสิตทางขวามือ
              ตรงมาประมาณ 200 เมตร ท่านจะปั้ม ESSO
              ให้รีบชิดซ้ายเพื่อเลี้ยวซ้ายเช้าซอยพหลโยธิน 87
              (ธนาคารทหารไทยอยู่หัวมุมถนน)
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>

            <p className="text-black text-xl max-md:text-xl mt-3">
              2. จากสยามสแควร์ มา มหาวิทยาลัยรังสิต เดินทางโดย
            </p>
            <p className=" text-base max-md:text-sm">2.1 รถโดยสารประจำทาง</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 29 (ม.ธรรมศาสตร์รังสิต - หัวลำโพง) ใช้เส้นทางถ.วิภาวดีรังสิต
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 34 (หัวลำโพง - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
            </div>
            <p className=" text-base max-md:text-sm">หมายเหตุ:</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ท่านสามารถขึ้นรถโดยสารประจำทางหน้าห้างสรรพสินค้ามาบุญครอง (MBK)
              จากดอนเมืองถึงป้ายรถเมล์หน้าหมู่บ้านเมืองเอกประมาณ 3 กิโลเมตร
              โดยสังเกตได้จากหัวมุมซอยพหลโยธิน 87 จะมีธนาคารทหารไทย
              สาขาย่อยตลาดสี่มุมเมือง ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2
              กิโลเมตรจากปากซอย โดยท่านสามารถเลือกโดยสารได้ 2 ทางเลือกคือ
              รถสองแถว หรือ รถจักรยานยนตร์รับจ้าง
              ก็จะมาถึงด้านในของมหาวิทยาลัยรังสิตทันที
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className=" text-base max-md:text-sm">2.2 รถยนต์ส่วนตัว</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ใช้เส้นทางถนนพญาไท เริ่มจากสี่แยกปทุมวัน ตรงมาอนุสาวรีย์ชัยสมรภูมิ
              และใช้เส้นทางสามเหลี่ยมดินแดง ถนนวิภาวดีรังสิต
              โดยวิ่งตรงผ่านท่าอากาศยานสนามบินดอนเมือง
              (ดินแดงมาถึงดอนเมืองระยะทางประมาณ 26 กิโลเมตร)
              ชิดซ้ายเข้าทางคู่ขนานผ่านอนุสรณ์สถานแห่งชาติทางด้านตรงข้ามขวามือ
              แล้วจะเจอตลาดสี่มุมเมืองทางด้านซ้ายมือและเซียร์รังสิตทางขวามือ
              ตรงมาประมาณ 200 เมตร ท่านจะเห็นปั้ม ESSO
              ให้รีบชิดซ้ายเพื่อเลี้ยวซ้ายเช้าซอยพหลโยธิน 87
              (ธนาคารทหารไทยอยู่หัวมุมถนน)
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            <p className="text-black text-xl max-md:text-xl mt-3">
              3. จากสนามหลวง มา มหาวิทยาลัยรังสิต เดินทางโดย
            </p>
            <p className=" text-base max-md:text-sm">3.1 รถโดยสารประจำทาง</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 503 (สถานีขนส่งสายใต้ใหม่ - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 59 (สนามหลวง - รังสิต)
                ใช้เส้นทางถ.พหลโยธินและถ.วิภาวดีรังสิต
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (รถปรับอากาศ) (สนามหลวง - รังสิต) ใช้เส้นทางถ. พหลโยธิน
              </p>
            </div>
            <p className=" text-base max-md:text-sm">หมายเหตุ:</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากดอนเมืองถึงป้ายรถเมล์หน้าหมู่บ้านเมืองเอกประมาณ 3 กิโลเมตร
              โดยสังเกตได้จากหัวมุมซอยพหลโยธิน 87 จะมีธนาคารทหารไทย
              สาขาย่อยตลาดสี่มุมเมือง ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2
              กิโลเมตรจากปากซอย โดยท่านสามารถเลือกโดยสารได้ 2 ทางเลือกคือ
              รถสองแถว หรือ รถจักรยานยนต์รับจ้าง
              ก็จะมาถึงด้านในของมหาวิทยาลัยรังสิตทันที
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className=" text-base max-md:text-sm">3.2 รถยนต์ส่วนตัว</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ใช้เส้นทางถนนราชดำเนิน มุ่งตรงลานพระบรมรูปทรงม้า
              เลี้ยวขวาเข้าถนนศรีอยุธยา เลี้ยวซ้ายถนนพญาไท
              ตรงไปอนุสาวรีย์ชัยสมรภูมิ และใช้เส้นทางสามเหลี่ยมดินแดง
              ถนนวิภาวดีรังสิต โดยวิ่งตรงผ่านท่าอากาศยานสนามบินดอนเมือง
              (ดินแดงมาถึงดอนเมืองระยะทางประมาณ 26 กิโลเมตร)
              ชิดซ้ายเข้าทางคู่ขนานผ่านอนุสรณ์สถานแห่งชาติทางด้านตรงข้ามขวามือ
              แล้วจะเจอตลาดสี่มุมเมืองทางด้านซ้ายมือและเซียร์รังสิตทางขวามือ
              ตรงมาประมาณ 200 เมตร ท่านจะพบปั้ม ESSO
              ให้รีบชิดซ้ายเพื่อเลี้ยวซ้ายเช้าซอยพหลโยธิน 87
              (ธนาคารทหารไทยอยู่หัวมุมถนน)
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            <p className="text-black text-xl max-md:text-xl mt-3">
              4. จากสถานีรถไฟฟ้า BTS สถานีหมอชิต มา มหาวิทยาลัยรังสิต เดินทางโดย
            </p>
            <p className=" text-base max-md:text-sm">4.1 รถโดยสารประจำทาง</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 510 (พระประแดง - รังสิต) ใช้เส้นทางถ.วิภาวดีรังสิต
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 29 (ม.ธรรมศาสตร์รังสิต - หัวลำโพง) ใช้เส้นทางถ.วิภาวดีรังสิต
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 503 (สถานีขนส่งสายใต้ใหม่ - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 34 (หัวลำโพง - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (อนุสาวรีย์ชัยสมรภูมิ - ม.ธรรมศาสตร์รังสิต)
                ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 59 (สนามหลวง - รังสิต)
                ใช้เส้นทางถ.พหลโยธินและถ.วิภาวดีรังสิต
              </p>
            </div>
            <p className=" text-base max-md:text-sm">4.2 รถตู้ร่วมบริการ</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              สาย 83 (อนุสาวรีย์ชัยสมรภูมิ - ฟิวเจอร์ ปาร์ค รังสิต)
              ใช้เส้นทางถ.พหลโยธิน (จอดหน้าร.พ.ราชวิถี)
            </p>
            <p className=" text-base max-md:text-sm">หมายเหตุ:</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากดอนเมืองถึงป้ายรถเมล์หน้าหมู่บ้านเมืองเอกประมาณ 3 กิโลเมตร
              โดยสังเกตได้จากหัวมุมซอยพหลโยธิน 87 จะมีธนาคารทหารไทย
              สาขาย่อยตลาดสี่มุมเมือง ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2
              กิโลเมตรจากปากซอย โดยท่านสามารถเลือกโดยสารได้ 2 ทางเลือกคือ
              รถสองแถว หรือ รถจักรยานยนตร์รับจ้าง
              ก็จะมาถึงด้านในของมหาวิทยาลัยรังสิตทันที
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className=" text-base max-md:text-sm">4.3 รถยนต์ส่วนตัว</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ท่านสามารถใช้เส้นทาง Tollway ด่านหน้าอาคารสำนักงานใหญ่
              บริษัทการปิโตรเลียมแห่งประเทศไทย โดยลงถนนวิภาวดีรังสิต
              ด่านรังสิต-ลำลูกกา (จากบริษัท
              การปิโตรเลียมแห่งประเทศไทยถึงลำลูกกาประมาณ 15 กิโลเมตร)
              ชิดซ้ายเข้าทางคู่ขนานผ่านอนุสรณ์สถานแห่งชาติทางด้านตรงข้ามขวามือ
              แล้วจะพบตลาดสี่มุมเมืองทางด้านซ้ายมือและเซียร์รังสิตทางขวามือ
              ตรงมาประมาณ 200 เมตร ท่านจะพบปั้ม ESSO
              ให้รีบชิดซ้ายเพื่อเลี้ยวซ้ายเช้าซอยพหลโยธิน 87
              (ธนาคารทหารไทยอยู่หัวมุมถนน)
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            <p className="text-black text-xl max-md:text-xl mt-3">
              5. จากมหาวิทยาลัยเกษตรศาสตร์ (ฝั่งถนนพหลโยธิน) มา
              มหาวิทยาลัยรังสิต เดินทางโดย
            </p>
            <p className=" text-base max-md:text-sm">5.1 รถโดยสารประจำทาง</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 520 (ม.รามคำแหง - ตลาดไทรังสิต) ใช้เส้นถ. พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (อนุสาวรีย์ชัยสมรภูมิ - ม.ธรรมศาสตร์รังสิต)
                ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (รถปรับอากาศ) (สนามหลวง - รังสิต) ใช้เส้นทางถ. พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 34 (หัวลำโพง - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 503 (สถานีขนส่งสายใต้ใหม่ - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 34 (หัวลำโพง - รังสิต) ใช้เส้นทางถ.พหลโยธิน
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 95 ก (ม.รามคำแหง - รังสิต)
                ใช้เส้นทางถ.พหลโยธินและถ.วิภาวดีรังสิต
              </p>
            </div>
            <p className=" text-base max-md:text-sm">5.2 รถตู้ร่วมบริการ</p>
            <div className="grid grid-cols-2  max-md:grid-cols-1">
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 83 (อนุสาวรีย์ชัยสมรภูมิ - ฟิวเจอร์ ปาร์ค รังสิต)
                ใช้เส้นทางถ.พหลโยธิน (จอดหน้ารพ.ราชวิถี)
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 84 (อนุสาวรีย์ชัยสมรภูมิ - ราชมงคล) ใช้เส้นทางถ.พหลโยธิน
                (จอดหน้าภัตตาคารพงหลี)
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 39 (มีนบุรี - ฟิวเจอร์ ปาร์ค รังสิต) ใช้เส้นทางถ.พหลโยธิน
                (จอดหน้าตลาดมีนบุรี)
              </p>
              <p className="text-gray-600 text-base max-md:text-sm">
                สาย 94 (ม.รามคำแหง - รังสิต) ใช้เส้นทางถ.พหลโยธิน
                (จอดหน้าเดอะมอลล์ รามฯ)
              </p>
            </div>
            <p className=" text-base max-md:text-sm">หมายเหตุ:</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากดอนเมืองถึงป้ายรถเมล์หน้าหมู่บ้านเมืองเอกประมาณ 3 กิโลเมตร
              โดยสังเกตได้จากหัวมุมซอยพหลโยธิน 87 จะมีธนาคารทหารไทย
              สาขาย่อยตลาดสี่มุมเมือง ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2
              กิโลเมตรจากปากซอย โดยท่านสามารถเลือกโดยสารได้ 2 ทางเลือกคือ
              รถสองแถว หรือ รถจักรยานยนตร์รับจ้าง
              ก็จะมาถึงด้านในของมหาวิทยาลัยรังสิตทันที
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className=" text-base max-md:text-sm">5.3 รถยนต์ส่วนตัว</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากมหาวิทยาลัยเกษตรศาสตร์ (ฝั่งถนนพหลโยธิน) ขับตรงมาประมาณ 1
              กิโลเมตร ให้ชิดขวาเพื่อลอดอุโมงค์อนุสาวรีย์หลักสี่
              มุ่งหน้าถนนสะพานใหม่ ขับตรงประมาณ 2-3 กิโลเมตร
              จะพบอนุสรณ์สถานแห่งชาติอยู่ทางซ้ายมือ ให้ขึ้นสะพานข้ามมายังรังสิต
              ท่านจะพบเมอร์รี่คิง รังสิตอยู่ทางสุดสะพานทางด้านซ้ายมือ
              ขับตรงมาจะพบตลาดสี่มุมเมืองทางด้านซ้ายมือและเซียร์รังสิตทางขวามือ
              ตรงอีกมาประมาณ 200 เมตร ท่านจะพบปั้ม ESSO
              ให้รีบชิดซ้ายเพื่อเลี้ยวซ้ายเช้าซอยพหลโยธิน 87
              (ธนาคารทหารไทยอยู่หัวมุมถนน)
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className=" text-base max-md:text-sm">5.3 รถยนต์ส่วนตัว</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากมหาวิทยาลัยเกษตรศาสตร์ (ฝั่งถนนพหลโยธิน) ขับตรงมาประมาณ 1
              กิโลเมตร ให้ชิดขวาเพื่อลอดอุโมงค์อนุสาวรีย์หลักสี่
              มุ่งหน้าถนนสะพานใหม่ ขับตรงประมาณ 2-3 กิโลเมตร
              จะพบอนุสรณ์สถานแห่งชาติอยู่ทางซ้ายมือ ให้ขึ้นสะพานข้ามมายังรังสิต
              ท่านจะพบเมอร์รี่คิง รังสิตอยู่ทางสุดสะพานทางด้านซ้ายมือ
              ขับตรงมาจะพบตลาดสี่มุมเมืองทางด้านซ้ายมือและเซียร์รังสิตทางขวามือ
              ตรงอีกมาประมาณ 200 เมตร ท่านจะพบปั้ม ESSO
              ให้รีบชิดซ้ายเพื่อเลี้ยวซ้ายเช้าซอยพหลโยธิน 87
              (ธนาคารทหารไทยอยู่หัวมุมถนน)
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className="text-black text-xl max-md:text-xl mt-3">
              6. จากฟิวเจอร์ ปาร์ค รังสิตหรือเมเจอร์ รังสิต มา มหาวิทยาลัยรังสิต
              (ด้านจ.ปทุมธานี)
            </p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ท่านสามารถขึ้นรถเมล์หน้าฟิวเจอร์ ปาร์ค
              รังสิตหรือด้านข้างของเมเจอร์ รังสิต โดยลงรถเมล์หน้าร้านโชคชัย
              สเต็ก เฮ้าส์ และข้ามสะพานลอยมาหน้าหมู่บ้านเมืองเอก (ซอยพหลโยธิน
              87) มีธนาคารทหารไทย สาขาตลาดสี่มุมเมืองอยู่หัวมุมถนน
              ระยะทางมามหาวิทยาลัยรังสิตเดินทางประมาณ 2 กิโลเมตรจากปากซอย
              ซึ่งท่านสามารถเดินทางโดยรถสองแถว หรือรถมอเตอร์ไซด์รับจ้าง
              ซึ่งระหว่างเดินทางเข้ามาจะมีป้ายบอกทางอยู่ตลอดระยะ
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
            <p className="text-black text-xl max-md:text-xl mt-3">
              7. จากห้าแยกปากเกร็ด มา มหาวิทยาลัยรังสิต
            </p>
            <p className="text-gray-600 text-base max-md:text-sm">
              ท่านสามารถเดินทางด้วยรถยนต์ส่วนตัวจากห้าแยกปากเกร็ดมามหาวิทยาลัยรังสิต
              เนื่องจากเส้นทางด้านล่างนี้เป็นเส้นทางลัดเพื่อเข้าสู้ด้านหลังของหมู่บ้านเมืองเอก
              จึงไม่มีรถเมล์โดยสารประจำทาง{" "}
              <span className="text-blue-700">
                มี 2 เส้นทางให้ท่านเลือกใช้ ดังนี้
              </span>
            </p>
            <p className=" text-base max-md:text-sm">7.1 โดยถนนแจ้งวัฒนะ</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากห้าแยกปากเกร็ดมามหาวิทยาลัยรังสิตโดยใช้ถนนแจ้งวัฒนะ
              ระยะทางประมาณ 20 กิโลเมตร
              จากห้าแยกปากเกร็ดเลือกใช้เส้นทางถนนแจ้งวัฒนะ ขับตรงมาอีกประมาณ 9
              กิโลเมตร ผ่านเมืองทองธานี (ด้านซ้ายมือ) ลอดใต้ทางด่วน
              (ด่านแจ้งวัฒนะ) และตรงไป และเลี้ยวซ้ายก่อนข้ามคลองประปา
              เพื่อเข้าถนนเลียบคลองประปา จะมีป้ายบอกทางมหาวิทยาลัยรังสิต
              (เส้นทางจะเป็นถนนสองเลนวิ่งสวนกัน โปรดขับขี่ด้วยความระมัดระวัง)
              วิ่งตรงประมาณ 4.3 กิโลเมตรจนพบสี่แยกไฟแดง (สี่แยกศรีสมาน)
              ให้เลี้ยวขวา จากนั้นประมาณ 350 เมตร ให้เลี้ยวซ้ายที่แยกเล็กอันแรก
              แล้ววิ่งตรงอย่างเดียวประมาณ 3.5 กิโลเมตร
              จนสุดทางก็จะพบทางเข้าด้านหลังของหมู่บ้านเมืองเอก
              เลี้ยวซ้ายแล้วกลับรถทันที ขับตรงมาเรื่อยๆ เป็นระยะทางประมาณ 1
              กิโลเมตร แล้วจะพบวงเวียนก็ขับตรงต่อไปอีก ประมาณ 400 เมตร
              จะพบป้อมตำรวจอยู่ทางซ้ายมือ ฝั่งตรงข้ามมี 7-Eleven
              และเลี้ยวซ้ายตรงจุดนี้อีก 150 เมตร
              ท่านก็จะพบมหาวิทยาลัยรังสิตอยู่ซ้ายมือ
            </p>
            <p className=" text-base max-md:text-sm">7.2 โดยถนนติวานนท์</p>
            <p className="text-gray-600 text-base max-md:text-sm">
              จากห้าแยกปากเกร็ดมามหาวิทยาลัยรังสิตโดยใช้ถนนติวานนท์
              ระยะทางประมาณ 22 กิโลเมตร
              จากห้าแยกปากเกร็ดขับตรงเข้าสู่ถนนติวานนท์ ประมาณ 15 กิโลเมตร
              จะพบสี่แยกสวนสมเด็จให้เลี้ยวขวา อีกประมาณ 5
              กิโลเมตรจนพบสี่แยกศรีสมานและคลองประปา ให้ขับตรงข้ามแยกไป
              และอีกประมาณ 350 เมตรให้เลี้ยวซ้ายที่แยกเล็กอันแรก
              แล้ววิ่งตรงอย่างเดียวประมาณ 3.5 กิโลเมตร
              จนสุดทางก็จะพบทางเข้าด้านหลังของหมู่บ้านเมืองเอก
              เลี้ยวซ้ายแล้วกลับรถทันที ขับตรงมาเรื่อยๆ เป็นระยะทางประมาณ 1
              กิโลเมตร แล้วจะพบวงเวียนก็ขับตรงต่อไปอีก ประมาณ 400 เมตร
              จะพบป้อมตำรวจอยู่ทางซ้ายมือ ฝั่งตรงข้ามมี 7-Eleven
              และเลี้ยวซ้ายตรงจุดนี้อีก 150 เมตร
              ท่านก็จะพบมหาวิทยาลัยรังสิตอยู่ซ้ายมือ
            </p>
            <p className="bg-pink-600 w-full h-0.5 mt-3"></p>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
