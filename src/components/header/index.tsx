import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { slides } from "../../data";
import "./header.css";

import acredityImg from "../../../public/assets/akreditas.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/carousel-detail/${id}`);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="header-carousel-container relative">
        <div className="absolute left-24 top-1/5 -translate-y-1/2 -translate-x-1/2 z-20 -rotate-12">
          <img
            src={acredityImg}
            alt="Akreditasi"
            className="
              w-20 h-20 
              sm:w-24 sm:h-24 
              md:w-28 md:h-28 
              lg:w-32 lg:h-32 
              xl:w-36 xl:h-36
              rounded-full 
              object-cover 
              shadow-2xl 
              border-4 border-white
            "
          />
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={60}
          pagination={{ clickable: true, dynamicBullets: true }}
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
            <SwiperSlide
              key={slide.id}
              className="carousel-slide cursor-pointer"
              onClick={() => handleNavigate(slide.id)}
            >
              <div
                className="slide-image"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-content">{slide.content}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
