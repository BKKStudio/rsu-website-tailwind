"use client"
import Footer from "../../../components/Footer";
import NavbarRegister from "../../../components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MaskedInput from "../../../components/MaskedInput";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterBachelorsLevel() {
  const router = useRouter();
  const [uncheck, setUnCheck] = useState(true);
  const [student, setStudent] = useState({
    Faculty: "",
    Major: "",
    idcard: "",
    birthday: "",
    firstname:"",
    lastname:"",
    email: "",
    tell: "",
    level:"bachelors",
    confirmed:false,
  });




  async function onCheckIdCard(){
    try {
        const response = await axios.post("/api/RegisterStudent/bachelors", student);
        console.log("Register success", response.data);
        if(response.data.confirmed === true){
          router.push(`/pages/RegisterPage/${student.idcard}`)
        }
      } catch (error) {
        Swal.fire(
            'หมายเลขบัตรประชาชนซ้ำ',
            'กรุณาตรวจสอบหมายเลขบัตรประชาชนว่าคุณเคยสมัครแล้วหรือไม่??',
            'question'
          )
        console.log("Register failed", error.message);
      }
  }


  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center  bg-gray-200 h-full">
          <figure className="max-w-7xl  w-full my-3 mx-2 flex justify-center ">
            <div>
              <p className="text-2xl text-center max-md:text-xl max-sm:text-base">
                สมัครเรียน 2566/1 Online ปริญญาตรี มหาวิทยาลัยรังสิต
              </p>
              <div className="bg-white p-4 my-3">
                <form className="p-2 flex flex-col gap-2">
                  <label>เลขบัตรประชาชน :</label>
                  <MaskedInput
                    mask="9-9999-99999-99-9"
                    placeholder="ID Card or Passport Number"
                    value={student.idcard}
                    onChange={(ev) =>
                      setStudent({ ...student, idcard: ev.target.value })
                    }
                    className="border"
                  ></MaskedInput>
                  <label>วันเกิด :</label>
                  <input type={"date"} 
                  className="border w-full p-1 text-xs text-gray-400" 
                  placeholder="mm/dd/yyyy"
                  onChange={(ev) =>
                    setStudent({ ...student, birthday: ev.target.value })
                  }></input>
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      value=""
                      className="text-xl "
                      onClick={() => setUnCheck(!uncheck)}
                    />
                    <label className="text-xs">
                      ข้าพเจ้ายินยอมให้ประมวลผลข้อมูลเพื่อประชาสัมพันธ์หลักสูตรหรือสิทธิประโยชน์
                    </label>
                  </div>
                  <button
                  type={"button"}
                    className={`${
                      uncheck === true
                        ? "p-2 bg-gray-200 text-white mt-2 duration-300"
                        : "p-2 bg-pink-600 text-white mt-2 duration-300"
                    } `}
                    disabled={uncheck}
                    onClick={onCheckIdCard}
                  >ถัดไป</button>
                </form>
              </div>
            </div>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}
