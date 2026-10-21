/**
 * Kost Bunda John - Shared JavaScript
 * Soft Warm Calm Edition (White / Cream Minimalist)
 * Direct WhatsApp: 089669909373
 */

document.addEventListener("DOMContentLoaded", async () => {
  await initNavbar();
  await initFooter();
  initRoomModal();
  initArticleModal();
  checkUrlParamsForModal();
  checkHashOrParamsForArticleModal();
});

// Modular Navbar Loader (fetches navbar.html or uses template fallback)
async function initNavbar() {
  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) {
    initMobileNav();
    return;
  }

  // Buat placeholder sticky agar navbar selalu terlihat saat scroll
  placeholder.className = "sticky top-0 z-50";

  let html = "";
  try {
    const response = await fetch("navbar.html");
    if (response.ok) {
      html = await response.text();
    }
  } catch (err) {
    // Fallback jika fetch gagal (file://, offline, dsb)
  }

  if (!html) {
    html = getNavbarTemplate();
  }

  placeholder.innerHTML = html;
  highlightActiveNav();
  initMobileNav();
}

// Modular Footer Loader (fetches footer.html atau pakai template fallback)
async function initFooter() {
  const placeholder = document.getElementById("footer-placeholder");
  if (!placeholder) return;

  let html = "";
  try {
    const response = await fetch("footer.html");
    if (response.ok) {
      html = await response.text();
    }
  } catch (err) {
    // Fallback
  }

  if (!html) {
    html = getFooterTemplate();
  }

  placeholder.innerHTML = html;
}

function getNavbarTemplate() {
  return `
<header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D0E3EF]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      
      <!-- Brand Logo -->
      <a href="index.html" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-white border border-[#D0E3EF] shadow-sm flex items-center justify-center overflow-hidden">
          <img src="assets/images/Logo.png" alt="Logo Kost Bunda John" class="w-9 h-9 object-contain">
        </div>
        <div>
          <span class="text-lg font-bold tracking-tight text-[#1A2B38] block leading-tight">
            Kost Bunda John
          </span>
          <span class="text-xs font-mono font-medium tracking-wider text-[#3A6FA8] block">
            KOMP. BATAN LAMA A-5
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links (Artikel instead of Fasilitas) -->
      <nav class="hidden md:flex items-center gap-2" id="desktop-nav-links">
        <a href="index.html" data-nav="index.html" class="nav-item px-3.5 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
          Beranda
        </a>
        <a href="denah.html" data-nav="denah.html" class="nav-item px-3.5 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
          Denah Rumah
        </a>
        <a href="kamar.html" data-nav="kamar.html" class="nav-item px-3.5 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
          Tipe Kamar
        </a>
        <a href="artikel.html" data-nav="artikel.html" class="nav-item px-3.5 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
          Artikel & Tips
        </a>
        <a href="kontak.html" data-nav="kontak.html" class="nav-item px-3.5 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition">
          Lokasi & Kontak
        </a>
      </nav>

      <!-- CTA Action Button -->
      <div class="hidden md:flex items-center gap-3">
        <a href="https://wa.me/6289669909373?text=Halo%20Pengelola%20Kost%20Batan%20Lama%20A5,%20saya%20tertarik%20tanya%20ketersediaan%20kamar." target="_blank" class="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition active:scale-95 flex items-center gap-2">
          <i class="fa-brands fa-whatsapp text-base"></i> Tanya WhatsApp
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex md:hidden">
        <button id="mobile-menu-btn" aria-label="Buka Menu" class="p-2.5 rounded-xl bg-[#EBF3F8] border border-[#D0E3EF] text-[#3A6FA8]">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  <div id="mobile-menu" class="hidden md:hidden border-t border-[#D0E3EF] bg-white px-4 pt-3 pb-6 space-y-2">
    <a href="index.html" data-nav="index.html" class="mobile-nav-item block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50">Beranda</a>
    <a href="denah.html" data-nav="denah.html" class="mobile-nav-item block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50">Denah Rumah</a>
    <a href="kamar.html" data-nav="kamar.html" class="mobile-nav-item block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50">Tipe Kamar & Tarif</a>
    <a href="artikel.html" data-nav="artikel.html" class="mobile-nav-item block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50">Artikel & Tips</a>
    <a href="kontak.html" data-nav="kontak.html" class="mobile-nav-item block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50">Lokasi & Kontak WhatsApp</a>
    <a href="https://wa.me/6289669909373" target="_blank" class="block text-center mt-3 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm">
      <i class="fa-brands fa-whatsapp mr-1"></i> WhatsApp: 0896-6990-9373
    </a>
  </div>
</header>
  `;
}

function getFooterTemplate() {
  return `
<footer class="bg-white border-t border-[#D0E3EF] pt-10 pb-6 mt-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#D0E3EF]">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-white border border-[#D0E3EF] shadow-sm flex items-center justify-center overflow-hidden">
          <img src="assets/images/Logo.png" alt="Logo" class="w-9 h-9 object-contain">
        </div>
        <div>
          <span class="text-base font-bold text-[#1A2B38] block leading-tight">Kost Bunda John</span>
          <span class="text-xs text-stone-500">Komplek Batan Lama A-5, Serpong</span>
        </div>
      </div>
      <nav class="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-stone-600">
        <a href="index.html" class="hover:text-[#3A6FA8] transition">Beranda</a>
        <a href="denah.html" class="hover:text-[#3A6FA8] transition">Denah Rumah</a>
        <a href="kamar.html" class="hover:text-[#3A6FA8] transition">Tipe Kamar</a>
        <a href="artikel.html" class="hover:text-[#3A6FA8] transition">Artikel & Tips</a>
        <a href="kontak.html" class="hover:text-[#3A6FA8] transition">Kontak</a>
      </nav>
      <a href="https://wa.me/6289669909373" target="_blank" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition whitespace-nowrap">
        <i class="fa-brands fa-whatsapp text-base"></i> 0896-6990-9373
      </a>
    </div>
    <div class="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
      <span>&copy; 2026 <strong class="text-stone-600">Kost Bunda John</strong>. Seluruh tarif transparan tanpa biaya tersembunyi.</span>
      <span>Kademangan, Kec. Setu / Serpong, Tangerang Selatan 15313</span>
    </div>
  </div>
</footer>
  `;
}

function highlightActiveNav() {
  let path = window.location.pathname.split("/").pop();
  if (!path || path === "") path = "index.html";

  // Desktop Links
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.getAttribute("data-nav") === path) {
      item.className = "nav-item px-3.5 py-2 rounded-xl text-sm font-semibold text-[#3A6FA8] bg-[#E8F0FA] border border-[#B8D0EC]";
    } else {
      item.className = "nav-item px-3.5 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-[#1A2B38] hover:bg-[#EBF3F8] transition";
    }
  });

  // Mobile Links
  document.querySelectorAll(".mobile-nav-item").forEach(item => {
    if (item.getAttribute("data-nav") === path) {
      item.className = "mobile-nav-item block px-3 py-2 rounded-lg text-sm font-bold text-[#3A6FA8] bg-[#E8F0FA]";
    } else {
      item.className = "mobile-nav-item block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-[#EBF3F8]";
    }
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (toggleBtn && mobileMenu) {
    // Clone to remove stale listeners if re-initialized
    const newToggle = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newToggle, toggleBtn);

    newToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        newToggle.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.classList.add("hidden");
        newToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

// Room Details Modal Logic
function initRoomModal() {
  let modal = document.getElementById("room-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "room-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200";
    modal.innerHTML = `
      <div id="modal-container" class="relative w-full max-w-xl bg-white border border-[#D0E3EF] rounded-3xl shadow-xl overflow-hidden transform scale-95 transition-transform duration-200">
        <!-- Close Button -->
        <button id="modal-close-btn" aria-label="Tutup Detail" class="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition border border-stone-200 shadow-sm">
          <i class="fa-solid fa-xmark text-base"></i>
        </button>

        <div class="max-h-[88vh] overflow-y-auto">
          <!-- Room Header & Image -->
          <div class="relative h-48 sm:h-56 bg-stone-100 overflow-hidden">
            <img id="modal-room-image" src="assets/images/kamar.jpg" alt="Foto Kamar" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            <div class="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
              <div>
                <span id="modal-room-building" class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-white/90 text-stone-700 shadow-sm uppercase mb-1 inline-block">
                  Bangunan
                </span>
                <h3 id="modal-room-title" class="text-xl sm:text-2xl font-bold text-white tracking-tight">Kamar ID</h3>
              </div>
              <div class="text-right">
                <span id="modal-room-status" class="px-2.5 py-0.5 rounded-full text-[11px] font-bold inline-block">Status</span>
              </div>
            </div>
          </div>

          <!-- Body Info -->
          <div class="p-5 sm:p-6 space-y-5">
            <!-- Price and Dimensions Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-[#F4F8FB] p-3.5 rounded-2xl border border-[#D0E3EF] text-center">
              <div>
                <span class="text-[11px] text-stone-500 block">Tarif Sewa</span>
                <span id="modal-room-price" class="text-base font-extrabold text-[#3A6FA8]">Rp 650.000</span>
              </div>
              <div>
                <span class="text-[11px] text-stone-500 block">Ukuran</span>
                <span id="modal-room-size" class="text-sm font-bold text-stone-800">3 x 3.5 m</span>
              </div>
              <div>
                <span class="text-[11px] text-stone-500 block">Kamar Mandi</span>
                <span id="modal-room-bath" class="text-sm font-bold text-stone-800">Dalam/Luar</span>
              </div>
              <div>
                <span class="text-[11px] text-stone-500 block">Listrik</span>
                <span id="modal-room-electric" class="text-sm font-bold text-stone-800">All-in</span>
              </div>
            </div>

            <!-- Description -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-circle-info text-[11px] text-[#3A6FA8]"></i> INFORMASI UNIT
              </h4>
              <p id="modal-room-desc" class="text-sm text-stone-700 leading-relaxed"></p>
            </div>

            <!-- Facilities List -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-check text-[11px] text-emerald-600"></i> FASILITAS TERMASUK
              </h4>
              <ul id="modal-room-features" class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                <!-- Injected via JS -->
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="pt-3 border-t border-[#D0E3EF] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a id="modal-blueprint-link" href="denah.html" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold text-center transition flex items-center justify-center gap-2 border border-stone-200">
                <i class="fa-solid fa-map-location-dot text-[#3A6FA8]"></i>
                Lihat di Denah
              </a>

              <a id="modal-wa-btn" href="#" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm text-center shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-lg"></i>
                Tanya / Booking via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event listeners for close
    const closeBtn = document.getElementById("modal-close-btn");
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }
}

// Open Room Modal by ID
function openRoomModal(roomId) {
  const room = typeof getRoomById === "function" ? getRoomById(roomId) : null;
  if (!room) {
    console.warn("Room not found: " + roomId);
    return;
  }

  const modal = document.getElementById("room-modal");
  const container = document.getElementById("modal-container");
  if (!modal || !container) return;

  // Fill content
  document.getElementById("modal-room-title").textContent = `${room.id} - ${room.name}`;
  document.getElementById("modal-room-building").textContent = `${room.building} • ${room.zone}`;
  
  const statusEl = document.getElementById("modal-room-status");
  if (room.status === "Tersedia") {
    statusEl.textContent = "TERSEDIA";
    statusEl.className = "px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
  } else {
    statusEl.textContent = "TERISI";
    statusEl.className = "px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-stone-200 text-stone-700 border border-stone-300";
  }

  document.getElementById("modal-room-price").textContent = `${room.priceFormatted}/bln`;
  document.getElementById("modal-room-size").textContent = room.size;
  document.getElementById("modal-room-bath").textContent = room.bathroomType || (room.isEnsuite ? "KM Dalam" : "KM Luar");
  document.getElementById("modal-room-electric").textContent = room.electricity;
  document.getElementById("modal-room-desc").textContent = room.description;

  // Features list
  const featuresList = document.getElementById("modal-room-features");
  featuresList.innerHTML = room.features.map(f => `
    <li class="flex items-center gap-2">
      <i class="fa-solid fa-circle-check text-emerald-600 text-xs"></i>
      <span>${f}</span>
    </li>
  `).join("");

  // Links
  const blueprintLink = document.getElementById("modal-blueprint-link");
  if (blueprintLink) {
    blueprintLink.href = `denah.html?room=${room.id}`;
  }

  const waBtn = document.getElementById("modal-wa-btn");
  if (waBtn) {
    waBtn.href = generateRoomWhatsAppUrl(room.id, room.name, room.priceFormatted);
  }

  // Show modal
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    container.classList.remove("scale-95");
    container.classList.add("scale-100");
  }, 10);
}

// Communal Kitchen Modal Logic
function openCommunalKitchenModal() {
  const kit = typeof COMMUNAL_FACILITIES !== "undefined" ? COMMUNAL_FACILITIES.kitchen : null;
  if (!kit) return;

  const modal = document.getElementById("room-modal");
  const container = document.getElementById("modal-container");
  if (!modal || !container) return;

  document.getElementById("modal-room-title").textContent = "Dapur Bersama Komunal (DK-01)";
  document.getElementById("modal-room-building").textContent = "Fasilitas Bersama di Halaman Kost";
  
  const statusEl = document.getElementById("modal-room-status");
  statusEl.textContent = "GRATIS UNTUK PENGHUNI";
  statusEl.className = "px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200";

  document.getElementById("modal-room-price").textContent = "Gratis";
  document.getElementById("modal-room-size").textContent = "Halaman Terbuka";
  document.getElementById("modal-room-bath").textContent = "Wastafel Cuci";
  document.getElementById("modal-room-electric").textContent = "Gas Disediakan";
  document.getElementById("modal-room-desc").textContent = kit.description;

  const featuresList = document.getElementById("modal-room-features");
  featuresList.innerHTML = kit.equipment.map(e => `
    <li class="flex items-center gap-2">
      <i class="fa-solid fa-kitchen-set text-purple-600 text-xs"></i>
      <span>${e}</span>
    </li>
  `).join("");

  const blueprintLink = document.getElementById("modal-blueprint-link");
  if (blueprintLink) blueprintLink.href = "denah.html";

  const waBtn = document.getElementById("modal-wa-btn");
  if (waBtn) {
    waBtn.href = generateDirectWhatsAppUrl("Halo Pengelola Kost Bunda John, saya ingin bertanya seputar fasilitas Dapur Bersama dan kamar kost yang masih tersedia. Terima kasih!");
    waBtn.innerHTML = `<i class="fa-brands fa-whatsapp text-lg"></i> Tanya Info via WhatsApp`;
  }

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    container.classList.remove("scale-95");
    container.classList.add("scale-100");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("room-modal");
  const container = document.getElementById("modal-container");
  if (!modal || !container) return;

  modal.classList.add("opacity-0");
  container.classList.remove("scale-100");
  container.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 200);
}

// Deep linking support
function checkUrlParamsForModal() {
  const urlParams = new URLSearchParams(window.location.search);
  const roomId = urlParams.get("room");
  if (roomId) {
    setTimeout(() => {
      openRoomModal(roomId);
    }, 300);
  }
}

// ============================================================================
// ARTICLE MODAL & READER (Global for index.html, artikel.html, etc.)
// ============================================================================

function initArticleModal() {
  let modal = document.getElementById("article-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "article-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/50 backdrop-blur-sm hidden opacity-0 transition-opacity duration-200";
    modal.innerHTML = `
      <div id="article-modal-container" class="relative w-full max-w-3xl bg-white border border-[#D0E3EF] rounded-3xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-200 max-h-[90vh] flex flex-col">
        <!-- Header with Close Button -->
        <div class="p-5 border-b border-[#D0E3EF] flex items-center justify-between bg-[#F4F8FB]">
          <div class="pr-3">
            <span id="modal-art-category" class="text-xs font-semibold text-[#3A6FA8] uppercase tracking-wider block">Kategori</span>
            <h2 id="modal-art-title" class="text-base sm:text-xl font-bold text-stone-900 leading-snug">Judul Artikel</h2>
          </div>
          <button id="modal-art-close-btn" onclick="closeArticleModal()" aria-label="Tutup Artikel" class="w-9 h-9 flex-shrink-0 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 transition hover:bg-stone-100 shadow-sm cursor-pointer">
            <i class="fa-solid fa-xmark text-base"></i>
          </button>
        </div>

        <!-- Body Content -->
        <div class="p-6 sm:p-8 overflow-y-auto space-y-4 text-stone-700 text-sm leading-relaxed" id="modal-art-content">
          <!-- Injected via JS -->
        </div>

        <!-- Footer CTA -->
        <div class="p-4 bg-[#F4F8FB] border-t border-[#D0E3EF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span class="text-xs text-stone-500">Tertarik booking kamar dekat BRIN KST Serpong?</span>
          <a id="modal-art-wa-btn" href="https://wa.me/6289669909373" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95">
            <i class="fa-brands fa-whatsapp text-base"></i> Hubungi WhatsApp: 0896-6990-9373
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Backdrop click listener
  modal.addEventListener("click", (e) => {
    if (e.target.id === "article-modal") {
      closeArticleModal();
    }
  });

  const closeBtn = document.getElementById("modal-art-close-btn");
  if (closeBtn) {
    closeBtn.onclick = closeArticleModal;
  }
}

function showArticleDetail(articleId) {
  const articles = (typeof SEO_ARTICLES !== "undefined" && SEO_ARTICLES) 
    ? SEO_ARTICLES 
    : (typeof window !== "undefined" && window.SEO_ARTICLES ? window.SEO_ARTICLES : []);

  if (!articles || articles.length === 0) {
    console.warn("Data artikel belum dimuat.");
    return;
  }

  const cleanId = (articleId || "").replace(/^#/, "").trim();
  if (!cleanId) return;

  const article = articles.find(a => a.id === cleanId || a.slug === cleanId);
  if (!article) {
    console.warn("Artikel tidak ditemukan untuk id/slug:", cleanId);
    return;
  }

  let modal = document.getElementById("article-modal");
  if (!modal) {
    initArticleModal();
    modal = document.getElementById("article-modal");
  }

  const container = document.getElementById("article-modal-container");
  const titleEl = document.getElementById("modal-art-title");
  const catEl = document.getElementById("modal-art-category");
  const contentEl = document.getElementById("modal-art-content");
  const waBtn = document.getElementById("modal-art-wa-btn");

  if (!modal || !container || !titleEl || !contentEl) {
    console.error("Elemen modal artikel tidak lengkap.");
    return;
  }

  titleEl.textContent = article.title;
  if (catEl) catEl.textContent = article.category || "Artikel & Tips";

  const authorBadge = article.author 
    ? `<span>•</span><span><i class="fa-solid fa-pen-nib mr-1 text-[#3A6FA8]"></i> ${article.author}</span>` 
    : "";

  const sourceBadge = article.originalUrl ? `
    <div class="mt-6 pt-4 border-t border-[#D0E3EF] flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-xl">
      <span class="flex items-center gap-1.5"><i class="fa-solid fa-link text-[#3A6FA8]"></i> Artikel Terverifikasi di Blog Resmi:</span>
      <a href="${article.originalUrl}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#3A6FA8] hover:underline flex items-center gap-1">
        Buka Sumber Asli di patmina.my.id &rarr;
      </a>
    </div>
  ` : "";

  contentEl.innerHTML = `
    <div class="text-xs text-stone-500 mb-4 flex flex-wrap items-center gap-2.5 pb-3 border-b border-[#D0E3EF]">
      <span><i class="fa-regular fa-clock mr-1"></i> ${article.readTime || "4 menit baca"}</span>
      <span>•</span>
      <span><i class="fa-regular fa-calendar mr-1"></i> ${article.date || "Oktober 2026"}</span>
      ${authorBadge}
    </div>
    <div class="prose max-w-none text-stone-700 leading-relaxed space-y-4">
      ${article.content}
    </div>
    ${sourceBadge}
  `;

  if (waBtn) {
    const waText = `Halo Pengelola Kost Bunda John,\nSaya baru saja membaca artikel "${article.title}". Saya tertarik survei lokasi / tanya ketersediaan kamar di Komplek Batan Lama No. A-5. Apakah saat ini ada unit yang siap huni? Terima kasih!`;
    waBtn.href = `https://wa.me/6289669909373?text=${encodeURIComponent(waText)}`;
  }

  // Update hash smoothly for bookmarking and back navigation
  if (window.location.hash !== "#" + article.slug) {
    history.replaceState(null, "", "#" + article.slug);
  }

  document.body.style.overflow = "hidden";
  modal.classList.remove("hidden");
  void modal.offsetWidth; // force browser layout recalculation
  modal.classList.remove("opacity-0");
  container.classList.remove("scale-95");
  container.classList.add("scale-100");
}

function closeArticleModal() {
  const modal = document.getElementById("article-modal");
  const container = document.getElementById("article-modal-container");
  if (!modal || !container) return;

  modal.classList.add("opacity-0");
  container.classList.remove("scale-100");
  container.classList.add("scale-95");
  document.body.style.overflow = "";

  setTimeout(() => {
    modal.classList.add("hidden");
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, 200);
}

// Deep linking and hash monitoring for articles
function checkHashOrParamsForArticleModal() {
  const hash = window.location.hash ? window.location.hash.replace(/^#/, "").trim() : "";
  const urlParams = new URLSearchParams(window.location.search);
  const articleParam = urlParams.get("article") || urlParams.get("artikel");
  const targetSlug = hash || articleParam;

  if (targetSlug) {
    const articles = (typeof SEO_ARTICLES !== "undefined" && SEO_ARTICLES) 
      ? SEO_ARTICLES 
      : (typeof window !== "undefined" && window.SEO_ARTICLES ? window.SEO_ARTICLES : []);
    
    if (articles && articles.some(a => a.id === targetSlug || a.slug === targetSlug)) {
      setTimeout(() => {
        showArticleDetail(targetSlug);
      }, 150);
    }
  }
}

// Global escape key handler for all modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeArticleModal();
  }
});

// Global hashchange handler
window.addEventListener("hashchange", () => {
  const hash = window.location.hash ? window.location.hash.replace(/^#/, "").trim() : "";
  if (hash) {
    const articles = (typeof SEO_ARTICLES !== "undefined" && SEO_ARTICLES) 
      ? SEO_ARTICLES 
      : (typeof window !== "undefined" && window.SEO_ARTICLES ? window.SEO_ARTICLES : []);
    if (articles && articles.some(a => a.id === hash || a.slug === hash)) {
      showArticleDetail(hash);
      return;
    }
  }
  const modal = document.getElementById("article-modal");
  if (modal && !modal.classList.contains("hidden")) {
    closeArticleModal();
  }
});

// Expose globally
if (typeof window !== "undefined") {
  window.initArticleModal = initArticleModal;
  window.showArticleDetail = showArticleDetail;
  window.openArticleModal = showArticleDetail;
  window.closeArticleModal = closeArticleModal;
}

