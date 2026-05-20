# Website Katalog Pameran Lukisan

Website statis yang menampilkan katalog digital pameran lukisan menggunakan data dari Hugging Face Datasets API.

## Fitur

- ✨ Galeri karya seni dengan tampilan grid yang modern
- 🔍 Pencarian karya berdasarkan ID, judul, seniman, atau tag
- 🏷️ Filter berdasarkan media (cat minyak/akrilik/pastel)
- 📊 Statistik pameran (total karya, seniman)
- 🖼️ Tampilan detail karya dalam modal
- 📱 Responsif (mobile-friendly)
- 🔄 Fallback ke data lokal jika API tidak tersedia

## Struktur File

```
website-katalog/
├── index.html      # Halaman utama
├── style.css       # Styling
├── script.js       # Logic dan API calls
└── README.md       # Dokumentasi ini
```

## Cara Menggunakan

### 1. Local Testing
Buka `index.html` langsung di browser, atau gunakan live server:

```bash
# Jika menggunakan VS Code, install Live Server extension
# Atau gunakan Python:
cd website-katalog
python -m http.server 8000
# Buka http://localhost:8000
```

### 2. Deploy ke Hugging Face Spaces
1. Buat Space baru di https://huggingface.co/new-space
2. Pilih SDK: **Static HTML**
3. Upload ketiga file (`index.html`, `style.css`, `script.js`)
4. Atau clone repo Space dan push file-file tersebut

### 3. Deploy ke GitHub Pages
1. Push folder `website-katalog` ke repo GitHub
2. Aktifkan GitHub Pages di settings
3. Website akan tersedia di `https://username.github.io/repo-name/website-katalog/`

## Konfigurasi

Edit di `script.js`:
```javascript
const DATASET_ID = 'l0r3ntz/pameran-lukisan';  // Ganti dengan dataset ID Anda
const BASE_URL = 'https://datasets-server.huggingface.co';
```

## API Endpoints yang Digunakan

- **GET /rows** - Mengambil daftar karya
  ```
  https://datasets-server.huggingface.co/rows?dataset=l0r3ntz/pameran-lukisan&config=default&split=train&offset=0&length=100
  ```

## Fallback Strategy

Jika API Hugging Face tidak tersedia (karena CORS atau masalah jaringan), website akan otomatis menggunakan data yang di-embed di `script.js`.

## Customization

### Mengganti Tampilan
Edit `style.css` untuk mengubah:
- Warna tema (cari: `#667eea` dan `#764ba2`)
- Layout grid (cari: `grid-template-columns`)
- Font dan spacing

### Menambah Fitur
Edit `script.js` untuk menambah:
- Pagination
- Sorting (berdasarkan tahun, seniman, dll)
- Lightbox untuk gambar
- Sharing ke social media

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Known Issues

1. **CORS Error**: HF Datasets Server mungkin memblokir request dari browser. Solusi: gunakan data fallback yang sudah di-embed.
2. **Image URLs**: Gambar masih menggunakan `example.com`. Ganti dengan URL gambar asli di dataset.

## Credits

- Data: [Hugging Face Datasets - l0r3ntz/pameran-lukisan](https://huggingface.co/datasets/l0r3ntz/pameran-lukisan)
- Icons: [Font Awesome](https://fontawesome.com/)
- Gradient: [UI Gradients](https://uigradients.com/)

## License

Project ini untuk keperluan pameran seni non-komersial.
