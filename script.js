// Configuration
const DATASET_ID = 'l0r3ntz/pameran-lukisan';
const BASE_URL = 'https://datasets-server.huggingface.co';

// Embedded data with artist photos (41 artworks)
const EMBEDDED_DATA = [
    {id: "PAM-001", title: "Permandani Hijau", artist: "Daffa Utama Saragih", year: 2023, medium: "cat minyak", dimensions: "100 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, perkotaan", description: "Lukisan pemandangan alam dengan dominasi warna hijau yang menenangkan", image_url: ""},
    {id: "PAM-002", title: "Senja di Pelabuhan", artist: "Siti Nurhaliza", year: 2022, medium: "akrilik", dimensions: "80 × 60 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "pemandangan, laut, sore", description: "Pemandangan pelabuhan saat matahari terbenam dengan warna jingga yang hangat", image_url: ""},
    {id: "PAM-003", title: "Abstract Thoughts", artist: "Budi Santoso", year: 2023, medium: "cat minyak", dimensions: "120 × 90 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, modern", description: "Karya abstrak dengan permainan warna biru dan merah yang kontras", image_url: ""},
    {id: "PAM-004", title: "Wajah Ibu", artist: "Ratna Sarumpaet", year: 2021, medium: "pastel", dimensions: "50 × 70 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, keluarga", description: "Portrait ibu dengan ekspresi penuh kasih sayang", image_url: ""},
    {id: "PAM-005", title: "Jalan Menuju Surga", artist: "Ahmad Dhani", year: 2023, medium: "akrilik", dimensions: "90 × 110 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "religi, abstrak", description: "Karya dengan nuansa spiritual yang menggambarkan perjalanan hidup", image_url: ""},
    {id: "PAM-006", title: "Bunga di Musim Hujan", artist: "Dewi Persik", year: 2022, medium: "cat minyak", dimensions: "60 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, bunga", description: "Lukisan bunga-bunga yang masih segar di tengah hujan", image_url: ""},
    {id: "PAM-007", title: "Kota yang Terlupakan", artist: "Joko Anwar", year: 2021, medium: "pastel", dimensions: "100 × 70 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "perkotaan, abstrak", description: "Pemandangan kota tua yang sunyi dengan nuansa kelabu", image_url: ""},
    {id: "PAM-008", title: "Anak Desa", artist: "Novi Andriani", year: 2023, medium: "akrilik", dimensions: "80 × 100 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, portrait", description: "Potret anak desa dengan pakaian tradisional", image_url: ""},
    {id: "PAM-009", title: "Geometri Ruang", artist: "Eko Nugroho", year: 2022, medium: "cat minyak", dimensions: "150 × 120 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, modern", description: "Permainan bentuk geometris dengan warna-warna cerah", image_url: ""},
    {id: "PAM-010", title: "Sunset at Dawn", artist: "Rika Rakatama", year: 2023, medium: "akrilik", dimensions: "70 × 90 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "pemandangan, sore", description: "Matahari terbit dengan gradasi warna yang memukau", image_url: ""},
    {id: "PAM-011", title: "The Last Supper", artist: "Rony Parulian", year: 2022, medium: "cat minyak", dimensions: "200 × 150 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "religi, klasik", description: "Interpretasi modern dari perjamuan terakhir dengan gaya unik", image_url: ""},
    {id: "PAM-012", title: "Di Bawah Pohon Bambu", artist: "Sri Wahyuni", year: 2023, medium: "akrilik", dimensions: "90 × 70 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, tradisional", description: "Suasana tenang di bawah rindangnya pohon bambu", image_url: ""},
    {id: "PAM-013", title: "Wajah Wanita Jawa", artist: "Dian Sastrowardoyo", year: 2021, medium: "pastel", dimensions: "60 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, tradisional", description: "Portrait wanita Jawa dengan busana tradisional yang elegan", image_url: ""},
    {id: "PAM-014", title: "Geometric Dreams", artist: "Flickr Studio", year: 2023, medium: "cat minyak", dimensions: "130 × 100 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, modern", description: "Eksplorasi bentuk geometris dalam ruang mimpi", image_url: ""},
    {id: "PAM-015", title: "Pasar Malam", artist: "Bayu Skak", year: 2022, medium: "akrilik", dimensions: "100 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "perkotaan, budaya", description: "Keramaian pasar malam dengan lampu-lampu neon yang warna-warni", image_url: ""},
    {id: "PAM-016", title: "The Thinker 2.0", artist: "Gibran Rakabuming", year: 2023, medium: "cat minyak", dimensions: "110 × 90 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, filosofi", description: "Interpretasi modern dari patung pemikir dengan sentuhan abstrak", image_url: ""},
    {id: "PAM-017", title: "Empat Musim di Desa", artist: "Kunto Aji", year: 2022, medium: "pastel", dimensions: "80 × 120 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, musim", description: "Perubahan musim yang ditangkap dalam satu kanvas panoramik", image_url: ""},
    {id: "PAM-018", title: "Burung Merpati", artist: "Nunung", year: 2021, medium: "akrilik", dimensions: "50 × 50 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, hewan", description: "Burung merpati yang sedang terbang dengan latar langit biru", image_url: ""},
    {id: "PAM-019", title: "Metropolis 2050", artist: "Taufik Hidayat", year: 2023, medium: "cat minyak", dimensions: "140 × 110 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "perkotaan, futuristik", description: "Visualisasi kota metropolitan di masa depan yang megah", image_url: ""},
    {id: "PAM-020", title: "Wajah Sang Guru", artist: "Butet Kertaradjasa", year: 2022, medium: "pastel", dimensions: "70 × 90 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, tokoh", description: "Portrait seorang guru dengan ekspresi bijaksana", image_url: ""},
    {id: "PAM-021", title: "Bunga Teratai", artist: "Joko Widodo", year: 2023, medium: "akrilik", dimensions: "80 × 60 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, bunga", description: "Keindahan bunga teratai yang mekar di atas permukaan air", image_url: ""},
    {id: "PAM-022", title: "Chaos Theory", artist: "Eminem Indo", year: 2023, medium: "cat minyak", dimensions: "150 × 130 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, modern", description: "Kekacauan yang terorganisir dalam permainan warna dan bentuk", image_url: ""},
    {id: "PAM-023", title: "Di Pinggir Sungai", artist: "Yogyakarta Art", year: 2022, medium: "akrilik", dimensions: "90 × 70 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "pemandangan, natura", description: "Ketengangan sungai yang jernih dikelilingi hutan hijau", image_url: ""},
    {id: "PAM-024", title: "The Dancer", artist: "Najwa Shihab", year: 2021, medium: "pastel", dimensions: "100 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, seni pertunjukan", description: "Gerak tari yang ditangkap dalam keindahan warna pastel", image_url: ""},
    {id: "PAM-025", title: "Kebakaran Kota", artist: "Anies Baswedan", year: 2023, medium: "cat minyak", dimensions: "120 × 100 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "perkotaan, dramatis", description: "Kota yang dilanda kebakaran dengan langit merah menyala", image_url: ""},
    {id: "PAM-026", title: "Still Life with Fruits", artist: "Rina Nose", year: 2022, medium: "akrilik", dimensions: "60 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "still life, natura", description: "Susunan buah-buahan segar dengan pencahayaan dramatis", image_url: ""},
    {id: "PAM-027", title: "Wajah Petani", artist: "Mbah Surip", year: 2021, medium: "pastel", dimensions: "70 × 90 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, kehidupan nyata", description: "Wajah petani dengan keriput yang menceritakan perjuangan hidup", image_url: ""},
    {id: "PAM-028", title: "Infinity Loop", artist: "Algoritma Team", year: 2023, medium: "cat minyak", dimensions: "130 × 130 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, teknologi", description: "Representasi tak terbatas dalam bentuk loop digital", image_url: ""},
    {id: "PAM-029", title: "Pantai Kuta di Pagi Hari", artist: "Komang Adnyani", year: 2022, medium: "akrilik", dimensions: "100 × 70 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "pemandangan, pantai", description: "Pantai Kuta yang sepi di pagi hari dengan ombak tenang", image_url: ""},
    {id: "PAM-030", title: "The Family", artist: "Deddy Corbuzier", year: 2023, medium: "pastel", dimensions: "90 × 110 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "keluarga, portrait", description: "Potret keluarga yang hangat dalam nuansa warna lembut", image_url: ""},
    {id: "PAM-031", title: "Tembok Berlin 2", artist: "Triadis Marganti", year: 2022, medium: "cat minyak", dimensions: "150 × 120 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "sejarah, abstrak", description: "Refleksi tentang dinding pemisah dan persatuan kembali", image_url: ""},
    {id: "PAM-032", title: "Bunga Matahari", artist: "Ria Ricis", year: 2023, medium: "akrilik", dimensions: "80 × 100 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, bunga", description: "Bunga matahari yang bermekaran menghadap matahari", image_url: ""},
    {id: "PAM-033", title: "Wajah Pemuda", artist: "Ariel Noah", year: 2021, medium: "pastel", dimensions: "60 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, anak muda", description: "Portrait pemuda dengan tatapan penuh harapan", image_url: ""},
    {id: "PAM-034", title: "Urban Jungle", artist: "Metropolitan Art", year: 2023, medium: "cat minyak", dimensions: "140 × 100 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "perkotaan, natura", description: "Pertemuan antara hutan kota dan gedung-gedung pencakar langit", image_url: ""},
    {id: "PAM-035", title: "Sunset di Bali", artist: "Kadek Devy", year: 2022, medium: "akrilik", dimensions: "90 × 70 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "pemandangan, sore", description: "Matahari terbenam di pantai Bali dengan awan berwarna jingga", image_url: ""},
    {id: "PAM-036", title: "The Lovers", artist: "Verrell Bramasta", year: 2023, medium: "pastel", dimensions: "80 × 100 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "romansa, portrait", description: "Dua insan yang saling memandang dengan penuh kasih", image_url: ""},
    {id: "PAM-037", title: "Matrix Reloaded", artist: "IAIN Nazar", year: 2022, medium: "cat minyak", dimensions: "130 × 110 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "abstrak, teknologi", description: "Dunia digital yang terstruktur dalam bentuk matriks", image_url: ""},
    {id: "PAM-038", title: "Sawah yang Menguning", artist: "Nyoman Nuarta", year: 2021, medium: "akrilik", dimensions: "120 × 80 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "natura, pedesaan", description: "Pesawahan yang menguning saat musim panen tiba", image_url: ""},
    {id: "PAM-039", title: "Wajah Kakek", artist: "Nasrul Ramdan", year: 2022, medium: "pastel", dimensions: "70 × 90 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "portrait, keluarga", description: "Wajah kakek dengan senyum yang menyimpan seribu cerita", image_url: ""},
    {id: "PAM-040", title: "Neon City", artist: "Night Walker", year: 2023, medium: "cat minyak", dimensions: "150 × 120 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "perkotaan, malam", description: "Kota yang bersinar dengan lampu neon di kegelapan malam", image_url: ""},
    {id: "PAM-041", title: "Termangu", artist: "Muhammad Yusran", year: 2026, medium: "cat minyak", dimensions: "120 x 120 cm", artist_photo_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg", tags: "digital, manual", description: "ini contoh karya yang sudah ditambahkan", image_url: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"}
];

let allArtworks = [];

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Fetch data
async function fetchArtworks() {
    try {
        const response = await fetch(`${BASE_URL}/rows?dataset=${DATASET_ID}&config=default&split=train&offset=0&length=100`);
        const data = await response.json();
        if (data.rows) {
            allArtworks = data.rows.map(row => {
                if (!row.row.artist_photo_url) {
                    row.row.artist_photo_url = "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg";
                }
                return row.row;
            });
            return allArtworks;
        }
    } catch (e) { console.warn('API fetch failed, using embedded data.'); }
    allArtworks = EMBEDDED_DATA;
    return allArtworks;
}

// Render
function renderArtworks(artworks) {
    const grid = document.getElementById('artworkGrid');
    const empty = document.getElementById('emptyState');
    grid.innerHTML = '';
    if (!artworks.length) {
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';
    artworks.forEach((art, i) => {
        const card = document.createElement('div');
        card.className = 'artwork-card';
        card.style.animationDelay = `${i * 0.05}s`;
        card.onclick = () => showModal(art);
        const imgHtml = art.image_url
            ? `<img src="${art.image_url}" alt="${art.title}" loading="lazy">`
            : `<div class="card-image-placeholder">${art.title.charAt(0)}</div>`;
        
        const artistPhotoHtml = art.artist_photo_url
            ? `<img src="${art.artist_photo_url}" alt="${art.artist}" class="artist-photo-small" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
            : '';
        const artistPlaceholderHtml = `<div class="artist-photo-placeholder-small" style="display: ${art.artist_photo_url ? 'none' : 'flex'}">${art.artist.charAt(0).toUpperCase()}</div>`;
        
        const tags = art.tags ? art.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('') : '';
        card.innerHTML = `
            <div class="card-image">${imgHtml}</div>
            <div class="card-content">
                <h3>${art.title}</h3>
                <div class="card-artist">
                    ${artistPhotoHtml}
                    ${artistPlaceholderHtml}
                    <span>${art.artist}</span>
                </div>
                <div class="card-meta">
                    <span><i class="fas fa-calendar"></i> ${art.year}</span>
                    <span><i class="fas fa-palette"></i> ${art.medium}</span>
                </div>
                <div class="card-tags">${tags}</div>
            </div>`;
        grid.appendChild(card);
    });
}

function filterArtworks() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const m = document.getElementById('mediumFilter').value;
    const filtered = allArtworks.filter(a =>
        (!q || a.id.toLowerCase().includes(q) || a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q) || (a.tags && a.tags.toLowerCase().includes(q))) &&
        (!m || a.medium === m)
    );
    renderArtworks(filtered);
    updateStats(filtered);
}

function updateStats(artworks = allArtworks) {
    document.getElementById('heroTotal').textContent = artworks.length;
    document.getElementById('heroArtists').textContent = [...new Set(artworks.map(a => a.artist))].length;
    document.getElementById('aboutTotal').textContent = artworks.length;
    document.getElementById('aboutArtists').textContent = [...new Set(artworks.map(a => a.artist))].length;
}

function showModal(art) {
    const modal = document.getElementById('artworkModal');
    const body = document.getElementById('modalBody');
    const imgHtml = art.image_url ? `<img src="${art.image_url}" alt="${art.title}" class="modal-image">` : '';
    
    const artistPhotoHtml = art.artist_photo_url
        ? `<img src="${art.artist_photo_url}" alt="${art.artist}" class="modal-artist-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
        : '';
    const artistPlaceholderHtml = `<div class="modal-artist-photo-placeholder" style="display: ${art.artist_photo_url ? 'none' : 'flex'}">${art.artist.charAt(0).toUpperCase()}</div>`;
    
    const tags = art.tags ? art.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join(' ') : '';
    body.innerHTML = `
        ${imgHtml}
        <div class="modal-details">
            <h2>${art.title}</h2>
            <div class="detail-grid">
                <div><div class="detail-label">ID</div><div class="detail-value">${art.id}</div></div>
                <div><div class="detail-label">Artist</div><div class="detail-value">${artistPhotoHtml}${artistPlaceholderHtml}<span>${art.artist}</span></div></div>
                <div><div class="detail-label">Year</div><div class="detail-value">${art.year}</div></div>
                <div><div class="detail-label">Medium</div><div class="detail-value">${art.medium}</div></div>
                <div><div class="detail-label">Dimensions</div><div class="detail-value">${art.dimensions}</div></div>
            </div>
            <div class="detail-tags">${tags}</div>
            <div class="description-section">
                <h3><i class="fas fa-info-circle"></i> Description</h3>
                <p>${art.description || 'No description available.'}</p>
            </div>
        </div>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('artworkModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.modal-close').onclick = closeModal;
window.onclick = e => { if (e.target === document.getElementById('artworkModal')) closeModal(); };
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.getElementById('searchInput').addEventListener('input', filterArtworks);
document.getElementById('mediumFilter').addEventListener('change', filterArtworks);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Auto-hide preloader after 8 seconds as fallback
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.classList.add('fade-out');
        setTimeout(() => { preloader.style.display = 'none'; }, 800);
    }
}, 8000);

// Initialize
(async () => {
    await fetchArtworks();
    renderArtworks(allArtworks);
    updateStats();
})();
