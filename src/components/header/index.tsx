import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { slides } from "../../data";
import "./header.css";

import acredityImg from "../../../public/assets/akreditas.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  level?: string;
}
const Header = ({}: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/carousel-detail/${id}`);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="header-carousel-container relative">
        {/* Fixed Akreditasi Badge */}
        <div className="akreditasi-badge">
          <img src={acredityImg} alt="Akreditasi" className="akreditasi-img" />
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
