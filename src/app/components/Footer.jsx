import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-600 ">
      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <div className="">
            <p className="text-white text-center mb-8">
              ปัจจุบันเปิดสอนในระดับปริญญาตรี 89 หลักสูตร ระดับปริญญาโท 39
              หลักสูตร และระดับปริญญาเอก 15 หลักสูตร รวม 143 หลักสูตร
            </p>
            <div className="bg-white  h-0.5 rounded"></div>
            <div className="flex flex-wrap justify-center mt-7">
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  วิทยาศาสตร์ - สุขภาพ
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center ">
                  <Link href="" className="text-white no-underline">วิทยาลัยแพทยศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยการแพทย์แผนตะวันออก</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยเภสัชศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยทันตแพทยศาสตร์</Link>
                  <Link href="" className="text-white no-underline">พยาบาลศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วิทยาศาสตร์</Link>
                  <Link href="" className="text-white no-underline">กายภาพบำบัดและเวชศาสตร์การกีฬา</Link>
                  <Link href="" className="text-white no-underline">เทคนิคการแพทย์</Link>
                  <Link href="" className="text-white no-underline">ทัศนมาตรศาสตร์</Link>
                  <Link href="" className="text-white no-underline">รังสีเทคนิค</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยวิศวกรรมชีวการแพทย์</Link>
                </div>
              </div>
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  วิศวกรรมศาสตร์ - เทคโนโลยี
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">สถาบันการบิน</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยวิศวกรรมศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยนวัตกรรมเกษตร และเทคโนโลยีอาหาร</Link>
                  <Link href="" className="text-white no-underline">นวัตกรรมเกษตร</Link>
                  <Link href="" className="text-white no-underline">เทคโนโลยีอาหาร</Link>
                </div>
              </div>
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  มนุษยศาสตร์ - สังคมศาสตร์
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">วิทยาลัยนิเทศศาสตร์</Link>
                  <Link href="" className="text-white no-underline">สถาบันรัฐประศาสนศาสตร์และนโยบายสาธารณะ</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยศิลปศาสตร์</Link>
                  <Link href="" className="text-white no-underline">นิติศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยนวัตกรรมสังคม</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยครูสุริยเทพ</Link>
                  <Link href="" className="text-white no-underline">สถาบันภาษาอังกฤษ</Link>
                  <Link href="" className="text-white no-underline">สถาบัน Gen.Ed.</Link>
                  <Link href="" className="text-white no-underline">รัฐศาสตร์</Link>
                  <Link href="" className="text-white no-underline">สถาบันการทูตและการต่างประเทศ</Link>
                </div>
              </div>
              <div className=" text-white p-4">
                <h3 className="text-pink-500 text-lg  text-center font-bold mb-3">
                  เศรษฐกิจ - ธุรกิจ
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">บริหารธุรกิจ</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยการท่องเที่ยว และการบริการ</Link>
                  <Link href="" className="text-white no-underline">บัญชี</Link>
                  <Link href="" className="text-white no-underline">เศรษฐศาสตร์</Link>
                </div>
                <div>
                  <h3 className="text-pink-500 text-lg text-center font-bold my-3">
                    ศิลปะ - การออกแบบ
                  </h3>
                  <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                    <Link href="" className="text-white no-underline">วิทยาลัยการออกแบบ</Link>
                    <Link href="" className="text-white no-underline">ดิจิทัลอาร์ต</Link>
                    <Link href="" className="text-white no-underline">สถาปัตยกรรมศาสตร์</Link>
                    <Link href="" className="text-white no-underline">วิทยาลัยดนตรี</Link>
                  </div>
                </div>
              </div>
              <div className=" text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  หลักสูตรออนไลน์ / นานาชาติ / ป.โท-เอก
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">บัณฑิตวิทยาลัย</Link>
                  <Link href="" className="text-white no-underline">วิทยาลัยนานาชาติ</Link>
                  <Link href="" className="text-white no-underline">
                    International Chinese College (中国国际学院)
                  </Link>
                  <Link href="" className="text-white no-underline">Rangsit Cyber University</Link>
                </div>
              </div>
            </div>
            <div className="bg-white h-0.5 rounded mt-8"></div>
            <div className="flex flex-wrap justify-center mt-7">
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  วิชาการ / วิจัย /ประกันคุณภาพ
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">วารสารศิลปะ - วิทยาศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วารสารสังคม - มนุษยศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วารสารวิจัย - ศึกษาศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วารสารธุรกิจ - สังคมศาสตร์</Link>
                  <Link href="" className="text-white no-underline">วารสารวิศวกรรม - เทคโนโลยี</Link>
                  <Link href="" className="text-white no-underline">วารสารพัฒนาการเรียนการสอน</Link>
                  <Link href="" className="text-white no-underline">ระบบประเมินการเรียนการสอนออนไลน์</Link>
                </div>
              </div>
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  SHOWCASE ปล่อยของ
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">iTunes U</Link>
                  <Link href="" className="text-white no-underline">RSU Gallery</Link>
                  <Link href="" className="text-white no-underline">บ้านเคยอยู่อู่เคยนอน</Link>
                  <Link href="" className="text-white no-underline">ศาลาดนตรีสุริยเทพ 30 ปี ม.รังสิต</Link>
                  <Link href="" className="text-white no-underline">อาทิตย์ อุไรรัตน์ ก้าวข้ามวิกฤติชาติ</Link>
                  <Link href="" className="text-white no-underline">อาชีพอินเทรนด์เปลี่ยนโลก..คุณเองก็เป็นได้</Link>
                </div>
              </div>
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                  ดาวน์โหลด / ฟอนต์ / ซีไอ
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">ดาวน์โหลดโลโก้</Link>
                  <Link href="" className="text-white no-underline">ดาวน์โหลดฟอนต์</Link>
                  <Link href="" className="text-white no-underline">ดาวน์โหลดซีไอ</Link>
                </div>
                <h3 className="text-pink-500 text-lg text-center font-bold my-3">
                  NEWS & MEDIA
                </h3>
                <div className="flex flex-col items-start text-xs gap-1 max-lg:items-center">
                  <Link href="" className="text-white no-underline">สารรังสิต</Link>
                  <Link href="" className="text-white no-underline">RSU Media</Link>
                </div>
              </div>
              <div className="text-white p-4">
                <h3 className="text-pink-500 text-lg text-center font-bold mb-3">
                ติดต่อเรา
                </h3>
                <div className="flex items-start text-xs gap-1 max-lg:items-center">
                <Link href="https://www.facebook.com/rangsituniversity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-facebook  text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Link>
                <Link href="https://page.line.me/jew9364z?openQrModal=true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    className="bi bi-line  text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/c/RangsitUniversity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-youtube  text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FRangsitU">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-twitter  text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/rangsitU/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-instagram  text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
