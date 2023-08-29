export default function BachelorsTuitionAll() {
  return (
<>
<div className="overflow-auto">
      <table className="  w-full text-center mt-4 max-lg:mx-3">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะ/วิทยาลัย
            </th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm" >สาขา</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm ">ชั้นปีที่ 1</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">ชั้นปีที่ 2</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">ชั้นปีที่ 3</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">ชั้นปีที่ 4</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">ชั้นปีที่ 5</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">ชั้นปีที่ 6</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">รวม</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border">
            <td className="border p-3 max-lg:p-0 max-lg:text-sm">
              วิทยาลัยแพทยศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
            แพทยศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">650,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              650,000
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              650,000
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              650,000
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              650,000
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              650,000
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
            3,900,000
            </td>
          </tr>

          <tr className="border  bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              วิทยาลัยทันตแพทยศาสตร์ (Bilingual)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาทันตแพทยศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">900,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">900,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">900,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">900,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">900,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">900,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">5,400,000</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="2">
              วิทยาลัยเภสัชศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาบริบาลทางเภสัชกรรม
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">118,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">210,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">336,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">462,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">458,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">228,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">1,812,800</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
            สาขาวิชาเภสัชกรรมอุตสาหการ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">120,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">227,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">353,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">431,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">434,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">233,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">1,798,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="2">
              คณะพยาบาลศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาพยาบาลศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">150,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">187,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">227,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">225,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">791,000</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
            สาขาวิชาพยาบาลศาสตร์ (Bilingual)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">210,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">210,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">210,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">210,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">840,000</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะรังสีเทคนิค
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชารังสีเทคนิค
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">158,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">144,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">184,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">154,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">641,100</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะเทคนิคการแพทย์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาเทคนิคการแพทย์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">109,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">127,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">244,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">143,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">624,300</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="3">
              คณะกายภาพบำบัดและเวชศาสตร์การกีฬา
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชากายภาพบำบัด
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">152,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">174,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">188,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">105,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">621,200</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิทยาศาสตร์การออกกำลังกายและสมรรถภาพทางการกีฬา
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">106,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">123,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">119,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">90,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">438,900</td>
          </tr>
          <tr className="">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาชรัณสุขศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">114,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">146,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">110,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">67,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">439,000</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="3">
              วิทยาลัยการแพทย์แผนตะวันออก
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาการแพทย์แผนตะวันออก
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">172,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">165,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">102,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">116,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">553,900</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการแพทย์แผนไทย
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">142,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">199,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">165,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">105,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">612,100</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการแพทย์แผนจีน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">136,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">129,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">118,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">173,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">174,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">237,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">968,200</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะวิทยาศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิทยาศาสตร์ชีวการแพทย์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">101,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">113,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">142,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">78,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">436,200</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              วิทยาลัยวิศวกรรมชีวการแพทย์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมชีวการแพทย์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">132,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">121,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">121,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">121,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">497,800</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะทัศนมาตรศาสตร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาทัศนมาตรศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">115,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">157,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">164,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">156,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">128,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">69,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">791,800</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="2">
              คณะเทคโนโลยีอาหาร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาเทคโนโลยีอาหาร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">113,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">110,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">69,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">375,000</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาธุรกิจอุตสาหกรรมอาหาร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">82,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">92,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">43,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">312,800</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะนวัตกรรมเกษตร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานวัตกรรมเกษตร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">106,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">80,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">45,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">327,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="5">
              วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาวิทยาการคอมพิวเตอร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">82,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">90,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">328,900</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานวัตกรรมดิจิทัล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">89,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">96,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">59,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">328,400</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต (แขนงพัฒนาเกม)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">110,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">99,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">67,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">57,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">334,300</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาสารสนเทศการลงทุน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">93,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">86,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">48,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">310,700</td>
          </tr>
          <tr className=" bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาเทคโนโลยีสื่อสังคม
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">102,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">54,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">324,000</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="10">
              วิทยาลัยวิศวกรรมศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาวิศวกรรมเครื่องกล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">104,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">394,000</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมไฟฟ้า
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">103,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">99,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">397,200</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมโยธา
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">111,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">109,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">414,800</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมเคมี
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">98,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">95,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">102,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">384,800</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมอุตสาหการ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">106,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">108,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">73,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">386,300</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">90,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">98,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">108,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">372,700</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมคอมพิวเตอร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">104,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">95,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">111,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">396,800</td>
          </tr>

          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">93,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">103,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">103,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">383,000</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              วิศวกรรมยานยนต์และมอเตอร์สปอร์ต
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">104,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">93,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">390,000</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาวิศวกรรมการซ่อมบำรุงอากาศยาน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">49,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">250,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">250,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">63,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">612,500</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สถาบันการบิน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานักบินพาณิชย์ มีค่าบำรุงห้องปฏิบัติการ สถาบันการบิน
              ภาคปกติภาคละ 5,000 บาท
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">100,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">138,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">1,030,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">1,558,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">2,827,300</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="5">
              วิทยาลัยการออกแบบ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">95,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">92,000	</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">86,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">59,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">333,700</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการออกแบบภายใน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">110,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">103,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">64,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">362,300</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการออกแบบนิเทศศิลป์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">107,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">48,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">336,500</td>
          </tr>

          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาแฟชั่นดีไซน์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">101,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">105,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">82,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">57,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">347,600</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการออกแบบ (English)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">96,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">95,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">59,900	</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">335,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะดิจิทัลอาร์ต
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาคอมพิวเตอร์อาร์ต
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">117,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">123,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">114,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">55,400	</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">410,400</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะสถาปัตยกรรมศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาสถาปัตยกรรมศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">107,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">102,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">86,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">86,700	</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">453,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="1">
              คณะบัญชี
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              หลักสูตรบัญชี
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">76,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">57,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">289,400</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="6">
              คณะบริหารธุรกิจ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาการจัดการ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">64,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">71,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">76,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">70,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาธุรกิจดิจิทัล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">66,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">68,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">69,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการเงินและการลงทุน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">63,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">77,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">71,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">70,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">64,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">76,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">70,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">71,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">64,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">76,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">70,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">71,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาการบริหารธุรกิจระหว่างประเทศ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">64,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">71,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">76,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">70,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะเศรษฐศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาเศรษฐกิจดิจิทัล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">90,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">80,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">74,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">43,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">288,500</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="6">
              วิทยาลัยศิลปศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาภาษาญี่ปุ่น
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">84,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">52,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">291,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาภาษาไทยเพื่อการสื่อสาร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">47,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">285,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาภาษาอังกฤษ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">72,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">84,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">62,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">300,400</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาภาษาจีน
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">89,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">52,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">302,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาภาษาฝรั่งเศส
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">77,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">68,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">76,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">57,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">279,100</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาภาษาและวัฒนธรรมเกาหลี
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">67,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">50,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">286,000</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="10">
              วิทยาลัยนิเทศศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">87,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">98,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">44,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">317,900</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">98,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">74,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">40,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">307,400</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">84,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">56,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">308,900</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการภาพยนตร์ดิจิทัล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">92,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">42,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">308,200</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาสื่อสารการแสดง
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">95,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">43,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">306,600</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">82,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">57,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">306,900</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชามัลติมีเดีย
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">86,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">51,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">317,400</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานิเทศศาสตร์การกีฬา
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">94,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">97,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">72,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">42,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">307,900</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,400	</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">103,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">	40,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">318,400</td>
          </tr>
          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">91,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">82,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">43,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">303,300</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="3">
              คณะนิติศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชานิติศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">83,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">79,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">60,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">304,600</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">36,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">43,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">46,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">126,000</td>
          </tr>
          <tr className=" ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">46,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">50,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">46,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">32,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">176,400</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="6">
              วิทยาลัยการท่องเที่ยว และการบริการ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาการจัดการการท่องเที่ยวเเละการบริการ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">89,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">84,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">85,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">57,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">316,5000</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการจัดการโรงแรมและภัตตาคาร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">73,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">98,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">89,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">44,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">306,700</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">115,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">112,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">115,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">31,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">374,200</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">102,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">138,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">117,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">68,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">427,400</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา สจล.)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">114,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">123,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">127,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">31,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">397,000</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา สจล.)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">115,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">112,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">115,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">31,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">374,200</td>
          </tr>

          <tr className="border">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              วิทยาลัยการกีฬา
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชากีฬากอล์ฟ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">149,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">171,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">193,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">15,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">530,000</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="3">
              วิทยาลัยนวัตกรรมสังคม
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">62,300</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">59,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">277,600</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
              (ระบบทางไกลทางอินเทอร์เน็ต)
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">40,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">54,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">54,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">40,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">189,000</td>
          </tr>
          <tr className="border bg-gray-200 ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              สาขาวิชาผู้ประกอบการทางสังคมยุคดิจิทัล
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">78,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">81,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">75,200</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">48,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">283,300</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="1">
              วิทยาลัยการกีฬา
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชากีฬากอล์ฟ
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">149,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">171,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">193,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">15,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">530,000</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="1">
              คณะรัฐศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชารัฐศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">82,700</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">70,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">53,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">294,400</td>
          </tr>

          <tr className="border ">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="1">
              คณะอาชญาวิทยาและการบริหารงานยุติธรรม
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">88,600</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">108,000</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">105,100</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">50,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">352,200</td>
          </tr>

          <tr className="border bg-gray-200">
            <td className="border p-3 max-lg:p-2 max-lg:text-sm" rowspan="1">
              วิทยาลัยดนตรี
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">
              {" "}
              สาขาวิชาดุริยางคศาสตร์
            </td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">143,500</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">151,800</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">130,900</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">78,400</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">-</td>
            <td className="border p-3 max-lg:p-2 max-lg:text-sm">504,600</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
        
    </div>
</>
  );
}
