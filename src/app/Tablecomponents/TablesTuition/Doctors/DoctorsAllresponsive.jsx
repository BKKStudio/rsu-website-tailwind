import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";

export default function DoctorsAllresponsive() {
  return (
    <>
      <table className="  w-full text-center mt-4 ">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th rowspan="2" className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะ/สาขาวิชา
            </th>
            <th colspan="3" className="border p-3 max-lg:p-2 max-lg:text-sm">
              ภาคการศึกษา
            </th>
            <th rowspan="2" className="border p-3 max-lg:p-2 max-lg:text-sm">
              ตลอดหลักสูตร
            </th>
          </tr>
          <tr className="border ">
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">ปกติ</th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">
              เสาร์-อาทิตย์
            </th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">อาทิตย์</th>
          </tr>
        </thead>
        <tbody className="">
          {/* วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี  */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ
              (วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี) Doctor of Philosophy
              (Information Technology)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              แบบเหมาจ่าย(สำหรับผู้จบปริญญโท) 450,000 บาท /
              แบบเหมาจ่าย(สำหรับผู้จบปริญญตรี) 600,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีสื่อสังคม
              (วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี) Doctor of Philosophy (Social
              Media Technology)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              420,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ (ภาษาอังกฤษ)
              (วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี) Doctor of Philosophy (English
              Program) (Information Technology)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              โทร. 0-2997-2222 ต่อ 4069, 4147
            </td>
          </tr>

          {/* วิทยาลัยวิศวกรรมศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยวิศวกรรมศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรวิศวกรรมศาสตรดุษฎีบัณฑิต สาขาวิชาวิศวกรรมโยธา
              (วิทยาลัยวิศวกรรมศาสตร์) Doctor of Engineering (Civil Engineering)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              แบบเหมาจ่าย(สำหรับผู้จบปริญญโท) 240,000 บาท /
              แบบเหมาจ่าย(สำหรับผู้จบปริญญตรี) 320,000 บาท
            </td>
          </tr>

          {/* วิทยาลัยนิเทศศาสตร์  */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยนิเทศศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชานิเทศศาสตร์
              (วิทยาลัยนิเทศศาสตร์) Doctor of Philosophy (Communication Arts)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              450,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชานิเทศศาสตร์ (ภาษาอังกฤษ)
              (วิทยาลัยนิเทศศาสตร์) Doctor of Philosophy (Communication Arts)
              (English Program)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              600,000 บาท
            </td>
          </tr>

          {/* วิทยาลัยนวัตกรรมสังคม   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยนวัตกรรมสังคม
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
              นวัตกรรมสังคม (วิทยาลัยนวัตกรรมสังคม) Doctor of Philosophy
              (Leadership in Society, Business and Politics)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              แบบเหมาจ่าย(สำหรับผู้จบปริญญโท) 475,000 บาท /
              แบบเหมาจ่าย(สำหรับผู้จบปริญญตรี) 760,000 บาท
            </td>
          </tr>

          {/* รัฐประศาสนศาสตร์ */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              รัฐประศาสนศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชารัฐประศาสนศาสตร์
              (สถาบันรัฐประศาสนศาสตร์และนโยบายสาธารณะ) Doctor of Philosophy
              (Public Administration) (Public administration)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              455,000 บาท
            </td>
          </tr>

          {/* คณะนิติศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะนิติศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรนิติศาสตรดุษฎีบัณฑิต (คณะนิติศาสตร์) Doctor of Laws
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              450,000 บาท
            </td>
          </tr>

          {/* วิทยาลัยครูสุริยเทพ   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยครูสุริยเทพ
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรศึกษาศาสตรดุษฎีบัณฑิต (วิทยาลัยครูสุริยเทพ) Doctor of
              Education (Educational Studies) (Suriyadhep Teachers College)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              600,000 บาท
            </td>
          </tr>

          {/* วิทยาลัยเภสัชศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยเภสัชศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเภสัชศาสตร์
              (วิทยาลัยเภสัชศาสตร์) Doctor of Philosophy
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              แบบเหมาจ่าย(สำหรับผู้จบปริญญโท) 492,000 บาท /
              แบบเหมาจ่าย(สำหรับผู้จบปริญญตรี) 656,000 บาท
            </td>
          </tr>

          {/* คณะบริหารธุรกิจ   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะบริหารธุรกิจ
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรบริหารธุรกิจดุษฎีบัณฑิต (คณะบริหารธุรกิจ) Doctor of
              Business Administration
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1  max-lg:text-sm max-md:text-xs">
              {" "}
              585,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรบริหารธุรกิจดุษฎีบัณฑิต (ภาษาอังกฤษ) (คณะบริหารธุรกิจ)
              Doctor of Business Administration (English Program) (Business
              Administration)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1  max-lg:text-sm max-md:text-xs">
              {" "}
              864,000 บาท
            </td>
          </tr>

          {/* คณะอาชญาวิทยาและการบริหารงานยุติธรรม   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะอาชญาวิทยาและการบริหารงานยุติธรรม
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต
              สาขาวิชาอาชญาวิทยาและการบริหารงานยุติธรรม
              (คณะอาชญาวิทยาและการบริหารงานยุติธรรม) Doctor of Philosophy
              (Criminology and Justice Administration)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1  max-lg:text-sm max-md:text-xs">
              {" "}
              450,000 บาท
            </td>
          </tr>

          {/* วิทยาลัยวิศวกรรมชีวการแพทย์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยวิศวกรรมชีวการแพทย์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรวิศวกรรมศาสตรดุษฎีบัณฑิต สาขาวิชาวิศวกรรมชีวการแพทย์
              (วิทยาลัยวิศวกรรมชีวการแพทย์) Doctor of Engineering (Biomedical
              Engineering)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              แบบเหมาจ่าย(สำหรับผู้จบปริญญโท) 420,000 บาท /
              แบบเหมาจ่าย(สำหรับผู้จบปริญญตรี) 560,000 บาท
            </td>
          </tr>

          {/* คณะเศรษฐศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะเศรษฐศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต
              สาขาวิชาสาขาวิชาเศรษฐศาสตร์การเมืองระหว่างประเทศและการพัฒนา
              (คณะเศรษฐศาสตร์) Doctor of Philosophy (International Political
              Economy and Development) (Economics)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              450,000 บาท
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเศรษฐกิจดิจิทัล (คณะเศรษฐศาสตร์)
              Doctor of Philosophy (Digital Economy)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              450,000 บาท
            </td>
          </tr>

          {/* คณะเศรษฐศาสตร์   */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะเศรษฐศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรปรัชญาดุษฎีบัณฑิต
              สาขาวิชาสาขาวิชาเศรษฐศาสตร์การเมืองระหว่างประเทศและการพัฒนา
              (คณะเศรษฐศาสตร์) Doctor of Philosophy (International Political
              Economy and Development) (Economics)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              450,000 บาท
            </td>
          </tr>

          {/* วิทยาลัยการกีฬา */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะเศรษฐศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรบริหารธุรกิจดุษฎีบัณฑิต สาขาวิชาการบริหารอุตสาหกรรมกอล์ฟ
              (วิทยาลัยการกีฬา) Doctor of Business Administration Program in
              Golf Industry Administration.
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              โทร 02 791 6000 ต่อ 4142 และ 4122
            </td>
          </tr>

          {/* วิชาการเมืองการปกครอง */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="5"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิชาการเมืองการปกครอง
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรรัฐศาสตรดุษฎีบัณฑิต สาขาวิชาการเมืองการปกครอง Doctor of
              Political Science Program in Politics and Government
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <BsCheckLg size={20} color="red" />
              </div>
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              -
            </td>
            <td className="border p-2 max-lg:p-1 text-sm max-md:text-xs">
              {" "}
              โทร 0-2791-6000 ต่อ 1266
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
