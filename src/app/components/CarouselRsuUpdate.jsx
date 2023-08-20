import Link from "next/link";
import Image from "next/image";

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
              <img src="/image/RsuUpdate/update1.jpg" className="d-block w-100  " alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/image/RsuUpdate/update2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/image/RsuUpdate/update3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/image/RsuUpdate/update4.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/image/RsuUpdate/update5.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/image/RsuUpdate/update6.jpg" className="d-block w-100" alt="..." />
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
    
