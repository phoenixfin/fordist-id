# ForDIST — fordist.id

Situs statis (HTML/CSS/JS), tanpa build step. Di-host di GitHub Pages.

## Mengubah konten
- Email, buku, dan kegiatan: edit `data/content.js` (isi awalnya hanya contoh).
- Sampul buku / foto kegiatan: taruh di `assets/books/` atau `assets/events/`, lalu isi `cover` / `photo` di `data/content.js`. Gunakan `.webp`, lebar maksimal ~1200 px.
- Setiap `git push` ke `main` otomatis menerbitkan ulang situs.

## Deploy ke GitHub Pages
1. Buat repo di GitHub, lalu push:
   `git remote add origin https://github.com/<akun>/<repo>.git` dan `git push -u origin main`.
2. Repo → **Settings** → **Pages** → **Build and deployment**: Source **Deploy from a branch**, Branch **main**, folder **/ (root)**, Save.
3. Berkas `CNAME` (isi `fordist.id`) sudah ada di repo, jadi custom domain terisi otomatis. Berkas `.nojekyll` mematikan pemrosesan Jekyll.

## DNS di IDCloudHost
Buat record berikut di zona DNS `fordist.id`:

| Tipe | Nama | Nilai |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<akun>.github.io` |

Hapus record A/AAAA/CNAME lama untuk `@` dan `www` yang bentrok. Record lain (mis. MX untuk email) biarkan.

Setelah DNS menyebar (menit sampai beberapa jam), kembali ke **Settings → Pages**, tunggu pengecekan DNS lolos, lalu centang **Enforce HTTPS**. Sertifikat dibuat otomatis.

Nilai IP di atas bisa berubah; cek daftar terbaru di dokumentasi GitHub Pages ("Managing a custom domain for your GitHub Pages site") sebelum mengatur DNS.
