import { Bell, X, AlertCircle } from "lucide-react";

const Announcement2 = () => {
  return (
    <>
      <style>{`
        .ann-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
        }

        .ann-card {
          width: 100%;
          max-width: 500px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: visible;
        }

        .ann-content {
          padding: 24px;
        }

        .ann-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .ann-icon-wrapper {
          display: inline-flex;
          padding: 16px;
          background: #dbeafe;
          border-radius: 50%;
          margin-bottom: 16px;
        }

        .ann-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .ann-info-box {
          background: #eff6ff;
          border-left: 4px solid #3b82f6;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .ann-info-text {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin: 0;
          color: #4b5563;
          font-size: 14px;
          line-height: 1.6;
        }

        .ann-details {
          background: #f9fafb;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .ann-detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .ann-detail-row:last-child {
          border-bottom: none;
        }

        .ann-detail-label {
          font-weight: 600;
          color: #374151;
          font-size: 14px;
        }

        .ann-detail-value {
          color: #6b7280;
          font-size: 14px;
        }

        .ann-footer-text {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .ann-btn-wrapper {
          text-align: center;
        }

        .ann-btn {
          background: #ddc588;
          color: white;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .ann-btn:hover {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .ann-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
          z-index: 10;
        }

        .ann-close-btn:hover {
          color: #4b5563;
        }

        .ann-top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
          border-radius: 16px 16px 0 0;
        }

        @media (min-width: 640px) {
          .ann-wrapper {
            padding: 24px;
          }

          .ann-card {
            max-width: 600px;
          }

          .ann-content {
            padding: 32px;
          }

          .ann-title {
            font-size: 24px;
          }

          .ann-info-text,
          .ann-detail-label,
          .ann-detail-value,
          .ann-footer-text,
          .ann-btn {
            font-size: 15px;
          }
        }

        @media (min-width: 768px) {
          .ann-wrapper {
            padding: 32px;
          }

          .ann-card {
            max-width: 700px;
          }

          .ann-content {
            padding: 40px;
          }

          .ann-title {
            font-size: 28px;
          }

          .ann-info-text,
          .ann-detail-label,
          .ann-detail-value,
          .ann-footer-text {
            font-size: 16px;
          }

          .ann-btn {
            font-size: 16px;
            padding: 14px 40px;
          }
        }
      `}</style>

      <div className="ann-wrapper">
        <div className="ann-card">
          <div className="ann-top-border"></div>

          <button className="ann-close-btn" aria-label="Close">
            <X size={24} />
          </button>

          <div className="ann-content">
            <div className="ann-header">
              <div className="ann-icon-wrapper">
                <Bell size={32} color="#3b82f6" />
              </div>
              <h2 className="ann-title">Pengumuman Penting</h2>
            </div>

            <div className="ann-info-box">
              <p className="ann-info-text">
                <AlertCircle
                  size={20}
                  color="#3b82f6"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span>
                  Dengan hormat, kami informasikan bahwa sistem akan mengalami
                  pemeliharaan terjadwal pada:
                </span>
              </p>
            </div>

            <div className="ann-details">
              <div className="ann-detail-row">
                <span className="ann-detail-label">Tanggal:</span>
                <span className="ann-detail-value">25 Oktober 2025</span>
              </div>
              <div className="ann-detail-row">
                <span className="ann-detail-label">Waktu:</span>
                <span className="ann-detail-value">22:00 - 02:00 WIB</span>
              </div>
              <div className="ann-detail-row">
                <span className="ann-detail-label">Durasi:</span>
                <span className="ann-detail-value">±4 Jam</span>
              </div>
            </div>

            <p className="ann-footer-text">
              Selama periode ini, layanan mungkin tidak dapat diakses. Kami
              mohon maaf atas ketidaknyamanan yang ditimbulkan.
            </p>

            <div className="ann-btn-wrapper">
              <button className="ann-btn">Lihat Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement2;
