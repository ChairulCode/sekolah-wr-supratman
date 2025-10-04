import { useState } from "react";
import { Music, Play, Pause, Volume2 } from "lucide-react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./songs.css";
import { songs } from "../../data";

const Songs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showLyricsId, setShowLyricsId] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <div className="songs-container">
        <div className="songs-hero">
          <div className="hero-icon">
            <Music size={48} />
          </div>
          <h1 className="songs-title">Lagu Mars WR Supratman Medan</h1>
        </div>

        <div className="songs-grid">
          {songs.map((song) => (
            <div
              key={song.id}
              className={`song-card ${activeCard === song.id ? "active" : ""}`}
              onClick={() =>
                setActiveCard(activeCard === song.id ? null : song.id)
              }
            >
              {/* Header */}
              <div className="card-header">
                <div className="card-number">
                  <Music size={24} />
                  <span>#{song.id}</span>
                </div>
                <div
                  className="play-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(song.youtubeUrl, "_blank");
                  }}
                >
                  {activeCard === song.id ? (
                    <Pause size={20} />
                  ) : (
                    <Play size={20} />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="card-content">
                <h2 className="song-title">{song.title}</h2>
                <p className="song-subtitle">{song.subtitle}</p>

                <div className="song-meta">
                  <span className="meta-item">
                    <Volume2 size={16} />
                    {song.composer}
                  </span>
                  <span className="meta-year">{song.year}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="card-footer">
                <span
                  className="view-lyrics"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLyricsId(song.id);
                  }}
                >
                  Lihat Lirik
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="info-section">
          <h3 className="info-title">Tentang Lagu Mars</h3>
          <p className="info-text">
            Lagu mars sekolah merupakan identitas dan kebanggaan yang
            mencerminkan semangat, visi, dan misi pendidikan. Setiap liriknya
            mengandung makna mendalam tentang dedikasi dalam menuntut ilmu dan
            mengabdi kepada bangsa.
          </p>
        </div>
      </div>

      {/* Lyrics Modal - Dipindahkan ke luar songs-container */}
      {showLyricsId !== null && (
        <div className="lyrics-overlay" onClick={() => setShowLyricsId(null)}>
          <div className="lyrics-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="lyrics-title">
              {songs.find((s) => s.id === showLyricsId)?.title}
            </h3>
            <div className="lyrics-content">
              {songs
                .find((s) => s.id === showLyricsId)
                ?.lyrics.map((line, index) => (
                  <p
                    key={index}
                    className={
                      line.startsWith("Reff:") ? "reff-line" : "lyrics-line"
                    }
                  >
                    {line || "\u00A0"}
                  </p>
                ))}
            </div>
            <button
              className="close-lyrics"
              onClick={() => setShowLyricsId(null)}
            >
              Tutup Lirik
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Songs;
