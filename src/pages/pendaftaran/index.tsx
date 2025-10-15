import { useState } from "react";
import {
  User,
  BookOpen,
  Send,
  CheckCircle,
  Upload,
  GraduationCap,
  Users,
  Heart,
  // Mail,
  // Phone,
  // MapPin,
  // Calendar,
  // School,
  // Briefcase,
} from "lucide-react";
import Navbar from "../../components/navbar/index";
import "./pendaftaran.css";
import Footer from "../../components/footer/index";
import { Button } from "../../components/ui/button/button";
import { Input } from "../../components/ui/input/input";
import { Label } from "../../components/ui/label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select/select";
import { Textarea } from "../../components/ui/textarea/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../components/ui/radio-group/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card/card";
import { toast } from "sonner";

const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    // Data Siswa
    namaSiswa: "",
    kelas: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    belajarAgama: "",
    golonganDarah: "",
    anakKe: "",
    jumlahSaudara: "",
    status: "",
    alamatSiswa: "",
    telpSiswa: "",
    tinggalBersama: "",
    lulusanDariSekolah: "",
    nisn: "",

    // Ijazah (khusus SMP/SMA)
    nomorIjazah: "",
    tglIjazah: "",
    tahunIjazah: "",
    jumlahNilaiUS: "",
    pindahanDariSekolah: "",
    alamatSekolahAsal: "",

    // Data Ayah
    namaAyah: "",
    tempatLahirAyah: "",
    tanggalLahirAyah: "",
    agamaAyah: "",
    pendidikanAyah: "",
    alamatAyah: "",
    pekerjaanAyah: "",
    telpAyah: "",

    // Data Ibu
    namaIbu: "",
    tempatLahirIbu: "",
    tanggalLahirIbu: "",
    agamaIbu: "",
    pendidikanIbu: "",
    alamatIbu: "",
    pekerjaanIbu: "",
    telpIbu: "",
  });

  const [files, setFiles] = useState({
    akteLahir: null as File | null,
    kartuKeluarga: null as File | null,
    buktiTransfer: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFiles({ ...files, [field]: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    console.log("Files:", files);

    setSubmitted(true);
    toast.success("Pendaftaran berhasil dikirim!");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        namaSiswa: "",
        kelas: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        belajarAgama: "",
        golonganDarah: "",
        anakKe: "",
        jumlahSaudara: "",
        status: "",
        alamatSiswa: "",
        telpSiswa: "",
        tinggalBersama: "",
        lulusanDariSekolah: "",
        nisn: "",
        nomorIjazah: "",
        tglIjazah: "",
        tahunIjazah: "",
        jumlahNilaiUS: "",
        pindahanDariSekolah: "",
        alamatSekolahAsal: "",
        namaAyah: "",
        tempatLahirAyah: "",
        tanggalLahirAyah: "",
        agamaAyah: "",
        pendidikanAyah: "",
        alamatAyah: "",
        pekerjaanAyah: "",
        telpAyah: "",
        namaIbu: "",
        tempatLahirIbu: "",
        tanggalLahirIbu: "",
        agamaIbu: "",
        pendidikanIbu: "",
        alamatIbu: "",
        pekerjaanIbu: "",
        telpIbu: "",
      });
      setFiles({
        akteLahir: null,
        kartuKeluarga: null,
        buktiTransfer: null,
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Form Pendaftaran Online WR Supratman
            </h1>
            <p className="text-muted-foreground text-lg">
              Tahun Pelajaran 2025-2026
            </p>
            <p className="text-sm text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Khusus mendaftar di Perguruan WR Supratman 1.
            </p>
            <p className="text-sm text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
              Pendaftaran online dibuka untuk kelas PG, TK, SD kelas I, SMP
              kelas VII, dan SMA kelas X.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <Card className="mb-6 border-green-500 bg-green-50">
              <CardContent className="flex items-center gap-3 py-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-medium">
                  Pendaftaran Berhasil Dikirim!
                </p>
              </CardContent>
            </Card>
          )}

          {/* Important Information */}
          <Card className="mb-8 border-accent bg-accent/5 shadow-sm">
            <CardHeader>
              <CardTitle className="text-accent-foreground text-lg font-semibold text-center">
                Informasi Pendaftaran Siswa Baru
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              {/* 1. Pendaftaran Online */}
              <div>
                <p className="font-medium text-accent-foreground">
                  1. Pendaftaran Online
                </p>
                <p className="mt-1">
                  Pendaftaran Online Siswa Baru sudah dibuka khusus untuk kelas
                  <strong>
                    {" "}
                    PG, TK, SD kelas I, SMP kelas VII, dan SMA kelas X
                  </strong>
                  . Jika tidak memilih pendaftaran online, pendaftaran secara
                  manual / onsite dapat dilakukan di sekolah pada jam kerja.
                </p>
              </div>

              {/* 2. Pendaftaran Pindahan */}
              <div>
                <p className="font-medium text-accent-foreground">
                  2. Pendaftaran Siswa Pindahan / Mutasi
                </p>
                <p className="mt-1">
                  Untuk{" "}
                  <strong>
                    SD kelas II s/d VI, SMP kelas VIII dan IX, serta SMA kelas
                    XI dan XII
                  </strong>
                  , pendaftaran tidak dilakukan secara online, melainkan manual
                  / onsite di sekolah dengan membawa <strong>Rapor Asli</strong>{" "}
                  untuk diverifikasi terlebih dahulu.
                </p>
              </div>

              {/* 3. Persyaratan dan Dokumen */}
              <div>
                <p className="font-medium text-accent-foreground">
                  3. Persyaratan dan Dokumen Pendaftaran
                </p>

                <div className="ml-4 mt-2 space-y-2">
                  <div>
                    <p className="font-semibold">A. Calon siswa wajib:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Mematuhi peraturan dan tata tertib sekolah.</li>
                      <li>
                        Tidak merokok, minum minuman keras, dan terlibat dalam
                        narkoba.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold">
                      B. Dokumen yang harus diunggah (online):
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Upload Akte Lahir</li>
                      <li>Upload Kartu Keluarga</li>
                      <li>
                        Upload bukti transfer Uang Sekolah Bulan Juli 2025
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-2">
                  Uang sekolah bulan Juli 2025{" "}
                  <strong>masih menunggu keputusan Yayasan</strong>, namun
                  sementara membayar terlebih dahulu{" "}
                  <em>uang sekolah saat ini</em> (tertera di bawah). Setelah
                  sekolah dibuka, jika ada kenaikan, cukup membayar selisihnya.
                </p>
              </div>

              {/* 4. Pembayaran */}
              <div className="mt-4">
                <p className="font-medium text-accent-foreground">
                  4. Pembayaran
                </p>

                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>
                    <strong>Pembayaran semua tingkatan</strong> dilakukan ke
                    rekening sekolah:
                    <br />
                    <span className="text-accent-foreground font-semibold">
                      Bank BNI No. Rek. 0296142991 a.n. SMA WR Supratman 1
                    </span>
                  </li>
                  <li className="text-destructive font-medium">
                    Jika batal mendaftar, maka uang yang telah ditransfer
                    hangus.
                  </li>
                  <li>
                    Bukti transfer harus asli dan dinyatakan sah jika uang telah
                    masuk ke rekening sekolah.
                  </li>
                </ul>

                <div className="mt-3">
                  <p className="font-medium">Uang Sekolah Bulan Juli 2024:</p>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>TK: Rp. 625.000,-</li>
                    <li>
                      SD: Rp. 525.000,- (kelas 1 & 2), Rp. 565.000,- (kelas 3–6)
                    </li>
                    <li>SMP: Rp. 715.000,-</li>
                    <li>SMA: Rp. 745.000,-</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Data Siswa */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Data Siswa
                </CardTitle>
                <CardDescription>
                  Lengkapi informasi data siswa dengan benar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="namaSiswa">Nama Siswa *</Label>
                  <Input
                    id="namaSiswa"
                    value={formData.namaSiswa}
                    onChange={(e) => handleChange("namaSiswa", e.target.value)}
                    placeholder="Masukkan nama lengkap siswa"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="kelas">Kelas *</Label>
                  <Select
                    value={formData.kelas}
                    onValueChange={(value) => handleChange("kelas", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PG">PG</SelectItem>
                      <SelectItem value="TK A">TK A</SelectItem>
                      <SelectItem value="TK B">TK B</SelectItem>
                      <SelectItem value="SD Kelas I">SD Kelas I</SelectItem>
                      <SelectItem value="SMP Kelas VII">
                        SMP Kelas VII
                      </SelectItem>
                      <SelectItem value="SMA Kelas X">SMA Kelas X</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tempatLahir">Tempat Lahir *</Label>
                    <Input
                      id="tempatLahir"
                      value={formData.tempatLahir}
                      onChange={(e) =>
                        handleChange("tempatLahir", e.target.value)
                      }
                      placeholder="Kota kelahiran"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tanggalLahir">Tanggal Lahir *</Label>
                    <Input
                      id="tanggalLahir"
                      type="date"
                      value={formData.tanggalLahir}
                      onChange={(e) =>
                        handleChange("tanggalLahir", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Jenis Kelamin *</Label>
                  <RadioGroup
                    value={formData.jenisKelamin}
                    onValueChange={(value) =>
                      handleChange("jenisKelamin", value)
                    }
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="laki-laki" id="laki" />
                      <Label htmlFor="laki">Laki-laki</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="perempuan" id="perempuan" />
                      <Label htmlFor="perempuan">Perempuan</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="belajarAgama">Belajar Agama *</Label>
                    <Select
                      value={formData.belajarAgama}
                      onValueChange={(value) =>
                        handleChange("belajarAgama", value)
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih agama" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Islam">Islam</SelectItem>
                        <SelectItem value="Kristen">Kristen</SelectItem>
                        <SelectItem value="Katolik">Katolik</SelectItem>
                        <SelectItem value="Hindu">Hindu</SelectItem>
                        <SelectItem value="Buddha">Buddha</SelectItem>
                        <SelectItem value="Konghucu">Konghucu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="golonganDarah">Golongan Darah</Label>
                    <Select
                      value={formData.golonganDarah}
                      onValueChange={(value) =>
                        handleChange("golonganDarah", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih golongan darah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="O">O</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="AB">AB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="anakKe">Anak Ke *</Label>
                    <Input
                      id="anakKe"
                      type="number"
                      value={formData.anakKe}
                      onChange={(e) => handleChange("anakKe", e.target.value)}
                      placeholder="Contoh: 1"
                      min="1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="jumlahSaudara">Jumlah Saudara *</Label>
                    <Input
                      id="jumlahSaudara"
                      type="number"
                      value={formData.jumlahSaudara}
                      onChange={(e) =>
                        handleChange("jumlahSaudara", e.target.value)
                      }
                      placeholder="Contoh: 2"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Status *</Label>
                  <RadioGroup
                    value={formData.status}
                    onValueChange={(value) => handleChange("status", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anak kandung" id="kandung" />
                      <Label htmlFor="kandung">Anak Kandung</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anak tiri" id="tiri" />
                      <Label htmlFor="tiri">Anak Tiri</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anak angkat" id="angkat" />
                      <Label htmlFor="angkat">Anak Angkat</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="alamatSiswa">Alamat Siswa *</Label>
                  <Textarea
                    id="alamatSiswa"
                    value={formData.alamatSiswa}
                    onChange={(e) =>
                      handleChange("alamatSiswa", e.target.value)
                    }
                    placeholder="Masukkan alamat lengkap"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telpSiswa">Telepon/HP Siswa *</Label>
                  <Input
                    id="telpSiswa"
                    type="tel"
                    value={formData.telpSiswa}
                    onChange={(e) => handleChange("telpSiswa", e.target.value)}
                    placeholder="08xx xxxx xxxx"
                    required
                  />
                </div>

                <div>
                  <Label>Tinggal Bersama *</Label>
                  <RadioGroup
                    value={formData.tinggalBersama}
                    onValueChange={(value) =>
                      handleChange("tinggalBersama", value)
                    }
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Orang Tua" id="orangtua" />
                      <Label htmlFor="orangtua">Orang Tua</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Wali" id="wali" />
                      <Label htmlFor="wali">Wali</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Kost" id="kost" />
                      <Label htmlFor="kost">Kost</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="lulusanDariSekolah">
                    Lulusan Dari Sekolah
                  </Label>
                  <Input
                    id="lulusanDariSekolah"
                    value={formData.lulusanDariSekolah}
                    onChange={(e) =>
                      handleChange("lulusanDariSekolah", e.target.value)
                    }
                    placeholder="Nama sekolah asal"
                  />
                </div>

                <div>
                  <Label htmlFor="nisn">
                    Nomor Induk Siswa Nasional (NISN)
                  </Label>
                  <Input
                    id="nisn"
                    value={formData.nisn}
                    onChange={(e) => handleChange("nisn", e.target.value)}
                    placeholder="Masukkan NISN"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Ijazah (khusus SMP/SMA) */}
            {(formData.kelas === "SMP Kelas VII" ||
              formData.kelas === "SMA Kelas X") && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Data Ijazah
                  </CardTitle>
                  <CardDescription>
                    Khusus untuk pendaftar SMP dan SMA
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="nomorIjazah">Nomor Ijazah</Label>
                    <Input
                      id="nomorIjazah"
                      value={formData.nomorIjazah}
                      onChange={(e) =>
                        handleChange("nomorIjazah", e.target.value)
                      }
                      placeholder="Masukkan nomor ijazah"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tglIjazah">Tanggal Ijazah</Label>
                      <Input
                        id="tglIjazah"
                        type="date"
                        value={formData.tglIjazah}
                        onChange={(e) =>
                          handleChange("tglIjazah", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="tahunIjazah">Tahun Ijazah</Label>
                      <Input
                        id="tahunIjazah"
                        type="number"
                        value={formData.tahunIjazah}
                        onChange={(e) =>
                          handleChange("tahunIjazah", e.target.value)
                        }
                        placeholder="Contoh: 2024"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="jumlahNilaiUS">
                      Jumlah Nilai Ujian Sekolah
                    </Label>
                    <Input
                      id="jumlahNilaiUS"
                      type="number"
                      value={formData.jumlahNilaiUS}
                      onChange={(e) =>
                        handleChange("jumlahNilaiUS", e.target.value)
                      }
                      placeholder="Total nilai US"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <Label htmlFor="pindahanDariSekolah">
                      Pindahan Dari Sekolah
                    </Label>
                    <Input
                      id="pindahanDariSekolah"
                      value={formData.pindahanDariSekolah}
                      onChange={(e) =>
                        handleChange("pindahanDariSekolah", e.target.value)
                      }
                      placeholder="Jika pindahan, sebutkan nama sekolah"
                    />
                  </div>

                  <div>
                    <Label htmlFor="alamatSekolahAsal">
                      Alamat Sekolah Asal
                    </Label>
                    <Textarea
                      id="alamatSekolahAsal"
                      value={formData.alamatSekolahAsal}
                      onChange={(e) =>
                        handleChange("alamatSekolahAsal", e.target.value)
                      }
                      placeholder="Alamat lengkap sekolah asal"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Data Ayah */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Data Ayah
                </CardTitle>
                <CardDescription>
                  Lengkapi informasi data ayah kandung/wali
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="namaAyah">Nama Ayah *</Label>
                  <Input
                    id="namaAyah"
                    value={formData.namaAyah}
                    onChange={(e) => handleChange("namaAyah", e.target.value)}
                    placeholder="Nama lengkap ayah"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tempatLahirAyah">Tempat Lahir *</Label>
                    <Input
                      id="tempatLahirAyah"
                      value={formData.tempatLahirAyah}
                      onChange={(e) =>
                        handleChange("tempatLahirAyah", e.target.value)
                      }
                      placeholder="Kota kelahiran"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tanggalLahirAyah">Tanggal Lahir *</Label>
                    <Input
                      id="tanggalLahirAyah"
                      type="date"
                      value={formData.tanggalLahirAyah}
                      onChange={(e) =>
                        handleChange("tanggalLahirAyah", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="agamaAyah">Agama *</Label>
                  <Select
                    value={formData.agamaAyah}
                    onValueChange={(value) => handleChange("agamaAyah", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih agama" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Islam">Islam</SelectItem>
                      <SelectItem value="Kristen">Kristen</SelectItem>
                      <SelectItem value="Katolik">Katolik</SelectItem>
                      <SelectItem value="Hindu">Hindu</SelectItem>
                      <SelectItem value="Buddha">Buddha</SelectItem>
                      <SelectItem value="Konghucu">Konghucu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pendidikanAyah">Pendidikan Tertinggi *</Label>
                  <Select
                    value={formData.pendidikanAyah}
                    onValueChange={(value) =>
                      handleChange("pendidikanAyah", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih pendidikan tertinggi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SD">SD</SelectItem>
                      <SelectItem value="SMP">SMP</SelectItem>
                      <SelectItem value="SMA">SMA</SelectItem>
                      <SelectItem value="D3">D3</SelectItem>
                      <SelectItem value="S1">S1</SelectItem>
                      <SelectItem value="S2">S2</SelectItem>
                      <SelectItem value="S3">S3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="alamatAyah">Alamat *</Label>
                  <Textarea
                    id="alamatAyah"
                    value={formData.alamatAyah}
                    onChange={(e) => handleChange("alamatAyah", e.target.value)}
                    placeholder="Alamat lengkap"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="pekerjaanAyah">Pekerjaan *</Label>
                  <Input
                    id="pekerjaanAyah"
                    value={formData.pekerjaanAyah}
                    onChange={(e) =>
                      handleChange("pekerjaanAyah", e.target.value)
                    }
                    placeholder="Pekerjaan saat ini"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telpAyah">Telepon/HP *</Label>
                  <Input
                    id="telpAyah"
                    type="tel"
                    value={formData.telpAyah}
                    onChange={(e) => handleChange("telpAyah", e.target.value)}
                    placeholder="08xx xxxx xxxx"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Data Ibu */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Data Ibu
                </CardTitle>
                <CardDescription>
                  Lengkapi informasi data ibu kandung/wali
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="namaIbu">Nama Ibu *</Label>
                  <Input
                    id="namaIbu"
                    value={formData.namaIbu}
                    onChange={(e) => handleChange("namaIbu", e.target.value)}
                    placeholder="Nama lengkap ibu"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tempatLahirIbu">Tempat Lahir *</Label>
                    <Input
                      id="tempatLahirIbu"
                      value={formData.tempatLahirIbu}
                      onChange={(e) =>
                        handleChange("tempatLahirIbu", e.target.value)
                      }
                      placeholder="Kota kelahiran"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tanggalLahirIbu">Tanggal Lahir *</Label>
                    <Input
                      id="tanggalLahirIbu"
                      type="date"
                      value={formData.tanggalLahirIbu}
                      onChange={(e) =>
                        handleChange("tanggalLahirIbu", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="agamaIbu">Agama *</Label>
                  <Select
                    value={formData.agamaIbu}
                    onValueChange={(value) => handleChange("agamaIbu", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih agama" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Islam">Islam</SelectItem>
                      <SelectItem value="Kristen">Kristen</SelectItem>
                      <SelectItem value="Katolik">Katolik</SelectItem>
                      <SelectItem value="Hindu">Hindu</SelectItem>
                      <SelectItem value="Buddha">Buddha</SelectItem>
                      <SelectItem value="Konghucu">Konghucu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pendidikanIbu">Pendidikan Tertinggi *</Label>
                  <Select
                    value={formData.pendidikanIbu}
                    onValueChange={(value) =>
                      handleChange("pendidikanIbu", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih pendidikan tertinggi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SD">SD</SelectItem>
                      <SelectItem value="SMP">SMP</SelectItem>
                      <SelectItem value="SMA">SMA</SelectItem>
                      <SelectItem value="D3">D3</SelectItem>
                      <SelectItem value="S1">S1</SelectItem>
                      <SelectItem value="S2">S2</SelectItem>
                      <SelectItem value="S3">S3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="alamatIbu">Alamat *</Label>
                  <Textarea
                    id="alamatIbu"
                    value={formData.alamatIbu}
                    onChange={(e) => handleChange("alamatIbu", e.target.value)}
                    placeholder="Alamat lengkap"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="pekerjaanIbu">Pekerjaan *</Label>
                  <Input
                    id="pekerjaanIbu"
                    value={formData.pekerjaanIbu}
                    onChange={(e) =>
                      handleChange("pekerjaanIbu", e.target.value)
                    }
                    placeholder="Pekerjaan saat ini"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telpIbu">Telepon/HP *</Label>
                  <Input
                    id="telpIbu"
                    type="tel"
                    value={formData.telpIbu}
                    onChange={(e) => handleChange("telpIbu", e.target.value)}
                    placeholder="08xx xxxx xxxx"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Upload Dokumen */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Upload Dokumen
                </CardTitle>
                <CardDescription>
                  Upload dokumen persyaratan pendaftaran
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="akteLahir">Akte Lahir *</Label>
                  <Input
                    id="akteLahir"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileChange("akteLahir", e.target.files?.[0] || null)
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: PDF, JPG, PNG (Max 2MB)
                  </p>
                </div>

                <div>
                  <Label htmlFor="kartuKeluarga">Kartu Keluarga *</Label>
                  <Input
                    id="kartuKeluarga"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileChange(
                        "kartuKeluarga",
                        e.target.files?.[0] || null
                      )
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: PDF, JPG, PNG (Max 2MB)
                  </p>
                </div>

                <div>
                  <Label htmlFor="buktiTransfer">Bukti Transfer *</Label>
                  <Input
                    id="buktiTransfer"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileChange(
                        "buktiTransfer",
                        e.target.files?.[0] || null
                      )
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: PDF, JPG, PNG (Max 2MB)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pendaftaran
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Dengan mengirim formulir ini, Anda menyetujui kebijakan dan
                ketentuan Perguruan WR Supratman 1.
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pendaftaran;
