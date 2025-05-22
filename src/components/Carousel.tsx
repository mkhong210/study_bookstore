import Carousel from "react-bootstrap/Carousel";

const MyCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img src="/img/5.jpg" className="fixed-size-img" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img src="/img/6.jpg" className="fixed-size-img" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img src="/img/7.jpg" className="fixed-size-img" alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
