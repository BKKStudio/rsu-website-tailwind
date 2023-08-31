"use client";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";
import Link from "next/link";
import { RiShakeHandsFill } from "react-icons/ri";

export default function BachelorsAllResponsive() {
  const [data, setData] = useState({
    Faculty: "",
    Major: "",
    term1: "",
    term2: "",
    term3: "",
    term4: "",
    term5: "",
    term6: "",
    dsl: "",
    Allterm: "",
  });
  console.log(data);
  return (
    <>
      <table className="  w-full text-center mt-4 ">
        <thead className="bg-gray-700 text-white">
          <tr className="border ">
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">
              คณะ/สาขาวิชา
            </th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">
              ลักษณะการกู้ยืมฯ
            </th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm  ">
              ค่าเทอม 1/2566
            </th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">
              ตลอดหลักสูตร
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยแพทยศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              แพทยศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs flex items-center justify-center gap-1">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "วิทยาลัยแพทยศาสตร์",
                    Major: "แพทยศาสตร์",
                    term1: "650,000",
                    term2: "650,000",
                    term3: "650,000",
                    term4: "650,000",
                    term5: "650,000",
                    term6: "650,000",
                    dsl: "2",
                    Allterm: "3,900,000",
                  })
                }
              >
                <span>3,900,000</span>
                <FaSearchPlus size={15} color="green" />
              </button>
            </td>
          </tr>

          {/*   วิทยาลัยทันตแพทยศาสตร์ (Bilingual) */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยทันตแพทยศาสตร์ (Bilingual)
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาทันตแพทยศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "วิทยาลัยทันตแพทยศาสตร์ (Bilingual)",
                    Major: "สาขาวิชาทันตแพทยศาสตร์",
                    term1: "900,000",
                    term2: "900,000",
                    term3: "900,000",
                    term4: "900,000",
                    term5: "900,000",
                    term6: "900,000",
                    dsl: "2",
                    Allterm: "5,400,000",
                  })
                }
              >
                <span>5,400,000</span>
                <FaSearchPlus size={15} color="green" />
              </button>
              </div>
            </td>
          </tr>

          {/*   วิทยาลัยเภสัชศาสตร์ */}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยเภสัชศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาบริบาลทางเภสัชกรรม
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "วิทยาลัยเภสัชศาสตร์",
                    Major: "สาขาวิชาบริบาลทางเภสัชกรรม",
                    term1: "118,500",
                    term2: "210,100",
                    term3: "336,000",
                    term4: "462,000",
                    term5: "458,200",
                    term6: "228,000",
                    dsl: "2",
                    Allterm: "1,812,800",
                  })
                }
              >
                <span>1,812,800</span>
                <FaSearchPlus size={15} color="green" />
              </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาเภสัชกรรมอุตสาหการ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "วิทยาลัยเภสัชศาสตร์",
                    Major: "สาขาวิชาเภสัชกรรมอุตสาหการ",
                    term1: "120,100",
                    term2: "227,100",
                    term3: "353,000",
                    term4: "431,000",
                    term5: "434,200",
                    term6: "233,000",
                    dsl: "2",
                    Allterm: "1,798,400",
                  })
                }
              >
                <span>1,798,400</span>
                <FaSearchPlus size={15} color="green" />
              </button>
              </div>
            </td>
          </tr>

          {/*   คณะพยาบาลศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะพยาบาลศาสตร์
            </th>
          </tr>
          <tr className=" ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาพยาบาลศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "คณะพยาบาลศาสตร์",
                    Major: "สาขาวิชาพยาบาลศาสตร์",
                    term1: "150,100",
                    term2: "187,300",
                    term3: "227,900",
                    term4: "225,700",
                    term5: "-",
                    term6: "-",
                    dsl: "2",
                    Allterm: "791,000",
                  })
                }
              >
                <span>791,000</span>
                <FaSearchPlus size={15} color="green" />
              </button>
              </div>
            </td>
          </tr>
          <tr className=" ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาพยาบาลศาสตร์ (Bilingual)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-center">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยเภสัชศาสตร์",
                      Major: "สาขาวิชาเภสัชกรรมอุตสาหการ",
                      term1: "210,000",
                      term2: "210,000",
                      term3: "210,000",
                      term4: "210,000",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "840,000",
                    })
                  }
                >
                  <span>840,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/*   คณะรังสีเทคนิค*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะรังสีเทคนิค
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชารังสีเทคนิค
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (ไม่เปิดรับ)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs flex items-center justify-center gap-1">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "คณะพยาบาลศาสตร์",
                    Major: "สาขาวิชาพยาบาลศาสตร์",
                    term1: "158,200",
                    term2: "144,400",
                    term3: "184,500",
                    term4: "154,000",
                    term5: "-",
                    term6: "-",
                    dsl: "2 + Human*",
                    Allterm: "641,100",
                  })
                }
              >
                <span>641,100</span>
                <FaSearchPlus size={15} color="green" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Model */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-pink-600 text-white">
              <p className="modal-title fs-5" id="exampleModalToggleLabel">
                {data.Faculty}
              </p>
              <button
                type="button"
                className=""
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <BsXLg size={25} />
              </button>
            </div>
            <div className="modal-body w-full p-0 ">
              <div>
                <div className="text-center p-2 bg-gray-600 text-white">
                  {data.Major}
                </div>
                <table className="w-full text-center">
                  <thead className="bg-gray-200 text-black">
                    <tr className="border ">
                      <th className="border p-1 max-md:p-2  max-md:text-xs font-poppins">
                        ปีการศึกษาที่ 1
                      </th>
                      <th className="border p-1  max-md:p-2  max-md:text-xs font-poppins">
                        ปีการศึกษาที่ 2
                      </th>
                      <th className="border p-1  max-md:p-2  max-md:text-xs font-poppins">
                        ปีการศึกษาที่ 3
                      </th>
                      <th className="border p-1 max-md:p-2  max-md:text-xs font-poppins">
                        ปีการศึกษาที่ 4
                      </th>
                      <th className="border p-1 max-md:p-2  max-md:text-xs font-poppins">
                        ปีการศึกษาที่ 5
                      </th>
                      <th className="border p-1 max-md:p-2  max-md:text-xs font-poppins">
                        ปีการศึกษาที่ 6
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border">
                      <td className="border p-1 max-md:p-2  max-md:text-xs ">
                        {data.term1}
                      </td>
                      <td className="border p-1 max-md:p-2  max-md:text-xs ">
                        {data.term2}
                      </td>
                      <td className="border p-1 max-md:p-2  max-md:text-xs">
                        {data.term3}
                      </td>
                      <td className="border p-1 max-md:p-2  max-md:text-xs">
                        {" "}
                        {data.term4}
                      </td>
                      <td className="border p-1 max-md:p-2  max-md:text-xs">
                        {data.term5}
                      </td>
                      <td className="border p-1 max-md:p-2  max-md:text-xs">
                        {data.term6}
                      </td>
                    </tr>
                    <tr className="border  bg-gray-200 ">
                      <th
                        colspan="5"
                        className="border p-1 max-md:p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-end font-poppins"
                      >
                        ลักษณะการกู้ยืมฯ
                      </th>
                      <td className="border p-1 max-md:p-2   max-md:text-xs">
                        {data.dsl}
                      </td>
                    </tr>
                    <tr className="border ">
                      <th
                        colspan="5"
                        className="border p-1 max-lg:p-1 max-lg:text-sm max-md:text-xs text-end font-poppins"
                      >
                        ค่าเทอมตลอดหลักสูตร
                      </th>
                      <td className="border p-1 max-md:p-2   max-md:text-xs">
                        {data.Allterm}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center items-center">
                  <div className="flex gap-2 max-md:p-3">
                    <Link
                      href=""
                      className="max-md:p-2 no-underline text-white bg-gray-400 rounded-lg flex items-center gap-2"
                    >
                      กองทุนกู้ยืมฯ <RiShakeHandsFill size={20} />
                    </Link>
                    <Link
                      href=""
                      className="max-md:p-2 no-underline text-white bg-pink-600 rounded-lg flex items-center gap-2"
                    >
                      สมัครเรียน <BsPenFill size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
