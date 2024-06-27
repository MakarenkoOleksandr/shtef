import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../img/1.jpeg";
import slide2 from "../../../img/2.jpeg";
import slide3 from "../../../img/3.jpeg";
import slide4 from "../../../img/4.jpeg";

const MainSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
  };
  return (
    <section className="main__slider">
      <Slider {...settings}>
        <div className="main__slider-item">
          <img className="main__slider-img" src={slide1} alt="slide"></img>
        </div>
        <div>
          <img className="main__slider-img" src={slide2} alt="slide"></img>
        </div>
        <div>
          <img className="main__slider-img" src={slide3} alt="slide"></img>
        </div>
        <div>
          <img className="main__slider-img" src={slide4} alt="slide"></img>
        </div>
      </Slider>
    </section>
  );
};

export default MainSlider;
