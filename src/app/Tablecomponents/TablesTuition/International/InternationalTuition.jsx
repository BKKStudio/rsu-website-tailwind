
import Link from "next/link";
import InternationalAllresponsive from "./InternationalAllresponsive";

export default function InternationalTuition() {
  return (
    <>
        {/* ค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2566 */}
    {/* Table responsive  */}
    <div className="">
    <InternationalAllresponsive/>
    </div>

      {/* ค่าเล่าเรียนตลอดหลักสูตร ประจำปีการศึกษา 2566  */}
      <div className="w-full bg-gray-700 text-white grid grid-cols-2 max-md:grid-cols-1">
        <div className="p-2 flex flex-col gap-2">
          <span className="text-xl max-md:text-lg mt-3">
            *ชี้แจงค่าธรรมเนียมแรกเข้าศึกษา ประกอบด้วย
          </span>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าบำรุงการศึกษาภาคเรียนที่ 1/2566 ภาคละ</span>
            <span>10,000บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</span>
            <span>8,000บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าขึ้นทะเบียนนักศึกษาใหม่</span>
            <span>300บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าประกันอุบัติเหตุปีละ</span>
            <span>500บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าทำบัตรนักศึกษา</span>
            <span>200บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ค่าตรวจสุขภาพ</span>
            <span>500บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>อุปกรณ์เครื่องแต่งกาย</span>
            <span>380บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>ชุดพละ</span>
            <span>720บาท</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>รวม</span>
            <span>20,600บาท</span>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <span className="text-xl max-md:lg">
            *Clarification of the tuition fee Of the international program
            consists of
          </span>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Education fees</span>
            <span>10,000baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>*Damage insurance</span>
            <span>8,000baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>New student registration fee</span>
            <span>300baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Accident and Health insurance per year</span>
            <span>500baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Student card processing fees</span>
            <span>200baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Health examination fee</span>
            <span>500baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Student Activities per semester</span>
            <span>380baht</span>
          </div>
          <div className="flex justify-between p-2 max-md:text-sm">
            <span>Total</span>
            <span>23,200baht</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-white ">
        <p className="text-2xl max-md:lg">หมายเหตุ</p>
        <div className="flex flex-col p-2 max-md:text-sm">
          <p>
            1.ค่าเล่าเรียนเป็นตัวเลขประมาณการ ทั้งนี้ขึ้นอยู่กับจำนวนหน่วยกิต
            ที่คณะ/วิทยาลัยจะจัดให้ ลงทะเบียน ซึ่งอาจมีการเปลี่ยนแปลงได้
          </p>
          <p>2.ค่าประกันของเสียหาย จะคืนเมื่อจบการศึกษา</p>
          <p>3.ค่าบำรุงห้องปฏิบิติการ สถาบันการบิน ภาคปกติ 5,000</p>
          <p>
            4.ประเภทการกู้ยืม อ้างอิงจากปีการศึกษา 2564
            ซึ่งอาจมีการเปลี่ยนแปลงได้ สอบถามเพิ่มเติมได้ที่ FB:{" "}
            <Link href={"https://www.facebook.com/rsustudentloan"}>
              กยศ. กรอ. มหาวิทยาลัยรังสิต
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
