import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
export default function Scholarships() {
  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full my-3 mx-2  text-pink-600">
            <div className="flex flex-col">
              <span className="text-3xl mb-3 max-md:text-xl flex items-center">
                <BsChevronRight size={25} />
                ทุนการศึกษา | Scholarships
              </span>
              <p className="w-full h-0.5 bg-pink-600 mb-5"></p>
              <div className="">
                <Image
                  src={"/image/RsuGallery/gallery1.jpg"}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-96 object-cover mb-5"
                ></Image>
                <span className="flex items-center text-lg mb-5 text-black">
                  มหาวิทยาลัยรังสิต
                  ได้เล็งเห็นถึงความสำคัญของการศึกษาแก่เยาวชนของชาติ
                  เพื่อให้นักเรียนที่เรียนดีหรือมีความสามารถพิเศษ
                  ได้มีโอกาสศึกษาต่อในระดับอุดมศึกษา ดังนั้น
                  ผู้สมัครที่มีผลการเรียนดีเป็นไปตามเกณฑ์ที่กำหนด
                  สามารถสมัครเพื่อขอรับทุนการศึกษา
                  โดยมหาวิทยาลัยรังสิตจะให้ทุนการศึกษา จำนวนกว่า 500 ทุน
                  (ไม่รวมกองทุนเงินให้กู้ยืมเพื่อการศึกษา) ดังนี้
                </span>
                <div>
                  <li className="text-3xl mb-3 max-md:text-xl flex items-center">
                    <BsChevronRight size={25} />
                    ทุนความสามารถพิเศษ
                  </li>
                  <p className="w-full h-0.5 bg-pink-600"></p>
                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านกีฬา****
                    </li>
                    <li> ****ทุนความสามารถพิเศษด้านฟุตบอล ***</li>
                    <li className="text-gray-600">
                      เป็นนักกีฬาทีมชาติ
                      หรือเป็นนักกีฬาที่ผ่านการแข่งขันในระดับนานาชาติ
                      การแข่งขันระดับชาติ การแข่งขันกีฬาเยาวชนแห่งชาติ
                      การแข่งขันกีฬาต่าง ๆ ที่องค์กร
                      หรือสมาคมที่จดทะเบียนถูกต้อง
                      ตามกฎหมายจัดขึ้นและมีผลการแข่งขันอยู่ในอันดับที่ 1 , 2 และ
                      3 ย้อนหลังไม่เกิน 3 ปี ในปัจจุบัน ที่มีผลงานดีเด่น ***
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      <Link href={"https://www.facebook.com/SportsRsu"}>
                        สถาบันกีฬา มหาวิทยาลัยรังสิต
                      </Link>{" "}
                      หรือโทร 02-791-6000 ต่อ 3910
                    </li>
                  </ul>

                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านศิลปวัฒนธรรม****
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -ผู้สมัครต้องมีความสามารถโดดเด่นทางด้านการแสดงศิลปวัฒนธรรม
                      และจะต้องมีผลงานย้อนหลัง ไม่เกิน 3 ปี
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -สำเร็จการศึกษา ม.6 หรือ เทียบเท่า
                      หรือในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือในระบบ
                      ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) มีผลการเรียนไม่ต่ำกว่า
                      2.50 เข้าศึกษาในมหาวิทยาลัยรังสิต
                      ในคณะ/สาขาวิชาที่กำหนดไว้ ปีการศึกษา 2565
                      หรือนักศึกษาที่กำลังศึกษาอยู่ในปัจจุบันที่มี ผลงานดีเด่น
                    </li>
                    <li className="text-gray-600">
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      สถาบันส่งเสริมศิลปวัฒนธรรม มหาวิทยาลัยรังสิต 02-791-6000
                      ต่อ 1682
                    </li>
                  </ul>
                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านดนตรี****
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -มีความสามารถพิเศษด้านดนตรี ประเภทต่าง ๆ
                      และเข้าเรียนในวิทยาลัยดนตรีเท่านั้น คัดเลือกโดย
                      ผ่านการคัดเลือก จากวิทยาลัยดนตรีถือว่าเป็นที่สิ้นสุด
                    </li>
                    <li className="text-gray-600">
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      <Link href={"https://www.facebook.com/rsumusic"}>
                        วิทยาลัยดนตรี มหาวิทยาลัย รังสิต Rangsit University
                        Conservatory of Music
                      </Link>{" "}
                      หรือโทร 02-791-6000 ต่อ 6259
                    </li>
                  </ul>
                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านดนตรี****
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -มีความสามารถพิเศษด้านดนตรี ประเภทต่าง ๆ
                      และเข้าเรียนในวิทยาลัยดนตรีเท่านั้น คัดเลือกโดย
                      ผ่านการคัดเลือก จากวิทยาลัยดนตรีถือว่าเป็นที่สิ้นสุด
                    </li>
                    <li className="text-gray-600">
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      <Link href={"https://www.facebook.com/rsumusic"}>
                        วิทยาลัยดนตรี มหาวิทยาลัย รังสิต Rangsit University
                        Conservatory of Music
                      </Link>{" "}
                      หรือโทร 02-791-6000 ต่อ 6259
                    </li>
                  </ul>

                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านนิเทศศาสตร์****
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -ผู้สมัครต้องมีความสามารถพิเศษทางด้านนิเทศศาสตร์และงานสื่อสารมวลชน
                      มีผลการเชิงประจักษ์ และการเข้าร่วมแข่งขัน
                      ผลิตผลงานด้านนิเทศศาสตร์
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -สำเร็จการศึกษา ม.6 หรือ เทียบเท่า
                      หรือในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือในระบบ
                      ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) มีผลการเรียนไม่ต่ำกว่า
                      2.00 เข้าศึกษาในมหาวิทยาลัยรังสิต วิทยาลัยนิเทศศาสตร์
                      ปีการศึกษา 2565 เท่านั้น
                    </li>
                    <li className="text-gray-600">
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      <Link href={"https://www.facebook.com/NitadeRSU"}>
                        วิทยาลัยนิเทศศาสตร์ มหาวิทยาลัยรังสิต Communication Arts
                        RSU
                      </Link>{" "}
                      หรือโทร 02-791-6000 ต่อ 4672
                    </li>
                  </ul>

                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านสิ่งประดิษฐ์
                      และด้านกิจกรรมนอกหลักสูตร และอื่น ๆ 3923****
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -ผู้สมัครต้องมีความสามารถด้านสิ่งประดิษฐ์
                      ต้องได้รับรางวัลในการประกาวระดับนานาชาติ
                      การประกวดระดับชาติ ระดับเยาวชนแห่งชาติ
                      และต้องมีผลงานย้อนหลังไม่เกิน 3 ปี
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -สำเร็จการศึกษา ม.6 หรือ เทียบเท่า
                      หรือในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือในระบบ
                      ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) มีผลการเรียนไม่ต่ำกว่า
                      2.50 เข้าศึกษาในมหาวิทยาลัยรังสิต
                      ในคณะ/สาขาวิชาที่กำหนดไว้ ปีการศึกษา 2565
                      หรือนักศึกษาที่กำลังศึกษาอยู่ในปัจจุบันที่มี ผลงานดีเด่น
                    </li>
                    <li className="text-gray-600">
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      <Link href={"https://www.facebook.com/rsustudentaffairs"}>
                        สำนักงานกิจการนักศึกษา มหาวิทยาลัยรังสิต
                      </Link>{" "}
                      หรือโทร 02-791-6000 ต่อ 3921
                    </li>
                  </ul>

                  <ul className="text-black mb-4">
                    <li className="text-black  text-xl">
                      ****ทุนความสามารถพิเศษด้านครีเอเตอร์****
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -สำเร็จการศึกษา ม.6 หรือ เทียบเท่า
                      หรือในระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือในระบบ
                      ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) มีผลการเรียนไม่ต่ำกว่า
                      2.00 เข้าศึกษาในมหาวิทยาลัยรังสิต
                      ในคณะ/สาขาวิชาที่กำหนดไว้ ปีการศึกษา 2565
                      หรือนักศึกษาที่กำลังศึกษาอยู่ในปัจจุบัน
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -เป็นผู้ที่มีความคิดสร้างสรรค์และมีความสามารถด้าน Youtuber
                      หรือสร้างคอนเทนต์
                      สื่อออนไลน์ในรูปแบบของตัวเองบนแพลตฟอร์มต่าง ๆ ได้แก่
                      Facebook Instagram Twitter Tiktok Youtube
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -เป็นผู้มียอดติดตาม/ยอดไลค์ ทางสื่อโซเซียล ได้แก่ Facebook
                      Instagram Twitter Tiktok Youtube
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      -เป็นผู้ที่มีความพร้อมในการส่งเสริมกิจกรรมของมหาวิทยาลัย
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      - มีความประพฤติเรียบร้อย ไม่ติดยาเสพติด
                      และไม่มีโรคติดต่อร้ายแรงที่เป็นอุปสรรคต่อการศึกษา
                    </li>
                    <li className="text-gray-600">
                      {" "}
                      - ยกเว้นคณะกลุ่มวิทยาศาสตร์สุขภาพ สถาบันการบิน
                      และวิศวกรรมการซ่อมบำรุงอากาศยาน
                    </li>
                    <li className="text-gray-600">
                      กำหนดการรับสมัคร การสัมภาษณ์ และการพิจารณา ติดต่อผ่าน FB :
                      <Link href={"https://www.facebook.com/rangsituniversity"}>
                        Rangsit University
                      </Link>{" "}
                      หรือโทร 02-791-6000 ต่อ 5555
                    </li>
                  </ul>
                </div>
                <span className="text-3xl mb-3 max-md:text-xl flex items-center">
                  <BsChevronRight size={25} />
                  หลักฐานประกอบการสมัคร
                </span>
                <p className="w-full h-0.5 bg-pink-600"></p>
              </div>
              <span className="text-black">
                1.รูปถ่ายหน้าตรง ขนาด 1 นิ้ว 1 รูป
              </span>
              <span className="text-black">
                2.ใบแสดงผลการเรียน 5 ภาคการศึกษา จำนวน 1 ฉบับ
              </span>
              <span className="text-black">
                3.สำเนาทะเบียนบ้านของผู้สมัคร จำนวน 1 ฉบับ
              </span>
              <span className="text-black">
                4.สำเนาบัตรประชาชนของผู้สมัคร จำนวน 1 ฉบับ
              </span>
              <span className="text-black mb-4">
                5.แฟ้มสะสมผลงาน (Portfolio)
              </span>
              <span className="text-3xl mb-3 max-md:text-xl flex items-center">
                <BsChevronRight size={25} />
                คณะ/สาขาวิชาที่ได้รับทุน ทุกคณะ
              </span>
              <p className="w-full h-0.5 bg-pink-600"></p>
              <span className="text-black">
                ยกเว้น วิทยาลัยแพทยศาสาตร์ วิทยาลัยทันตแพทยศาสตร์
                วิทยาลัยเภสัชศาสตร์ คณะพยาบาลศาสตร์ คณะเทคนิคการแพทย์
                วิทยาลัยดนตรี สถาบันการบิน วิทยาลัยการแพทย์แผนตะวันออก
                คณะรังสีเทคนิค คณะวิทยาศาสตร์ คณะทัศนมาตรศาสตร์
                และสาขาวิศวกรรมซ่อมบำรุงอากาศยาน วิทยาลัยวิศวกรรมศาสตร์
              </span>
            </div>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
