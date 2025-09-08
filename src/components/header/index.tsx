import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { slides } from "../../data";
import "./header.css";

const Header = () => {
  return (
    <div className="header-carousel-container">
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={60}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        className="header-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="carousel-slide">
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">{slide.content}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination-container">
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default Header;
