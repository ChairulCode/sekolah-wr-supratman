import { useParams, Link } from "react-router-dom";
import { nilaiMapelList } from "../../data";
import Footer from "../../components/footer";
import "./css/nilai-tingkatan.css";

const NilaiTingkatan = () => {
  const { level } = useParams();
  const normalizedLevel = (level || "").toUpperCase();

  const filteredNilai = nilaiMapelList.filter(
    (item) => item.level === normalizedLevel
  );

  // Hitung predikat otomatis
  const getPredikat = (nilai: number) => {
    if (nilai >= 90) return "A";
    if (nilai >= 80) return "B";
    if (nilai >= 70) return "C";
    return "D";
  };

  return (
    <div className="nt-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/tingkatan/${level}`}>{normalizedLevel}</Link>
        <span>/</span>
        <p>Nilai Mapel</p>
      </div>

      <h1 className="nt-title">Nilai Mapel {normalizedLevel}</h1>

      {filteredNilai.length > 0 ? (
        <div className="nt-table-container">
          <table className="nt-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Mata Pelajaran</th>
                <th>Nilai</th>
                <th>Predikat</th>
                <th>Keterangan</th>
              </tr>
            </thead>

            <tbody>
              {filteredNilai.map((item, index) => {
                const predikat = getPredikat(item.nilai);

                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.mapel}</td>
                    <td>{item.nilai}</td>

                    <td>
                      <span className={`nt-badge nt-${predikat}`}>
                        {predikat}
                      </span>
                    </td>

                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="nt-empty">Belum ada data nilai untuk tingkat ini.</p>
      )}

      <Footer />
    </div>
  );
};

export default NilaiTingkatan;
