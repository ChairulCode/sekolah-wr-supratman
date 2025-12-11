import { Bell, X, Calendar, ArrowRight, Megaphone } from "lucide-react";
import { useState, useEffect } from "react";
import "./annoucment2.css";
import { announcements2, type Announcement2Item } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";

const Announcement2 = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement2Item | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <div className="ann-wrapper">
        {/* Hero Header */}
        <div className="ann-hero" data-aos="fade-down">
          <div className="ann-hero-icon">
            <Megaphone size={48} strokeWidth={2.5} />
          </div>
          <h1 className="ann-hero-title">Pusat Pengumuman</h1>
          <p className="ann-hero-desc">
            Informasi penting dan update terkini untuk seluruh siswa dan guru
          </p>
          <div className="ann-hero-badge">
            <Bell size={16} />
            <span>{announcements2.length} Pengumuman Aktif</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="ann-container">
          <div className="ann-grid">
            {announcements2.map((announcement, index) => (
              <div
                key={announcement.id}
                className="ann-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                {/* Card Badge */}
                <div className="ann-card-badge">
                  <Bell size={14} />
                  <span>Pengumuman</span>
                </div>

                {/* Card Content */}
                <div className="ann-card-content">
                  <h3 className="ann-card-title">{announcement.title}</h3>

                  <div className="ann-card-meta">
                    <Calendar size={16} />
                    <span>{announcement.date}</span>
                  </div>

                  <p className="ann-card-desc">{announcement.description}</p>
                </div>

                {/* Card Footer */}
                <div className="ann-card-footer">
                  <button className="ann-card-btn">
                    <span>Selengkapnya</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="ann-card-corner"></div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedAnnouncement && (
          <div
            className="ann-modal-overlay"
            onClick={() => setSelectedAnnouncement(null)}
          >
            <div className="ann-modal" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="ann-modal-header">
                <div className="ann-modal-icon">
                  <Bell size={24} />
                </div>
                <button
                  className="ann-modal-close"
                  onClick={() => setSelectedAnnouncement(null)}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Title */}
              <h2 className="ann-modal-title">{selectedAnnouncement.title}</h2>

              {/* Modal Meta */}
              <div className="ann-modal-meta">
                <div className="ann-modal-meta-item">
                  <Calendar size={18} />
                  <div>
                    <span className="ann-modal-meta-label">Tanggal</span>
                    <span className="ann-modal-meta-value">
                      {selectedAnnouncement.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Description */}
              <div className="ann-modal-body">
                <p className="ann-modal-desc">
                  {selectedAnnouncement.description}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="ann-modal-footer">
                <button
                  className="ann-modal-btn"
                  onClick={() => setSelectedAnnouncement(null)}
                >
                  Saya Mengerti
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Announcement2;
