export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide shadow-xl"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/image/Slideshow/slide1.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/image/Slideshow/2.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/image/Slideshow/slide3.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/image/Slideshow/slide5.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/image/Slideshow/slide6.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/image/Slideshow/slide7.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/image/Slideshow/slide8.jpg"
            className="d-block w-100 h-100"
            alt="..."
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
