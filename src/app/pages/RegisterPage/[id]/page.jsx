"use client";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { BsFillDatabaseFill } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BsHourglassBottom } from "react-icons/bs";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";

import NavbarRegister from "@/app/components/NavbarRegister";

export default function Applicationform({ params }) {
  const { id } = params;
  const [data, setData] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uncheck, setUnCheck] = useState(true);
  const router = useRouter();

  //Use Date and Time Register
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1 to get the actual month.
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;
  const [student, setStudent] = useState({
    Faculty: "",
    Major: "",
    idcard: id,
    birthday: "",
    firstname: "",
    lastname: "",
    email: "",
    tell: "",
    level: "bachelors",
    DateRegister: formattedDate,
    confirmed: true,
  });
console.log(student);
  useEffect(() => {
    // Simulate fetching data from an API
    fetch("/api/RegisterStudent/Faculty")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Onchang And Set Faculty Form
  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
    setStudent({ ...student, Faculty: event.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // Select Option Facculty
  const selectedFacultyData = data.find(
    (item) => item.FacultyName === selectedFaculty
  );

  //On submit save form
  async function onSubmit() {
    try {
      const response = await axios.post(
        "/api/RegisterStudent/bachelors",
        student
      );
      console.log("Register success", response.data);
      Swal.fire("Register Successfully", "สมัครเรียบร้อยแล้ว", "success").then(
        (result) => {
          if (result.isConfirmed) {
            router.push("/");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        }
      );
    } catch (error) {
      Swal.fire(
        "หมายเลขบัตรประชาชนซ้ำ",
        "กรุณาตรวจสอบหมายเลขบัตรประชาชนว่าคุณเคยสมัครแล้วหรือไม่??",
        "question"
      );
      console.log("Register failed", error.message);
    }
  }

  return (
    <>
      <NavbarRegister/>
      <main className="bg-gray-100">
        <article className="flex justify-center items-center  bg-gray-200 h-full">
          <figure className="max-w-7xl mt-4  w-full flex justify-center ">
            <div className="flex  justify-center w-full">
              <div className="lg:flex flex-col items-center gap-3 w-1/5 max-lg:hidden">
                <Link
                  href={""}
                  className="no-underline text-gray-500 flex items-center pl-2 justify-between gap-1 w-4/5  max-xl:w-full"
                >
                  <BsFillDatabaseFill size={20} />
                  <span>ข้อมูลการสมัคร</span> <BsChevronRight size={20} />
                </Link>
                <Link
                  href={""}
                  className="no-underline text-gray-500 flex items-center pl-2 justify-between gap-1 w-4/5  max-xl:w-full"
                >
                  <BsCreditCard2Front size={20} />
                  <span>พิมพ์ใบแจ้งชำระเงิน</span> <BsChevronRight size={20} />
                </Link>
                <Link
                  href={""}
                  className="no-underline text-gray-500 flex items-center pl-2 justify-between gap-1 w-4/5  max-xl:w-full"
                >
                  <BsGrid3X3Gap size={20} />
                  <span>วิธีการชำระเงิน</span> <BsChevronRight size={20} />
                </Link>
                <Link
                  href={""}
                  className="no-underline text-gray-500 flex items-center pl-2 justify-between  gap-1  w-4/5  max-xl:w-full"
                >
                  <BsGrid1X2 size={20} />
                  <span>ตรวจสอบการชำระเงิน</span> <BsChevronRight size={20} />
                </Link>
                <Link
                  href={""}
                  className="no-underline text-gray-500 flex items-center pl-2 justify-between  gap-1  w-4/5  max-xl:w-full"
                >
                  <BsHourglassBottom size={20} />
                  <span>สถานะการสมัครเรียน</span> <BsChevronRight size={20} />
                </Link>
              </div>
              <div className="w-4/5 p-3 max-lg:w-full ">
                <p className="">
                  สมัครเรียน Online มหาวิทยาลัยรังสิต ปี 2566 เทอม 1
                </p>
                <p className="bg-pink-600 p-2 rounded-md text-white">
                  1.กรอกประวัติ
                </p>
                <div className="bg-white w-full rounded-md pb-4">
                  <p className="text-xl p-3">1.ข้อมูลการสมัคร</p>
                  <div>
                    <div className="grid grid-cols-2  gap-3 px-3 max-md:grid-cols-1 w-full">
                      <div className="grid grid-cols-2 w-full gap-2 max-md:grid-cols-1">
                        <label>
                          คณะ
                          <span className="text-gray-400 text-xs">
                            (Faculty)
                          </span>
                        </label>
                        <select
                          value={selectedFaculty}
                          onChange={handleFacultyChange}
                          className="border"
                        >
                          <option value="">Select a Faculty</option>
                          {data.map((item) => (
                            <option key={item._id} value={item.FacultyName}>
                              {item.FacultyName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2 max-md:grid-cols-1">
                        <label>
                          สาขา
                          <span className="text-gray-400 text-xs">(Major)</span>
                        </label>
                        <select
                          className="border"
                          onChange={(ev) => {
                            setStudent({ ...student, Major: ev.target.value });
                          }}
                        >
                          <option value="">Select a Major</option>
                          {selectedFacultyData &&
                            selectedFacultyData.Majors.map((major, index) => (
                              <option key={index} value={major}>
                                {major}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2 max-md:grid-cols-1">
                        <label>
                          เลขที่บัตรประชาชน
                          <span className="text-gray-400 text-xs">
                            (Passport)
                          </span>
                        </label>
                        <input
                          type={"text"}
                          value={id}
                          className="border "
                          onChange={(ev) => {
                            setStudent({ ...student, idcard: ev.target.value });
                          }}
                        ></input>
                      </div>
                      <div className="grid grid-cols-2 justify-center w-full gap-2 max-md:grid-cols-1">
                        <label>
                          วันเกิด
                          <span className="text-gray-400 text-xs">(คศ.)</span>
                        </label>
                        <input
                          type={"date"}
                          className="border "
                          onChange={(ev) => {
                            setStudent({
                              ...student,
                              birthday: ev.target.value,
                            });
                          }}
                        ></input>
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2 max-md:grid-cols-1 ">
                        <label>
                          ชื่อ
                          <span className="text-gray-400 text-xs">
                            (Firstname)
                          </span>
                        </label>
                        <input
                          type={"text"}
                          className="border "
                          onChange={(ev) => {
                            setStudent({
                              ...student,
                              firstname: ev.target.value,
                            });
                          }}
                        ></input>
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2  max-md:grid-cols-1">
                        <label>
                          นามสกุล
                          <span className="text-gray-400 text-xs">
                            (lastname)
                          </span>
                        </label>
                        <input
                          type={"text"}
                          className="border "
                          onChange={(ev) => {
                            setStudent({
                              ...student,
                              lastname: ev.target.value,
                            });
                          }}
                        ></input>
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2  max-md:grid-cols-1">
                        <label>
                          อีเมล
                          <span className="text-gray-400 text-xs">(Email)</span>
                        </label>
                        <input
                          type={"email"}
                          className="border "
                          onChange={(ev) => {
                            setStudent({ ...student, email: ev.target.value });
                          }}
                        ></input>
                      </div>
                      <div className="grid grid-cols-2 w-full gap-2  max-md:grid-cols-1">
                        <label>
                          เบอร์โทรศัพท์
                          <span className="text-gray-400 text-xs">(Tell)</span>
                        </label>
                        <input
                          type={"tel"}
                          className="border "
                          onChange={(ev) => {
                            setStudent({ ...student, tell: ev.target.value });
                          }}
                        ></input>
                      </div>
                    </div>
                    <div className="flex justify-center mt-3 px-2">
                      <input
                        type="checkbox"
                        value=""
                        className="text-xl mr-2"
                        onClick={() => setUnCheck(!uncheck)}
                      />
                      <span className="text-md">
                        ข้าพเจ้าขอยืนยันว่าข้อมูลดังกล่าวถูกต้องทุกประการ
                      </span>
                    </div>
                    <div className="flex justify-center mt-2">
                      <button
                        type={"button"}
                        className={`w-3/4 flex justify-center item ${
                          uncheck === true
                            ? "p-2 bg-gray-200 text-white mt-2 duration-300"
                            : "p-2 bg-pink-600 text-white mt-2 duration-300"
                        } `}
                        disabled={uncheck}
                        onClick={onSubmit}
                      >
                        EnRoll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
