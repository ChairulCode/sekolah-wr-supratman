import { useEffect, useState } from "react";
import "./welcome.css";
import { welcomeData } from "../../data";

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

          // Skip animasi untuk welcome section utama
          if (element.classList.contains("welcome-section")) {
            return;
          }

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

      // Skip welcome section utama
      if (element.classList.contains("welcome-section")) {
        return;
      }

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

const useScrollFade = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Ambil element welcome section dengan type casting yang benar
      const welcomeSection = document.querySelector(
        ".welcome-section"
      ) as HTMLElement;
      if (!welcomeSection) return;

      // Dapatkan posisi section relatif terhadap viewport
      const rect = welcomeSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Debug values
      console.log(
        "SectionTop:",
        sectionTop,
        "SectionBottom:",
        sectionBottom,
        "ViewportHeight:",
        viewportHeight
      );

      // Jika section masih terlihat di viewport (belum keluar dari bawah)
      if (sectionBottom > 0) {
        // Mulai fade out ketika section sudah scroll 30% dari viewport
        const fadeStart = viewportHeight * 0.3;

        if (sectionTop > fadeStart) {
          // Section masih normal, belum waktunya fade
          setOpacity(1);
          setScale(1);
          console.log("Normal state - opacity: 1");
        } else if (sectionTop <= -viewportHeight * 0.5) {
          // Section sudah terlalu jauh ke atas, hilangkan sepenuhnya
          setOpacity(0);
          setScale(0.8);
          console.log("Hidden state - opacity: 0");
        } else {
          // Section dalam proses fade out
          const fadeRange = fadeStart + viewportHeight * 0.5;
          const fadeProgress = (fadeStart - sectionTop) / fadeRange;

          const newOpacity = Math.max(0, 1 - fadeProgress);
          const newScale = Math.max(0.8, 1 - fadeProgress * 0.2);

          setOpacity(newOpacity);
          setScale(newScale);
          console.log(
            "Fading state - opacity:",
            newOpacity,
            "scale:",
            newScale
          );
        }
      } else {
        // Section sudah keluar dari viewport
        setOpacity(0);
        setScale(0.8);
        console.log("Out of viewport - opacity: 0");
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { opacity, scale };
};

const Welcome = () => {
  useAOS();
  const { opacity, scale } = useScrollFade();

  return (
    <section
      className="welcome-section relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 sm:px-8 md:px-12 lg:px-20 py-12 overflow-hidden"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      {/* Background Animated Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Main Content */}
      <div className="relative max-w-6xl text-center space-y-12 z-10">
        {/* Main Heading */}
        <div data-aos="fade-up">
          <h1 className="welcome-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight mb-8">
            {/* Emoji */}
            <span className="inline-block animate-bounce text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              {welcomeData.headingEmoji}
            </span>
            <br />
            {/* Main Title */}
            <span className="bg-gradient-to-r from-[#ddc588] via-[#e6d299] to-[#ddc588] bg-clip-text text-transparent block mt-4">
              {welcomeData.headingMain}
            </span>
            <br />
            {/* Subtitle */}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-6 block">
              {welcomeData.headingSub}
            </span>
          </h1>
        </div>

        {/* Decorative Divider */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex items-center justify-center space-x-6 my-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#ddc588] to-transparent flex-1 max-w-32"></div>
          <div className="w-4 h-4 bg-[#ddc588] rounded-full animate-pulse"></div>
          <div className="h-px bg-gradient-to-r from-[#ddc588] via-[#e6d299] to-[#ddc588] flex-1 max-w-40"></div>
          <div
            className="w-3 h-3 bg-[#ddc588] rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#ddc588] to-transparent flex-1 max-w-32"></div>
        </div>

        {/* Description */}
        <div data-aos="fade-up" data-aos-delay="500">
          <div className="flex justify-center">
            <p className="welcome-description text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed tracking-wide max-w-4xl text-center px-4 sm:px-6 md:px-8">
              {welcomeData.description}
              {/* Highlighted Text */}
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 bg-gradient-to-r from-[#ddc588] to-[#e6d299] bg-clip-text px-3 block mt-4">
                {welcomeData.highlight}
              </span>
              {/* Additional Text */}
              <span className="block mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
                Kiranya sekolah dan orang tua dapat bekerjasama secara maksimal
                dalam mendidik anak kita sehingga berguna bagi anak kita menuju
                masa depan lebih baik. Semoga bermanfaat!
              </span>
            </p>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="700" className="pt-8"></div>
      </div>
    </section>
  );
};

export default Welcome;
