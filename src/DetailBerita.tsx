import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Shield, Menu, X } from "lucide-react";
import { beritaTerbaru } from "./data"; // Import data yang tadi kita buat

const DetailBerita = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Cari berita berdasarkan ID
  const berita = beritaTerbaru.find((item) => item.id === Number(id));

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!berita) {
    return <div className="text-center py-20">Berita tidak ditemukan.</div>;
  }

  return (
    <div className="font-sans text-slate-800 bg-background min-h-screen">
      {/* --- NAVBAR --- */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg border-b border-slate-700">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-2 font-bold text-xl tracking-wider cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Shield className="text-accent w-8 h-8" />
            <span>
              DUTA <span className="text-secondary">KAMTIBMAS</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6 font-medium text-sm items-center">
            <button
              onClick={() => navigate("/")}
              className="hover:text-accent transition"
            >
              KEMBALI KE BERANDA
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
          <div className="md:hidden bg-primary-light border-t border-slate-700 p-4">
            <button
              onClick={() => navigate("/")}
              className="text-left text-white hover:text-accent py-2 block w-full"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </nav>

      {/* --- KONTEN DETAIL BERITA --- */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-secondary mb-6 transition"
        >
          <ArrowLeft size={20} /> Kembali
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-8">
          {/* Header Berita */}
          <div className="mb-6">
            <span className="bg-blue-100 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {berita.kategori}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4 leading-tight">
              {berita.judul}
            </h1>

            <div className="flex items-center gap-6 text-slate-500 text-sm border-b border-slate-100 pb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{berita.tanggal}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>
                  Oleh:{" "}
                  <span className="font-semibold text-slate-700">
                    {berita.oleh}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Gambar Utama */}
          <div className="w-full h-[300px] md:h-[500px] mb-8 rounded-xl overflow-hidden">
            <img
              src={berita.image}
              alt={berita.judul}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Isi Berita */}
          <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
            <p className="whitespace-pre-line text-justify hyphens-auto">
              {berita.isi}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Simple */}
      <footer className="bg-primary text-slate-400 py-8 text-center text-sm mt-12">
        &copy; {new Date().getFullYear()} Duta Kamtibmas Langsa.
      </footer>
    </div>
  );
};

export default DetailBerita;
