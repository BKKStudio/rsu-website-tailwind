import Footer from "@/app/components/Footer";
import NavbarRegister from "@/app/components/NavbarRegister";
import Image from "next/image";
import Link from "next/link";
export default function CheckRegister() {
  return (
    <>
      <NavbarRegister />
      <main>
        <article className="flex justify-center items-center ">
          <figure className="max-w-7xl  w-full mx-2">
            <div className="flex justify-between items-center">
              <Image
                src="/image/Logo_universe/Rsu_logo.png"
                alt=""
                width={300}
                height={200}
                className="max-md:w-2/3"
              />
              <div className="">
                <Link
                  href={""}
                  className="no-underline text-white p-3  rounded-lg bg-pink-600"
                >
                  สมัครเรียน
                </Link>
              </div>
            </div>
          </figure>
        </article>

        <article className="flex justify-center bg-gray-100  pb-5">
          <figure className="max-w-7xl  w-full mt-4 mx-2">
            <p className="text-center text-3xl">ตรวจสอบ ผลการสมัครเรียน</p>
            <div className="flex justify-center items-center">
                <div className="bg-white w-2/5 flex  justify-center  p-3">
                    <form className="flex flex-col gap-2">
                        <label>เลขที่บัตรประชาชน/Passport</label>
                        <input type={"text"} className="border w-full h-9"></input>
                        <p  className="p-2 text-xs text-pink-600">หนังสือแจ้งสถานะข้อมูลส่วนบุคคล(PRIVACY NOTICE) สำหรับผู้ที่สนใจศึกษาต่อ หรือสนใจข้อมูลของมหาวิทยาลัยรังสิต</p>
                        <button type="submit" className="bg-pink-600 text-white p-2 text-xl">ตรวจสอบ</button>
                    </form>
                </div>
            </div>
          </figure>
        </article>
      </main>
      <Footer/>
    </>
  );
}
