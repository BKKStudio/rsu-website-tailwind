import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import BachelorsTuitionAll from "./ฺBachelorsTuitionAll";
export default function BachelorsTuition() {
  return (
    <>
      <div className="">
        <span className="text-xl flex items-center max-md:text-sm">
          <BsChevronRight />
          ประมาณค่าใช้จ่ายสำหรับภาคการศึกษาที่ 1/2566
        </span>
        <table className="  w-full text-center mt-4">
          <thead className="bg-gray-700 text-white">
            <tr className="border ">
              <th className="border p-2  max-md:text-xs">
                คณะ/วิทยาลัย
              </th>
              <th className="border   p-2  max-md:text-sm max-sm:hidden">รหัส</th>
              <th className="border  p-2  max-md:text-sm">สาขา</th>
              <th className="border p-2  max-md:text-sm">
                ลักษณะการกู้ยืมฯ
              </th>
              <th className="border p-2  max-md:text-xs">
              ภาคเรียน 1/2566
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border">
              <td className="border p-2  max-md:text-xs">
                วิทยาลัยแพทยศาสตร์
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">1201</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาแพทยศาสตร์ (ภาคฤดูร้อนและภาคเรียนที่ 1)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border  bg-gray-200">
              <td className="border p-2  max-md:text-xs">
                วิทยาลัยทันตแพทยศาสตร์ (Bilingual)
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">2301</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาทันตแพทยศาสตร์
              </td>
              <td className="border  max-md:text-sm">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="2">
                วิทยาลัยเภสัชศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0501</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาการบริบาลทางเภสัชกรรม (รวมภาคฤดูร้อนและภาค 1/2566)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>
            <tr className="">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0504</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาเภสัชกรรมอุตสาหการ (รวมภาคฤดูร้อนและภาค 1/2566)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="2">
                คณะพยาบาลศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0301</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาพยาบาลศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0305</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาพยาบาลศาสตร์ (2.5 ปี)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border">
              <td className="border p-2  max-md:text-xs">
                คณะรังสีเทคนิค
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">4001</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชารังสีเทคนิค
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs">
                คณะเทคนิคการแพทย์
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">0801</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาเทคนิคการแพทย์
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="3">
                คณะกายภาพบำบัดและเวชศาสตร์การกีฬา
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0701</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชากายภาพบำบัด
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>
            <tr className="">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0703</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิทยาศาสตร์การออกกำลังกายและสมรรถภาพทางการกีฬา
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">67,000</td>
            </tr>
            <tr className="">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0704</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาชรัณสุขศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">67,000</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="3">
                วิทยาลัยการแพทย์แผนตะวันออก
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">1901</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาการแพทย์แผนตะวันออก
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">83,800</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1902</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการแพทย์แผนไทย
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">81,300</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1903</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการแพทย์แผนจีน
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">70,600</td>
            </tr>

            <tr className="border">
              <td className="border p-2  max-md:text-xs">
                คณะวิทยาศาสตร์
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">1301</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิทยาศาสตร์ชีวการแพทย์
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs">
                วิทยาลัยวิศวกรรมชีวการแพทย์
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">4101</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมชีวการแพทย์
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border">
              <td className="border p-2  max-md:text-xs">
                คณะทัศนมาตรศาสตร
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">2501</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาทัศนมาตรศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="2">
                คณะเทคโนโลยีอาหาร
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">3701</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาเทคโนโลยีอาหาร
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">52,700</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">3702</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาธุรกิจอุตสาหกรรมอาหาร
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">50,800</td>
            </tr>

            <tr className="border">
              <td className="border p-2  max-md:text-xs">
                คณะนวัตกรรมเกษตร
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">3601</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานวัตกรรมเกษตร
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">62,300</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="5">
                วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
              </td> 
              <th className="border p-2  max-md:text-sm max-sm:hidden">1401</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาวิทยาการคอมพิวเตอร์
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">50,800</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1402 </td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานวัตกรรมดิจิทัล
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">58,600</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1404</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต (แขนงพัฒนาเกม)
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">62,800</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1408</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาสารสนเทศการลงทุน
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">50,500</td>
            </tr>
            <tr className=" bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1410</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาเทคโนโลยีสื่อสังคม
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">54,800</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="10">
                วิทยาลัยวิศวกรรมศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">1101</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาวิศวกรรมเครื่องกล
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">59,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1102</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมไฟฟ้า
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">64,100</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1103</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมโยธา
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1104</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมเคมี
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">61,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1105</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมอุตสาหการ
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">64,100</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1106</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">61,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1107</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมคอมพิวเตอร์
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1109</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">64,100</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1122</td>
              <td className="border p-2  max-md:text-xs">
                วิศวกรรมยานยนต์และมอเตอร์สปอร์ต
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-sm ">61,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1134</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาวิศวกรรมการซ่อมบำรุงอากาศยาน
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">69,400</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs">
                สถาบันการบิน
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">2601</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานักบินพาณิชย์ มีค่าบำรุงห้องปฏิบัติการ สถาบันการบิน
                ภาคปกติภาคละ 5,000 บาท
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">59,500</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="5">
                วิทยาลัยการออกแบบ
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0604</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">55,700</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0605</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการออกแบบภายใน
              </td>
              <td className="border p-2  max-md:text-xs">3</td>
              <td className="border p-2  max-md:text-xs">56,000</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0606</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการออกแบบนิเทศศิลป์
              </td>
              <td className="border p-2  max-md:text-xs">3</td>
              <td className="border p-2  max-md:text-xs">59,500</td>
            </tr>

            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0611</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาแฟชั่นดีไซน์
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">56,200</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0628</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการออกแบบ (English)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">
                (รอ Update )
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs">
                คณะดิจิทัลอาร์ต
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">3401</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาคอมพิวเตอร์อาร์ต
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs">
                คณะสถาปัตยกรรมศาสตร์
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">1001</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาสถาปัตยกรรมศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">57,900</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="2">
                คณะบัญชี
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">2201</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                หลักสูตรบัญชี (สำหรับผู้จบ ปวช./ม.6)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">45,300</td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">2202</td>
              <td className="border p-2  max-md:text-xs">
                หลักสูตรบัญชี (สำหรับผู้จบ ปวส.)
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">43,800</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="6">
                คณะบริหารธุรกิจ
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0202</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาการจัดการ
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">42,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0204</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาธุรกิจดิจิทัล
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">42,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0205</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการเงินและการลงทุน
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">42,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0206</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">42,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0230</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">42,900</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0244</td>
              <td className="border p-2  max-md:text-xs">
                สาขาการบริหารธุรกิจระหว่างประเทศ
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">42,900</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs">
                คณะเศรษฐศาสตร์
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">1801</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาเศรษฐกิจดิจิทัล
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">50,300</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="6">
                วิทยาลัยศิลปศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0102</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาภาษาญี่ปุ่น
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">48,500</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0103</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาภาษาไทยเพื่อการสื่อสาร
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">41,600</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0104</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาภาษาอังกฤษ
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">45,800</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0105</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาภาษาจีน
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">49,500</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0106</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาภาษาฝรั่งเศส
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">42,500</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0117</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาภาษาและวัฒนธรรมเกาหลี
              </td>
              <td className="border p-2  max-md:text-xs">3</td>
              <td className="border p-2  max-md:text-xs">47,600</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="10">
                วิทยาลัยนิเทศศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">0401</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">54,300</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0403</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">53,300</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden" >0405</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">51,800</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0406</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการภาพยนตร์ดิจิทัล
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">53,800</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0409</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาสื่อสารการแสดง
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">51,800</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0410</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">51,800</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0411</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชามัลติมีเดีย
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">53,800</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0412</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานิเทศศาสตร์การกีฬา
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">55,300</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0413</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">53,800</td>
            </tr>
            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-sm max-sm:hidden">0414</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">51,800</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="3">
                คณะนิติศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">1703</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชานิติศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">43,400</td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1702</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)
              </td>
              <td className="border p-2  max-md:text-xs">-</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>
            <tr className=" ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1704</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="6">
                วิทยาลัยการท่องเที่ยว และการบริการ
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">1602</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาการจัดการการท่องเที่ยวเเละการบริการ
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">48,800</td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1604</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการจัดการโรงแรมและภัตตาคาร
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">48,800</td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1605</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง
              </td>
              <td className="border p-2  max-md:text-xs">
                2 + Human*
              </td>
              <td className="border p-2  max-md:text-xs">46,800</td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1610</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">61,000</td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1614</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา สจล.)
              </td>
              <td className="border p-2  max-md:text-xs">-</td>
              <td className="border p-2  max-md:text-xs">
                (รอ Update )
              </td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1615</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา สจล.)
              </td>
              <td className="border p-2  max-md:text-xs">-</td>
              <td className="border p-2  max-md:text-xs">56,800</td>
            </tr>

            <tr className="border">
              <td className="border p-2  max-md:text-xs">
                วิทยาลัยการกีฬา
              </td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">4201</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชากีฬากอล์ฟ
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">
                (รอ Update )
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="3">
                วิทยาลัยนวัตกรรมสังคม
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">2102</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">44,300</td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">2108</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
                (ระบบทางไกลทางอินเทอร์เน็ต)
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>
            <tr className="border bg-gray-200 ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">2109</td>
              <td className="border p-2  max-md:text-xs">
                สาขาวิชาผู้ประกอบการทางสังคมยุคดิจิทัล
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="1">
                วิทยาลัยการกีฬา
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">4201</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชากีฬากอล์ฟ
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">
                (รอ Update )
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="1">
                คณะรัฐศาสตร์
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">3501</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชารัฐศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-sm max-sm:hidden">51,200</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="1">
                คณะอาชญาวิทยาและการบริหารงานยุติธรรม
              </td>
              <th className="border p-2  max-md:text-s max-sm:hidden">3901</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">
                (ไม่เปิดรับ)
              </td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="1">
                วิทยาลัยดนตรี
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">2001</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                สาขาวิชาดุริยางคศาสตร์
              </td>
              <td className="border p-2  max-md:text-xs">3</td>
              <td className="border p-2  max-md:text-xs">84,800</td>
            </tr>

            <tr className="border ">
              <td className="border p-2  max-md:text-xs" rowspan="6">
                International College
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">1515</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                International Business
              </td>
              <td className="border p-2  max-md:text-xs">2</td>
              <td className="border p-2  max-md:text-xs">77,500</td>
            </tr>
            <tr className="border  ">
              <td className="border p-2  max-md:text-sm max-sm:hidden" >1516</td>
              <td className="border p-2  max-md:text-xs">
                Information and Communication Technology
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">77,500</td>
            </tr>
            <tr className="border  ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1517</td>
              <td className="border p-2  max-md:text-xs">
                Communications Arts
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">77,500</td>
            </tr>
            <tr className="border  ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1521</td>
              <td className="border p-2  max-md:text-xs">
                Tourism, Hospitalit
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">80,500</td>
            </tr>
            <tr className="border  ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1156</td>
              <td className="border p-2  max-md:text-xs">
                Civil Engineering
              </td>
              <td className="border p-2  max-md:text-xs">-</td>
              <td className="border p-2  max-md:text-xs">81,600</td>
            </tr>
            <tr className="border  ">
              <td className="border p-2  max-md:text-sm max-sm:hidden">1158</td>
              <td className="border p-2  max-md:text-xs">
                Electrical Engineering
              </td>
              <td className="border p-2  max-md:text-xs">-</td>
              <td className="border p-2  max-md:text-xs">88,300</td>
            </tr>

            <tr className="border bg-gray-200">
              <td className="border p-2  max-md:text-xs" rowspan="1">
                INSTITUTE OF DIPLOMACY AND INTERNATIONAL STUDIES
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">3001</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                International Relations and Development
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">77,500</td>
            </tr>

            <tr className="border">
              <td className="border p-2  max-md:text-xs" rowspan="1">
                INTERNATIONAL CHINESE COLLEGE
              </td>
              <th className="border p-2  max-md:text-sm max-sm:hidden">3204</th>
              <td className="border p-2  max-md:text-xs">
                {" "}
                International Business Management
              </td>
              <td className="border p-2  max-md:text-xs">1</td>
              <td className="border p-2  max-md:text-xs">97,500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full bg-gray-700 text-white grid grid-cols-2 max-md:grid-cols-1">
        <div className="p-2 flex flex-col gap-2">
          <span className="text-xl max-md:text-lg mt-3">
            *ชี้แจงค่าธรรมเนียมแรกเข้าศึกษา ประกอบด้วย
          </span>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าบำรุงการศึกษาภาคเรียนที่ 1/2566 ภาคละ</span>
            <span>10,000บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</span>
            <span>8,000บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าขึ้นทะเบียนนักศึกษาใหม่</span>
            <span>300บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าประกันอุบัติเหตุปีละ</span>
            <span>500บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าทำบัตรนักศึกษา</span>
            <span>200บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าตรวจสุขภาพ</span>
            <span>500บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>อุปกรณ์เครื่องแต่งกาย</span>
            <span>380บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ชุดพละ</span>
            <span>720บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>รวม</span>
            <span>20,600บาท</span>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <span className="text-xl max-md:lg">
            *Clarification of the tuition fee Of the international program
            consists of
          </span>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Education fees</span>
            <span>10,000baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>*Damage insurance</span>
            <span>8,000baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>New student registration fee</span>
            <span>300baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Accident and Health insurance per year</span>
            <span>500baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Student card processing fees</span>
            <span>200baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Health examination fee</span>
            <span>500baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Student Activities per semester</span>
            <span>380baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Total</span>
            <span>23,200baht</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-white ">
        <p className="text-2xl max-md:lg">หมายเหตุ</p>
        <div className="flex flex-col p-2 max-md:text-sm">
          <p>
            1.ค่าเล่าเรียนเป็นตัวเลขประมาณการ ทั้งนี้ขึ้นอยู่กับจำนวนหน่วยกิต
            ที่คณะ/วิทยาลัยจะจัดให้ ลงทะเบียน ซึ่งอาจมีการเปลี่ยนแปลงได้
          </p>
          <p>2.ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</p>
          <p>3.ค่าบำรุงห้องปฏิบิติการ สถาบันการบิน ภาคปกติ 5,000</p>
          <p>
            4.ประเภทการกู้ยืม อ้างอิงจากปีการศึกษา 2564
            ซึ่งอาจมีการเปลี่ยนแปลงได้ สอบถามเพิ่มเติมได้ที่ FB:{" "}
            <Link href={"https://www.facebook.com/rsustudentloan"}>
              กยศ. กรอ. มหาวิทยาลัยรังสิต
            </Link>
          </p>
        </div>
      </div>

      {/* ค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2566 */}
      <div className=" mt-4 bg-pink-500 w-full h-1 "></div>
      <span className=" mt-2 text-2xl flex items-center max-md:text-sm">
        <BsChevronRight />
        ประมาณการค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2566
      </span>
      <BachelorsTuitionAll/>
      {/* ค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2566  */}
    </>
  );
}
