"use client";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
export default function LoanfundTable() {
  const [data, setData] = useState({
    Faculty: "",
    Major: "",
    HighSchoolNormal:"",
    HighSchoolspecial:"",
    VocationalNormal:"",
    Vocationalspecial:"",
    VocationalSunday:"",
  });
  return (
    <>
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
              <span className="text-xl text-white">{data.Faculty} <span className="text-sm">(สาขา {data.Major})</span></span>
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
                close
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
                      <th className="border bg-pink-200 p-2 max-lg:p-2 text-sm">ภาคปกติ</th>
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
                        <div className={`flex justify-center ${data.HighSchoolNormal }`}>
                        <BsCheckLg size={30} />
                        </div>
                      </th>
                      <th className="border  p-2 max-lg:p-2 text-sm">
                      {data.HighSchoolspecial}
                      </th>
                      <th className="border  p-2 max-lg:p-2 text-sm  ">
                      {data.VocationalNormal}
                      </th>
                      <th className="border  p-2 max-lg:p-2 text-sm">
                      {data.Vocationalspecial}
                      </th>
                      <th className="border  p-2 max-lg:p-2 text-sm">
                      {data.VocationalSunday}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              80,000
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
                    HighSchoolNormal: "text-pink-600",
                    HighSchoolspecial: "-",
                    VocationalNormal: "-",
                    Vocationalspecial: "-",
                    VocationalSunday: "-",
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
              80,000
            </td>
            <td className="border p-2 max-lg:p-1 max-lg:text-sm max-md:text-xs flex items-center justify-center gap-1">
              <button
                type="button"
                className="flex items-center gap-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() =>
                  setData({
                    Faculty: "วิทยาลัยทันตแพทยศาสตร์",
                    Major: "ทันตแพทยศาสตร์",
                    HighSchoolNormal: "text-pink-600",
                    HighSchoolspecial: "-",
                    VocationalNormal: "-",
                    Vocationalspecial: "-",
                    VocationalSunday: "-",
                  })
                }
              >
                <span className="text-blue-700">เพิ่มเติม</span>
                <FaSearchPlus size={15} color="green" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
