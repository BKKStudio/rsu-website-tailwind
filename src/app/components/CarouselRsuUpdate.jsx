import Link from "next/link";
import Image from "next/image";
import UpdateImg1 from "../../../public/image/RsuUpdate/update1.jpg" ;
import UpdateImg2 from "../../../public/image/RsuUpdate/update2.jpg" ;
import UpdateImg3 from "../../../public/image/RsuUpdate/update3.jpg" ;
import UpdateImg4 from "../../../public/image/RsuUpdate/update4.jpg" ;
import UpdateImg5 from "../../../public/image/RsuUpdate/update1.jpg" ;
import UpdateImg6 from "../../../public/image/RsuUpdate/update6.jpg" ;
export default function CarouselRsuUpdate() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators opacity-0">
            <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="3" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="4" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="5" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div  className="carousel-item active">
              <Image src={UpdateImg1} className="d-block w-100  " alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={UpdateImg2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={UpdateImg3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={UpdateImg4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={UpdateImg5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src={UpdateImg6} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
    };
    
