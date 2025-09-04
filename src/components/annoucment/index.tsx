import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { announcements } from "../../data";
import "./announcement.css";

const Announcement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya sekali
      offset: 100, // jarak sebelum aktif
    });
  }, []);

  return (
    <section className="announcement-section">
      <div className="announcement-header" data-aos="fade-down">
        <h1>📢 Pengumuman Sekolah</h1>
        <p>Informasi terbaru seputar kegiatan dan aktivitas sekolah.</p>
      </div>

      <div className="announcement-grid">
        {announcements.map((item, index) => (
          <div
            key={item.id}
            className="announcement-card"
            data-aos="fade-up"
            data-aos-delay={index * 150} // biar muncul berurutan
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
