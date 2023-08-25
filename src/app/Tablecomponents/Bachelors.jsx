export default function BachelorsTable() {
  return (
    <div>
      <table className="w-full text-center">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th className="border p-2">คณะ/วิทยาลัย</th>
            <th className="border max-md:p-3 max-md:text-sm">รหัส</th>
            <th className="border max-md:p-3 max-md:text-sm">สาขา</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">วิทยาลัยแพทยศาสตร์</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              1201
            </th>
            <td className="border  max-md:p-3 max-md:text-sm">สาขาวิชาแพทยศาสตร์</td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">วิทยาลัยแพทยศาสตร์ (Bilingual)</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              2301
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาทันตแพทยศาสตร์</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="2">
              วิทยาลัยทันตแพทยศาสตร์ (Bilingual)
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0501</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการบริบาลทางเภสัชกรรม</td>
          </tr>
          <tr className="border  bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0504</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาเภสัชกรรมอุตสาหการ</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="2">
              คณะพยาบาลศาสตร์
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0301</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาพยาบาลศาสตร์</td>
          </tr>
          <tr>
            <td className="border p-3 max-md:p-3 max-md:text-sm">0302</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาพยาบาลศาสตร์ (Bilingual)</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะรังสีเทคนิค</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              4001
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชารังสีเทคนิค</td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะเทคนิคการแพทย์</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              0801
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาเทคนิคการแพทย์</td>
          </tr>

          <tr className="border  bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="2">
              คณะกายภาพบำบัดและเวชศาสตร์การกีฬา
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0701</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชากายภาพบำบัด</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0704</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาชรัณสุขศาสตร์</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="3">
              วิทยาลัยการแพทย์แผนตะวันออก
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">1901</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการแพทย์แผนตะวันออก</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1902</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการแพทย์แผนไทย</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1903</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาการแพทย์แผนจีน</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะวิทยาศาสตร์</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              4001
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิทยาศาสตร์ชีวการแพทย์</td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะทัศนมาตรศาสตร</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              2501
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาทัศนมาตรศาสตร์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="2">
              คณะเทคโนโลยีอาหาร
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">3701</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาเทคโนโลยีอาหาร</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">3702</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาธุรกิจอุตสาหกรรมอาหาร</td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะนวัตกรรมเกษตร</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              3601
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชานวัตกรรมเกษตร</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="5">
              วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">1401</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิทยาการคอมพิวเตอร์</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1402</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชานวัตกรรมดิจิทัล</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1404</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1408</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาสารสนเทศการลงทุน</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1410</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาเทคโนโลยีสื่อสังคม</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="10">
              วิทยาลัยวิศวกรรมศาสตร์
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">1101</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิศวกรรมเครื่องกล</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1102</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิศวกรรมไฟฟ้า</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1103</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาวิศวกรรมโยธา</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1104</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิศวกรรมเคมี</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1105</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิศวกรรมอุตสาหการ</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1106</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1107</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาวิศวกรรมคอมพิวเตอร์</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1109</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1122</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> วิศวกรรมยานยนต์และมอเตอร์สปอร์ต</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1134</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิศวกรรมซ่อมบำรุงอากาศยาน</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">สถาบันการบิน</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              2601
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชานักบินพาณิชย์</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="5">
              วิทยาลัยการออกแบบ
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0604</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0605</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาการออกแบบภายใน</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0606</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาการออกแบบนิเทศศิลป์</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0607</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาการออกแบบ</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0611</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาแฟชั่นดีไซน์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะดิจิทัลอาร์ต</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              3401
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาคอมพิวเตอร์อาร์ต</td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะสถาปัตยกรรมศาสตร์</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              1001
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาสถาปัตยกรรมศาสตร์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="2">
              คณะบัญชี
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">2201</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">หลักสูตรบัญชี</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">2202</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">หลักสูตรบัญชี (สำหรับผู้จบ ปวส.)</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="5">
              คณะบริหารธุรกิจ
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0202</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการจัดการ</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0204</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาธุรกิจดิจิทัล</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0205</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาการเงินและการลงทุน</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0206</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0230</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">สถาบันเศรษฐศาสตร์</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
              1801
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาเศรษฐกิจดิจิทัล</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="6">
              คณะศิลปศาสตร์
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0102</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาภาษาญี่ปุ่น</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0103</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาภาษาไทยเพื่อการสื่อสาร</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0104</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาภาษาอังกฤษ</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0105</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาภาษาจีน</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0106</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาภาษาฝรั่งเศส</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0117</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาภาษาและวัฒนธรรมเกาหลี</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="10">
              วิทยาลัยนิเทศศาสตร์
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">0401</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0403</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              {" "}
              สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0405</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              {" "}
              สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0406</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการภาพยนตร์ดิจิทัล</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0409</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาสื่อสารการแสดง</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0410</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0411</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชามัลติมีเดีย</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0412</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชานิเทศศาสตร์การกีฬา</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0413</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">0414</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล</td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="3">
              คณะนิติศาสตร์
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">1703</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชานิติศาสตร์</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1702</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)
            </td>
          </tr>
          <tr className="">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1704</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm" rowspan="7">
              วิทยาลัยการท่องเที่ยว การบริการ และกีฬา
            </td>
            <th className="border p-3 max-md:p-3 max-md:text-sm">1602</th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการจัดการการท่องเที่ยว</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1604</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาการจัดการโรงแรมและภัตตาคาร</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1605</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              {" "}
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง
            </td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1610</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm"> สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1616</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชากีฬากอล์ฟ</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1614</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา
              บริหารธุรกิจและการเป็นผู้ประกอบการ สจล.)
            </td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">1615</td>
            <td className="border p-3 max-md:p-3 max-md:text-sm">
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา
              สาขาวิชาบริหารธุรกิจและการเป็นผู้ประกอบการ สจล.)
            </td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm">วิทยาลัยนวัตกรรมสังคม</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
            2102
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">สถาบันรัฐศาสตร์</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
            3501
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชารัฐศาสตร์</td>
          </tr>

          <tr className="border p-3 max-md:p-3 max-md:text-sm">
            <td className="border p-3 max-md:p-3 max-md:text-sm">คณะอาชญาวิทยาและการบริหารงานยุติธรรม</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
            3901
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-md:p-3 max-md:text-sm">วิทยาลัยดนตรี</td>
            <th className="border p-3 max-md:p-3 max-md:text-sm" rowspan="1">
            2001
            </th>
            <td className="border p-3 max-md:p-3 max-md:text-sm">ดุริยางคศาสตร์</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
