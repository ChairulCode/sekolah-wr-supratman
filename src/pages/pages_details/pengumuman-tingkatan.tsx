import { announcements2 } from "../../data";
import { useParams, useNavigate } from "react-router-dom";
import {
  Bell,
  Calendar,
  AlertCircle,
  Info,
  Wrench,
  Megaphone,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/pengumuman-tingkatan.css";
import Footer from "../../components/footer";

const PengumumanTingkatan = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();

  // Normalize level
  const currentLevel = level?.toUpperCase() as
    | "SD"
    | "SMP"
    | "SMA"
    | "PG-TK"
    | undefined;

  // Filter announcements
  const filteredAnnouncements = currentLevel
    ? announcements2.filter((ann) => ann.level === currentLevel)
    : announcements2;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // Format level title
  const getLevelTitle = (lvl: string | undefined) => {
    const levelMap: { [key: string]: string } = {
      "PG-TK": "PG & TK",
      SD: "SD",
      SMP: "SMP",
      SMA: "SMA",
    };
    return levelMap[lvl || ""] || lvl?.toUpperCase();
  };

  // Get type config
  const getTypeConfig = (type: string) => {
    switch (type) {
      case "maintenance":
        return {
          icon: Wrench,
          label: "Pemeliharaan",
          className: "pt-type-maintenance",
        };
      case "update":
        return {
          icon: Bell,
          label: "Update",
          className: "pt-type-update",
        };
      case "info":
      default:
        return {
          icon: Info,
          label: "Informasi",
          className: "pt-type-info",
        };
    }
  };

  return (
    <div className="pt-page">
      {/* Breadcrumb */}
      <div className="pt-breadcrumb" data-aos="fade-down">
        <button
          onClick={() => navigate("/pengumuman")}
          className="pt-breadcrumb-link"
        >
          Pengumuman
        </button>
        <span className="pt-breadcrumb-separator">/</span>
        <span className="pt-breadcrumb-current">
          {getLevelTitle(currentLevel)}
        </span>
      </div>

      <div className="pt-container">
        {/* Hero Header */}
        <div className="pt-hero" data-aos="fade-down">
          <div className="pt-hero-icon">
            <Megaphone size={48} strokeWidth={2.5} />
          </div>
          <h1 className="pt-hero-title">
            Pengumuman {getLevelTitle(currentLevel)}
          </h1>
          <p className="pt-hero-desc">
            Informasi dan pengumuman khusus untuk tingkat{" "}
            {getLevelTitle(currentLevel)}
          </p>
          <div className="pt-hero-badge">
            <AlertCircle size={16} />
            <span>{filteredAnnouncements.length} Pengumuman</span>
          </div>
        </div>

        {/* Content */}
        {filteredAnnouncements.length === 0 ? (
          <div className="pt-empty" data-aos="fade-up">
            <div className="pt-empty-icon">📭</div>
            <h3>Belum Ada Pengumuman</h3>
            <p>
              Belum ada pengumuman untuk tingkat {getLevelTitle(currentLevel)}{" "}
              saat ini
            </p>
            <button className="pt-btn-back" onClick={() => navigate(-1)}>
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
        ) : (
          <div className="pt-grid">
            {filteredAnnouncements.map((announcement, index) => {
              const typeConfig = getTypeConfig(announcement.type);
              const TypeIcon = typeConfig.icon;

              return (
                <div
                  key={announcement.id}
                  className="pt-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  {/* Card Header */}
                  <div className={`pt-card-header ${typeConfig.className}`}>
                    <div className="pt-card-icon">
                      <TypeIcon size={20} />
                    </div>
                    <span className="pt-card-type">{typeConfig.label}</span>
                  </div>

                  {/* Card Body */}
                  <div className="pt-card-body">
                    <h3 className="pt-card-title">{announcement.title}</h3>

                    <div className="pt-card-meta">
                      <Calendar size={16} />
                      <span>{announcement.date}</span>
                    </div>

                    <p className="pt-card-desc">{announcement.description}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-card-footer">
                    <span className="pt-card-level">
                      {getLevelTitle(announcement.level)}
                    </span>
                  </div>

                  {/* Decorative Element */}
                  <div className="pt-card-accent"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PengumumanTingkatan;
