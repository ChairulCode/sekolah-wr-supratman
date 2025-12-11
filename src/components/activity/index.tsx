import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { activities } from "../../data";
import "./activity.css";
import { useNavigate } from "react-router-dom";

interface ActivityProps {
  level?: string;
}

const Activity = ({}: ActivityProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="activity-section">
      <div className="activity-header sticky-header" data-aos="fade-down">
        <h1>📢 Kegiatan Sekolah</h1>
      </div>
      <p className="activity-subtitle">
        Informasi terbaru seputar kegiatan dan aktivitas sekolah.
      </p>

      <div className="timeline">
        {activities.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <button
                className="activity-btn"
                onClick={() => navigate(`/kegiatan/${item.id}`)}
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

export default Activity;
