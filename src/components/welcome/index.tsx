import React, { useEffect } from "react";
import "./welcome.css";

const useAOS = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationType = element.getAttribute("data-aos");

          element.style.opacity = "1";
          element.style.transform = "translateY(0)";

          if (animationType === "zoom-in") {
            element.style.transform = "scale(1)";
          } else if (animationType === "fade-right") {
            element.style.transform = "translateX(0)";
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el) => {
      const element = el as HTMLElement;
      const animationType = element.getAttribute("data-aos");
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      element.style.opacity = "0";

      if (animationType === "fade-up") {
        element.style.transform = "translateY(60px)";
      } else if (animationType === "zoom-in") {
        element.style.transform = "scale(0.8)";
      } else if (animationType === "fade-right") {
        element.style.transform = "translateX(-60px)";
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};

const Welcome = () => {
  useAOS();

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 sm:px-8 md:px-12 lg:px-20 py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative max-w-5xl text-center space-y-10 z-10">
        <div data-aos="fade-up" data-aos-delay="0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-snug mb-6">
            <span className="inline-block animate-bounce">👋</span>
            <br />
            <span className="bg-gradient-to-r from-[#ddc588] via-[#e6d299] to-[#ddc588] bg-clip-text text-transparent">
              Selamat Datang
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-4 block">
              Di Website Resmi Perguruan WR Supratman Medan
            </span>
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex items-center justify-center space-x-4 my-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#ddc588] to-transparent flex-1 max-w-24"></div>
          <div className="w-3 h-3 bg-[#ddc588] rounded-full animate-pulse"></div>
          <div className="h-px bg-gradient-to-r from-[#ddc588] via-[#e6d299] to-[#ddc588] flex-1 max-w-32"></div>
          <div
            className="w-2 h-2 bg-[#ddc588] rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#ddc588] to-transparent flex-1 max-w-24"></div>
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
            Website ini menyajikan berbagai informasi tentang Perguruan WR
            Supratman Medan. Berbahagia sekali kami dapat menjumpai Anda. Telah
            menjadi kewajiban kami untuk memperkenalkan diri dan
            menginformasikan sekolah kami yang mengutamakan pendidikan
            berkarakter, sains, teknologi informasi, dan penguasaan 3 bahasa
            <span className="font-bold text-gray-800 bg-gradient-to-r from-[#ddc588] to-[#e6d299] bg-clip-text text-transparent px-2">
              (TriLingual : Bahasa Indonesia, Bahasa Inggris, dan Bahasa
              Mandarin)
            </span>
            . Kiranya sekolah dan orang tua dapat bekerjasama secara maksimal
            dalam mendidik anak kita sehingga berguna bagi anak kita menuju masa
            depan lebih baik. Semoga bermanfaat!
          </p>
        </div>

        <div data-aos="fade-right" data-aos-delay="700" className="pt-6">
          <button className="welcome-btn group relative inline-flex items-center font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#cba33f] to-[#ddc588] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center space-x-2">
              <span>Mulai Jelajah</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
