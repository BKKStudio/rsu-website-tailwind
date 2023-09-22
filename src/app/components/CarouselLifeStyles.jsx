import Link from "next/link";
import Image from "next/image";
import LifeStyleImg1 from "../../../public/image/RsuUpdate/RsuLifeStyles/Lifestyles1.jpg";
import LifeStyleImg2 from "../../../public/image/RsuUpdate/RsuLifeStyles/Lifestyles2.jpg";
import LifeStyleImg3 from "../../../public/image/RsuUpdate/RsuLifeStyles/Lifestyles3.jpg";

const CarouselLifeStyles = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide shadow-3xl "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <Link href={""} className="carousel-item active">
          <Image
            src={LifeStyleImg1}
            className="d-block w-100 "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-black rounded-lg ">
            <h5>“โอเว่น-กฤตยชญ์ สุพรรณ” </h5>
            <p className="text-xs p-2">
              ตัวจริงในสมรภูมินักสื่อสาร กับรุ่นพี่ MRT “โอเว่น-กฤตยชญ์ สุพรรณ”
              หลักสูตรที่จัดเต็มให้ MULTI-SKILLS & MULTI-PLATFORM ที่นิเทศรังสิต
            </p>
          </div>
        </Link>
        <Link href={""} className="carousel-item">
        <Image
            src={LifeStyleImg2}
            className="d-block w-100 "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-black rounded-lg ">
            <h5>
              “ซิลมี่ย์” นางสาวปานลันดา มณีวงษ์ เฟรชชี่วิทยาลัยทันตแพทยศาสตร์
            </h5>
            <p className="text-xs p-2">
              ทำความรู้จักเฟรชชี่ทันตแพทยศาสตร์ ม.รังสิต ซิลมี่ย์ - ปานลันดา
              มณีวงษ์
            </p>
          </div>
        </Link>
        <Link href={""} className="carousel-item">
        <Image
            src={LifeStyleImg3}
            className="d-block w-100 "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-black rounded-lg ">
            <h5>“ นางสาวธนวรรณ วิยานนท์ หรือพี่ย้ง” </h5>
            <p className="text-xs p-2">
              ตัวจริงในสมรภูมินักสื่อสาร กับรุ่นพี่ MRT “โอเว่น-กฤตยชญ์ สุพรรณ”
              หลักสูตรที่จัดเต็มให้ MULTI-SKILLS & MULTI-PLATFORM ที่นิเทศรังสิต
            </p>
          </div>
        </Link>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselLifeStyles;
