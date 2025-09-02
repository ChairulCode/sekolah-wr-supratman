import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "../../data";
import { useRef } from "react";

const Header = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="flex items-center justify-center h-full text-white text-2xl font-bold bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-0 left-0 h-full w-1/2 cursor-pointer z-20"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <div
        className="absolute top-0 right-0 h-full w-1/2 cursor-pointer z-20"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default Header;
