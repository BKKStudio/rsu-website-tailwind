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
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะรังสีเทคนิค",
                      Major: "สาขาวิชารังสีเทคนิค",
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
              </div>
            </td>
          </tr>

          {/*   คณะเทคนิคการแพทย์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะเทคนิคการแพทย์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาเทคนิคการแพทย์
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
                      Faculty: "คณะเทคนิคการแพทย์",
                      Major: "สาขาวิชาเทคนิคการแพทย์",
                      term1: "109,500",
                      term2: "127,800",
                      term3: "244,000",
                      term4: "143,000",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "624,300",
                    })
                  }
                >
                  <span>624,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/*คณะกายภาพบำบัดและเวชศาสตร์การกีฬา*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะกายภาพบำบัดและเวชศาสตร์การกีฬา
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชากายภาพบำบัด
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
                      Faculty: "คณะกายภาพบำบัดและเวชศาสตร์การกีฬา",
                      Major: " สาขาวิชากายภาพบำบัด",
                      term1: "152,700",
                      term2: "174,400",
                      term3: "188,900",
                      term4: "105,200",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "621,200",
                    })
                  }
                >
                  <span>621,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิทยาศาสตร์การออกกำลังกายและสมรรถภาพทางการกีฬา
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              67,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะกายภาพบำบัดและเวชศาสตร์การกีฬา",
                      Major:
                        "สาขาวิชาวิทยาศาสตร์การออกกำลังกายและสมรรถภาพทางการกีฬา",
                      term1: "106,200",
                      term2: "123,300",
                      term3: "119,200",
                      term4: "90,200",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "438,900",
                    })
                  }
                >
                  <span>438,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาชรัณสุขศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              67,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะกายภาพบำบัดและเวชศาสตร์การกีฬา",
                      Major: " สาขาวิชาชรัณสุขศาสตร์",
                      term1: "114,600",
                      term2: "146,900",
                      term3: "110,000",
                      term4: "67,500",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "439,000",
                    })
                  }
                >
                  <span>438,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/*วิทยาลัยการแพทย์แผนตะวันออก*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยการแพทย์แผนตะวันออก
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการแพทย์แผนตะวันออก
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              83,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                      Major: " สาขาวิชาการแพทย์แผนตะวันออก",
                      term1: "172,000",
                      term2: "165,500",
                      term3: "102,900",
                      term4: "116,500",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "553,900",
                    })
                  }
                >
                  <span>553,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการแพทย์แผนไทย
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              81,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                      Major: "สาขาวิชาการแพทย์แผนไทย",
                      term1: "142,900",
                      term2: "199,000",
                      term3: "165,200",
                      term4: "105,000",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "612,100",
                    })
                  }
                >
                  <span>612,100</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการแพทย์แผนจีน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              70,600
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                      Major: "สาขาวิชาการแพทย์แผนจีน",
                      term1: "136,800",
                      term2: "129,200",
                      term3: "118,000",
                      term4: "173,000",
                      term5: "174,200",
                      term6: "237,000",
                      dsl: "2",
                      Allterm: "968,200",
                    })
                  }
                >
                  <span>968,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/*คณะวิทยาศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะวิทยาศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิทยาศาสตร์ชีวการแพทย์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
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
                      Faculty: "คณะวิทยาศาสตร์",
                      Major: " สาขาวิชาวิทยาศาสตร์ชีวการแพทย์",
                      term1: "101,300",
                      term2: "113,400",
                      term3: "142,700",
                      term4: "78,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "436,200",
                    })
                  }
                >
                  <span>436,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* วิทยาลัยวิศวกรรมชีวการแพทย์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยวิศวกรรมชีวการแพทย์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมชีวการแพทย์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
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
                      Faculty: "วิทยาลัยวิศวกรรมชีวการแพทย์",
                      Major: "สาขาวิชาวิศวกรรมชีวการแพทย์",
                      term1: "132,400",
                      term2: "121,800",
                      term3: "121,800",
                      term4: "121,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "497,800",
                    })
                  }
                >
                  <span>497,800</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* คณะทัศนมาตรศาสตร*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะทัศนมาตรศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาทัศนมาตรศาสตร์
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
                      Faculty: "คณะทัศนมาตรศาสตร์",
                      Major: "สาขาวิชาทัศนมาตรศาสตร์",
                      term1: "115,900",
                      term2: "157,000",
                      term3: "164,900",
                      term4: "156,500",
                      term5: "128,500",
                      term6: "69,000",
                      dsl: "2",
                      Allterm: "791,800",
                    })
                  }
                >
                  <span>791,800</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* คณะเทคโนโลยีอาหาร*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะเทคโนโลยีอาหาร
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาเทคโนโลยีอาหาร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              52,700
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเทคโนโลยีอาหาร",
                      Major: "สาขาวิชาเทคโนโลยีอาหาร",
                      term1: "81,500",
                      term2: "113,500",
                      term3: "110,200",
                      term4: "69,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "375,000",
                    })
                  }
                >
                  <span>375,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาธุรกิจอุตสาหกรรมอาหาร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              50,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเทคโนโลยีอาหาร",
                      Major: "สาขาวิชาธุรกิจอุตสาหกรรมอาหาร",
                      term1: "82,300",
                      term2: "92,300",
                      term3: "94,500",
                      term4: "43,700",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "312,800",
                    })
                  }
                >
                  <span>312,800</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/*  คณะนวัตกรรมเกษตร*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะนวัตกรรมเกษตร
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานวัตกรรมเกษตร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              62,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะนวัตกรรมเกษตร",
                      Major: "สาขาวิชานวัตกรรมเกษตร",
                      term1: "106,700",
                      term2: "94,800",
                      term3: "80,700",
                      term4: "45,200",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "327,400",
                    })
                  }
                >
                  <span>327,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/*  วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิทยาการคอมพิวเตอร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              50,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาวิทยาการคอมพิวเตอร์",
                      term1: "82,100",
                      term2: "90,200",
                      term3: "81,200",
                      term4: "75,400",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "328,900",
                    })
                  }
                >
                  <span>328,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานวัตกรรมดิจิทัล
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              58,600
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชานวัตกรรมดิจิทัล",
                      term1: "89,000",
                      term2: "96,800",
                      term3: "83,000",
                      term4: "59,600",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "328,400",
                    })
                  }
                >
                  <span>328,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต (แขนงพัฒนาเกม)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              62,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต (แขนงพัฒนาเกม)",
                      term1: "110,300",
                      term2: "99,400",
                      term3: "67,400",
                      term4: "57,200",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "334,300",
                    })
                  }
                >
                  <span>334,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาสารสนเทศการลงทุน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              50,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาสารสนเทศการลงทุน",
                      term1: "93,500",
                      term2: "83,000",
                      term3: "86,000",
                      term4: "48,200",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "310,700",
                    })
                  }
                >
                  <span>310,700</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาเทคโนโลยีสื่อสังคม
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              54,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาเทคโนโลยีสื่อสังคม",
                      term1: "102,800",
                      term2: "85,400",
                      term3: "81,000",
                      term4: "54,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "324,000",
                    })
                  }
                >
                  <span>324,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* วิทยาลัยวิศวกรรมศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยวิศวกรรมศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมเครื่องกล
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              59,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมเครื่องกล",
                      term1: "94,400",
                      term2: "97,800",
                      term3: "97,800",
                      term4: "104,000",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "394,000",
                    })
                  }
                >
                  <span>394,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมไฟฟ้า
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              64,100
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมไฟฟ้า",
                      term1: "97,200",
                      term2: "103,000",
                      term3: "97,200",
                      term4: "99,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "397,200",
                    })
                  }
                >
                  <span>397,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมโยธา
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
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
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมโยธา",
                      term1: "97,700",
                      term2: "111,000",
                      term3: "97,200",
                      term4: "109,200",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "414,800",
                    })
                  }
                >
                  <span>414,800</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมเคมี
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              61,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมเคมี",
                      term1: "98,400",
                      term2: "95,000",
                      term3: "102,600",
                      term4: "88,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "384,800",
                    })
                  }
                >
                  <span>384,800</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมอุตสาหการ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              64,100
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมอุตสาหการ",
                      term1: "97,700",
                      term2: "106,000",
                      term3: "108,800",
                      term4: "73,800",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "386,300",
                    })
                  }
                >
                  <span>386,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              61,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม",
                      term1: "90,400",
                      term2: "98,700",
                      term3: "108,400",
                      term4: "75,200",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "372,700",
                    })
                  }
                >
                  <span>372,700</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมคอมพิวเตอร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
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
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
                      term1: "104,800",
                      term2: "95,000",
                      term3: "111,400",
                      term4: "85,600",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "396,800",
                    })
                  }
                >
                  <span>396,800</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
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
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: " สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง",
                      term1: "93,900",
                      term2: "103,600",
                      term3: "103,900",
                      term4: "81,600",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "383,000",
                    })
                  }
                >
                  <span>383,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              วิศวกรรมยานยนต์และมอเตอร์สปอร์ต
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              61,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: " วิศวกรรมยานยนต์และมอเตอร์สปอร์ต",
                      term1: "94,400",
                      term2: "97,800",
                      term3: "104,200",
                      term4: "93,600",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "390,000",
                    })
                  }
                >
                  <span>390,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิศวกรรมการซ่อมบำรุงอากาศยาน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              69,400
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: " สาขาวิชาวิศวกรรมการซ่อมบำรุงอากาศยาน",
                      term1: "49,100",
                      term2: "250,000",
                      term3: "250,000",
                      term4: "63,400",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "612,500",
                    })
                  }
                >
                  <span>612,500</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* สถาบันการบิน*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              สถาบันการบิน
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานักบินพาณิชย์ มีค่าบำรุงห้องปฏิบัติการ สถาบันการบิน
              ภาคปกติภาคละ 5,000 บาท
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              59,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "สถาบันการบิน",
                      Major: "สาขาวิชานักบินพาณิชย์",
                      term1: "100,500",
                      term2: "138,300",
                      term3: "1,030,000",
                      term4: "1,558,500",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "2,827,300",
                    })
                  }
                >
                  <span>2,827,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* วิทยาลัยการออกแบบ*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยการออกแบบ
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              59,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ",
                      term1: "95,400",
                      term2: "92,000",
                      term3: "86,400",
                      term4: "59,900",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "333,700",
                    })
                  }
                >
                  <span>333,700</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการออกแบบภายใน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              3
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              56,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาการออกแบบภายใน",
                      term1: "83,600",
                      term2: "110,900",
                      term3: "103,600",
                      term4: "64,200",
                      term5: "-",
                      term6: "-",
                      dsl: "3",
                      Allterm: "362,300",
                    })
                  }
                >
                  <span>362,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการออกแบบนิเทศศิลป์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              3
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              59,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาการออกแบบนิเทศศิลป์",
                      term1: "97,100",
                      term2: "107,800",
                      term3: "83,200",
                      term4: "48,400",
                      term5: "-",
                      term6: "-",
                      dsl: "3",
                      Allterm: "336,500",
                    })
                  }
                >
                  <span>336,500</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาแฟชั่นดีไซน์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              56,200
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาแฟชั่นดีไซน์",
                      term1: "101,600",
                      term2: "105,900",
                      term3: "82,600",
                      term4: "57,500",
                      term5: "-",
                      term6: "-",
                      dsl: "3",
                      Allterm: "347,600",
                    })
                  }
                >
                  <span>347,600</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการออกแบบ (English)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (รอ Update )
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาการออกแบบ (English)",
                      term1: "96,800",
                      term2: "95,500",
                      term3: "83,200",
                      term4: "59,900",
                      term5: "-",
                      term6: "-",
                      dsl: "3",
                      Allterm: "335,400",
                    })
                  }
                >
                  <span>335,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* คณะดิจิทัลอาร์ต*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะดิจิทัลอาร์ต
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาคอมพิวเตอร์อาร์ต
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
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
                      Faculty: "คณะดิจิทัลอาร์ต",
                      Major: "สาขาวิชาคอมพิวเตอร์อาร์ต",
                      term1: "117,400",
                      term2: "123,100",
                      term3: "114,500",
                      term4: "55,400",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "410,400",
                    })
                  }
                >
                  <span>410,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* คณะสถาปัตยกรรมศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะสถาปัตยกรรมศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาสถาปัตยกรรมศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              57,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะสถาปัตยกรรมศาสตร์",
                      Major: "สาขาวิชาสถาปัตยกรรมศาสตร์",
                      term1: "107,900",
                      term2: "102,100",
                      term3: "86,700",
                      term4: "86,700",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "453,400",
                    })
                  }
                >
                  <span>453,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* คณะบัญชี*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะบัญชี
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              หลักสูตรบัญชี
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              45,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบัญชี",
                      Major: "หลักสูตรบัญชี",
                      term1: "76,700",
                      term2: "75,800",
                      term3: "79,500",
                      term4: "57,400",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "289,400",
                    })
                  }
                >
                  <span>289,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>

          {/* คณะบริหารธุรกิจ*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะบริหารธุรกิจ
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการจัดการ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              42,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการจัดการ",
                      term1: "64,700",
                      term2: "71,700",
                      term3: "76,100",
                      term4: "70,900",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "283,400",
                    })
                  }
                >
                  <span>283,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการเงินและการลงทุน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              42,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการเงินและการลงทุน",
                      term1: "64,700",
                      term2: "71,700",
                      term3: "76,100",
                      term4: "70,900",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "283,400",
                    })
                  }
                >
                  <span>283,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              42,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก",
                      term1: "64,700",
                      term2: "76,800",
                      term3: "70,100",
                      term4: "71,800",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "283,400",
                    })
                  }
                >
                  <span>283,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              42,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน",
                      term1: "64,700",
                      term2: "76,800",
                      term3: "70,100",
                      term4: "71,800",
                      term5: "-",
                      term6: "-",
                      dsl: " 2 + Human*",
                      Allterm: "283,400",
                    })
                  }
                >
                  <span>283,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาการบริหารธุรกิจระหว่างประเทศ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              42,900
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาการบริหารธุรกิจระหว่างประเทศ",
                      term1: "64,700",
                      term2: "71,700",
                      term3: "76,100",
                      term4: "70,900",
                      term5: "-",
                      term6: "-",
                      dsl: " 1",
                      Allterm: "283,400",
                    })
                  }
                >
                  <span>283,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* คณะเศรษฐศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะเศรษฐศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาเศรษฐกิจดิจิทัล
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              50,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเศรษฐศาสตร์",
                      Major: "สาขาวิชาเศรษฐกิจดิจิทัล",
                      term1: "90,600",
                      term2: "80,300",
                      term3: "74,300",
                      term4: "43,300",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "288,500",
                    })
                  }
                >
                  <span>288,500</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* วิทยาลัยศิลปศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยศิลปศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาภาษาญี่ปุ่น
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              48,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาญี่ปุ่น",
                      term1: "84,200",
                      term2: "79,400",
                      term3: "75,200",
                      term4: "52,300",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "291,100",
                    })
                  }
                >
                  <span>291,100</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาภาษาไทยเพื่อการสื่อสาร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              41,600
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาไทยเพื่อการสื่อสาร",
                      term1: "75,500",
                      term2: "81,200",
                      term3: "81,200",
                      term4: "47,200",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "285,100",
                    })
                  }
                >
                  <span>285,100</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาภาษาอังกฤษ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              45,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาอังกฤษ",
                      term1: "72,200",
                      term2: "84,500",
                      term3: "81,200",
                      term4: "62,500",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "300,400",
                    })
                  }
                >
                  <span>300,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาภาษาจีน
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              49,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาจีน",
                      term1: "89,200",
                      term2: "79,400",
                      term3: "81,200",
                      term4: "52,300",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "302,100",
                    })
                  }
                >
                  <span>302,100</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาภาษาฝรั่งเศส
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              42,500
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาฝรั่งเศส",
                      term1: "77,300",
                      term2: "68,300",
                      term3: "76,100",
                      term4: "57,400",
                      term5: "-",
                      term6: "-",
                      dsl: "2",
                      Allterm: "279,100",
                    })
                  }
                >
                  <span>279,100</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาภาษาและวัฒนธรรมเกาหลี
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              3
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              47,600
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาและวัฒนธรรมเกาหลี",
                      term1: "88,400",
                      term2: "79,400",
                      term3: "67,600",
                      term4: "50,600",
                      term5: "-",
                      term6: "-",
                      dsl: "3",
                      Allterm: "286,000",
                    })
                  }
                >
                  <span>286,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* วิทยาลัยนิเทศศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยนิเทศศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              54,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม",
                      term1: "87,100",
                      term2: "98,100",
                      term3: "88,400",
                      term4: "44,300",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "317,900",
                    })
                  }
                >
                  <span>317,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              53,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร",
                      term1: "98,300",
                      term2: "94,100",
                      term3: "74,500",
                      term4: "40,500",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "307,400",
                    })
                  }
                >
                  <span>307,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              51,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์",
                      term1: "84,900",
                      term2: "83,900",
                      term3: "83,900",
                      term4: "56,200",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "308,900",
                    })
                  }
                >
                  <span>308,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการภาพยนตร์ดิจิทัล
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              53,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาการภาพยนตร์ดิจิทัล",
                      term1: "88,600",
                      term2: "83,900",
                      term3: "92,900",
                      term4: "42,800",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "308,900",
                    })
                  }
                >
                  <span>308,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาสื่อสารการแสดง
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              51,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาสื่อสารการแสดง",
                      term1: "95,400",
                      term2: "88,200",
                      term3: "79,100",
                      term4: "43,900",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "306,600",
                    })
                  }
                >
                  <span>306,600</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              51,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง",
                      term1: "85,900",
                      term2: "82,400",
                      term3: "81,600",
                      term4: "57,000",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "306,900",
                    })
                  }
                >
                  <span>306,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชามัลติมีเดีย
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              53,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชามัลติมีเดีย",
                      term1: "94,100",
                      term2: "86,400",
                      term3: "85,600",
                      term4: "51,300",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "317,400",
                    })
                  }
                >
                  <span>317,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานิเทศศาสตร์การกีฬา
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              55,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชานิเทศศาสตร์การกีฬา",
                      term1: "94,300",
                      term2: "97,800",
                      term3: "72,900",
                      term4: "42,900",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "307,900",
                    })
                  }
                >
                  <span>307,900</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              53,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์",
                      term1: "88,600",
                      term2: "85,400",
                      term3: "103,500",
                      term4: "40,900",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "318,400",
                    })
                  }
                >
                  <span>318,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              51,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล",
                      term1: "91,400",
                      term2: "85,300",
                      term3: "82,700",
                      term4: "43,900",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "303,300",
                    })
                  }
                >
                  <span>303,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* คณะนิติศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะนิติศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานิติศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              43,400
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะนิติศาสตร์",
                      Major: "สาขาวิชานิติศาสตร์",
                      term1: "83,300",
                      term2: "79,400",
                      term3: "81,100",
                      term4: "60,800",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "304,600",
                    })
                  }
                >
                  <span>304,600</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
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
                      Faculty: "คณะนิติศาสตร์",
                      Major:
                        "สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)",
                      term1: "36,000",
                      term2: "43,200",
                      term3: "46,800",
                      term4: "-",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "126,000",
                    })
                  }
                >
                  <span>126,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
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
                      Faculty: "คณะนิติศาสตร์",
                      Major:
                        "สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)",
                      term1: "46,800",
                      term2: "50,400",
                      term3: "46,800",
                      term4: "32,400",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "176,400",
                    })
                  }
                >
                  <span>176,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* วิทยาลัยการท่องเที่ยว และการบริการ*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยการท่องเที่ยว และการบริการ
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาการจัดการการท่องเที่ยวเเละการบริการ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              48,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาการจัดการการท่องเที่ยวเเละการบริการ",
                      term1: "89,800",
                      term2: "84,100",
                      term3: "85,500",
                      term4: "57,100",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "316,500",
                    })
                  }
                >
                  <span>316,500</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการจัดการโรงแรมและภัตตาคาร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              48,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาวิชาการจัดการโรงแรมและภัตตาคาร",
                      term1: "73,600",
                      term2: "98,500",
                      term3: "89,800",
                      term4: "44,800",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "306,700",
                    })
                  }
                >
                  <span>306,700</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              46,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง",
                      term1: "115,500",
                      term2: "112,000",
                      term3: "115,300",
                      term4: "31,400",
                      term5: "-",
                      term6: "-",
                      dsl: "2 + Human*",
                      Allterm: "374,200",
                    })
                  }
                >
                  <span>374,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              61,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร",
                      term1: "115,500",
                      term2: "112,000",
                      term3: "115,300",
                      term4: "31,400",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "374,200",
                    })
                  }
                >
                  <span>374,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา สจล.)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (รอ Update )
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major:
                        "สาขาวิชาการจัดการการท่องเที่ยวและการบริการ (ควบ 2 ปริญญา สจล.)",
                      term1: "114,900",
                      term2: "123,700",
                      term3: "127,000",
                      term4: "31,400",
                      term5: "-",
                      term6: "-",
                      dsl: "-",
                      Allterm: "397,000",
                    })
                  }
                >
                  <span>397,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา สจล.)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              -
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              56,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major:
                        "สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง (ควบ 2 ปริญญา สจล.)",
                      term1: "115,500",
                      term2: "112,000",
                      term3: "115,300",
                      term4: "31,400",
                      term5: "-",
                      term6: "-",
                      dsl: "-",
                      Allterm: "374,200",
                    })
                  }
                >
                  <span>374,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* วิทยาลัยการกีฬา*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยการกีฬา
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชากีฬากอล์ฟ
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              (รอ Update )
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการกีฬา",
                      Major: "สาขาวิชากีฬากอล์ฟ",
                      term1: "149,800",
                      term2: "171,800",
                      term3: "193,400",
                      term4: "15,000",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "530,000",
                    })
                  }
                >
                  <span>530,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* วิทยาลัยนวัตกรรมสังคม*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยนวัตกรรมสังคม
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              44,300
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมสังคม",
                      Major: "สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง",
                      term1: "62,300",
                      term2: "75,200",
                      term3: "81,100",
                      term4: "59,000",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "277,600",
                    })
                  }
                >
                  <span>277,600</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาผู้นำทางสังคม ธุรกิจ
              และการเมือง(ระบบทางไกลทางอินเทอร์เน็ต)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
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
                      Faculty: "วิทยาลัยนวัตกรรมสังคม",
                      Major:
                        "สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง(ระบบทางไกลทางอินเทอร์เน็ต)",
                      term1: "40,500",
                      term2: "54,000",
                      term3: "54,000",
                      term4: "40,500",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "189,000",
                    })
                  }
                >
                  <span>189,000</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาผู้ประกอบการทางสังคมยุคดิจิทัล
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
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
                      Faculty: "วิทยาลัยนวัตกรรมสังคม",
                      Major: "สาขาวิชาผู้ประกอบการทางสังคมยุคดิจิทัล",
                      term1: "78,200",
                      term2: "81,100",
                      term3: "75,200",
                      term4: "48,800",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "283,300",
                    })
                  }
                >
                  <span>283,300</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* คณะรัฐศาสตร์*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะรัฐศาสตร์
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชารัฐศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              51,200
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะรัฐศาสตร์",
                      Major: "สาขาวิชารัฐศาสตร์",
                      term1: "82,700",
                      term2: "88,600",
                      term3: "70,100",
                      term4: "53,000",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "294,400",
                    })
                  }
                >
                  <span>294,400</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/*  คณะอาชญาวิทยาและการบริหารงานยุติธรรม*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              คณะอาชญาวิทยาและการบริหารงานยุติธรรม
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              1
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
                      Faculty: "คณะอาชญาวิทยาและการบริหารงานยุติธรรม",
                      Major: "สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์",
                      term1: "88,600",
                      term2: "108,000",
                      term3: "105,100",
                      term4: "50,500",
                      term5: "-",
                      term6: "-",
                      dsl: "1",
                      Allterm: "352,200",
                    })
                  }
                >
                  <span>352,200</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
          {/* วิทยาลัยดนตรี*/}
          <tr className="border bg-gray-500 text-white">
            <th
              colspan="4"
              className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-start"
            >
              วิทยาลัยดนตรี
            </th>
          </tr>
          <tr className="border ">
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              {" "}
              สาขาวิชาดุริยางคศาสตร์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              3
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              84,800
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  className="flex items-center justify-center gap-1 hover:text-pink-600"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยดนตรี",
                      Major: "สาขาวิชาดุริยางคศาสตร์",
                      term1: "143,500",
                      term2: "151,800",
                      term3: "130,900",
                      term4: "78,400",
                      term5: "-",
                      term6: "-",
                      dsl: "3",
                      Allterm: "504,600",
                    })
                  }
                >
                  <span>504,600</span>
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
