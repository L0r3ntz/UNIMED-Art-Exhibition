// Configuration
const DATASET_ID = 'l0r3ntz/pameran-lukisan';
const BASE_URL = 'https://datasets-server.huggingface.co';

// Embedded data as fallback (40 artworks)
const EMBEDDED_DATA = [
    {id: "PAM-001", title: "Permandani Hijau", artist: "Andi Wijaya", year: 2023, medium: "cat minyak", dimensions: "100 × 80 cm", artist_photo_url: "https://example.com/artists/andi-wijaya.jpg", tags: "natura, perkotaan", description: "Lukisan pemandangan alam dengan dominasi warna hijau yang menenangkan", image_url: "https://example.com/images/pam-001.jpg"},
    {id: "PAM-002", title: "Senja di Pelabuhan", artist: "Siti Nurhaliza", year: 2022, medium: "akrilik", dimensions: "80 × 60 cm", artist_photo_url: "https://example.com/artists/siti-nurhaliza.jpg", tags: "pemandangan, laut, sore", description: "Pemandangan pelabuhan saat matahari terbenam dengan warna jingga yang hangat", image_url: "https://example.com/images/pam-002.jpg"},
    {id: "PAM-003", title: "Abstract Thoughts", artist: "Budi Santoso", year: 2023, medium: "cat minyak", dimensions: "120 × 90 cm", artist_photo_url: "https://example.com/artists/budi-santoso.jpg", tags: "abstrak, modern", description: "Karya abstrak dengan permainan warna biru dan merah yang kontras", image_url: "https://example.com/images/pam-003.jpg"},
    {id: "PAM-004", title: "Wajah Ibu", artist: "Ratna Sarumpaet", year: 2021, medium: "pastel", dimensions: "50 × 70 cm", artist_photo_url: "https://example.com/artists/ratna-sarumpaet.jpg", tags: "portrait, keluarga", description: "Portrait ibu dengan ekspresi penuh kasih sayang", image_url: "https://example.com/images/pam-004.jpg"},
    {id: "PAM-005", title: "Jalan Menuju Surga", artist: "Ahmad Dhani", year: 2023, medium: "akrilik", dimensions: "90 × 110 cm", artist_photo_url: "https://example.com/artists/ahmad-dhani.jpg", tags: "religi, abstrak", description: "Karya dengan nuansa spiritual yang menggambarkan perjalanan hidup", image_url: ""},
    {id: "PAM-006", title: "Bunga di Musim Hujan", artist: "Dewi Persik", year: 2022, medium: "cat minyak", dimensions: "60 × 80 cm", artist_photo_url: "https://example.com/artists/dewi-persik.jpg", tags: "natura, bunga", description: "Lukisan bunga-bunga yang masih segar di tengah hujan", image_url: "https://example.com/images/pam-006.jpg"},
    {id: "PAM-007", title: "Kota yang Terlupakan", artist: "Joko Anwar", year: 2021, medium: "pastel", dimensions: "100 × 70 cm", artist_photo_url: "https://example.com/artists/joko-anwar.jpg", tags: "perkotaan, abstrak", description: "Pemandangan kota tua yang sunyi dengan nuansa kelabu", image_url: ""},
    {id: "PAM-008", title: "Anak Desa", artist: "Novi Andriani", year: 2023, medium: "akrilik", dimensions: "80 × 100 cm", artist_photo_url: "https://example.com/artists/novi-andriani.jpg", tags: "natura, portrait", description: "Potret anak desa dengan pakaian tradisional", image_url: "https://example.com/images/pam-008.jpg"},
    {id: "PAM-009", title: "Geometri Ruang", artist: "Eko Nugroho", year: 2022, medium: "cat minyak", dimensions: "150 × 120 cm", artist_photo_url: "https://example.com/artists/eko-nugroho.jpg", tags: "abstrak, modern", description: "Permainan bentuk geometris dengan warna-warna cerah", image_url: "https://example.com/images/pam-009.jpg"},
    {id: "PAM-010", title: "Sunset at Dawn", artist: "Rika Rakatama", year: 2023, medium: "akrilik", dimensions: "70 × 90 cm", artist_photo_url: "https://example.com/artists/rika-rakatama.jpg", tags: "pemandangan, sore", description: "Matahari terbit dengan gradasi warna yang memukau", image_url: ""},
    {id: "PAM-011", title: "The Last Supper", artist: "Rony Parulian", year: 2022, medium: "cat minyak", dimensions: "200 × 150 cm", artist_photo_url: "https://example.com/artists/rony-parulian.jpg", tags: "religi, klasik", description: "Interpretasi modern dari perjamuan terakhir dengan gaya unik", image_url: "https://example.com/images/pam-011.jpg"},
    {id: "PAM-012", title: "Di Bawah Pohon Bambu", artist: "Sri Wahyuni", year: 2023, medium: "akrilik", dimensions: "90 × 70 cm", artist_photo_url: "https://example.com/artists/sri-wahyuni.jpg", tags: "natura, tradisional", description: "Suasana tenang di bawah rindangnya pohon bambu", image_url: "https://example.com/images/pam-012.jpg"},
    {id: "PAM-013", title: "Wajah Wanita Jawa", artist: "Dian Sastrowardoyo", year: 2021, medium: "pastel", dimensions: "60 × 80 cm", artist_photo_url: "https://example.com/artists/dian-sastrowardoyo.jpg", tags: "portrait, tradisional", description: "Portrait wanita Jawa dengan busana tradisional yang elegan", image_url: ""},
    {id: "PAM-014", title: "Geometric Dreams", artist: "Flickr Studio", year: 2023, medium: "cat minyak", dimensions: "130 × 100 cm", artist_photo_url: "https://example.com/artists/flickr-studio.jpg", tags: "abstrak, modern", description: "Eksplorasi bentuk geometris dalam ruang mimpi", image_url: "https://example.com/images/pam-014.jpg"},
    {id: "PAM-015", title: "Pasar Malam", artist: "Bayu Skak", year: 2022, medium: "akrilik", dimensions: "100 × 80 cm", artist_photo_url: "https://example.com/artists/bayu-skak.jpg", tags: "perkotaan, budaya", description: "Keramaian pasar malam dengan lampu-lampu neon yang warna-warni", image_url: "https://example.com/images/pam-015.jpg"},
    {id: "PAM-016", title: "The Thinker 2.0", artist: "Gibran Rakabuming", year: 2023, medium: "cat minyak", dimensions: "110 × 90 cm", artist_photo_url: "https://example.com/artists/gibran-rakabuming.jpg", tags: "abstrak, filosofi", description: "Interpretasi modern dari patung pemikir dengan sentuhan abstrak", image_url: "https://example.com/images/pam-016.jpg"},
    {id: "PAM-017", title: "Empat Musim di Desa", artist: "Kunto Aji", year: 2022, medium: "pastel", dimensions: "80 × 120 cm", artist_photo_url: "https://example.com/artists/kunto-aji.jpg", tags: "natura, musim", description: "Perubahan musim yang ditangkap dalam satu kanvas panoramik", image_url: "https://example.com/images/pam-017.jpg"},
    {id: "PAM-018", title: "Burung Merpati", artist: "Nunung", year: 2021, medium: "akrilik", dimensions: "50 × 50 cm", artist_photo_url: "https://example.com/artists/nunung.jpg", tags: "natura, hewan", description: "Burung merpati yang sedang terbang dengan latar langit biru", image_url: ""},
    {id: "PAM-019", title: "Metropolis 2050", artist: "Taufik Hidayat", year: 2023, medium: "cat minyak", dimensions: "140 × 110 cm", artist_photo_url: "https://example.com/artists/taufik-hidayat.jpg", tags: "perkotaan, futuristik", description: "Visualisasi kota metropolitan di masa depan yang megah", image_url: "https://example.com/images/pam-019.jpg"},
    {id: "PAM-020", title: "Wajah Sang Guru", artist: "Butet Kertaradjasa", year: 2022, medium: "pastel", dimensions: "70 × 90 cm", artist_photo_url: "https://example.com/artists/butet-kertaradjasa.jpg", tags: "portrait, tokoh", description: "Portrait seorang guru dengan ekspresi bijaksana", image_url: ""},
    {id: "PAM-021", title: "Bunga Teratai", artist: "Joko Widodo", year: 2023, medium: "akrilik", dimensions: "80 × 60 cm", artist_photo_url: "https://example.com/artists/joko-widodo.jpg", tags: "natura, bunga", description: "Keindahan bunga teratai yang mekar di atas permukaan air", image_url: "https://example.com/images/pam-021.jpg"},
    {id: "PAM-022", title: "Chaos Theory", artist: "Eminem Indo", year: 2023, medium: "cat minyak", dimensions: "150 × 130 cm", artist_photo_url: "https://example.com/artists/eminem-indo.jpg", tags: "abstrak, modern", description: "Kekacauan yang terorganisir dalam permainan warna dan bentuk", image_url: "https://example.com/images/pam-022.jpg"},
    {id: "PAM-023", title: "Di Pinggir Sungai", artist: "Yogyakarta Art", year: 2022, medium: "akrilik", dimensions: "90 × 70 cm", artist_photo_url: "https://example.com/artists/yogyakarta-art.jpg", tags: "pemandangan, natura", description: "Ketengangan sungai yang jernih dikelilingi hutan hijau", image_url: "https://example.com/images/pam-023.jpg"},
    {id: "PAM-024", title: "The Dancer", artist: "Najwa Shihab", year: 2021, medium: "pastel", dimensions: "100 × 80 cm", artist_photo_url: "https://example.com/artists/najwa-shihab.jpg", tags: "portrait, seni pertunjukan", description: "Gerak tari yang ditangkap dalam keindahan warna pastel", image_url: ""},
    {id: "PAM-025", title: "Kebakaran Kota", artist: "Anies Baswedan", year: 2023, medium: "cat minyak", dimensions: "120 × 100 cm", artist_photo_url: "https://example.com/artists/anies-baswedan.jpg", tags: "perkotaan, dramatis", description: "Kota yang dilanda kebakaran dengan langit merah menyala", image_url: "https://example.com/images/pam-025.jpg"},
    {id: "PAM-026", title: "Still Life with Fruits", artist: "Rina Nose", year: 2022, medium: "akrilik", dimensions: "60 × 80 cm", artist_photo_url: "https://example.com/artists/rina-nose.jpg", tags: "still life, natura", description: "Susunan buah-buahan segar dengan pencahayaan dramatis", image_url: "https://example.com/images/pam-026.jpg"},
    {id: "PAM-027", title: "Wajah Petani", artist: "Mbah Surip", year: 2021, medium: "pastel", dimensions: "70 × 90 cm", artist_photo_url: "https://example.com/artists/mbah-surip.jpg", tags: "portrait, kehidupan nyata", description: "Wajah petani dengan keriput yang menceritakan perjuangan hidup", image_url: ""},
    {id: "PAM-028", title: "Infinity Loop", artist: "Algoritma Team", year: 2023, medium: "cat minyak", dimensions: "130 × 130 cm", artist_photo_url: "https://example.com/artists/algoritma-team.jpg", tags: "abstrak, teknologi", description: "Representasi tak terbatas dalam bentuk loop digital", image_url: "https://example.com/images/pam-028.jpg"},
    {id: "PAM-029", title: "Pantai Kuta di Pagi Hari", artist: "Komang Adnyani", year: 2022, medium: "akrilik", dimensions: "100 × 70 cm", artist_photo_url: "https://example.com/artists/komang-adnyani.jpg", tags: "pemandangan, pantai", description: "Pantai Kuta yang sepi di pagi hari dengan ombak tenang", image_url: "https://example.com/images/pam-029.jpg"},
    {id: "PAM-030", title: "The Family", artist: "Deddy Corbuzier", year: 2023, medium: "pastel", dimensions: "90 × 110 cm", artist_photo_url: "https://example.com/artists/deddy-corbuzier.jpg", tags: "keluarga, portrait", description: "Potret keluarga yang hangat dalam nuansa warna lembut", image_url: ""},
    {id: "PAM-031", title: "Tembok Berlin 2", artist: "Triadis Marganti", year: 2022, medium: "cat minyak", dimensions: "150 × 120 cm", artist_photo_url: "https://example.com/artists/triadis-marganti.jpg", tags: "sejarah, abstrak", description: "Refleksi tentang dinding pemisah dan persatuan kembali", image_url: "https://example.com/images/pam-031.jpg"},
    {id: "PAM-032", title: "Bunga Matahari", artist: "Ria Ricis", year: 2023, medium: "akrilik", dimensions: "80 × 100 cm", artist_photo_url: "https://example.com/artists/ria-ricis.jpg", tags: "natura, bunga", description: "Bunga matahari yang bermekaran menghadap matahari", image_url: ""},
    {id: "PAM-033", title: "Wajah Pemuda", artist: "Ariel Noah", year: 2021, medium: "pastel", dimensions: "60 × 80 cm", artist_photo_url: "https://example.com/artists/ariel-noah.jpg", tags: "portrait, anak muda", description: "Portrait pemuda dengan tatapan penuh harapan", image_url: ""},
    {id: "PAM-034", title: "Urban Jungle", artist: "Metropolitan Art", year: 2023, medium: "cat minyak", dimensions: "140 × 100 cm", artist_photo_url: "https://example.com/artists/metropolitan-art.jpg", tags: "perkotaan, natura", description: "Pertemuan antara hutan kota dan gedung-gedung pencakar langit", image_url: "https://example.com/images/pam-034.jpg"},
    {id: "PAM-035", title: "Sunset di Bali", artist: "Kadek Devy", year: 2022, medium: "akrilik", dimensions: "90 × 70 cm", artist_photo_url: "https://example.com/artists/kadek-devy.jpg", tags: "pemandangan, sore", description: "Matahari terbenam di pantai Bali dengan awan berwarna jingga", image_url: "https://example.com/images/pam-035.jpg"},
    {id: "PAM-036", title: "The Lovers", artist: "Verrell Bramasta", year: 2023, medium: "pastel", dimensions: "80 × 100 cm", artist_photo_url: "https://example.com/artists/verrell-bramasta.jpg", tags: "romansa, portrait", description: "Dua insan yang saling memandang dengan penuh kasih", image_url: ""},
    {id: "PAM-037", title: "Matrix Reloaded", artist: "IAIN Nazar", year: 2022, medium: "cat minyak", dimensions: "130 × 110 cm", artist_photo_url: "https://example.com/artists/iain-nazar.jpg", tags: "abstrak, teknologi", description: "Dunia digital yang terstruktur dalam bentuk matriks", image_url: "https://example.com/images/pam-037.jpg"},
    {id: "PAM-038", title: "Sawah yang Menguning", artist: "Nyoman Nuarta", year: 2021, medium: "akrilik", dimensions: "120 × 80 cm", artist_photo_url: "https://example.com/artists/nyoman-nuarta.jpg", tags: "natura, pedesaan", description: "Pesawahan yang menguning saat musim panen tiba", image_url: "https://example.com/images/pam-038.jpg"},
    {id: "PAM-039", title: "Wajah Kakek", artist: "Nasrul Ramdan", year: 2022, medium: "pastel", dimensions: "70 × 90 cm", artist_photo_url: "https://example.com/artists/nasrul-ramdan.jpg", tags: "portrait, keluarga", description: "Wajah kakek dengan senyum yang menyimpan seribu cerita", image_url: ""},
    {id: "PAM-040", title: "Neon City", artist: "Night Walker", year: 2023, medium: "cat minyak", dimensions: "150 × 120 cm", artist_photo_url: "https://example.com/artists/night-walker.jpg", tags: "perkotaan, malam", description: "Kota yang bersinar dengan lampu neon di kegelapan malam", image_url: "https://example.com/images/pam-040.jpg"},
    {id: "PAM-041", title: "Termangu", artist: "Muhammad Yusran", year: 2026, medium: "cat minyak", dimensions: "120 x 120 cm", artist_photo_url: "https://example.com/artists/muhammad-yusran.jpg", tags: "digital, manual", description: "ini contoh karya yang sudah ditambahkan", image_url: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"}
];

let allArtworks = [];

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }
    }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fetch data from HF API
async function fetchArtworks() {
    const url = `${BASE_URL}/rows?dataset=${DATASET_ID}&config=default&split=train&offset=0&length=100`;
    
    try {
        console.log('Fetching data from API...');
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.rows) {
            allArtworks = data.rows.map(row => row.row);
            console.log(`Loaded ${allArtworks.length} artworks from API`);
            return allArtworks;
        }
    } catch (error) {
        console.warn('API fetch failed, using embedded data:', error);
    }
    
    // Fallback to embedded data
    console.log('Using embedded data');
    allArtworks = EMBEDDED_DATA;
    return allArtworks;
}

// Render artwork cards
function renderArtworks(artworks) {
    const grid = document.getElementById('artworkGrid');
    const emptyState = document.getElementById('emptyState');
    
    grid.innerHTML = '';
    
    if (artworks.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    artworks.forEach((artwork, index) => {
        const card = document.createElement('div');
        card.className = 'artwork-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => showModal(artwork);
        
        const imageIcon = artwork.title.charAt(0).toUpperCase();
        const imageHtml = artwork.image_url ? 
            `<img src="${artwork.image_url}" alt="${artwork.title}" loading="lazy">` : 
            `<div class="card-image-placeholder">${imageIcon}</div>`;
        
        const tags = artwork.tags ? artwork.tags.split(',').map(tag => 
            `<span class="tag">${tag.trim()}</span>`
        ).join('') : '';
        
        // Artist photo HTML
        const artistPhotoHtml = artwork.artist_photo_url ? 
            `<img src="${artwork.artist_photo_url}" alt="${artwork.artist}" class="artist-photo-small">` : 
            `<div class="artist-photo-placeholder-small">${artwork.artist.charAt(0).toUpperCase()}</div>`;
        
        card.innerHTML = `
            <div class="card-image">
                ${imageHtml}
            </div>
            <div class="card-content">
                <h3>${artwork.title}</h3>
                <div class="card-artist">
                    ${artistPhotoHtml}
                    <i class="fas fa-paint-brush"></i>
                    ${artwork.artist}
                </div>
                <div class="card-meta">
                    <span><i class="fas fa-calendar"></i> ${artwork.year}</span>
                    <span><i class="fas fa-palette"></i> ${artwork.medium}</span>
                </div>
                <div class="card-tags">${tags}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Filter artworks
function filterArtworks() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const mediumFilter = document.getElementById('mediumFilter').value;
    
    let filtered = allArtworks.filter(artwork => {
        const matchesSearch = !searchQuery || 
            artwork.id.toLowerCase().includes(searchQuery) ||
            artwork.title.toLowerCase().includes(searchQuery) ||
            artwork.artist.toLowerCase().includes(searchQuery) ||
            (artwork.tags && artwork.tags.toLowerCase().includes(searchQuery));
        
        const matchesMedium = !mediumFilter || artwork.medium === mediumFilter;
        
        return matchesSearch && matchesMedium;
    });
    
    renderArtworks(filtered);
    updateStats(filtered);
}

// Update statistics
function updateStats(artworks = allArtworks) {
    const total = artworks.length;
    const uniqueArtists = [...new Set(artworks.map(a => a.artist))].length;
    
    const heroTotal = document.getElementById('heroTotal');
    const heroArtists = document.getElementById('heroArtists');
    const aboutTotal = document.getElementById('aboutTotal');
    const aboutArtists = document.getElementById('aboutArtists');
    
    if (heroTotal) heroTotal.textContent = total;
    if (heroArtists) heroArtists.textContent = uniqueArtists;
    if (aboutTotal) aboutTotal.textContent = total;
    if (aboutArtists) aboutArtists.textContent = uniqueArtists;
}

// Show modal with artwork details
function showModal(artwork) {
    const modal = document.getElementById('artworkModal');
    const modalBody = document.getElementById('modalBody');
    
    const imageIcon = artwork.title.charAt(0).toUpperCase();
    const imageHtml = artwork.image_url ? 
        `<img src="${artwork.image_url}" alt="${artwork.title}" class="modal-image">` : 
        `<div class="modal-image">${imageIcon}</div>`;
    
    const tags = artwork.tags ? artwork.tags.split(',').map(tag => 
        `<span class="tag">${tag.trim()}</span>`
    ).join(' ') : '';
    
    // Artist photo HTML for modal
    const artistPhotoHtml = artwork.artist_photo_url ? 
        `<img src="${artwork.artist_photo_url}" alt="${artwork.artist}" class="modal-artist-photo">` : 
        `<div class="modal-artist-photo-placeholder">${artwork.artist.charAt(0).toUpperCase()}</div>`;
    
    modalBody.innerHTML = `
        ${imageHtml}
        <div class="modal-details">
            <h2>${artwork.title}</h2>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">
                        <i class="fas fa-hashtag"></i> ID
                    </div>
                    <div class="detail-value">${artwork.id}</div>
                </div>
                <div class="detail-item artist-item">
                    <div class="detail-label">
                        <i class="fas fa-paint-brush"></i> Artist
                    </div>
                    <div class="detail-value">
                        ${artistPhotoHtml}
                        ${artwork.artist}
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">
                        <i class="fas fa-calendar"></i> Year
                    </div>
                    <div class="detail-value">${artwork.year}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">
                        <i class="fas fa-tools"></i> Medium
                    </div>
                    <div class="detail-value">${artwork.medium}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">
                        <i class="fas fa-ruler-combined"></i> Dimensions
                    </div>
                    <div class="detail-value">${artwork.dimensions}</div>
                </div>
            </div>
            <div class="detail-tags">
                ${tags}
            </div>
            <div class="description-section">
                <h3><i class="fas fa-info-circle"></i> Description</h3>
                <p>${artwork.description || 'No description available.'}</p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('artworkModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.querySelector('.modal-close').onclick = closeModal;

window.onclick = function(event) {
    const modal = document.getElementById('artworkModal');
    if (event.target === modal) {
        closeModal();
    }
};

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterArtworks);
document.getElementById('mediumFilter').addEventListener('change', filterArtworks);

// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Update active state
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Initialize
async function init() {
    try {
        await fetchArtworks();
        renderArtworks(allArtworks);
        updateStats();
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
        allArtworks = EMBEDDED_DATA;
        renderArtworks(allArtworks);
        updateStats();
    }
}

// Start the app
init();
