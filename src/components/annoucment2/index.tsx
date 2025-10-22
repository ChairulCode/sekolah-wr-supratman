import { Bell, X, Calendar, Clock, Timer } from "lucide-react";
import { useState } from "react";
import "./annoucment2.css";
import { announcements2, type Announcement2 } from "../../data";

const Announcement2 = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement2 | null>(null);

  // Helper function untuk warna prioritas
  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    const colors = {
      high: { bg: "#fef2f2", border: "#ef4444", text: "#991b1b" },
      medium: { bg: "#fffbeb", border: "#f59e0b", text: "#92400e" },
      low: { bg: "#eff6ff", border: "#3b82f6", text: "#1e40af" },
    };
    return colors[priority] || colors.low;
  };

  // Helper function untuk label prioritas
  const getPriorityLabel = (priority: "high" | "medium" | "low") => {
    const labels = {
      high: "Penting",
      medium: "Sedang",
      low: "Info",
    };
    return labels[priority] || "Info";
  };

  return (
    <>
      <div className="ann-wrapper">
        <div className="ann-header">
          <div className="ann-header-icon">
            <Bell size={40} />
          </div>
          <h1 className="ann-main-title">Pusat Pengumuman</h1>
          <p className="ann-subtitle">
            Informasi penting dan update terkini untuk Anda
          </p>
        </div>

        <div className="ann-content">
          <div className="ann-list">
            {announcements2.map((announcement) => {
              const priorityColor = getPriorityColor(announcement.priority);
              return (
                <div
                  key={announcement.id}
                  className="ann-item"
                  onClick={() => setSelectedAnnouncement(announcement)}
                >
                  <div className="ann-item-header">
                    <h3 className="ann-item-title">{announcement.title}</h3>
                    <span
                      className="ann-priority-badge"
                      style={{
                        background: priorityColor.bg,
                        color: priorityColor.text,
                        border: `1px solid ${priorityColor.border}`,
                      }}
                    >
                      {getPriorityLabel(announcement.priority)}
                    </span>
                  </div>

                  <div className="ann-item-meta">
                    <div className="ann-meta-item">
                      <Calendar size={16} />
                      <span>{announcement.date}</span>
                    </div>
                    <div className="ann-meta-item">
                      <Clock size={16} />
                      <span>{announcement.time}</span>
                    </div>
                    <div className="ann-meta-item">
                      <Timer size={16} />
                      <span>{announcement.duration}</span>
                    </div>
                  </div>

                  <p className="ann-item-desc">{announcement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {selectedAnnouncement && (
          <div
            className="ann-modal-overlay"
            onClick={() => setSelectedAnnouncement(null)}
          >
            <div className="ann-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="ann-modal-close"
                onClick={() => setSelectedAnnouncement(null)}
              >
                <X size={20} />
              </button>

              <h2 className="ann-modal-title">{selectedAnnouncement.title}</h2>

              <div className="ann-modal-details">
                <div className="ann-modal-detail-row">
                  <span className="ann-modal-label">Tanggal</span>
                  <span className="ann-modal-value">
                    {selectedAnnouncement.date}
                  </span>
                </div>
                <div className="ann-modal-detail-row">
                  <span className="ann-modal-label">Waktu</span>
                  <span className="ann-modal-value">
                    {selectedAnnouncement.time}
                  </span>
                </div>
                <div className="ann-modal-detail-row">
                  <span className="ann-modal-label">Durasi</span>
                  <span className="ann-modal-value">
                    {selectedAnnouncement.duration}
                  </span>
                </div>
                <div className="ann-modal-detail-row">
                  <span className="ann-modal-label">Prioritas</span>
                  <span className="ann-modal-value">
                    {getPriorityLabel(selectedAnnouncement.priority)}
                  </span>
                </div>
              </div>

              <p className="ann-modal-desc">
                {selectedAnnouncement.description}
              </p>

              <button
                className="ann-modal-btn"
                onClick={() => setSelectedAnnouncement(null)}
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Announcement2;
