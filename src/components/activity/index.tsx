import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { activities } from "../../data";
import "./activity.css";

const Activity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="activity-section" data-aos="fade-up">
      <div className="activity-header" data-aos="fade-down">
        <h1>🎉 Kegiatan Sekolah</h1>
        <p>Dokumentasi kegiatan dan event terbaru di sekolah.</p>
      </div>

      <div className="activity-grid">
        {activities.map((item, index) => (
          <div
            key={item.id}
            className="activity-card"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="activity-image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="activity-date">{item.date}</span>
            </div>

            <div className="activity-content">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <button
                className="activity-btn"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 100}
              >
                Lihat Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
