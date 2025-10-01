import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

import mikrologo from "../../../public/assets/mikroskil.png";
import "./footer.css";

const Footer = () => {
  const schoolLocation = "Jl. Asia No No.143 Medan 20214, Sumatera Utara";

  const handleMapClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      schoolLocation
    )}`;
    window.open(mapsUrl, "_blank");
  };

  const schoolStats = [
    { icon: Users, label: "Siswa Aktif", value: "1,250+" },
    { icon: BookOpen, label: "Program Studi", value: "3" },
    { icon: Award, label: "Prestasi", value: "50+" },
  ];

  const quickLinks = [
    { label: "Portal Siswa", color: "from-blue-500 to-cyan-500" },
    { label: "E-Learning", color: "from-purple-500 to-pink-500" },
    { label: "Perpustakaan", color: "from-green-500 to-teal-500" },
    { label: "Galeri", color: "from-orange-500 to-red-500" },
  ];

  return (
    <footer className="footer">
      <div className="footer-bg-pattern"></div>

      <div className="footer-bg-element footer-bg-element--1"></div>
      <div className="footer-bg-element footer-bg-element--2"></div>
      <div className="footer-bg-element footer-bg-element--3"></div>

      <div className="footer-container">
        <div className="footer-header">
          <div className="footer-header-icon">
            <GraduationCap size={40} className="text-yellow-300" />
          </div>
          <h2 className="footer-title">Perguruan WR Supratman Medan</h2>
          <p className="footer-subtitle">
            Membangun Generasi Unggul untuk Masa Depan yang Cemerlang
          </p>
        </div>

        <div className="footer-stats">
          {schoolStats.map((stat, index) => (
            <div key={index} className="footer-stat-card">
              <div className="footer-stat-content">
                <div className="footer-stat-icon">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="footer-stat-info">
                  <p className="footer-stat-value">{stat.value}</p>
                  <p className="footer-stat-label">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-main-grid">
          <div className="footer-left-column">
            <div className="footer-section">
              <h3 className="footer-section-title">
                <MapPin className="footer-section-icon" size={28} />
                Lokasi & Kontak
              </h3>

              <div className="footer-address-card">
                <div className="footer-address-content">
                  <MapPin className="footer-address-icon" size={20} />
                  <div className="footer-address-text">
                    <h4 className="footer-address-title">Alamat Sekolah</h4>
                    <p className="footer-address-detail">
                      Jl. Asia No No.143 Medan 20214
                      <br />
                      Sumatera Utara
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Image Section */}
              <div className="footer-maps-container">
                <div
                  className="footer-maps-image-wrapper"
                  onClick={handleMapClick}
                >
                  <div className="footer-maps-image-container">
                    {/* Placeholder untuk Google Maps Image */}
                    <div className="footer-maps-placeholder">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31856.76915799527!2d98.66823960452439!3d3.5653402201611013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b232fffb1d%3A0xe23f1ba70a92fd72!2sSekolah%20Menengah%20Atas%20WR%20Supratman%201!5e0!3m2!1sid!2sid!4v1758172496160!5m2!1sid!2sid"
                        width="600"
                        height="450"
                        loading="lazy"
                      ></iframe>
                    </div>

                    {/* Overlay dengan informasi */}
                    <div className="footer-maps-overlay">
                      <div className="footer-maps-overlay-content">
                        <div className="footer-maps-overlay-icon">
                          <MapPin size={24} />
                        </div>
                        <div className="footer-maps-overlay-text">
                          <h4 className="footer-maps-overlay-title">
                            Klik untuk membuka di Google Maps
                          </h4>
                          <p className="footer-maps-overlay-subtitle">
                            Lihat rute dan lokasi lengkap
                          </p>
                        </div>
                        <ExternalLink
                          className="footer-maps-overlay-external"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-contact-grid">
                <a
                  href="mailto:wr_supratman1@yahoo.com"
                  className="footer-contact-card"
                >
                  <div className="footer-contact-content">
                    <Mail
                      className="footer-contact-icon footer-contact-icon--mail"
                      size={20}
                    />
                    <div className="footer-contact-text">
                      <p className="footer-contact-label">Email</p>
                      <p className="footer-contact-value">
                        wr_supratman1@yahoo.com
                      </p>
                    </div>
                  </div>
                </a>

                <a href="tel:+62617345093" className="footer-contact-card">
                  <div className="footer-contact-content">
                    <Phone
                      className="footer-contact-icon footer-contact-icon--phone"
                      size={20}
                    />
                    <div className="footer-contact-text">
                      <p className="footer-contact-label">Telepon</p>
                      <p className="footer-contact-value">
                        061-7345093, 7347470
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-right-column">
            <div className="footer-section">
              <h3 className="footer-section-title">
                <BookOpen className="footer-section-icon" size={28} />
                Informasi Sekolah
              </h3>
              <div className="footer-info-card">
                <div className="footer-info-content">
                  <div className="footer-info-item">
                    <h4 className="footer-info-title">Visi</h4>
                    <p className="footer-info-text">
                      Menjadi sekolah unggul yang menghasilkan lulusan
                      berkarakter, berprestasi, dan siap menghadapi tantangan
                      masa depan.
                    </p>
                  </div>

                  <div className="footer-info-item">
                    <h4 className="footer-info-title">Jam Operasional</h4>
                    <div className="footer-schedule">
                      <p>Senin - Jumat: 07:00 - 15:30 WIB</p>
                      <p>Sabtu: 07:00 - 12:00 WIB</p>
                      <p>Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-links-grid">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  className={`footer-link-button footer-link-button--${
                    index + 1
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-partner">
              <div className="footer-partner-logo">
                <img
                  src={mikrologo}
                  alt="Mikroskil Logo"
                  className="footer-logo"
                />
              </div>
              <div className="footer-partner-info">
                <p className="footer-partner-title">Education Partners</p>
                <p className="footer-partner-name">Universitas Mikroskil</p>
                <p className="footer-partner-desc">Web Development & Design</p>
              </div>
            </div>

            <div className="footer-copyright">
              <p className="footer-copyright-main">
                © 2025 Perguruan WR Supratman Medan. All rights reserved.
              </p>
              <p className="footer-copyright-sub">
                Developed by Universitas Mikroskil
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-border"></div>
    </footer>
  );
};

export default Footer;
