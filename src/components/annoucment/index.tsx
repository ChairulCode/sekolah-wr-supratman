import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { announcements } from "../../data";
import "./announcement.css";

const Announcement = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    footerRef.current = footer as HTMLElement;

    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStopped(true);
        } else {
          setStopped(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="announcement-section">
      <div
        className={`announcement-header sticky-header ${
          stopped ? "stopped" : ""
        }`}
        data-aos="fade-down"
      >
        <h1>📢 Pengumuman Sekolah</h1>
      </div>
      <p className="announcement-subtitle">
        Informasi terbaru seputar kegiatan dan aktivitas sekolah.
      </p>

      <div className="announcement-grid">
        {announcements.map((item, index) => (
          <div
            key={item.id}
            className="announcement-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="announcement-date-badge">{item.date}</div>
            <h2 className="announcement-title">{item.title}</h2>
            <p className="announcement-content">{item.content}</p>
            <button
              className="announcement-btn"
              data-aos="zoom-in"
              data-aos-delay={index * 200 + 200}
            >
              Baca Selengkapnya →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcement;
