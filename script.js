// Configuration
const DATASET_ID = 'l0r3ntz/pameran-lukisan';
const BASE_URL = 'https://datasets-server.huggingface.co';
const GH_DATA_URL = 'https://raw.githubusercontent.com/L0r3ntz/UNIMED-Art-Exhibition/main/data.json';

let allArtworks = [];

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Fetch data — try GitHub raw first (always up to date), fallback to HF Datasets Server
async function fetchArtworks() {
    try {
        const response = await fetch(GH_DATA_URL + '?t=' + Date.now());
        allArtworks = await response.json();
        if (allArtworks.length > 0) return allArtworks;
        throw new Error('No data from GitHub');
    } catch (e) {
        console.warn('GitHub raw failed, trying HF Datasets Server...', e);
    }
    try {
        const response = await fetch(`${BASE_URL}/rows?dataset=${DATASET_ID}&config=default&split=train&offset=0&length=100`);
        const data = await response.json();
        if (data.rows && data.rows.length > 0) {
            allArtworks = data.rows.map(r => r.row);
            return allArtworks;
        }
        throw new Error('No data from API');
    } catch (e2) {
        console.error('All data sources failed:', e2);
        document.getElementById('artworkGrid').innerHTML = '<p class="error">Gagal memuat data. Coba refresh halaman.</p>';
    }
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
            : `<div class="card-image-placeholder">TIDAK MELAMPIRKAN KARYA</div>`;
        
        const artistPhotoHtml = art.artist_photo_url
            ? `<img src="${art.artist_photo_url}" alt="${art.artist}" class="artist-photo-small" onclick="event.stopPropagation(); showArtistPhoto('${art.artist_photo_url}', '${art.artist.replace(/'/g, "\\'")}')" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
            : '';
        const artistPlaceholderHtml = `<div class="artist-photo-placeholder-small" style="display: ${art.artist_photo_url ? 'none' : 'flex'}">${art.artist.charAt(0).toUpperCase()}</div>`;
        
        const tags = art.tags ? art.tags.split(',').map(t => `<span class="tag"><i class="fab fa-instagram"></i> ${t.trim()}</span>`).join('') : '';
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
        (!q || (a.id || '').toLowerCase().includes(q) || (a.title || '').toLowerCase().includes(q) || (a.artist || '').toLowerCase().includes(q) || (a.tags || '').toLowerCase().includes(q)) &&
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
    const imgHtml = art.image_url ? `<img src="${art.image_url}" alt="${art.title}" class="modal-image">` : `<div class="modal-image-placeholder">TIDAK MELAMPIRKAN KARYA</div>`;
    
    const artistPhotoHtml = art.artist_photo_url
        ? `<img src="${art.artist_photo_url}" alt="${art.artist}" class="modal-artist-photo" onclick="event.stopPropagation(); showArtistPhoto('${art.artist_photo_url}', '${art.artist.replace(/'/g, "\\'")}')" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
        : '';
    const artistPlaceholderHtml = `<div class="modal-artist-photo-placeholder" style="display: ${art.artist_photo_url ? 'none' : 'flex'}">${art.artist.charAt(0).toUpperCase()}</div>`;
    
    const tags = art.tags ? art.tags.split(',').map(t => `<span class="tag"><i class="fab fa-instagram"></i> ${t.trim()}</span>`).join(' ') : '';
    body.innerHTML = `
        ${imgHtml}
        <div class="modal-details">
            <h2>${art.title}</h2>
            <div class="detail-grid">
                <div><div class="detail-label">ID</div><div class="detail-value">${art.id}</div></div>
                <div><div class="detail-label">Artist</div><div class="modal-artist">${artistPhotoHtml}${artistPlaceholderHtml}<span>${art.artist}</span></div></div>
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

function showArtistPhoto(url, name) {
    const modal = document.getElementById('artistPhotoModal');
    document.getElementById('artistPhotoFull').src = url;
    document.getElementById('artistPhotoName').textContent = name;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeArtistPhoto() {
    document.getElementById('artistPhotoModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal && modal.id === 'artistPhotoModal') {
            closeArtistPhoto();
        } else {
            closeModal();
        }
    });
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (document.getElementById('artistPhotoModal').classList.contains('active')) {
            closeArtistPhoto();
        } else {
            closeModal();
        }
    }
});

window.onclick = e => {
    if (e.target === document.getElementById('artworkModal')) closeModal();
    if (e.target === document.getElementById('artistPhotoModal')) closeArtistPhoto();
};

function populateMediumFilter() {
    const mediums = [...new Set(allArtworks.map(a => a.medium).filter(Boolean))].sort();
    const select = document.getElementById('mediumFilter');
    mediums.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        select.appendChild(opt);
    });
}

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

// Initialize
(async () => {
    await fetchArtworks();
    populateMediumFilter();
    renderArtworks(allArtworks);
    updateStats();
})();
