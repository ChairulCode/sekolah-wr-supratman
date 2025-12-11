import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { activities } from "../../data";
import "./css/kegiatan-tingkatan.css";

const KegiatanTingkatan = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();

  const filteredActivities = activities.filter((act) => act.level === level);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Fungsi untuk format level jadi lebih readable
  const getLevelTitle = (level: string | undefined) => {
    const levelMap: { [key: string]: string } = {
      "pg-tk": "PG & TK",
      sd: "SD",
      smp: "SMP",
      sma: "SMA",
    };
    return levelMap[level || ""] || level?.toUpperCase();
  };

  // Get level color
  const getLevelColor = (level: string | undefined) => {
    const colorMap: { [key: string]: string } = {
      "pg-tk": "#FF6B9D",
      sd: "#4ECDC4",
      smp: "#FFD93D",
      sma: "#6C5CE7",
    };
    return colorMap[level || ""] || "#ddc588";
  };

  // Get level icon
  const getLevelIcon = (level: string | undefined) => {
    const iconMap: { [key: string]: string } = {
      "pg-tk": "🎨",
      sd: "📚",
      smp: "🔬",
      sma: "🎓",
    };
    return iconMap[level || ""] || "📖";
  };

  return (
    <div className="kt-page">
      {/* Breadcrumb */}
      <div className="kt-breadcrumb" data-aos="fade-down">
        <button
          onClick={() => navigate("/kegiatan")}
          className="kt-breadcrumb-link"
        >
          Kegiatan
        </button>
        <span className="kt-breadcrumb-separator">/</span>
        <span className="kt-breadcrumb-current">{getLevelTitle(level)}</span>
      </div>

      <div className="kt-wrapper">
        {/* Header with Icon */}
        <div className="kt-header" data-aos="fade-down">
          <div className="kt-icon" style={{ background: getLevelColor(level) }}>
            {getLevelIcon(level)}
          </div>
          <h1 className="kt-title">Kegiatan {getLevelTitle(level)}</h1>
          <p className="kt-desc">
            Menampilkan {filteredActivities.length} kegiatan untuk tingkat{" "}
            {getLevelTitle(level)}
          </p>
        </div>

        {filteredActivities.length > 0 ? (
          <div className="kt-list">
            {filteredActivities.map((act, index) => (
              <div
                key={act.id}
                className="kt-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="kt-card-image-wrapper">
                  <img src={act.image} alt={act.title} className="kt-img" />
                  <div className="kt-card-overlay">
                    <span
                      className="kt-level-badge"
                      style={{ background: getLevelColor(level) }}
                    >
                      {getLevelTitle(level)}
                    </span>
                  </div>
                </div>
                <div className="kt-content">
                  <span className="kt-date">📅 {act.date}</span>
                  <h2>{act.title}</h2>
                  <p>{act.content}</p>
                  <button
                    className="kt-btn"
                    onClick={() => navigate(`/kegiatan/${act.id}`)}
                  >
                    <span>Baca Selengkapnya</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 3L11 8L6 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="kt-empty" data-aos="fade-up">
            <div className="kt-empty-icon">📭</div>
            <h3>Belum Ada Kegiatan</h3>
            <p>
              Belum ada kegiatan untuk tingkat {getLevelTitle(level)} saat ini.
            </p>
            <button className="kt-btn-back" onClick={() => navigate(-1)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 13L5 8L10 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Kembali</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KegiatanTingkatan;
