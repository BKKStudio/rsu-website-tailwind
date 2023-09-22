import Image from "next/image";
import SlideImg1 from "../../../public/image/Slideshow/slide1.jpg";
import SlideImg2 from "../../../public/image/Slideshow/slide2.jpg";
import SlideImg3 from "../../../public/image/Slideshow/slide3.jpg";
import SlideImg4 from "../../../public/image/Slideshow/slide4.jpg";
import SlideImg5 from "../../../public/image/Slideshow/slide5.jpg";
import SlideImg6 from "../../../public/image/Slideshow/slide6.jpg";
import SlideImg7 from "../../../public/image/Slideshow/slide7.jpg";
export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide shadow-xl"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={SlideImg1}
            className="d-block w-100 h-100"
            layout="responsive"
            placeholder="blur"
            alt="Imaage Slide1"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={SlideImg2}
            className="d-block w-100 h-100"
            alt="Imaage Slide2"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={SlideImg3}
            className="d-block w-100 h-100"
            alt="Imaage Slide3"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={SlideImg4}
            className="d-block w-100 h-100"
            alt="Imaage Slide4"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={SlideImg5}
            className="d-block w-100 h-100"
            alt="Imaage Slide5"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={SlideImg6}
            className="d-block w-100 h-100"
            alt="Imaage Slide6"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={SlideImg7}
            className="d-block w-100 h-100"
            alt="Imaage Slide6"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev z-1"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next z-0"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
