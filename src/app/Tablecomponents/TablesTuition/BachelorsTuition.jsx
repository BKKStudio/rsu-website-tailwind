import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
export default function BachelorsTuition() {
  return (
    <div className="w-full"> 
      <span className="text-xl flex items-center max-md:text-sm">
        <BsChevronRight />
        ประมาณค่าใช้จ่ายสำหรับภาคการศึกษาที่ 1/2566
      </span>
      <table className=" text-center mt-4 max-md:mx-2">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th className="border p-3 max-md:p-2 max-md:text-sm" >คณะ/วิทยาลัย</th>
            <th className="border p-3 max-md:p-2 max-md:text-sm">รหัส</th>
            <th className="border p-3 max-md:p-2 max-md:text-sm">สาขา</th>
            <th className="border p-3 max-md:p-2 max-md:text-sm">
              ลักษณะการกู้ยืมฯ
            </th>
            <th className="border p-3 max-md:p-2 max-md:text-sm">
              ค่าธรรมเนียมแรกเข้าศึกษาและค่าหน่วยกิต ภาคเรียน 1/2566
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border">
            <td className="border p-3 max-md:p-0 max-md:text-sm">
              วิทยาลัยแพทยศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1201</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาแพทยศาสตร์ (ภาคฤดูร้อนและภาคเรียนที่ 1)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border  bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              วิทยาลัยทันตแพทยศาสตร์ (Bilingual)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2301</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาทันตแพทยศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="2">
              วิทยาลัยเภสัชศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0501</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาการบริบาลทางเภสัชกรรม (รวมภาคฤดูร้อนและภาค 1/2566)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0504</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาเภสัชกรรมอุตสาหการ (รวมภาคฤดูร้อนและภาค 1/2566)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="2">
              คณะพยาบาลศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0301</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาพยาบาลศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0305</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาพยาบาลศาสตร์ (2.5 ปี)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะรังสีเทคนิค
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">4001</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชารังสีเทคนิค
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะเทคนิคการแพทย์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">0801</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาเทคนิคการแพทย์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="3">
              คณะกายภาพบำบัดและเวชศาสตร์การกีฬา
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0701</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชากายภาพบำบัด
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0703</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิทยาศาสตร์การออกกำลังกายและสมรรถภาพทางการกีฬา
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">67,000</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0704</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาชรัณสุขศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">67,000</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="3">
              วิทยาลัยการแพทย์แผนตะวันออก
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">1901</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาการแพทย์แผนตะวันออก
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">83,800</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1902</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการแพทย์แผนไทย
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">81,300</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1903</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการแพทย์แผนจีน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">70,600</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะวิทยาศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1301</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิทยาศาสตร์ชีวการแพทย์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              วิทยาลัยวิศวกรรมชีวการแพทย์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">4101</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมชีวการแพทย์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะทัศนมาตรศาสตร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2501</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาทัศนมาตรศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="2">
              คณะเทคโนโลยีอาหาร
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">3701</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาเทคโนโลยีอาหาร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">52,700</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">3702</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาธุรกิจอุตสาหกรรมอาหาร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">50,800</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะนวัตกรรมเกษตร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">3601</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานวัตกรรมเกษตร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">62,300</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="5">
              วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">1401</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาวิทยาการคอมพิวเตอร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">50,800</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1402 </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานวัตกรรมดิจิทัล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">58,600</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1404</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต (แขนงพัฒนาเกม)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">62,800</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1408</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาสารสนเทศการลงทุน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">50,500</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1410</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาเทคโนโลยีสื่อสังคม
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">54,800</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="10">
              วิทยาลัยวิศวกรรมศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">1101</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาวิศวกรรมเครื่องกล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">59,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1102</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมไฟฟ้า
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">64,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1103</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมโยธา
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1104</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมเคมี
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">61,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1105</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมอุตสาหการ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">64,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1106</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">61,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1107</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมคอมพิวเตอร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1109</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">64,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1122</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              วิศวกรรมยานยนต์และมอเตอร์สปอร์ต
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">61,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1134</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาวิศวกรรมการซ่อมบำรุงอากาศยาน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">69,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สถาบันการบิน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2601</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานักบินพาณิชย์ มีค่าบำรุงห้องปฏิบัติการ สถาบันการบิน
              ภาคปกติภาคละ 5,000 บาท
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">59,500</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="5">
              วิทยาลัยการออกแบบ
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0604</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">55,700</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0605</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการออกแบบภายใน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">3</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">56,000</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0606</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการออกแบบนิเทศศิลป์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">3</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">59,500</td>
          </tr>

          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0611</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาแฟชั่นดีไซน์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">56,200</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0628</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการออกแบบ (English)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (รอ Update )
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะดิจิทัลอาร์ต
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">3401</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาคอมพิวเตอร์อาร์ต
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะสถาปัตยกรรมศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1001</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาสถาปัตยกรรมศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">57,900</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="2">
              คณะบัญชี
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">2201</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              หลักสูตรบัญชี (สำหรับผู้จบ ปวช./ม.6)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">45,300</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">2202</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              หลักสูตรบัญชี (สำหรับผู้จบ ปวส.)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">43,800</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="6">
              คณะบริหารธุรกิจ
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0202</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาการจัดการ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0204</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาธุรกิจดิจิทัล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0205</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการเงินและการลงทุน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0206</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0230</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,900</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0244</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาการบริหารธุรกิจระหว่างประเทศ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,900</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              คณะเศรษฐศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1801</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาเศรษฐกิจดิจิทัล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">50,300</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="6">
              วิทยาลัยศิลปศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0102</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาภาษาญี่ปุ่น
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">48,500</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0103</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาภาษาไทยเพื่อการสื่อสาร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">41,600</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0104</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาภาษาอังกฤษ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">45,800</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0105</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาภาษาจีน
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">49,500</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0106</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาภาษาฝรั่งเศส
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">42,500</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0117</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาภาษาและวัฒนธรรมเกาหลี
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">3</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">47,600</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="10">
              วิทยาลัยนิเทศศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">0401</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">54,300</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0403</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">53,300</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0405</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">51,800</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0406</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการภาพยนตร์ดิจิทัล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">53,800</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0409</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาสื่อสารการแสดง
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">51,800</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0410</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">51,800</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0411</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชามัลติมีเดีย
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">53,800</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0412</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานิเทศศาสตร์การกีฬา
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">55,300</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0413</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">53,800</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm">0414</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">51,800</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="3">
              คณะนิติศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">1703</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชานิติศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">43,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1702</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">-</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1704</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="6">
              วิทยาลัยการท่องเที่ยว และการบริการ
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">1602</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาการจัดการการท่องเที่ยวเเละการบริการ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">48,800</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1604</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการจัดการโรงแรมและภัตตาคาร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">48,800</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1605</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2 + Human*</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">46,800</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1610</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">61,000</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1614</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา สจล.)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">-</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (รอ Update )
            </td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1615</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา สจล.)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">-</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">56,800</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              วิทยาลัยการกีฬา
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">4201</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชากีฬากอล์ฟ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (รอ Update )
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="3">
              วิทยาลัยนวัตกรรมสังคม
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">2102</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">44,300</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">2108</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
              (ระบบทางไกลทางอินเทอร์เน็ต)
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">2109</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              สาขาวิชาผู้ประกอบการทางสังคมยุคดิจิทัล
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="1">
              วิทยาลัยการกีฬา
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">4201</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชากีฬากอล์ฟ
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (รอ Update )
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="1">
              คณะรัฐศาสตร์
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">3501</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชารัฐศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">51,200</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="1">
              คณะอาชญาวิทยาและการบริหารงานยุติธรรม
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">3901</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              (ไม่เปิดรับ)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="1">
              วิทยาลัยดนตรี
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">2001</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              สาขาวิชาดุริยางคศาสตร์
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">3</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">84,800</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="6">
              International College
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">1515</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              International Business
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">2</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">77,500</td>
          </tr>
          <tr className="border  ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1516</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              Information and Communication Technology
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">77,500</td>
          </tr>
          <tr className="border  ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1517</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              Communications Arts
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">77,500</td>
          </tr>
          <tr className="border  ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1521</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              Tourism, Hospitalit
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">80,500</td>
          </tr>
          <tr className="border  ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1156</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              Civil Engineering
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">-</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">81,600</td>
          </tr>
          <tr className="border  ">
            <td className="border p-3 max-md:p-2 max-md:text-sm">1158</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              Electrical Engineering
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">-</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">88,300</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="1">
              INSTITUTE OF DIPLOMACY AND INTERNATIONAL STUDIES
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">3001</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              International Relations and Development
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">77,500</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-md:p-2 max-md:text-sm" rowspan="1">
              INTERNATIONAL CHINESE COLLEGE
            </td>
            <th className="border p-3 max-md:p-2 max-md:text-sm">3204</th>
            <td className="border p-3 max-md:p-2 max-md:text-sm">
              {" "}
              International Business Management
            </td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">1</td>
            <td className="border p-3 max-md:p-2 max-md:text-sm">97,500</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full bg-gray-700 text-white grid grid-cols-2 max-md:grid-cols-1">
        <div className="p-2 flex flex-col gap-2">
          <span className="text-xl">
            *ชี้แจงค่าธรรมเนียมแรกเข้าศึกษา ประกอบด้วย
          </span>
          <div className="flex justify-between p-2">
            <span>ค่าบำรุงการศึกษาภาคเรียนที่ 1/2566 ภาคละ</span>
            <span>10,000บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</span>
            <span>8,000บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>ค่าขึ้นทะเบียนนักศึกษาใหม่</span>
            <span>300บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>ค่าประกันอุบัติเหตุปีละ</span>
            <span>500บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>ค่าทำบัตรนักศึกษา</span>
            <span>200บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>ค่าตรวจสุขภาพ</span>
            <span>500บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>อุปกรณ์เครื่องแต่งกาย</span>
            <span>380บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>ชุดพละ</span>
            <span>720บาท</span>
          </div>
          <div className="flex justify-between p-2">
            <span>รวม</span>
            <span>20,600บาท</span>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <span className="text-xl">
            *Clarification of the tuition fee Of the international program
            consists of
          </span>
          <div className="flex justify-between p-2">
            <span>Education fees</span>
            <span>10,000baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>*Damage insurance</span>
            <span>8,000baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>New student registration fee</span>
            <span>300baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Accident and Health insurance per year</span>
            <span>500baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Student card processing fees</span>
            <span>200baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Health examination fee</span>
            <span>500baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Student Activities per semester</span>
            <span>380baht</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Total</span>
            <span>23,200baht</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-white ">
        <p className="text-2xl">หมายเหตุ</p>
        <div className="flex flex-col p-3">
          <p>
            1.ค่าเล่าเรียนเป็นตัวเลขประมาณการ ทั้งนี้ขึ้นอยู่กับจำนวนหน่วยกิต
            ที่คณะ/วิทยาลัยจะจัดให้ ลงทะเบียน ซึ่งอาจมีการเปลี่ยนแปลงได้
          </p>
          <p>2.ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</p>
          <p>3.ค่าบำรุงห้องปฏิบิติการ สถาบันการบิน ภาคปกติ 5,000</p>
          <p>
            4.ประเภทการกู้ยืม อ้างอิงจากปีการศึกษา 2564 ซึ่งอาจมีการเปลี่ยนแปลงได้
            สอบถามเพิ่มเติมได้ที่ FB: <Link href={"https://www.facebook.com/rsustudentloan"}>กยศ. กรอ. มหาวิทยาลัยรังสิต</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
