import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, BookOpen, Share2 } from "lucide-react";
import { modulEdukasi } from "./data";

const DetailEdukasi = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const data = modulEdukasi.find((item) => item.id === Number(id));

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-700">
            Materi Tidak Ditemukan
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-secondary hover:underline"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">
      {/* Navbar Simple */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:text-accent transition"
          >
            <ArrowLeft size={20} />{" "}
            <span className="hidden md:inline">Kembali</span>
          </button>
          <div className="font-bold text-lg tracking-wider flex items-center gap-2">
            <Shield className="text-accent" size={20} /> E-LEARNING
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition">
            <Share2 size={20} />
          </button>
        </div>
      </nav>

      {/* Header Materi */}
      <header className="bg-white shadow-sm pb-10 pt-8">
        <div className="container mx-auto px-6 md:px-24 lg:px-32">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Gambar Thumbnail */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg">
              <img
                src={data.image}
                alt={data.judul}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Info Judul */}
            <div className="flex-1">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase">
                  {data.kategori}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase">
                  {data.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                {data.judul}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.deskripsiSingkat}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Konten Materi (Looping dari Data) */}
      <main className="container mx-auto px-6 md:px-24 lg:px-32 mt-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 max-w-4xl mx-auto">
          {data.materi.map((bab, idx) => (
            <div
              key={idx}
              className="mb-10 last:mb-0 border-b border-slate-100 pb-8 last:border-0"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                  {idx + 1}
                </span>
                {bab.judul}
              </h2>

              <div className="pl-0 md:pl-11 text-slate-600 leading-relaxed space-y-3 text-lg">
                {bab.listTipe === "angka" && (
                  <ol className="list-decimal pl-5 space-y-2">
                    {bab.isi.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ol>
                )}

                {bab.listTipe === "bullet" && (
                  <ul className="list-disc pl-5 space-y-2">
                    {bab.isi.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {bab.listTipe === "none" &&
                  bab.isi.map((paragraf, i) => (
                    <p key={i} className="mb-2">
                      {paragraf}
                    </p>
                  ))}
              </div>
            </div>
          ))}

          {/* Pesan Penutup */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <BookOpen className="mx-auto text-secondary mb-2" size={32} />
            <h3 className="font-bold text-primary text-lg">
              Selesai Mempelajari Materi Ini?
            </h3>
            <p className="text-slate-600 mb-4">
              Jangan lupa amalkan ilmunya di lingkungan sekitarmu!
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-hover transition"
            >
              Kembali ke Menu Utama
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailEdukasi;
