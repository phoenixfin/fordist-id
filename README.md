# ForDIST — fordist.id

Situs statis (HTML/CSS/JS), tanpa build step.

## Mengubah konten
- Email, buku, dan kegiatan: edit `data/content.js` (isi awalnya hanya contoh).
- Sampul buku / foto kegiatan: taruh di `assets/books/` atau `assets/events/`, lalu isi `cover` / `photo` di `data/content.js`. Gunakan `.webp`, lebar maksimal ~1200 px.

## Deploy ke Cloudflare Pages
1. Push folder ini ke repo GitHub/GitLab.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, pilih repo.
3. Build settings: **Framework preset: None**, **Build command: (kosong)**, **Build output directory: `/`**. Deploy.
4. Situs hidup di `https://<nama-proyek>.pages.dev`.

Alternatif tanpa Git: `npx wrangler pages deploy . --project-name fordist`.

## Menghubungkan fordist.id (DNS di IDCloudHost)
Apex domain (`fordist.id`) tidak bisa memakai CNAME biasa, jadi ada dua jalur:

**A. Pindahkan nameserver ke Cloudflare (disarankan)**
1. Cloudflare → **Add a site** → `fordist.id` (paket Free). Cloudflare memberi dua nameserver.
2. Di panel IDCloudHost, ganti nameserver domain ke dua nameserver tersebut.
3. Di proyek Pages → **Custom domains**, tambahkan `fordist.id` dan `www.fordist.id`. Record DNS dan SSL dibuat otomatis.
4. Kalau ada record lain (mis. MX untuk email) di IDCloudHost, salin dulu ke Cloudflare **sebelum** ganti nameserver.

**B. DNS tetap di IDCloudHost**
1. Di Pages → Custom domains, tambahkan `www.fordist.id`.
2. Di zona DNS IDCloudHost, buat `CNAME www → <nama-proyek>.pages.dev`.
3. Arahkan `fordist.id` ke `www.fordist.id` lewat fitur redirect domain IDCloudHost (jika tersedia). Cloudflare tidak bisa memverifikasi apex tanpa memegang nameserver-nya.
