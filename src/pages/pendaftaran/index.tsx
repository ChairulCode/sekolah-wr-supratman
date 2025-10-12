import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";
import "./pendaftaran.css";
import Navbar from "../../components/navbar";

const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    tanggalLahir: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nama: "",
        email: "",
        telepon: "",
        alamat: "",
        tanggalLahir: "",
      });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="pendaftaran-page">
        {/* Decorative Floating Shapes */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>

        <div className="form-wrapper">
          {/* Header */}
          <div className="form-header">
            <div className="icon-circle">
              <User className="header-icon" />
            </div>
            <h1 className="title">Form Pendaftaran</h1>
            <p className="subtitle">Lengkapi data diri Anda dengan benar</p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="success-message">
              <CheckCircle className="success-icon" />
              <p>Pendaftaran Berhasil!</p>
            </div>
          )}

          {/* Form */}
          <div className="form-container">
            <div className="form-header-line">
              <h2>Data Pribadi</h2>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Nama */}
              <div
                className={`input-group ${
                  focusedInput === "nama" ? "focused" : ""
                }`}
              >
                <label>Nama Lengkap</label>
                <div className="input-wrapper">
                  <User className="input-icon" />
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("nama")}
                    onBlur={() => setFocusedInput("")}
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
              </div>

              {/* Email & Telepon */}
              <div className="two-columns">
                <div
                  className={`input-group ${
                    focusedInput === "email" ? "focused" : ""
                  }`}
                >
                  <label>Email</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput("")}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div
                  className={`input-group ${
                    focusedInput === "telepon" ? "focused" : ""
                  }`}
                >
                  <label>Nomor Telepon</label>
                  <div className="input-wrapper">
                    <Phone className="input-icon" />
                    <input
                      type="tel"
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("telepon")}
                      onBlur={() => setFocusedInput("")}
                      placeholder="08xx xxxx xxxx"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Tanggal Lahir */}
              <div
                className={`input-group ${
                  focusedInput === "tanggalLahir" ? "focused" : ""
                }`}
              >
                <label>Tanggal Lahir</label>
                <div className="input-wrapper">
                  <Calendar className="input-icon" />
                  <input
                    type="date"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("tanggalLahir")}
                    onBlur={() => setFocusedInput("")}
                    required
                  />
                </div>
              </div>

              {/* Alamat */}
              <div
                className={`input-group ${
                  focusedInput === "alamat" ? "focused" : ""
                }`}
              >
                <label>Alamat Lengkap</label>
                <div className="input-wrapper">
                  <MapPin className="input-icon top" />
                  <textarea
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("alamat")}
                    onBlur={() => setFocusedInput("")}
                    placeholder="Masukkan alamat lengkap"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="submit-btn">
                <Send className="btn-icon" /> Daftar Sekarang
              </button>
            </form>
          </div>

          {/* Footer */}
          <p className="footer-note">
            Dengan mendaftar, Anda menyetujui syarat dan ketentuan yang berlaku
          </p>
        </div>
      </div>
    </>
  );
};

export default Pendaftaran;
