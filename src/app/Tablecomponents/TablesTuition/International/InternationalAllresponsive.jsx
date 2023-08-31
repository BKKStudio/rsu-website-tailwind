"use client";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";
import Link from "next/link";
import { RiShakeHandsFill } from "react-icons/ri";

export default function InternationalAllresponsive() {
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
              International College
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              International Business
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              77,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex items-center justify-center ">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "International College",
                      Major: "International Business",
                      term1: "139,000",
                      term2: "128,000",
                      term3: "137,000",
                      term4: "83,000",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "487,000",
                    })
                  }
                >
                  <span>487,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              Information and Communication Technology
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              77,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex items-center justify-center ">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "International College",
                    Major: " 	Information and Communication Technology",
                    term1: "151,000",
                    term2: "130,500",
                    term3: "115,500	",
                    term4: "55,500",
                    term5: "-",
                    term6: "-",
                    dsl: "1",
                    Allterm: "452,500",
                  })
                }
              >
                <span>452,500</span>
                <FaSearchPlus size={15} color="green" />
              </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              Communications Arts
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              77,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex items-center justify-center ">
              <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "International College",
                    Major: "Communications Arts",
                    term1: "128,000",
                    term2: "128,000",
                    term3: "128,000",
                    term4: "74,000",
                    term5: "-",
                    term6: "-",
                    dsl: "1",
                    Allterm: "458,000",
                  })
                }
              >
                <span>458,000</span>
                <FaSearchPlus size={15} color="green" />
              </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              International Hospitality and Tourism
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              80,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
            <div className="flex items-center justify-center ">
            <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "International College",
                    Major: "International Hospitality and Tourism",
                    term1: "119,000",
                    term2: "137,000",
                    term3: "128,000",
                    term4: "77,000",
                    term5: "-",
                    term6: "-",
                    dsl: "1",
                    Allterm: "461,000",
                  })
                }
              >
                <span>461,000</span>
                <FaSearchPlus size={15} color="green" />
              </button>
            </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              Civil Engineering
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
            81,600
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
            <div className="flex items-center justify-center ">
            <button
                className="flex items-center justify-center gap-1 hover:text-pink-600"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() =>
                  setData({
                    Faculty: "International College",
                    Major: "Civil Engineering",
                    term1: "160,000",
                    term2: "137,000",
                    term3: "141,400",
                    term4: "116,400",
                    term5: "-",
                    term6: "-",
                    dsl: "-",
                    Allterm: "554,800",
                  })
                }
              >
                <span>554,800</span>
                <FaSearchPlus size={15} color="green" />
              </button>
            </div>
            </td>
          </tr>

          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              Institute of Diplomacy and International Studies
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              International Relations and Development
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              77,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex items-center justify-center ">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "Institute of Diplomacy and International Studies",
                      Major: "International Relations and Development",
                      term1: "142,000",
                      term2: "151,000",
                      term3: "119,000",
                      term4: "65,000",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "477,000",
                    })
                  }
                >
                  <span>477,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              INTERNATIONAL CHINESE COLLEGE
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              International Business Management
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
            97,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex items-center justify-center ">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "INTERNATIONAL CHINESE COLLEGE",
                      Major: "International Business Management",
                      term1: "195,000",
                      term2: "195,000",
                      term3: "195,000",
                      term4: "195,000",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "780,000",
                    })
                  }
                >
                  <span>780,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
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
        <div className="modal-dialog modal-lg modal-dialog-centered">
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
                  <thead className=" text-black">
                    <tr className="border  bg-gray-200">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 1
                      </th>
                      <th className="border p-1  max-sm:text-xs" colSpan="1">
                        {data.term1}
                      </th>
                    </tr>
                    <tr className="border ">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 2
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term2}
                      </th>
                    </tr>
                    <tr className="border bg-gray-200">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 3
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term3}
                      </th>
                    </tr>
                    <tr className="border ">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 4
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term4}
                      </th>
                    </tr>
                    <tr className="border bg-gray-200">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 5
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term5}
                      </th>
                    </tr>
                    <tr className="border ">
                      <th
                        className="border p-1  max-sm:text-xs font-poppins"
                        colSpan="5"
                      >
                        ปีการศึกษาที่ 6
                      </th>
                      <th className="border p-1  max-sm:text-xs " colSpan="1">
                        {data.term6}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border  bg-gray-200 ">
                      <th
                        colSpan="5"
                        className="border p-1 max-lg:p-1 max-lg:text-sm max-sm:text-xs text-end font-poppins"
                      >
                        ลักษณะการกู้ยืมฯ
                      </th>
                      <td className="border p-1   max-sm:text-xs">
                        {data.dsl}
                      </td>
                    </tr>
                    <tr className="border ">
                      <th
                        colSpan="5"
                        className="border p-1 max-lg:p-1 max-lg:text-sm max-sm:text-xs text-end font-poppins"
                      >
                        ค่าเทอมตลอดหลักสูตร
                      </th>
                      <td className="border p-1   max-sm:text-xs">
                        {data.Allterm}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center items-center">
                  <div className="flex gap-2 p-3">
                    <Link
                      href=""
                      className=" p-2 no-underline text-white bg-gray-400 rounded-lg flex items-center gap-2"
                    >
                      กองทุนกู้ยืมฯ <RiShakeHandsFill size={20} />
                    </Link>
                    <Link
                      href=""
                      className="p-2 no-underline text-white bg-pink-600 rounded-lg flex items-center gap-2"
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
