"use client";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
export default function LoanfundTable() {
  const [data, setData] = useState({
    Faculty: "",
    Major: "",
    HighSchoolNormal: "",
    HighSchoolspecial: "",
    VocationalNormal: "",
    Vocationalspecial: "",
    VocationalSunday: "",
  });
  return (
    <>
      {/* Model show */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-gray-700">
              <span className="text-xl text-white">
                {data.Faculty} <span className="text-sm">({data.Major})</span>
              </span>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="text-white"
                aria-label="Close"
                onClick={() =>
                  setData({
                    Faculty: "",
                    Major: "",
                    HighSchoolNormal: "",
                    HighSchoolspecial: "",
                    VocationalNormal: "",
                    Vocationalspecial: "",
                    VocationalSunday: "",
                  })
                }
              >
                <BsXLg size={20} />
              </button>
            </div>
            <div className="modal-body p-0">
              <div>
                <table className=" w-full text-center ">
                  <thead className="text-white">
                    <tr className="border ">
                      <th
                        colspan="2"
                        className="bg-pink-600 border p-2 max-lg:p-2 text-sm"
                      >
                        ผู้จบ ม.6/ปวช/กศน.
                      </th>
                      <th
                        colspan="3"
                        className=" bg-blue-600 border p-2 max-lg:p-2 text-sm"
                      >
                        ผู้จบ ปวส.
                      </th>
                    </tr>
                  </thead>
                  <tbody className="m-0">
                    <tr className="border ">
                      <th className="border bg-pink-200 p-2 max-lg:p-2 text-sm">
                        ภาคปกติ
                      </th>
                      <th className="border bg-pink-200 p-2 max-lg:p-2 text-sm">
                        เสาร์-อาทิตย์
                      </th>
                      <th className="border bg-blue-200 p-2 max-lg:p-2 text-sm  ">
                        ภาคปกติ
                      </th>
                      <th className="border bg-blue-200 p-2 max-lg:p-2 text-sm">
                        เสาร์-อาทิตย์
                      </th>
                      <th className="border bg-blue-200 p-2 max-lg:p-2 text-sm">
                        อาทิตย์
                      </th>
                    </tr>
                    <tr className="border ">
                      <th className="border   p-2 max-lg:p-2 text-sm">
                        <div
                          className={`flex justify-center text-pink-600 ${
                            data.HighSchoolNormal === true ? "block" : "hidden"
                          }`}
                        >
                          <BsCheckLg size={30} />
                        </div>
                        <div
                          className={`flex justify-center text-xl ${
                            data.HighSchoolNormal === false ? "block" : "hidden"
                          }`}
                        >
                          -
                        </div>
                      </th>
                      <th className="border   p-2 max-lg:p-2 text-sm">
                        <div
                          className={`flex justify-center text-pink-600 ${
                            data.HighSchoolspecial === true ? "block" : "hidden"
                          }`}
                        >
                          <BsCheckLg size={30} />
                        </div>
                        <div
                          className={`flex justify-center text-xl ${
                            data.HighSchoolspecial === false
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          -
                        </div>
                      </th>
                      <th className="border   p-2 max-lg:p-2 text-sm">
                        <div
                          className={`flex justify-center text-pink-600 ${
                            data.VocationalNormal === true ? "block" : "hidden"
                          }`}
                        >
                          <BsCheckLg size={30} />
                        </div>
                        <div
                          className={`flex justify-center text-xl ${
                            data.VocationalNormal === false ? "block" : "hidden"
                          }`}
                        >
                          -
                        </div>
                      </th>
                      <th className="border   p-2 max-lg:p-2 text-sm">
                        <div
                          className={`flex justify-center text-pink-600 ${
                            data.Vocationalspecial === true ? "block" : "hidden"
                          }`}
                        >
                          <BsCheckLg size={30} />
                        </div>
                        <div
                          className={`flex justify-center text-xl ${
                            data.Vocationalspecial === false
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          -
                        </div>
                      </th>
                      <th className="border   p-2 max-lg:p-2 text-sm">
                        <div
                          className={`flex justify-center text-pink-600 ${
                            data.VocationalSunday === true ? "block" : "hidden"
                          }`}
                        >
                          <BsCheckLg size={30} />
                        </div>
                        <div
                          className={`flex justify-center text-xl ${
                            data.VocationalSunday === false ? "block" : "hidden"
                          }`}
                        >
                          -
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Model show */}
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
              วงเงินกู้ยืมฯ/ปี
            </th>
            <th className="border p-3 max-lg:p-2 max-lg:text-sm">หลักสูตร</th>
          </tr>
        </thead>
        <tbody>
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
              (รออัพเดท)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs flex items-center justify-center gap-1">
              <button
                type="button"
                className="flex items-center gap-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() =>
                  setData({
                    Faculty: "วิทยาลัยแพทยศาสตร์",
                    Major: "แพทยศาสตร์",
                    HighSchoolNormal: true,
                    HighSchoolspecial: false,
                    VocationalNormal: false,
                    Vocationalspecial: false,
                    VocationalSunday: false,
                  })
                }
              >
                <span className="text-blue-700">เพิ่มเติม</span>
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
              (รออัพเดท)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยทันตแพทยศาสตร์",
                      Major: "สาขาวิชาทันตแพทยศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              (รออัพเดท)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยเภสัชศาสตร์",
                      Major: "สาขาวิชาบริบาลทางเภสัชกรรม",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              (รออัพเดท)
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยเภสัชศาสตร์",
                      Major: " สาขาวิชาเภสัชกรรมอุตสาหการ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะพยาบาลศาสตร์",
                      Major: "สาขาวิชาพยาบาลศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs text-center">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยเภสัชศาสตร์",
                      Major: "สาขาวิชาเภสัชกรรมอุตสาหการ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: " คณะรังสีเทคนิค",
                      Major: "สาขาวิชารังสีเทคนิค",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเทคนิคการแพทย์",
                      Major: "สาขาวิชาเทคนิคการแพทย์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะกายภาพบำบัดและเวชศาสตร์การกีฬา",
                      Major: " สาขาวิชากายภาพบำบัด",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะกายภาพบำบัดและเวชศาสตร์การกีฬา",
                      Major:
                        " สาขาวิชาวิทยาศาสตร์การออกกำลังกายและสมรรถภาพทางการกีฬา",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะกายภาพบำบัดและเวชศาสตร์การกีฬา",
                      Major: " สาขาวิชาชรัณสุขศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                      Major: "สาขาวิชาการแพทย์แผนตะวันออก",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                      Major: " สาขาวิชาการแพทย์แผนไทย",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการแพทย์แผนตะวันออก",
                      Major: "สาขาวิชาการแพทย์แผนจีน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: " คณะวิทยาศาสตร์",
                      Major: " สาขาวิชาวิทยาศาสตร์ชีวการแพทย์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมชีวการแพทย์",
                      Major: "สาขาวิชาวิศวกรรมชีวการแพทย์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะทัศนมาตรศาสตร์",
                      Major: "สาขาวิชาทัศนมาตรศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเทคโนโลยีอาหาร",
                      Major: "สาขาวิชาเทคโนโลยีอาหาร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเทคโนโลยีอาหาร",
                      Major: "สาขาวิชาธุรกิจอุตสาหกรรมอาหาร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะนวัตกรรมเกษตร",
                      Major: "สาขาวิชานวัตกรรมเกษตร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาวิทยาการคอมพิวเตอร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชานวัตกรรมดิจิทัล",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาคอมพิวเตอร์เกมและอีสปอร์ต (แขนงพัฒนาเกม)",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาสารสนเทศการลงทุน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี",
                      Major: "สาขาวิชาเทคโนโลยีสื่อสังคม",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมเครื่องกล",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: " สาขาวิชาวิศวกรรมไฟฟ้า",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมโยธา",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมเคมี",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมอุตสาหการ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมพลังงานและสิ่งแวดล้อม",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมเทคโนโลยีระบบราง",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "วิศวกรรมยานยนต์และมอเตอร์สปอร์ต",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยวิศวกรรมศาสตร์",
                      Major: "สาขาวิชาวิศวกรรมการซ่อมบำรุงอากาศยาน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: true,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              สาขาวิชานักบินพาณิชย์
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              2 + Human*
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs">
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "สถาบันการบิน",
                      Major: "สาขาวิชานักบินพาณิชย์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาศิลปะภาพถ่ายและสื่อทัศนภาพ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาการออกแบบภายใน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาการออกแบบนิเทศศิลป์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาแฟชั่นดีไซน์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการออกแบบ",
                      Major: "สาขาวิชาการออกแบบ (English)",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              90,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะดิจิทัลอาร์ต",
                      Major: "สาขาวิชาคอมพิวเตอร์อาร์ต",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะสถาปัตยกรรมศาสตร์",
                      Major: "สาขาวิชาสถาปัตยกรรมศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบัญชี",
                      Major: "หลักสูตรบัญชี",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการจัดการ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการเงินและการลงทุน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการตลาดดิจิทัลและนวัตกรรมค้าปลีก",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาวิชาการจัดการโลจิสติกส์และซัพพลายเชน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะบริหารธุรกิจ",
                      Major: "สาขาการบริหารธุรกิจระหว่างประเทศ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะเศรษฐศาสตร์",
                      Major: "สาขาวิชาเศรษฐกิจดิจิทัล",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาญี่ปุ่น",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาไทยเพื่อการสื่อสาร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาอังกฤษ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาจีน",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาฝรั่งเศส",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยศิลปศาสตร์",
                      Major: "สาขาวิชาภาษาและวัฒนธรรมเกาหลี",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาวิทยุและโทรทัศน์มัลติแพลตฟอร์ม",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาการประชาสัมพันธ์และสื่อสารองค์กร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชานวัตกรรมการโฆษณาและสื่อสร้างสรรค์ ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาการภาพยนตร์ดิจิทัล",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาสื่อสารการแสดง",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาการสื่อสารการตลาดดิจิทัลและแบรนด์ดิ้ง",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: " สาขาวิชามัลติมีเดีย",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชานิเทศศาสตร์การกีฬา",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาการเขียนบทและการกำกับภาพยนตร์และโทรทัศน์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              70,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนิเทศศาสตร์",
                      Major: "สาขาวิชาการสร้างสรรค์คอนเทนต์ดิจิทัล",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะนิติศาสตร์",
                      Major: "สาขาวิชานิติศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะนิติศาสตร์",
                      Major: "สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต ปริญญาที่ 2)",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะนิติศาสตร์",
                      Major: "สาขาวิชานิติศาสตร์ (ระบบทางไกลทางอินเทอร์เน็ต 4 ปี)",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาการจัดการการท่องเที่ยวเเละการบริการ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาวิชาการจัดการโรงแรมและภัตตาคาร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาวิชาการจัดการธุรกิจการบินและการขนส่ง",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการท่องเที่ยว และการบริการ",
                      Major: "สาขาวิชาศิลปะและเทคโนโลยีการประกอบอาหาร",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยการกีฬา",
                      Major: "สาขาวิชากีฬากอล์ฟ",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมสังคม",
                      Major: "สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมสังคม",
                      Major: "สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง(ระบบทางไกลทางอินเทอร์เน็ต)",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยนวัตกรรมสังคม",
                      Major: "สาขาวิชาผู้ประกอบการทางสังคมยุคดิจิทัล",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะรัฐศาสตร์",
                      Major: "สาขาวิชารัฐศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "คณะอาชญาวิทยาและการบริหารงานยุติธรรม",
                      Major: "สาขาวิชาอาชญาวิทยาและนิติวิทยาศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
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
              60,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs ">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() =>
                    setData({
                      Faculty: "วิทยาลัยดนตรี",
                      Major: "สาขาวิชาดุริยางคศาสตร์",
                      HighSchoolNormal: true,
                      HighSchoolspecial: false,
                      VocationalNormal: false,
                      Vocationalspecial: false,
                      VocationalSunday: false,
                    })
                  }
                >
                  <span className="text-blue-700">เพิ่มเติม</span>
                  <FaSearchPlus size={15} color="green" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
