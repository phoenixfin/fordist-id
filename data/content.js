// Edit file ini untuk mengubah email, buku, dan kegiatan. Tidak perlu menyentuh index.html.
// Bagian buku sudah berisi data asli; email dan kegiatan masih CONTOH (placeholder) — ganti dengan data asli.
window.FORDIST = {
  email: "halo@fordist.id", // TODO: ganti dengan email kontak sebenarnya

  // cover: path gambar, mis. "assets/books/judul.webp" (opsional; kalau kosong dibuat sampul otomatis)
  // link: tautan beli/unduh/baca (opsional)
  books: [
    { title: "Sains Tidak Sepasti Itu", authors: "Editor: Aditya Firman Ihsan", year: "2024", desc: "Telaah atas What Is This Thing Called Science? karya Alan Chalmers, pengantar yang jernih tentang hakikat pengetahuan ilmiah.", cover: "assets/books/sains-tidak-sepasti-itu.webp", link: "https://salmanitb.com/informasi/pustaka/sains-tidak-sepasti-itu" },
    { title: "Sains Islam dalam Rangkaian Sejarah", authors: "ForDIST", year: "", desc: "Penjelasan rinci hubungan Islam dan sains sejak abad ke-7/8 hingga dinamikanya di era kontemporer, dengan merujuk sumber primer.", cover: "assets/books/sains-islam-dalam-rangkaian-sejarah.webp", link: "https://salmanitb.com/informasi/pustaka/sains-islam-dalam-rangkaian-sejarah" },
    { title: "Sains (Masih) Tidak Sepasti Itu", authors: "ForDIST", year: "2025", desc: "Berangkat dari Science and Its Fabrications karya Alan Chalmers, mencari jalan tengah antara sains yang dianggap universal mutlak dan pandangan bahwa sains tak punya metode.", cover: "assets/books/sains-masih-tidak-sepasti-itu.webp", link: "https://salmanitb.com/informasi/pustaka/sains-masih-tidak-sepasti-itu" }
  ],

  // type: "Internal" atau "Eksternal"; photo: path gambar (opsional); link: tautan rekaman/laporan (opsional)
  events: [
    { title: "Nama Kajian / Acara", date: "Januari 2025", type: "Eksternal", desc: "Deskripsi singkat: tema, pemateri, dan format (daring/luring).", photo: "", link: "" },
    { title: "Daras Internal: Tema", date: "Maret 2025", type: "Internal", desc: "Deskripsi singkat: tema dan hasil pembahasan.", photo: "", link: "" },
    { title: "Nama Kajian / Acara", date: "Juni 2025", type: "Eksternal", desc: "Deskripsi singkat: tema, pemateri, dan format (daring/luring).", photo: "", link: "" }
  ]
};
