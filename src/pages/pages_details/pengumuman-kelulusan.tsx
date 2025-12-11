import { useParams, useNavigate } from "react-router-dom";
import { kelulusanList } from "../../data";
import Footer from "../../components/footer";
import "./css/pengumuman-kelulusan.css";

const PengumumanKelulusan = () => {
  const { level } = useParams();
  const navigate = useNavigate();

  const normalizedLevel = (level || "").toUpperCase();

  // Filter data
  const filteredData = kelulusanList.filter(
    (item) => item.level === normalizedLevel
  );

  // Title readable
  const getReadableLevel = (level: string | undefined) => {
    const map: Record<string, string> = {
      "pg-tk": "PG & TK",
      sd: "SD",
      smp: "SMP",
      sma: "SMA",
    };
    return map[level || ""] || normalizedLevel;
  };

  return (
    <div className="pk-page">
      {/* BREADCRUMB */}
      <div className="pk-breadcrumb">
        <button
          className="pk-breadcrumb-link"
          onClick={() => navigate("/kelulusan")}
        >
          Kelulusan
        </button>

        <span className="pk-breadcrumb-separator">/</span>

        <span className="pk-breadcrumb-current">{getReadableLevel(level)}</span>
      </div>

      <div className="pk-wrapper">
        <h1 className="pk-title">
          Pengumuman Kelulusan {getReadableLevel(level)}
        </h1>

        {filteredData.length > 0 ? (
          <div className="pk-table-container">
            <table className="pk-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>NIS</th>
                  <th>Status</th>
                  <th>Keterangan</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.nis}</td>
                    <td>
                      <span
                        className={`pk-status ${
                          item.status === "LULUS" ? "lulus" : "tidak-lulus"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="pk-empty">
            Belum ada pengumuman kelulusan untuk tingkat ini.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PengumumanKelulusan;
