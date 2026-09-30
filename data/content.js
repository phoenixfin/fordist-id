// Edit file ini untuk mengubah email, buku, dan kegiatan. Tidak perlu menyentuh index.html.
// Semua isi di bawah adalah CONTOH (placeholder) — ganti dengan data asli.
window.FORDIST = {
  email: "halo@fordist.id", // TODO: ganti dengan email kontak sebenarnya

  // cover: path gambar, mis. "assets/books/judul.webp" (opsional; kalau kosong dibuat sampul otomatis)
  // link: tautan beli/unduh/baca (opsional)
  books: [
    { title: "Judul Buku Pertama", authors: "Nama Penulis", year: "2024", desc: "Ringkasan singkat satu-dua kalimat tentang isi buku ini.", cover: "", link: "" },
    { title: "Judul Buku Kedua", authors: "Tim ForDIST", year: "2025", desc: "Ringkasan singkat satu-dua kalimat tentang isi buku ini.", cover: "", link: "" },
    { title: "Judul Buku Ketiga", authors: "Nama Penulis", year: "2025", desc: "Ringkasan singkat satu-dua kalimat tentang isi buku ini.", cover: "", link: "" }
  ],

  // type: "Internal" atau "Eksternal"; photo: path gambar (opsional); link: tautan rekaman/laporan (opsional)
  events: [
    { title: "Nama Kajian / Acara", date: "Januari 2025", type: "Eksternal", desc: "Deskripsi singkat: tema, pemateri, dan format (daring/luring).", photo: "", link: "" },
    { title: "Daras Internal: Tema", date: "Maret 2025", type: "Internal", desc: "Deskripsi singkat: tema dan hasil pembahasan.", photo: "", link: "" },
    { title: "Nama Kajian / Acara", date: "Juni 2025", type: "Eksternal", desc: "Deskripsi singkat: tema, pemateri, dan format (daring/luring).", photo: "", link: "" }
  ]
};
