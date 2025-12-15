import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { announcements } from "../../data";
import "./announcement.css";
import { useNavigate } from "react-router-dom";

interface AnnouncementProps {
  level?: string;
}

const Announcement = ({}: AnnouncementProps) => {
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement | null>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [stopped, setStopped] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    // Calculate navbar height dynamically
    const calculateNavbarHeight = () => {
      const navbar = document.querySelector(".navbar.visible");
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        setNavbarHeight(height);
      } else {
        // Fallback to 74px if navbar is not sticky yet
        setNavbarHeight(74);
      }
    };

    // Initial calculation
    calculateNavbarHeight();

    // Recalculate on resize and scroll
    window.addEventListener("resize", calculateNavbarHeight);
    window.addEventListener("scroll", calculateNavbarHeight);

    return () => {
      window.removeEventListener("resize", calculateNavbarHeight);
      window.removeEventListener("scroll", calculateNavbarHeight);
    };
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    footerRef.current = footer as HTMLElement;

    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStopped(true);
        else setStopped(false);
      },
      { threshold: 0 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="announcement-section">
      <div
        className={`announcement-header sticky-header ${
          stopped ? "stopped" : ""
        }`}
        data-aos="fade-down"
        style={{ top: `${navbarHeight}px` }} // Dynamic top value
      >
        <h1>📢 Prestasi Sekolah</h1>
      </div>

      <p className="announcement-subtitle">
        Informasi terbaru seputar aktivitas sekolah
      </p>

      <div className="announcement-grid">
        {announcements.map((item, index) => (
          <div
            key={item.id}
            className={`announcement-card`}
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            {/* IMAGE */}
            <div className="announcement-image">
              <img
                src={item.image}
                alt={item.title}
                className="announcement-img"
              />
            </div>

            {/* CONTENT */}
            <div className="announcement-content-wrapper">
              <div className="announcement-date-badge">{item.date}</div>
              <h2 className="announcement-title">{item.title}</h2>

              {/* TEXT EXPAND AREA (NO AOS!) */}
              <div className="announcement-text-container">
                <p
                  className={`announcement-text ${
                    expandedCards[item.id] ? "expanded" : ""
                  }`}
                >
                  {item.content}
                </p>

                {item.content.length > 150 && (
                  <button
                    className="show-more-btn"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {expandedCards[item.id]
                      ? "Lihat Lebih Sedikit ↑"
                      : "Lihat Selengkapnya ↓"}
                  </button>
                )}
              </div>

              {/* READ MORE BUTTON */}
              <button
                className="announcement-btn"
                onClick={() => navigate(`/prestasi/${item.id}`)}
                data-aos="zoom-in"
                data-aos-delay={index * 200 + 150}
              >
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcement;
