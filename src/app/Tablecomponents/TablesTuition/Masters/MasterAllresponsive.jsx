import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";

export default function MasterAllresponsive() {
  return (
    <>
      <table className="  w-full text-center mt-4 ">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th rowspan="2" className="border p-3 max-lg:px-2 max-lg:text-sm">
              คณะ/สาขาวิชา
            </th>
            <th colspan="3" className="border p-3 max-lg:px-2 max-lg:text-sm">
              ภาคการศึกษา
            </th>
            <th rowspan="2" className="border p-3 max-lg:px-2 max-lg:text-sm">
              ตลอดหลักสูตร
            </th>
          </tr>
          <tr className="border ">
            <th className="border p-3 max-lg:px-2 max-lg:text-sm">ปกติ</th>
            <th className="border p-3 max-lg:px-2 max-lg:text-sm">
              เสาร์-อาทิตย์
            </th>
            <th className="border p-3 max-lg:px-2 max-lg:text-sm">อาทิตย์</th>
          </tr>
        </thead>
        <tbody className="">
          {/* กลุ่มธุรกิจ-เศรษฐศาสตร์  */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มธุรกิจ-เศรษฐศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรบริหารธุรกิจมหาบัณฑิต (คณะบริหารธุรกิจ) Master of Business
              Administration (Twilight M.B.A.)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              181,500 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรการจัดการมหาบัณฑิต สาขาวิชาการเป็นผู้ประกอบการ
              (คณะบริหารธุรกิจ) Master of Management (Entrepreneurship)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              181,500 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรบัญชีมหาบัณฑิต (คณะบัญชี) Master of Accountancy
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              259,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรเศรษฐศาสตรมหาบัณฑิต สาขาวิชาเศรษฐกิจดิจิทัล
              (คณะเศรษฐศาสตร์) Master of Economics (Digital Economy) (Economics)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              216,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาการจัดการโลจิสติกส์
              (บัณฑิตวิทยาลัย) Master of Science (Management of Logistics)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              197,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรบริหารธุรกิจมหาบัณฑิต (หลักสูตรนานาชาติจีน)
              (วิทยาลัยนานาชาติจีน) Master of Business Administration
              (M.B.A.Chinese (สำหรับนักศึกษาไทยและนักศึกษาต่างชาติ))
              (International Chinese College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              492,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรบริหารธุรกิจมหาบัณฑิต (คณะบริหารธุรกิจ) Master of Business
              Administration (Executive M.B.A.CEO (เรียนวันอาทิตย์))
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              196,500 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาธุรกิจดิจิทัลระหว่างประเทศ
              (หลักสูตรนานาชาติ) (วิทยาลัยนานาชาติ) Master of Science
              (International Digital Business) (International College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              270,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาการจัดการโลจิสติกส์
              (ภาษาอังกฤษ) (บัณฑิตวิทยาลัย) Master of Science (Management of
              Logistics) (English Program)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              348,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรบริหารธุรกิจมหาบัณฑิต สาขาวิชาการบริหารอุตสาหกรรมกอล์ฟ
              (วิทยาลัยการกีฬา) Master of Business Administration Program in
              Golf Industry Administration
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              โทร 02 791 6000 ต่อ 4142 และ 4122
            </td>
          </tr>

          {/* กลุ่มสังคมศาสตร์-มนุษยศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มสังคมศาสตร์-มนุษยศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรรัฐประศาสนศาสตรมหาบัณฑิต
              (สถาบันรัฐประศาสนศาสตร์และนโยบายสาธารณะ) Master of Public
              Administration
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              189,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต
              สาขาวิชาอาชญาวิทยาและการบริหารงานยุติธรรม
              (คณะอาชญาวิทยาและการบริหารงานยุติธรรม) Master of Arts (Criminology
              and Justice Administration)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรัฐศาสตรมหาบัณฑิต สาขาวิชาการเมืองการปกครอง (คณะรัฐศาสตร์)
              Master of Political Science (Politics and Government)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิติศาสตรมหาบัณฑิต (คณะนิติศาสตร์) Master of Laws
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              216,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาภาษาอังกฤษเพื่อวิชาชีพ
              (วิทยาลัยศิลปศาสตร์) Master Arts (English for Professions)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              216,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาการทูตและการต่างประเทศ
              (หลักสูตรนานาชาติ) (สถาบันการทูตและการต่างประเทศ) Master of Arts
              (Diplomacy and International Studies) (International College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              276,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง (วิทยาลัยนวัตกรรมสังคม) Master of Arts (Leadership in
              Society, Business and Politics)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              181,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง(การศึกษาทางอินเทอร์เน็ต) Master of Arts (Leadership in
              Society, Business and Politics) (Internet-Based Distance
              Education)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              144,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง (การศึกษาทางอินเทอร์เน็ต) (ภาษาอังกฤษ) : Master of
              Arts (Leadership in Society, Business and Politics)
              (Internet-Based Distance Education) (English Program)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              สอบถามค่าใช้จ่ายได้ที่ 0865390919
            </td>
          </tr>

          {/* กลุ่มสังคมศาสตร์-มนุษยศาสตร์  */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มสังคมศาสตร์-มนุษยศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปมหาบัณฑิต สาขาวิชาการออกแบบ (วิทยาลัยการออกแบบ) Master
              of Fine Arts (Design)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              244,400 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปมหาบัณฑิต สาขาวิชาคอมพิวเตอร์อาร์ต (คณะดิจิทัลอาร์ต)
              Master of Fine Arts (Computer Art)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              228,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรดุริยางคศาสตรมหาบัณฑิต (วิทยาลัยดนตรี) Master of Music
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              202,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิเทศศาสตรมหาบัณฑิต (วิทยาลัยนิเทศศาสตร์) Master of
              Communication Arts
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิเทศศาสตรมหาบัณฑิต
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และซีรีส์
              (วิทยาลัยนิเทศศาสตร์) Master of Communication Arts (Film and
              Series Writing and Directing)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              216,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิเทศศาสตรมหาบัณฑิต (ภาษาอังกฤษ) (วิทยาลัยนิเทศศาสตร์)
              Master of Communication Arts (English Program) (Communication
              Arts)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              380,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิเทศศาสตรมหาบัณฑิต การเขียนบทและการกำกับภาพยนตร์และซีรีส์
              (สื่อการสอนเป็นภาษาอังกฤษ) (วิทยาลัยนิเทศศาสตร์) Master of
              Communication Arts (Film and Series Writing and Directing)
              (English Program) (Communication Arts)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              โทร. 0-2997-2222 ต่อ 4729, 4681
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิเทศศาสตรมหาบัณฑิต
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และซีรีส์
              (สำหรับนักศึกษาต่างชาติ) (วิทยาลัยนิเทศศาสตร์) Master of
              Communication Arts (Thai Program for Non Thai Student) (Film and
              Series Writing and Directing)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              โทร. 0-2997-2222 ต่อ 4729, 4681
            </td>
          </tr>
          {/* กลุ่มสังคมศาสตร์-มนุษยศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มสังคมศาสตร์-มนุษยศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรรัฐประศาสนศาสตรมหาบัณฑิต
              (สถาบันรัฐประศาสนศาสตร์และนโยบายสาธารณะ) Master of Public
              Administration
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              189,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต
              สาขาวิชาอาชญาวิทยาและการบริหารงานยุติธรรม
              (คณะอาชญาวิทยาและการบริหารงานยุติธรรม) Master of Arts (Criminology
              and Justice Administration)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรัฐศาสตรมหาบัณฑิต สาขาวิชาการเมืองการปกครอง (คณะรัฐศาสตร์)
              Master of Political Science (Politics and Government)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรนิติศาสตรมหาบัณฑิต (คณะนิติศาสตร์) Master of Laws
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              216,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาภาษาอังกฤษเพื่อวิชาชีพ
              (วิทยาลัยศิลปศาสตร์) Master Arts (English for Professions)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              216,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาการทูตและการต่างประเทศ
              (หลักสูตรนานาชาติ) (สถาบันการทูตและการต่างประเทศ) Master of Arts
              (Diplomacy and International Studies) (International College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              276,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง (วิทยาลัยนวัตกรรมสังคม) Master of Arts (Leadership in
              Society, Business and Politics)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              181,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง(การศึกษาทางอินเทอร์เน็ต) Master of Arts (Leadership in
              Society, Business and Politics) (Internet-Based Distance
              Education)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              144,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง (การศึกษาทางอินเทอร์เน็ต) (ภาษาอังกฤษ) : Master of
              Arts (Leadership in Society, Business and Politics)
              (Internet-Based Distance Education) (English Program)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              สอบถามค่าใช้จ่ายได้ที่ 0865390919
            </td>
          </tr>

          {/* กลุ่มวิศวกรรมศาสตร์-เทคโนโลยีสารสนเทศ  */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มวิศวกรรมศาสตร์-เทคโนโลยีสารสนเทศ
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิศวกรรมศาสตรมหาบัณฑิต สาขาวิชาวิศวกรรมโยธา
              (วิทยาลัยวิศวกรรมศาสตร์) Master of Engineering (Civil Engineering)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิศวกรรมศาสตรมหาบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์
              (วิทยาลัยวิศวกรรมศาสร์) Master of Engineering (Electrical and
              Computer Engineering)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรการจัดการความมั่นคงไซเบอร์และเทคโนโลยี
              (วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี) Master of science (Cyber
              Security Management and Technology )
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              210,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรสารสนเทศศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีสื่อสังคม
              (วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี) Master of Information Science
              (Social Media Technology)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              181,500 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาการจัดการนวัตกรรมดิจิทัล
              (ระบบการศึกษาทางไกลทางอินเทอร์เน็ต) Master of Science Program in
              Digital Innovation Management (Internet-based Distance Education)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              156,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิศวกรรมศาสตรมหาบัณฑิต สาขาวิชาวิศวกรรมโยธา (ภาษาอังกฤษ)
              (วิทยาลัยวิศวกรรมศาสตร์) Master of Engineering (Civil Engineering)
              (English Program) (Engineering)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              348,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิศวกรรมศาสตรมหาบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์
              (ภาษาอังกฤษ) (วิทยาลัยวิศวกรรมศาสตร์) Master of Engineering
              (Electrical and Computer Engineering) (English Program)
              (Engineering)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              348,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรการจัดการความมั่นคงไซเบอร์และเทคโนโลยี (ภาษาอังกฤษ)
              (วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี) Master of science (English
              Program) (Cyber Security Management and Technology )
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              สอบถาม FB:
              <Link href={"https://www.facebook.com/rangsituniversity"}>
                Rangsit University
              </Link>
            </td>
          </tr>

          {/* กลุ่มวิทยาศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มวิทยาศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ
              (คณะเทคโนโลยีชีวภาพ) Master of Science (Biotechnology)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาวิทยาศาสตร์ชีวการแพทย์
              (คณะวิทยาศาสตร์) Master of Science (Biomedical Sciences)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              204,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิศวกรรมศาสตรมหาบัณฑิต สาขาวิชาวิศวกรรมชีวการแพทย์
              (วิทยาลัยวิศวกรรมชีวการแพทย์) Master of Engineering (Biomedical
              Engineering)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              224,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาการแพทย์แผนตะวันออก
              (วิทยาลัยการแพทย์แผนตะวันออก) Master of Science (Oriental
              Medicine)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              245,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาเภสัชศาสตร์
              (วิทยาลัยเภสัชศาสตร์) Master of Science (Pharmacy)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              288,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรพยาบาลศาสตรมหาบัณฑิต สาขาวิชาการพยาบาลผู้ใหญ่และผู้สูงอายุ
              (คณะพยาบาลศาสตร์) Master of Nursing Science (Adult and
              Gerontological Nursing)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              240,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาตจวิทยาและตจศัลยศาสตร์
              (หลักสูตรนานาชาติ) (วิทยาลัยแพทยศาสตร์) Master of Science
              (Dermatology and Dermatosurgery) (International Program)
              (Medicine)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              860,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาทัศนมาตรคลินิก
              (คณะทัศนมาตรศาสตร์) Master of Science (Clinical Optometry)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              260,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาทันตแพทยศาสตร์
              (วิทยาลัยทันตแพทยศาสตร์) Master of Science Program in Dentistry
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              กลุ่มวิชาวิทยาเอนโดดอนต์ 1,220,000 บาท / กลุ่มวิชาทันตกรรมรากเทียม
              1,380,000 บาท
            </td>
          </tr>

          {/* กลุ่มศึกษาศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              กลุ่มศึกษาศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาการศึกษาระบบสองภาษา
              (หลักสูตรนานาชาติ) (วิทยาลัยครูสุริยเทพ) Master of Education
              (Bilingual Education) (International Program) (Suriyadhep Teachers
              College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              320,400 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาการบริหารการศึกษา
              (วิทยาลัยครูสุริยเทพ) Master of Education (Educational
              Administration) (Suriyadhep Teachers College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              228,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาหลักสูตรและการสอน
              (วิทยาลัยครูสุริยเทพ) Master of Education (Curriculum and
              Instruction) (Suriyadhep Teachers College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              ใบประกอบวิชาชีพครู 240,000 บาท / ไม่รับใบประกอบวิชาชีพครู 204,000
              บาท / สอนเป็นภาษาอังกฤษ 209,400 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาหลักสูตรและการสอน (ภาษาอังกฤษ)
              (วิทยาลัยครูสุริยเทพ) Master of Education (Curriculum and
              Instruction) (English Prograd) (Suriyadhep Teachers College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              โทร 0-2997-2222 ต่อ 1275,1276
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาการบริหารการศึกษา
              (สำหรับนักศึกษาต่างชาติ) (วิทยาลัยครูสุริยเทพ) Master of Education
              (Educational Administration) (Thai Program for Non Thai Student)
              (Suriyadhep Teachers College)
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:px-2 text-sm max-md:text-xs">
              {" "}
              โทร 0-2997-2222 ต่อ 1275,1276
            </td>
          </tr>

          {/* ประกาศนียบัตร   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs text-start"
            >
              ประกาศนียบัตร
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              หลักสูตรประกาศนียบัตรบัณฑิต สาขาวิชาทันตแพทยศาสตร์ Graduate
              Diploma in Dentistry
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:px-2 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-3 max-lg:px-2 max-lg:text-sm">
              {" "}
              540,000 บาท
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
