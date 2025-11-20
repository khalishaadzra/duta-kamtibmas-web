import { beritaTerbaru } from "./data";
import { useNavigate } from "react-router-dom"; 
import React, { useState } from "react";
import {
  Shield,
  BookOpen,
  Users,
  Target,
  Menu,
  X,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Calendar,
  User,
  Newspaper,
  Instagram,
} from "lucide-react";

// --- 1. DEFINISI TYPE DATA (INTERFACES) ---

interface ModulData {
  id: number; // Tambah ini
  judul: string;
  deskripsi: string;
  level: string;
  icon: React.ReactNode;
}

interface NewsData {
  id: number;
  judul: string;
  tanggal: string;
  kategori: string;
  image: string;
}

interface TeamMember {
  nama: string;
  role: string;
  deskripsi: string;
  image: string;
  instagram: string;
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  // --- 2. DATA DUMMY ---

  const modulPembelajaran: ModulData[] = [
    {
      id: 1, // ID 1 = Narkoba
      judul: "Say No to Drugs! Jauhi Narkotika",
      deskripsi: "Panduan lengkap mengenal bahaya narkotika.",
      level: "Semua Level",
      icon: <Shield className="w-10 h-10 text-white" />,
    },
    {
      id: 2, // ID 2 = Disiplin
      judul: "Mengapa Harus Disiplin Waktu?",
      deskripsi: "Strategi manajemen waktu untuk pelajar.",
      level: "Pemula",
      icon: <Users className="w-10 h-10 text-white" />,
    },
    {
      id: 3, // ID 3 = Indisipliner
      judul: "INDISIPLINER: Patuhi Aturan",
      deskripsi: "Membangun kesadaran hukum di sekolah.",
      level: "Menengah",
      icon: <AlertTriangle className="w-10 h-10 text-white" />,
    },
  ];

  const beritaTerbaru: NewsData[] = [
    {
      id: 1,
      judul: "Duta kamtibmas Kota Langsa 2025",
      tanggal: "17 November 2025",
      kategori: "Kegiatan",
      image: "/duta.jpg",
    },
    {
      id: 2,
      judul: "Seleksi Duta Kamtibmas SMA/SMK Se-kota Langsa.",
      tanggal: "16 November 2025",
      kategori: "Edukasi",
      image: "/berita3.jpg",
    },
    {
      id: 3,
      judul: "Pelayanan SIM Keliling Polri",
      tanggal: "26 September 2025",
      kategori: "Berita",
      image: "/berita2.jpg",
    },
    {
      id: 4,
      judul:
        "Sosialisasi dan Edukasi : Bersama Kita Cegah Kenakalan Remaja & Bangun Generasi Emas",
      tanggal: "17 September 2025",
      kategori: "Kegiatan",
      image: "sosialisasi.webp",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      nama: "Sri Desriawati Ningsih",
      role: "Guru Pembimbing",
      deskripsi: "Guru Pembimbing SMA Negeri 3 Langsa",
      image: "/guru.png",
      instagram:
        "https://www.instagram.com/official_smantiglangsa?igsh=MTdxNWVkbDlqOTQxNw==",
    },
    {
      nama: "Muhammad Khairan Arif",
      role: "Duta Kamtibmas Langsa Putra 2025",
      deskripsi: "Siswa SMA Negeri 3 Langsa",
      image: "/khairan.jpg",
      instagram: "https://www.instagram.com/m.khairanarf?igsh=dGU5d2ZtejVyazR2",
    },
    {
      nama: "Nurainy Latifah",
      role: "Duta Kamtibmas Langsa Putri 2025",
      deskripsi: "Siswi SMA Negeri 3 Langsa",
      image: "/nurainy.jpg",
      instagram: "https://www.instagram.com/aiiinyyyh?igsh=d2plcDcyam9vZm84",
    },
  ];

  // --- 3. HELPER FUNCTION ---

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Tinggi navbar agar tidak tertutup
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-background min-h-screen">
      {/* --- NAVBAR --- */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg border-b border-slate-700">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 font-bold text-xl tracking-wider cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Shield className="text-accent w-8 h-8" />
            <span>
              DUTA <span className="text-secondary">KAMTIBMAS LANGSA</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium text-sm items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-accent transition"
            >
              BERANDA
            </button>
            <button
              onClick={() => scrollToSection("visi")}
              className="hover:text-accent transition"
            >
              VISI
            </button>
            <button
              onClick={() => scrollToSection("kursus")}
              className="hover:text-accent transition"
            >
              EDUKASI
            </button>
            <button
              onClick={() => scrollToSection("berita")}
              className="hover:text-accent transition"
            >
              BERITA
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-accent transition"
            >
              TIM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-light border-t border-slate-700 p-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left hover:text-accent py-2"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("visi")}
              className="text-left hover:text-accent py-2"
            >
              Visi
            </button>
            <button
              onClick={() => scrollToSection("kursus")}
              className="text-left hover:text-accent py-2"
            >
              Edukasi
            </button>
            <button
              onClick={() => scrollToSection("berita")}
              className="text-left hover:text-accent py-2"
            >
              Berita
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left hover:text-accent py-2"
            >
              Tim
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative bg-primary pt-16 pb-24 overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-white z-10 text-center md:text-left">
            <div className="inline-block px-3 py-1 border border-accent rounded-full text-accent text-xs font-bold mb-4 tracking-wide uppercase">
              Program Kesadaran Masyarakat
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bersama Wujudkan Langsa{" "}
              <span className="text-secondary">Aman & Tertib</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Platform resmi Duta Kamtibmas Kota Langsa untuk edukasi,
              informasi, dan kolaborasi menjaga keamanan lingkungan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("kursus")}
                className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-lg font-bold text-center transition shadow-lg shadow-blue-900/50"
              >
                Mulai Belajar
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="border border-slate-500 hover:border-white text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold text-center transition"
              >
                Kenalan dengan Kami
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative z-10 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-full opacity-30 blur-2xl animate-pulse"></div>
              <img
                src="/heroo.png"
                alt="Ilustrasi Keamanan"
                className="relative rounded-2xl object-cover h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- VISI & MISI --- */}
      <section id="visi" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Visi & Misi
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BAGIAN VISI */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visi Kami</h3>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                "Mewujudkan generasi muda yang cerdas, berkarakter, dan taat
                hukum melalui program{" "}
                <span className="font-semibold text-secondary">
                  Education For Teenagers (EFT)
                </span>{" "}
                demi terciptanya masa depan yang tertib dan aman."
              </p>
            </div>

            {/* BAGIAN MISI */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent rounded-lg text-white">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Misi Kami</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                {/* Poin 1: Program EFT */}
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-secondary shrink-0 mt-1"
                    size={18}
                  />
                  <span>
                    Mengedukasi pelajar lewat program <strong>EFT</strong> untuk
                    membangun kesadaran hukum sejak dini.
                  </span>
                </li>
                {/* Poin 2: Website & Materi (Narkoba, Bullying, IT, Lalin) */}
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-secondary shrink-0 mt-1"
                    size={18}
                  />
                  <span>
                    Menyediakan akses digital tentang bahaya{" "}
                    <strong>narkoba, bullying, kejahatan siber,</strong> dan{" "}
                    <strong>tertib berlalu lintas</strong>.
                  </span>
                </li>
                {/* Poin 3: Konten Kreatif */}
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-secondary shrink-0 mt-1"
                    size={18}
                  />
                  <span>
                    Menghadirkan konten kreatif dan poster digital yang menarik
                    di media sosial.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODUL EDUKASI --- */}
      <section id="kursus" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col mb-10 gap-4">
            <div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Edukasi Digital
              </span>
              <h2 className="text-3xl font-bold text-primary mt-2">
                Modul Pembelajaran
              </h2>
            </div>
            <button className="self-end text-secondary font-semibold flex items-center hover:gap-3 transition-all group">
              Lihat Semua Modul{" "}
              <ChevronRight className="group-hover:text-accent" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modulPembelajaran.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-200 flex flex-col"
              >
                <div className="h-32 bg-primary flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
                  <div className="relative z-10">{item.icon}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-secondary text-xs font-bold rounded">
                      {item.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.judul}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                    {item.deskripsi}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => navigate(`/edukasi/${item.id}`)} 
                      className="w-full py-2 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition"
                    >
                      Pelajari Materi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: BERITA --- */}
      <section id="berita" className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header Section Berita */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mb-2">
                <Newspaper size={16} />
                <span>Kabar Terkini</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">
                Berita & Kegiatan
              </h2>
              <p className="text-slate-500 mt-2">
                Seputar berita terkini dan kegiatan Duta Kamtibmas Kota Langsa.
              </p>
            </div>
            <button className="text-secondary font-semibold flex items-center hover:gap-2 transition-all">
              See All <ChevronRight size={20} />
            </button>
          </div>

          {/* Container Berita */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {beritaTerbaru.map((berita) => (
              <div
                key={berita.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[350px] bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300"
              >
                {/* Image Berita */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={berita.image}
                    alt={berita.judul}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {berita.kategori}
                  </div>
                </div>

                {/* Content Berita */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                    <Calendar size={14} />
                    <span>{berita.tanggal}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 leading-snug hover:text-secondary transition cursor-pointer">
                    {berita.judul}
                  </h3>
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => navigate(`/berita/${berita.id}`)}
                      className="text-sm font-semibold text-secondary flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Baca Selengkapnya <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: OUR TEAM --- */}
      <section
        id="team"
        className="py-20 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Perkenalan
            </span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-4">
              Tim Kami
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
            <p className="mt-4 text-slate-600">
              Mengenal lebih dekat Pembimbing dan Duta Kamtibmas Kota Langsa
              Tahun 2025.
            </p>
          </div>

          {/* Grid Team */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Mapping Data Team */}
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100 text-center flex flex-col items-center ${
                  idx === 0
                    ? "md:-mt-1 border-t-2 relative z-10 order-last md:order-2"
                    : "md:order-1 md:mt-0"
                }`}
              >
                {/* Foto Profile */}
                <div className="w-32 h-32 mb-6 relative">
                  <div className="absolute inset-0 bg-secondary/10 rounded-full animate-pulse"></div>
                  <img
                    src={member.image}
                    alt={member.nama}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                  {/* Badge Icon */}
                  <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-2 border-white z-20">
                    {idx === 0 ? <Shield size={16} /> : <User size={16} />}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-primary">
                  {member.nama}
                </h3>
                <span className="text-accent font-semibold text-sm mb-3 block">
                  {member.role}
                </span>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {member.deskripsi}
                </p>
                <div className="mt-auto flex gap-3 justify-center">
                  {/* Ubah <button> jadi <a> */}
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-full transition flex items-center justify-center"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-primary text-slate-400 py-12 border-t-4 border-accent">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl text-white mb-4">
                <Shield className="text-accent w-8 h-8" />
                <span>DUTA KAMTIBMAS LANGSA</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Sinergi masyarakat dan kepolisian untuk mewujudkan Kota Langsa
                yang aman, damai, dan tertib hukum.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                Navigasi
              </h4>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left hover:text-accent transition"
                >
                  Beranda
                </button>
                <button
                  onClick={() => scrollToSection("kursus")}
                  className="text-left hover:text-accent transition"
                >
                  Edukasi
                </button>
                <button
                  onClick={() => scrollToSection("berita")}
                  className="text-left hover:text-accent transition"
                >
                  Berita
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-left hover:text-accent transition"
                >
                  Tim
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                Kontak
              </h4>
              <ul className="space-y-2 text-sm">
                <li>dutakamtibmaslangsa25@gmail.com</li>
                <li>0823 6198 5495 (khairan), 0812 7194 2427 (aini)</li>
                <li>
                  Jl. Cut Nyak Dhien No.27, Gampong Jawa, Kec. Langsa Kota, Kota
                  Langsa
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Duta Kamtibmas Langsa. Seluruh Hak
            Dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
