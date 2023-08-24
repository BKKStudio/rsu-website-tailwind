export default function BachelorsTable() {
  return (
    <div>
      <table className="w-full text-center">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th className="border p-2">คณะ/วิทยาลัย</th>
            <th className="border">รหัส</th>
            <th className="border">สาขา</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border bg-gray-200">
            <td className="border ">วิทยาลัยแพทยศาสตร์</td>
            <th className="border " rowspan="1">
              1201
            </th>
            <td className="border ">สาขาวิชาแพทยศาสตร์</td>
          </tr>
          <tr className="border ">
            <td className="border ">วิทยาลัยแพทยศาสตร์ (Bilingual)</td>
            <th className="border " rowspan="1">
              2301
            </th>
            <td className="border ">สาขาวิชาทันตแพทยศาสตร์</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border " rowspan="2">
              วิทยาลัยทันตแพทยศาสตร์ (Bilingual)
            </td>
            <th className="border ">0501</th>
            <td className="border ">สาขาวิชาการบริบาลทางเภสัชกรรม</td>
          </tr>
          <tr className="border  bg-gray-200">
            <td className="border ">0504</td>
            <td className="border">สาขาวิชาเภสัชกรรมอุตสาหการ</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="2">
              คณะพยาบาลศาสตร์
            </td>
            <th className="border ">0301</th>
            <td className="border ">สาขาวิชาพยาบาลศาสตร์</td>
          </tr>
          <tr>
            <td className="border ">0302</td>
            <td className="border"> สาขาวิชาพยาบาลศาสตร์ (Bilingual)</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">คณะรังสีเทคนิค</td>
            <th className="border " rowspan="1">
              4001
            </th>
            <td className="border ">สาขาวิชารังสีเทคนิค</td>
          </tr>

          <tr className="border">
            <td className="border ">คณะเทคนิคการแพทย์</td>
            <th className="border " rowspan="1">
              0801
            </th>
            <td className="border ">สาขาวิชาเทคนิคการแพทย์</td>
          </tr>

          <tr className="border  bg-gray-200">
            <td className="border " rowspan="2">
              คณะกายภาพบำบัดและเวชศาสตร์การกีฬา
            </td>
            <th className="border ">0701</th>
            <td className="border ">สาขาวิชากายภาพบำบัด</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">0704</td>
            <td className="border">สาขาวิชาชรัณสุขศาสตร์</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="3">
              วิทยาลัยการแพทย์แผนตะวันออก
            </td>
            <th className="border ">1901</th>
            <td className="border ">สาขาวิชาการแพทย์แผนตะวันออก</td>
          </tr>
          <tr className="">
            <td className="border ">1902</td>
            <td className="border">สาขาวิชาการแพทย์แผนไทย</td>
          </tr>
          <tr className="">
            <td className="border ">1903</td>
            <td className="border"> สาขาวิชาการแพทย์แผนจีน</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">คณะวิทยาศาสตร์</td>
            <th className="border " rowspan="1">
              4001
            </th>
            <td className="border ">สาขาวิชาวิทยาศาสตร์ชีวการแพทย์</td>
          </tr>

          <tr className="border">
            <td className="border ">คณะทัศนมาตรศาสตร</td>
            <th className="border " rowspan="1">
              2501
            </th>
            <td className="border ">สาขาวิชาทัศนมาตรศาสตร์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border " rowspan="2">
              คณะเทคโนโลยีอาหาร
            </td>
            <th className="border ">3701</th>
            <td className="border ">สาขาวิชาเทคโนโลยีอาหาร</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">3702</td>
            <td className="border"> สาขาวิชาธุรกิจอุตสาหกรรมอาหาร</td>
          </tr>

          <tr className="border">
            <td className="border ">คณะนวัตกรรมเกษตร</td>
            <th className="border " rowspan="1">
              3601
            </th>
            <td className="border ">สาขาวิชานวัตกรรมเกษตร</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border " rowspan="5">
              วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
            </td>
            <th className="border ">1401</th>
            <td className="border ">สาขาวิชาวิทยาการคอมพิวเตอร์</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">1402</td>
            <td className="border"> สาขาวิชานวัตกรรมดิจิทัล</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border">1404</td>
            <td className="border">สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">1408</td>
            <td className="border"> สาขาวิชาสารสนเทศการลงทุน</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">1410</td>
            <td className="border"> สาขาวิชาเทคโนโลยีสื่อสังคม</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="10">
              วิทยาลัยวิศวกรรมศาสตร์
            </td>
            <th className="border ">1101</th>
            <td className="border ">สาขาวิชาวิศวกรรมเครื่องกล</td>
          </tr>
          <tr className="">
            <td className="border ">1102</td>
            <td className="border">สาขาวิชาวิศวกรรมไฟฟ้า</td>
          </tr>
          <tr className="">
            <td className="border">1103</td>
            <td className="border"> สาขาวิชาวิศวกรรมโยธา</td>
          </tr>
          <tr className="">
            <td className="border ">1104</td>
            <td className="border">สาขาวิชาวิศวกรรมเคมี</td>
          </tr>
          <tr className="">
            <td className="border ">1105</td>
            <td className="border">สาขาวิชาวิศวกรรมอุตสาหการ</td>
          </tr>
          <tr className="">
            <td className="border ">1106</td>
            <td className="border">สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม</td>
          </tr>
          <tr className="">
            <td className="border ">1107</td>
            <td className="border"> สาขาวิชาวิศวกรรมคอมพิวเตอร์</td>
          </tr>
          <tr className="">
            <td className="border ">1109</td>
            <td className="border"> สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง</td>
          </tr>
          <tr className="">
            <td className="border ">1122</td>
            <td className="border"> วิศวกรรมยานยนต์และมอเตอร์สปอร์ต</td>
          </tr>
          <tr className="">
            <td className="border ">1134</td>
            <td className="border">สาขาวิชาวิศวกรรมซ่อมบำรุงอากาศยาน</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">สถาบันการบิน</td>
            <th className="border " rowspan="1">
              2601
            </th>
            <td className="border ">สาขาวิชานักบินพาณิชย์</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="5">
              วิทยาลัยการออกแบบ
            </td>
            <th className="border ">0604</th>
            <td className="border ">สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ</td>
          </tr>
          <tr className="">
            <td className="border ">0605</td>
            <td className="border"> สาขาวิชาการออกแบบภายใน</td>
          </tr>
          <tr className="">
            <td className="border">0606</td>
            <td className="border"> สาขาวิชาการออกแบบนิเทศศิลป์</td>
          </tr>
          <tr className="">
            <td className="border ">0607</td>
            <td className="border"> สาขาวิชาการออกแบบ</td>
          </tr>
          <tr className="">
            <td className="border ">0611</td>
            <td className="border"> สาขาวิชาแฟชั่นดีไซน์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">คณะดิจิทัลอาร์ต</td>
            <th className="border " rowspan="1">
              3401
            </th>
            <td className="border ">สาขาวิชาคอมพิวเตอร์อาร์ต</td>
          </tr>

          <tr className="border">
            <td className="border ">คณะสถาปัตยกรรมศาสตร์</td>
            <th className="border " rowspan="1">
              1001
            </th>
            <td className="border ">สาขาวิชาสถาปัตยกรรมศาสตร์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border " rowspan="2">
              คณะบัญชี
            </td>
            <th className="border ">2201</th>
            <td className="border ">หลักสูตรบัญชี</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border ">2202</td>
            <td className="border">หลักสูตรบัญชี (สำหรับผู้จบ ปวส.)</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="5">
              คณะบริหารธุรกิจ
            </td>
            <th className="border ">0202</th>
            <td className="border ">สาขาวิชาการจัดการ</td>
          </tr>
          <tr className="">
            <td className="border ">0204</td>
            <td className="border"> สาขาวิชาธุรกิจดิจิทัล</td>
          </tr>
          <tr className="">
            <td className="border ">0205</td>
            <td className="border"> สาขาวิชาการเงินและการลงทุน</td>
          </tr>
          <tr className="">
            <td className="border ">0206</td>
            <td className="border">สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก</td>
          </tr>
          <tr className="">
            <td className="border ">0230</td>
            <td className="border">สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">สถาบันเศรษฐศาสตร์</td>
            <th className="border " rowspan="1">
              1801
            </th>
            <td className="border ">สาขาวิชาเศรษฐกิจดิจิทัล</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="6">
              คณะศิลปศาสตร์
            </td>
            <th className="border ">0102</th>
            <td className="border ">สาขาวิชาภาษาญี่ปุ่น</td>
          </tr>
          <tr className="">
            <td className="border ">0103</td>
            <td className="border">สาขาวิชาภาษาไทยเพื่อการสื่อสาร</td>
          </tr>
          <tr className="">
            <td className="border ">0104</td>
            <td className="border"> สาขาวิชาภาษาอังกฤษ</td>
          </tr>
          <tr className="">
            <td className="border ">0105</td>
            <td className="border"> สาขาวิชาภาษาจีน</td>
          </tr>
          <tr className="">
            <td className="border ">0106</td>
            <td className="border">สาขาวิชาภาษาฝรั่งเศส</td>
          </tr>
          <tr className="">
            <td className="border ">0117</td>
            <td className="border"> สาขาวิชาภาษาและวัฒนธรรมเกาหลี</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border " rowspan="10">
              วิทยาลัยนิเทศศาสตร์
            </td>
            <th className="border ">0401</th>
            <td className="border ">สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0403</td>
            <td className="border">
              {" "}
              สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0405</td>
            <td className="border">
              {" "}
              สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0406</td>
            <td className="border">สาขาวิชาการภาพยนตร์ดิจิทัล</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0409</td>
            <td className="border"> สาขาวิชาสื่อสารการแสดง</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0410</td>
            <td className="border">
              สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0411</td>
            <td className="border">สาขาวิชามัลติมีเดีย</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0412</td>
            <td className="border">สาขาวิชานิเทศศาสตร์การกีฬา</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0413</td>
            <td className="border">
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์
            </td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border ">0414</td>
            <td className="border">สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล</td>
          </tr>

          <tr className="border ">
            <td className="border " rowspan="3">
              คณะนิติศาสตร์
            </td>
            <th className="border ">1703</th>
            <td className="border ">สาขาวิชานิติศาสตร์</td>
          </tr>
          <tr className=" ">
            <td className="border ">1702</td>
            <td className="border">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)
            </td>
          </tr>
          <tr className="">
            <td className="border ">1704</td>
            <td className="border">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)
            </td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border " rowspan="7">
              วิทยาลัยการท่องเที่ยว การบริการ และกีฬา
            </td>
            <th className="border ">1602</th>
            <td className="border ">สาขาวิชาการจัดการการท่องเที่ยว</td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">1604</td>
            <td className="border">สาขาวิชาการจัดการโรงแรมและภัตตาคาร</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border ">1605</td>
            <td className="border">
              {" "}
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง
            </td>
          </tr>
          <tr className="bg-gray-200 ">
            <td className="border ">1610</td>
            <td className="border"> สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border ">1616</td>
            <td className="border">สาขาวิชากีฬากอล์ฟ</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border ">1614</td>
            <td className="border">
              สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา
              บริหารธุรกิจและการเป็นผู้ประกอบการ สจล.)
            </td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border ">1615</td>
            <td className="border">
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา
              สาขาวิชาบริหารธุรกิจและการเป็นผู้ประกอบการ สจล.)
            </td>
          </tr>

          <tr className="border ">
            <td className="border ">วิทยาลัยนวัตกรรมสังคม</td>
            <th className="border " rowspan="1">
            2102
            </th>
            <td className="border ">สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">สถาบันรัฐศาสตร์</td>
            <th className="border " rowspan="1">
            3501
            </th>
            <td className="border ">สาขาวิชารัฐศาสตร์</td>
          </tr>

          <tr className="border ">
            <td className="border ">คณะอาชญาวิทยาและการบริหารงานยุติธรรม</td>
            <th className="border " rowspan="1">
            3901
            </th>
            <td className="border ">สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border ">วิทยาลัยดนตรี</td>
            <th className="border " rowspan="1">
            2001
            </th>
            <td className="border ">ดุริยางคศาสตร์</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
