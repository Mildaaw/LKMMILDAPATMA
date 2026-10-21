/**
 * Kost Bunda John - Master Data
 * Alamat: Komplek Batan Lama No. A-5, Kademangan, Kec. Setu / Serpong, Tangerang Selatan
 * WhatsApp Langsung: 089669909373 (0896-6990-9373)
 * Fokus: Kost Murah, Tenang, & Super Dekat Kawasan BRIN KST Serpong
 */

const KOST_INFO = {
  name: "Kost Bunda John",
  shortName: "Kost Bunda John",
  tagline: "Kost Murah & Tenang — 3 Menit ke Kawasan BRIN KST Serpong",
  address: "Komplek Batan Lama No. A-5, Kademangan, Kec. Setu / Serpong, Tangerang Selatan, Banten 15313",
  googleMapsUrl: "https://maps.google.com/?q=Komplek+Batan+Lama+Serpong",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.097066928097!2d106.6669!3d-6.3582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e4f5539d96c9%3A0x6b13936aef42bf!2sKawasan%20Sains%20dan%20Teknologi%20B.J.%20Habibie%20(BRIN%20Serpong)!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid",
  phone: "0896-6990-9373",
  phoneRaw: "089669909373",
  whatsapp: "6289669909373",
  basePrice: "Rp 650.000 / bulan",
  totalRooms: 15,
  images: {
    hero: "hero.jpg",
    kamar: "kamar.jpg",
    dapur: "dapur.jpg"
  },
  
  // Perbandingan Jarak Strategis & Waktu Tempuh
  distanceComparison: [
    {
      destination: "BRIN KST B.J. Habibie Serpong",
      time: "3 - 5 Menit",
      distance: "1.2 km",
      mode: "Motor / Sepeda",
      highlight: "Super Dekat!",
      desc: "Hanya hitungan menit ke kantor pusat riset & laboratorium BRIN Serpong."
    },
    {
      destination: "Gerbang Utama Puspiptek Serpong",
      time: "4 Menit",
      distance: "1.5 km",
      mode: "Motor / Jalan Santai",
      highlight: "Tanpa Macet",
      desc: "Akses jalan tembus lingkungan Komplek Batan Lama tanpa hambatan."
    },
    {
      destination: "Institut Teknologi Indonesia (ITI)",
      time: "6 Menit",
      distance: "2.4 km",
      mode: "Motor / Ojol",
      highlight: "Dekat Kampus",
      desc: "Pilihan favorit mahasiswa ITI yang mencari sewa kamar hemat."
    },
    {
      destination: "Stasiun KRL Rawa Buntu / Serpong",
      time: "10 - 12 Menit",
      distance: "4.5 km",
      mode: "Motor / Angkot",
      highlight: "Akses KRL Jakarta",
      desc: "Mudah pulang-pergi ke Tanah Abang, Sudirman, dan pusat Jabodetabek."
    },
    {
      destination: "Pasar Modern BSD / Mall Teras Kota",
      time: "12 - 15 Menit",
      distance: "6.0 km",
      mode: "Kendaraan Pribadi",
      highlight: "Pusat Belanja & Kuliner",
      desc: "Belanja kebutuhan bulanan, nongkrong santai, dan rekreasi akhir pekan."
    }
  ],

  // Nilai Hemat Kost Batan Lama A5 vs Kost BSD / Perkotaan
  valueSavings: [
    {
      aspect: "Biaya Sewa Bulanan",
      kostBatan: "Rp 650.000 / bln (Rumah Utama: All-In Listrik & Wi-Fi)",
      kostLain: "Rp 1.500.000 - Rp 2.500.000 / bln (Belum listrik)",
      saving: "Hemat Rp 800rb - 1.5jt/bln"
    },
    {
      aspect: "Waktu Tempuh ke BRIN",
      kostBatan: "3 - 5 Menit (1.2 km, bebas macet)",
      kostLain: "25 - 45 Menit (Rute macet Jl. Puspiptek / BSD)",
      saving: "Hemat waktu 1+ jam tiap hari"
    },
    {
      aspect: "Pengeluaran Transportasi",
      kostBatan: "Rp 30.000 - Rp 50.000 / bln (Bensin sangat irit)",
      kostLain: "Rp 400.000 - Rp 700.000 / bln (Ojol / bensin macet)",
      saving: "Hemat s.d. Rp 600rb/bln"
    },
    {
      aspect: "Fasilitas Memasak",
      kostBatan: "Dapur Bersama kompor, kulkas & galon",
      kostLain: "Harus beli makanan luar setiap hari",
      saving: "Hemat makan Rp 500rb/bln"
    }
  ]
};

const ROOMS_DATA = [
  // 1. TOP ROW — 4 Unit Kontrakan Privat (Deretan Depan Kanan)
  // Listrik: Token Mandiri Masing-Masing (tidak termasuk sewa)
  {
    id: "KT-01",
    name: "Kontrakan 1",
    building: "Kontrakan",
    zone: "Deretan Depan Kanan",
    size: "3.5 x 4.5 m",
    type: "Kontrakan",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "emerald",
    isEnsuite: true,
    hasPrivateKitchen: true,
    electricity: "Token Mandiri (Bayar Sendiri)",
    bathroomType: "KM Dalam Pribadi",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "Kipas Angin Sejuk",
      "Kasur Singel Nyaman",
      "Lemari Pakaian",
      "Kursi & Meja Kerja",
      "Pintu Akses Mandiri Langsung",
      "Listrik Token Mandiri (Bayar Sendiri)"
    ],
    description: "Unit kontrakan mandiri di deretan depan. Pintu masuk tersendiri, KM dalam pribadi. Listrik token mandiri sesuai pemakaian.",
    image: "kamar.jpg"
  },
  {
    id: "KT-02",
    name: "Kontrakan 2",
    building: "Kontrakan",
    zone: "Deretan Depan Kanan",
    size: "3.5 x 4.5 m",
    type: "Kontrakan",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: true,
    hasPrivateKitchen: true,
    electricity: "Token Mandiri (Bayar Sendiri)",
    bathroomType: "KM Dalam Pribadi",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "Kipas Angin Sejuk",
      "Kasur Singel Nyaman",
      "Lemari Pakaian",
      "Kursi & Meja Kerja",
      "Pintu Akses Mandiri Langsung",
      "Listrik Token Mandiri (Bayar Sendiri)"
    ],
    description: "Unit kontrakan privat deretan depan. Listrik token mandiri masing-masing. Saat ini sedang terisi.",
    image: "kamar.jpg"
  },
  {
    id: "KT-03",
    name: "Kontrakan 3",
    building: "Kontrakan",
    zone: "Deretan Depan Kanan",
    size: "3.5 x 4.5 m",
    type: "Kontrakan",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "emerald",
    isEnsuite: true,
    hasPrivateKitchen: true,
    electricity: "Token Mandiri (Bayar Sendiri)",
    bathroomType: "KM Dalam Pribadi",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "Kipas Angin Sejuk",
      "Kasur Singel Nyaman",
      "Lemari Pakaian",
      "Kursi & Meja Kerja",
      "Pintu Akses Mandiri Langsung",
      "Listrik Token Mandiri (Bayar Sendiri)"
    ],
    description: "Unit kontrakan privat mandiri siap huni. Listrik token bayar sendiri sesuai pemakaian.",
    image: "kamar.jpg"
  },
  {
    id: "KT-04",
    name: "Kontrakan 4",
    building: "Kontrakan",
    zone: "Deretan Depan Kanan",
    size: "3.5 x 4.5 m",
    type: "Kontrakan",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: true,
    hasPrivateKitchen: true,
    electricity: "Token Mandiri (Bayar Sendiri)",
    bathroomType: "KM Dalam Pribadi",
    features: [
      "Kamar Mandi Dalam Pribadi",
      "Kipas Angin Sejuk",
      "Kasur Singel Nyaman",
      "Lemari Pakaian",
      "Kursi & Meja Kerja",
      "Pintu Akses Mandiri Langsung",
      "Listrik Token Mandiri (Bayar Sendiri)"
    ],
    description: "Unit kontrakan privat sudut deretan depan. Listrik token mandiri bayar sendiri. Saat ini sedang terisi.",
    image: "kamar.jpg"
  },

  // 2. CENTER AREA — Rumah Utama (R1 - R6)
  // Harga Rp 650.000 SUDAH TERMASUK Wi-Fi + Listrik (All-In)

  {
    id: "RA-02",
    name: "Kamar A-2 (Tengah Atas)",
    building: "Rumah A Utama",
    zone: "Tengah Atas",
    size: "3.0 x 3.5 m",
    type: "Rumah A Utama",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: false,
    hasPrivateKitchen: false,
    electricity: "Termasuk (Wi-Fi + Listrik All-In)",
    bathroomType: "KM Bersama",
    features: ["Kasur Single", "Lemari Pakaian", "Meja Belajar", "Kipas Angin", "Listrik & Wi-Fi All-In"],
    description: "Kamar R2 Rumah A Utama. Harga sudah ALL-IN listrik + Wi-Fi. Saat ini sedang dihuni.",
    image: "kamar.jpg"
  },
  {
    id: "RA-03",
    name: "Kamar A-3 (Paling Luas)",
    building: "Rumah A Utama",
    zone: "Kiri Bawah",
    size: "3.2 x 4.0 m",
    type: "Rumah A Utama",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "emerald",
    isEnsuite: true,
    hasPrivateKitchen: false,
    electricity: "Termasuk (Wi-Fi + Listrik All-In)",
    bathroomType: "KM Bersama",
    features: ["Kasur Single atau King", "Lemari Pakaian", "Meja Belajar", "Kipas Angin", "Listrik & Wi-Fi All-In"],
    description: "Bisa diisi MAX 3 Orang. Dengan Harga Rp 800.000/bln (1 org), 675.000/bln (2 org), 600.000/bln (3 org)",
    image: "kamar.jpg"
  },
  {
    id: "RA-04",
    name: "Kamar A-4 (Tengah Bawah)",
    building: "Rumah A Utama",
    zone: "Tengah Bawah",
    size: "3.0 x 3.5 m",
    type: "Rumah A Utama",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: false,
    hasPrivateKitchen: false,
    electricity: "Termasuk (Wi-Fi + Listrik All-In)",
    bathroomType: "KM Bersama",
    features: ["Kasur Single", "Lemari Pakaian", "Meja Belajar", "Kipas Angin", "Listrik & Wi-Fi All-In"],
    description: "Kamar A-4 Rumah Utama. Harga ALL-IN listrik + Wi-Fi. Saat ini sedang dihuni.",
    image: "kamar.jpg"
  },
  {
    id: "RA-05",
    name: "Kamar A-5 (Kanan Bawah)",
    building: "Rumah A Utama",
    zone: "Kanan Bawah",
    size: "3.0 x 3.5 m",
    type: "Rumah A Utama",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: false,
    hasPrivateKitchen: false,
    electricity: "Termasuk (Wi-Fi + Listrik All-In)",
    bathroomType: "KM Bersama",
    features: ["Kasur Single", "Lemari Pakaian", "Meja Belajar", "Kipas Angin", "Listrik & Wi-Fi All-In"],
    description: "Kamar A-5 Rumah Utama. Harga ALL-IN listrik + Wi-Fi. Saat ini terisi.",
    image: "kamar.jpg"
  },

  // 3. BOTTOM-LEFT AREA — Rumah B 
  // Harga Rp 650.000 — Listrik SHARING dibagi penghuni (Wi-Fi termasuk)
  {
    id: "RB-01",
    name: "Kamar B-1 (Atas)",
    building: "Rumah B",
    zone: "Sayap Kiri Atas",
    size: "3.5 x 3.5 m",
    type: "Rumah B",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: false,
    hasPrivateKitchen: true,
    electricity: "Sharing Listrik (Patungan Sesama Penghuni)",
    bathroomType: "KM Bersama",
    features: ["Akses Dapur Internal", "Kasur Single", "Lemari", "Meja & Kursi", "Kipas Angin", "⚡ Listrik Sharing"],
    description: "Kamar Rumah B-1. Listrik sharing/patungan bersama penghuni. Saat ini terisi.",
    image: "kamar.jpg"
  },
  {
    id: "RB-02",
    name: "Kamar B-2 (Tengah)",
    building: "Rumah B",
    zone: "Sayap Kiri Tengah",
    size: "3.5 x 3.8 m",
    type: "Rumah B",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "emerald",
    isEnsuite: false,
    hasPrivateKitchen: true,
    electricity: "Sharing Listrik (Patungan Sesama Penghuni)",
    bathroomType: "KM Khusus Rumah B",
    features: ["Akses Dapur Internal", "Kasur Single", "Lemari", "Meja & Kursi", "Kipas Angin", "⚡ Listrik Sharing"],
    description: "Kamar Rumah B-2. Kamar dengan dapur mini internal. Listrik sharing/patungan bersama.",
    image: "kamar.jpg"
  },
  {
    id: "RB-03",
    name: "Kamar B-3 (Tengah Kanan)",
    building: "Rumah B",
    zone: "Sayap Kiri Tengah",
    size: "3.5 x 3.5 m",
    type: "Rumah B",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: false,
    hasPrivateKitchen: true,
    electricity: "Sharing Listrik (Patungan Sesama Penghuni)",
    bathroomType: "KM Bersama",
    features: ["Akses Dapur Internal", "Kasur Single", "Lemari", "Meja & Kursi", "Kipas Angin", "⚡ Listrik Sharing"],
    description: "Kamar Rumah B-3. Listrik sharing bersama penghuni. Saat ini sedang terisi.",
    image: "kamar.jpg"
  },

  // 4. BOTTOM-CENTER — Rumah C / 
  // Harga Rp 650.000 — Listrik SHARING dibagi penghuni (Wi-Fi termasuk)
  {
    id: "RC-01",
    name: "Kamar C-1",
    building: "Rumah C",
    zone: "Bawah Tengah",
    size: "3.2 x 4.0 m",
    type: "Rumah C",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "emerald",
    isEnsuite: false,
    hasPrivateKitchen: false,
    electricity: "Sharing Listrik (Patungan Sesama Penghuni)",
    bathroomType: "KM Bersama",
    features: [
      "Rumah Tenang (Hanya 2 Kamar)",
      "Kipas Angin Sejuk",
      "Lemari Pakaian Nyaman",
      "Kasur Singel",
      "Meja & Kursi Belajar",
      "KM Berdampingan (Dibagi 2 Kamar)",
      "Dekat Dapur Bersama",
      "⚡ Listrik Sharing"
    ],
    description: "Kamar Rumah C-1. Rumah 2 kamar, dekat Dapur Bersama. Listrik sharing/patungan bersama sesama penghuni.",
    image: "kamar.jpg"
  },
  {
    id: "RC-02",
    name: "Kamar C-2",
    building: "Rumah C",
    zone: "Bawah Tengah",
    size: "3.2 x 4.0 m",
    type: "Rumah C",
    price: 650000,
    priceFormatted: "Rp 650.000",
    status: "Terisi",
    statusColor: "stone",
    isEnsuite: false,
    hasPrivateKitchen: false,
    electricity: "Sharing Listrik (Patungan Sesama Penghuni)",
    bathroomType: "KM Bersama",
    features: [
      "Rumah Tenang (Hanya 2 Kamar)",
      "Kipas Angin Sejuk",
      "Lemari Pakaian Nyaman",
      "Kasur Singel",
      "Meja & Kursi Belajar",
      "KM Berdampingan (Dibagi 2 Kamar)",
      "Dekat Dapur Bersama",
      "⚡ Listrik Sharing"
    ],    
    description: "Kamar Rumah C-2. Listrik sharing bersama penghuni. Saat ini sedang terisi.",
    image: "kamar.jpg"
  }
];

// Special Communal Facility Data
const COMMUNAL_FACILITIES = {
  kitchen: {
    id: "DK-01",
    name: "Dapur Bersama Komunal",
    code: "outdoor_kitchen",
    location: "Courtyard Terbuka (Sebelah Rumah C)",
    description: "Dapur semi-terbuka di halaman kost. Dilengkapi kompor gas, kulkas bersama, wastafel cuci piring, meja bar, dan air minum galon gratis untuk seluruh penghuni.",
    equipment: [
      "Kompor Gas 1 Tungku + Gas Disediakan",
      "Kulkas 2 Pintu Bersama untuk Simpan Bahan Makanan",
      "Meja Bar Kayu & Tempat Santai",
      "Peralatan Masak Dasar (Wajan, Panci, Spatula)",
      "Untuk Gas Sharing Setiap Pemakai"
    ]
  }
};

// Artikel SEO Lengkap & Terstruktur (Untuk Tugas Optimasi SEO)
const SEO_ARTICLES = [
  {
    id: "when-ya-bisa-bangun-pagi-tanpa-panik-in-this-economy",
    slug: "when-ya-bisa-bangun-pagi-tanpa-panik-in-this-economy",
    title: "When Ya Bisa Bangun Pagi Tanpa Panik? (In This Economy, Wajib Pindahnya ke Sini!)",
    category: "Gaya Hidup & Solusi Kost",
    date: "10 Oktober 2026",
    readTime: "4 menit baca",
    author: "Anisa Mildawati",
    image: "post-bangun-pagi.jpg",
    originalUrl: "http://www.patmina.my.id/2026/10/when-ya-bisa-bangun-pagi-tanpa-panik-in.html",
    excerpt: "In this economy, pengeluaran harus diatur seketat mungkin tapi kesehatan mental jangan dikorbanin. Mau bangun jam 7 pagi dengan santai tanpa panik macet ke BRIN Serpong? Solusinya move on ke Kost Bunda John Komplek Batan Lama No. A-5!",
    keywords: "when ya bisa bangun pagi, in this economy kost serpong, kost dekat brin kst serpong, kost komplek batan lama a5, kost magang puspiptek serpong, kost murah tangerang selatan, sewa kost bebas macet serpong",
    metaDescription: "In this economy, jangan korbankan kesehatan mental! Nikmati bangun pagi santai 3 menit ke BRIN KST Serpong di Kost Bunda John Komplek Batan Lama No. A5 mulai 650rb/bulan all-in.",
    content: `
      <div class="my-4 rounded-2xl overflow-hidden border border-[#D0E3EF] shadow-sm">
        <img src="post-bangun-pagi.jpg" alt="Meme mahasiswa magang dan peneliti BRIN melirik Kost Bunda John Komplek Batan Lama A5 Serpong" class="w-full h-auto object-cover max-h-96 mx-auto">
        <p class="text-xs text-stone-500 bg-stone-50 p-2.5 text-center border-t border-[#D0E3EF] italic">
          Bisa bangun pagi santai dan tiba di kantor dalam 3 menit: Impian pejuang magang & peneliti BRIN KST Serpong yang jadi kenyataan di Kost Bunda John.
        </p>
      </div>

      <p class="lead font-medium text-stone-800 text-base leading-relaxed">
        <strong>In this economy</strong>, pengeluaran bulanan memang harus diatur seketat mungkin. Tapi ingat, <em>kesehatan mental dan kebugaran fisik juga nggak boleh dikorbankan!</em>
      </p>

      <p>Coba deh bayangkan sejenak skenario indah ini: kamu bisa bangun tidur jam 07.00 pagi dengan tenang, sempat menyeduh secangkir kopi atau teh hangat, menikmati sejuknya udara pagi, lalu sarapan tanpa harus melotot ke arah jam dinding sambil deg-degan jantung serasa mau copot. Terus, <strong>when ya</strong> bisa berangkat magang, kuliah, atau kerja tanpa perlu mandi peluh dingin gara-gara terjebak kemacetan horor di jalanan?</p>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Realita Pejuang Magang & Peneliti di Kawasan BRIN Puspiptek Serpong</h2>
      <p>Buat para pejuang magang, mahasiswa tingkat akhir, peneliti muda, hingga karyawan yang aktivitas hariannya berpusat di kawasan <strong>Kawasan Sains dan Teknologi (KST) B.J. Habibie BRIN</strong> dan <strong>PUSPIPTEK Serpong</strong>, impian hidup santai seperti itu sebenarnya <strong>bukan cuma angan-angan belaka</strong>.</p>
      
      <p>Kalau lokasi tempat tinggal atau kosan kamu sekarang masih berada di "ujung dunia" yang butuh waktu 30 sampai 50 menit perjalanan menembus padatnya Jalan Raya Puspiptek, ya wajar banget kalau setiap hari cuma bisa ngebatin: <em>"When ya hidupku bisa lebih santai dan nggak stres di jalan?"</em>.</p>

      <div class="my-6 rounded-2xl overflow-hidden border border-[#D0E3EF] shadow-sm bg-stone-50 p-4 text-center">
        <img src="post-meme-pilihan-kosan.jpg" alt="Meme perbandingan pilihan kosan anak magang BRIN: Kost Bunda Batan Lama A5 yang strategis dan tenang selalu jadi pilihan utama" class="max-w-md w-full h-auto mx-auto rounded-xl shadow-sm border border-stone-200">
        <p class="text-xs text-stone-600 mt-3 font-medium italic">
          Meme Realita Anak Magang: Kos jauh di ujung dunia bikin lelah jiwa raga, padahal ada Kost Bunda John yang tinggal jalan santai ke area BRIN/PUSPIPTEK!
        </p>
      </div>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Solusinya Gampang: Move On ke Kost Bunda John Komplek Batan Lama A5!</h2>
      <p>Daripada setiap hari mengeluh capek di jalan dan stamina keburu habis sebelum tugas riset dimulai, solusi terbaiknya adalah <strong>move on ke Kost Bunda John</strong> yang berlokasi super strategis di <strong>Komplek Batan Lama No. A-5, Kademangan, Kec. Setu / Serpong, Tangerang Selatan</strong>!</p>

      <p class="mt-2 font-medium">Kenapa tempat ini pas banget buat mewujudkan resolusi <em>when ya</em> versi kamu?</p>

      <div class="space-y-4 my-5">
        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <h3 class="text-sm sm:text-base font-bold text-[#1A2B38] mb-1 flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold">1</span>
            Dekat Banget ke Lokasi Aktivitas (Hanya 1.2 km / 3-5 Menit!)
          </h3>
          <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Karena posisinya berbatasan langsung dengan perimeter kawasan BRIN KST Serpong, <em>when ya</em> mau on-time ke tempat magang nggak perlu lagi pasang 10 alarm berturut-turut atau balapan lawan truk di jalan raya. Mau naik motor, sepeda santai, atau bahkan jalan kaki pagi pun sangat memungkinkan!
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <h3 class="text-sm sm:text-base font-bold text-[#1A2B38] mb-1 flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">2</span>
            Lingkungan Komplek yang Tenang, Asri, & Bebas Bising
          </h3>
          <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Berada di dalam lingkungan pemukiman Komplek Batan Lama yang tertib dan rindang. Suasananya tenang bikin istirahat malam jadi berkualitas (deep sleep tanpa raungan knalpot bising). Saat harus lembur menulis laporan riset, jurnal ilmiah, atau skripsi kampus, kamu bisa fokus 100% tanpa distraksi.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <h3 class="text-sm sm:text-base font-bold text-[#1A2B38] mb-1 flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs flex items-center justify-center font-bold">3</span>
            Dompet Aman, Pikiran Tenang (Mulai Rp 650.000 / Bulan)
          </h3>
          <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Di saat rata-rata harga sewa kost di BSD City mencapai 1.5 - 2.5 juta per bulan, Kost Bunda John menawarkan opsi tarif terjangkau mulai <strong>Rp 650.000/bulan</strong> yang sudah mencakup fasilitas esensial. Informasi fasilitas dan ketentuannya transparan dari awal, jadi keuangan kamu <em>in this economy</em> tetap terkontrol rapi tanpa boncos!
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <h3 class="text-sm sm:text-base font-bold text-[#1A2B38] mb-1 flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center font-bold">4</span>
            Fasilitas Dapur Bersama Bikin Pengeluaran Makin Irit
          </h3>
          <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Tersedia Dapur Bersama yang dilengkapi kompor gas, kulkas penyimpanan, wastafel cuci piring, dan dispenser air galon gratis. Bisa masak makanan favorit sendiri atau bikin kopi kapan saja, hemat pengeluaran makan hingga Rp 500.000 - Rp 800.000 setiap bulannya.
          </p>
        </div>
      </div>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Tabel Perbandingan: Kost Jauh vs Kost Bunda John Batan Lama</h2>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left text-xs border-collapse border border-[#D0E3EF] rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-[#EEF5FA] text-[#1A2B38]">
              <th class="p-3 border border-[#D0E3EF] font-bold">Parameter</th>
              <th class="p-3 border border-[#D0E3EF] font-bold text-red-700">Kost Jauh / Pinggiran Jalan Raya</th>
              <th class="p-3 border border-[#D0E3EF] font-bold text-emerald-800">Kost Bunda John Batan Lama A5</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#D0E3EF] text-stone-700">
            <tr>
              <td class="p-3 border border-[#D0E3EF] font-semibold">Waktu Tempuh ke BRIN</td>
              <td class="p-3 border border-[#D0E3EF]">30 - 50 menit (macet parah)</td>
              <td class="p-3 border border-[#D0E3EF] font-bold text-emerald-700">3 - 5 menit (1.2 km bebas macet)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#D0E3EF] font-semibold">Jam Bangun Pagi</td>
              <td class="p-3 border border-[#D0E3EF]">05.30 pagi (panik & terburu-buru)</td>
              <td class="p-3 border border-[#D0E3EF] font-bold text-emerald-700">07.00 pagi (santai, sempat ngopi)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#D0E3EF] font-semibold">Ongkos Transport Bulanan</td>
              <td class="p-3 border border-[#D0E3EF]">Rp 400.000 - Rp 750.000 (ojol/bensin)</td>
              <td class="p-3 border border-[#D0E3EF] font-bold text-emerald-700">Rp 30.000 - Rp 50.000 (sangat hemat)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#D0E3EF] font-semibold">Suasana Istirahat</td>
              <td class="p-3 border border-[#D0E3EF]">Bising suara truk & motor pinggir jalan</td>
              <td class="p-3 border border-[#D0E3EF] font-bold text-emerald-700">Tenang, asri di dalam komplek perumahan</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Jangan Cuma Ngebatin, Yuk Wujudkan Sekarang!</h2>
      <p>Daripada cuma bisa iri ngelihat rekan magang lain yang bisa berangkat santai tanpa stres, mending langsung buktikan sendiri kenyamanannya. Kuota kamar di kawasan dekat BRIN Serpong selalu jadi rebutan setiap pergantian semester magang.</p>

      <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] space-y-2 text-xs sm:text-sm my-4">
        <p class="font-bold text-[#1A2B38]">Rekomendasi Langkah Selanjutnya:</p>
        <ul class="list-disc pl-5 space-y-1 text-stone-600">
          <li>Lihat pembagian layout unit kamar di <a href="denah.html" class="text-[#3A6FA8] font-bold hover:underline">Denah Rumah Interaktif</a>.</li>
          <li>Ketahui rincian fasilitas masing-masing unit di <a href="kamar.html" class="text-[#3A6FA8] font-bold hover:underline">Katalog Tipe Kamar</a>.</li>
          <li>Petakan rute akurat melalui <a href="https://maps.app.goo.gl/HtAMS4VSvMruzY4Q7" target="_blank" class="text-[#3A6FA8] font-bold hover:underline">Google Maps Kost Bunda Batan Lama A5</a>.</li>
          <li>Baca versi postingan aslinya di blog <a href="http://www.patmina.my.id/2026/10/when-ya-bisa-bangun-pagi-tanpa-panik-in.html" target="_blank" class="text-[#3A6FA8] font-bold hover:underline">patmina.my.id</a>.</li>
        </ul>
      </div>
    `
  },
  {
    id: "kost-gratis-se-tangerang-selatan-iya-beneran-tapi",
    slug: "kost-gratis-se-tangerang-selatan-iya-beneran-tapi",
    title: "Kost Gratis Se-Tangerang Selatan? Iya Beneran, Tapi.. (Fakta & Tips Hemat)",
    category: "Fakta & Promo Kost",
    date: "09 Oktober 2026",
    readTime: "4 menit baca",
    author: "Anisa Mildawati",
    image: "post-kost-gratis.jpg",
    originalUrl: "http://www.patmina.my.id/2026/10/tentang-kami-kost-bunda-batan-lama-a5.html",
    excerpt: "Mendengar penawaran Kost Gratis Se-Tangerang Selatan pasti langsung bikin kaget dan penasaran! Tenang, jangan salah paham. Simak fakta fasilitas gratis survei, konsultasi, dan tips anti-boncos di Serpong.",
    keywords: "kost gratis tangerang selatan, survei kost gratis serpong, kost bunda batan lama a5, kost murah dekat brin serpong, kost puspiptek setu, kontrakan murah tangerang selatan, sewa kamar hemat serpong",
    metaDescription: "Penasaran penawaran kost gratis se-Tangerang Selatan? Simak fakta fasilitas gratis survei sepuasnya, konsultasi rute, dan tips hemat tinggal dekat BRIN Serpong.",
    content: `
      <div class="my-4 rounded-2xl overflow-hidden border border-[#D0E3EF] shadow-sm bg-stone-50 p-4 text-center">
        <img src="post-kost-gratis.jpg" alt="Poster Kost Gratis Se-Tangerang Selatan - Fasilitas Survei & Konsultasi Gratis di Kost Bunda John Komplek Batan Lama A5" class="max-w-xs w-full h-auto mx-auto rounded-xl shadow-md border border-stone-200">
        <p class="text-xs text-stone-600 mt-3 font-medium italic">
          Poster Resmi Kost Bunda Batan Lama A5: Khusus anak magang & peneliti BRIN. Gratis survei lokasi, konsultasi kamar, dan panduan rute!
        </p>
      </div>

      <p class="lead font-medium text-stone-800 text-base leading-relaxed">
        Mendengar penawaran <strong>Kost Gratis Se-Tangerang Selatan</strong> pasti langsung bikin mata melotot kaget bercampur penasaran!
      </p>

      <p>Apalagi buat kalangan mahasiswa perantau, peneliti muda, maupun anak magang yang saldo dompetnya makin menipis menjelang akhir bulan. Siapa pun pasti pengin menghemat pengeluaran tempat tinggal kalau memang ada kesempatan emas, bukan?</p>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Eits, Tenang Dulu Ya.. Jangan Sampai Salah Paham!</h2>
      <p>Biar tidak ada salah pengertian, maksud <strong>"gratis"</strong> di sini adalah <strong>gratis survei lokasi sepuasnya, gratis konsultasi ketersediaan kamar, dan gratis tanya-tanya rute perjalanan</strong> tanpa dipungut biaya sepeser pun oleh pengelola Kost Bunda John!</p>

      <p>Di luar sana, sering kali calon penghuni dipersulit oleh perantara atau calo kost yang meminta biaya administrasi pendaftaran survei. Di Kost Bunda John, Anda bisa bertanya apa saja, meminta foto/video kamar terbaru, hingga survei langsung ke lokasi secara <strong>100% Cuma-Cuma</strong>.</p>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Waspada Jebakan "Sewa Murah di Awal, Malah Boncos di Ongkos"</h2>
      <p>Mencari tempat tinggal sementara di daerah Serpong dan sekitarnya—khususnya bagi kamu yang punya mobilitas harian di kawasan <strong>BRIN KST B.J. Habibie</strong> atau <strong>PUSPIPTEK</strong>—memang butuh perhitungan matang agar uang saku tidak habis di jalan.</p>

      <p>Banyak calon penghuni yang tergiur iming-iming sewa kamar murah Rp 400.000 - Rp 500.000 di pelosok. Namun saat sudah ditempati, ternyata jaraknya 8 kilometer di dalam perkampungan padat tanpa akses angkutan umum. Akibatnya:</p>

      <ul class="space-y-2 my-3 pl-2">
        <li class="flex items-start gap-2 text-xs sm:text-sm">
          <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
          <span><strong>Tekor Ongkos Ojek Online:</strong> Bolak-balik ojol Rp 20.000 - Rp 25.000 per perjalanan x 2 kali sehari = Rp 1.000.000 - Rp 1.250.000 per bulan hanya untuk ongkos jalan!</span>
        </li>
        <li class="flex items-start gap-2 text-xs sm:text-sm">
          <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
          <span><strong>Stamina Terkuras di Jalan:</strong> Jam 7 pagi sudah harus berjibaku dengan debu dan kemacetan Jalan Raya Puspiptek.</span>
        </li>
        <li class="flex items-start gap-2 text-xs sm:text-sm">
          <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
          <span><strong>Tagihan Siluman:</strong> Belum lagi biaya listrik token yang boros karena meteran bersama tidak terkontrol.</span>
        </li>
      </ul>

      <p>Ketimbang stamina dan uang saku kamu habis sia-sia di jalan setiap hari, ada opsi cerdas yang ramah di kantong dan lokasinya super pas: <strong>Kost Bunda John di Komplek Batan Lama No. A5, Kademangan, Kec. Setu / Serpong, Tangerang Selatan</strong>.</p>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Fasilitas "Gratisan" Nyata yang Dinikmati Penghuni Kost Bunda John</h2>
      <p>Selain gratis survei dan konsultasi tanpa biaya calo, Kost Bunda John menyediakan berbagai fasilitas riil yang membantu penghuni hidup hemat dan produktif:</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-2">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3 class="font-bold text-stone-800 text-sm mb-1">Gratis Listrik & Wi-Fi</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            Khusus Kamar Rumah A Utama tarif Rp 650.000 sudah <em>All-In</em> mencakup listrik pemakaian normal dan koneksi internet Wi-Fi tanpa iuran tambahan.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-2">
            <i class="fa-solid fa-kitchen-set"></i>
          </div>
          <h3 class="font-bold text-stone-800 text-sm mb-1">Gratis Dapur Bersama</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            Dilengkapi kompor gas, kulkas bersama untuk menyimpan bahan makanan, wastafel cuci piring, dan dispenser air galon gratis.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-2">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
          <h3 class="font-bold text-stone-800 text-sm mb-1">Jarak 3 Menit ke BRIN</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            Hanya 1.2 km dari gerbang riset BRIN KST Serpong. Cukup 3-5 menit berkendara motor atau sepeda santai tanpa terkena kemacetan jalan raya.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-[#F4F8FB] border border-[#D0E3EF] shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mb-2">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h3 class="font-bold text-stone-800 text-sm mb-1">Lingkungan Komplek Asri</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            Berada di dalam komplek perumahan Batan Lama yang hijau, tenang, dan aman. Sangat kondusif untuk istirahat dan belajar malam hari.
          </p>
        </div>
      </div>

      <h2 class="text-lg sm:text-xl font-bold text-stone-900 mt-6 mb-2">Cara Memanfaatkan Fasilitas Gratis Ini Sekarang Juga</h2>
      <p>Daripada kamu makin penasaran atau keduluan kehabisan kamar oleh gelombang mahasiswa magang baru, mendingan manfaatkan fasilitas gratis survei dan tanya jawabnya sekarang juga:</p>

      <ol class="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-stone-700 my-4">
        <li><strong>Konsultasi WhatsApp:</strong> Kirim pesan ke pengelola di <strong>0896-6990-9373</strong> untuk cek ketersediaan kamar terbaru.</li>
        <li><strong>Survei Online:</strong> Intip denah rumah dan tata letak kamar secara interaktif di halaman <a href="denah.html" class="text-[#3A6FA8] font-bold hover:underline">Denah Rumah</a> dan katalog di <a href="kamar.html" class="text-[#3A6FA8] font-bold hover:underline">Tipe Kamar</a>.</li>
        <li><strong>Cek Titik Presisi Maps:</strong> Buka langsung navigasi GPS melalui tautan resmi <a href="https://maps.app.goo.gl/HtAMS4VSvMruzY4Q7" target="_blank" class="text-[#3A6FA8] font-bold hover:underline">Google Maps Kost Bunda Batan Lama A5</a>.</li>
        <li><strong>Kunjungi Sumber Asli:</strong> Baca dokumentasi lengkap di blog <a href="http://www.patmina.my.id/2026/10/tentang-kami-kost-bunda-batan-lama-a5.html" target="_blank" class="text-[#3A6FA8] font-bold hover:underline">patmina.my.id</a>.</li>
      </ol>
    `
  },
  {
    id: "rekomendasi-kost-murah-dekat-brin-kst-serpong",
    slug: "rekomendasi-kost-murah-dekat-brin-kst-serpong",
    title: "Rekomendasi Kost Murah Dekat BRIN KST Serpong Mulai 650 Ribuan All-In",
    category: "Panduan Kost Serpong",
    date: "Oktober 2026",
    readTime: "4 menit baca",
    author: "Tim Riset Kost Batan Lama",
    excerpt: "Cari tempat tinggal terjangkau dekat BRIN KST B.J. Habibie Serpong? Temukan info kamar mulai 650 ribuan yang hanya berjarak 3 menit perjalanan.",
    keywords: "kost dekat brin kst serpong, kost murah serpong, kost batan lama, kost puspiptek, kost setu tangerang selatan",
    metaDescription: "Rekomendasi kost murah dan tenang dekat BRIN KST Serpong mulai Rp 650.000 per bulan. Termasuk listrik, Wi-Fi gratis, dan dapur bersama lengkap di Komplek Batan Lama A5.",
    content: `
      <p>Kawasan Sains dan Teknologi (KST) B.J. Habibie BRIN di Serpong, Tangerang Selatan, merupakan pusat riset nasional yang setiap bulannya menyambut ratusan peneliti, pegawai pemerintah, hingga mahasiswa magang riset. Kebutuhan utama yang sering menjadi pertimbangan utama mereka adalah mencari tempat tinggal yang terjangkau, tenang, dan dekat dengan gerbang perkantoran.</p>
      
      <h2>1. Keuntungan Tinggal di Komplek Batan Lama No. A-5</h2>
      <p>Komplek Batan Lama memiliki lokasi perimeter yang berbatasan langsung dengan kawasan BRIN KST Serpong. Dari <strong>Kost Batan Lama A-5</strong>, jarak menuju area gedung riset BRIN hanya sekitar <strong>1.2 kilometer</strong> atau <strong>3 hingga 5 menit berkendara sepeda motor</strong>. Anda bahkan dapat mencapainya dengan jalan santai atau sepeda pagi.</p>
      
      <h2>2. Pilihan Kamar Ramah Kantong Mulai Rp 650.000 / Bulan</h2>
      <p>Dibandingkan rata-rata harga sewa kamar kost di area BSD City yang berkisar Rp 1.500.000 hingga Rp 2.500.000 per bulan, Kost Batan Lama A-5 menawarkan tarif yang jauh lebih bersahabat:</p>
      <ul>
        <li><strong>Rumah A Utama (Rp 650.000 / bulan):</strong> Pilihan paling hemat, sudah termasuk biaya listrik normal, air bersih, dan <strong>koneksi internet Wi-Fi</strong>.</li>
        <li><strong>Rumah B & C (Rp 650.000 / bulan):</strong>  tenang dengan jumlah kamar terbatas (2-3 kamar) dan fasilitas dapur internal (Rumah B).</li>
        <li><strong>Kontrakan Privat Mandiri (Rp 650.000 / bulan):</strong> Unit mandiri dengan kamar mandi dalam pribadi, fasilitas lengkap, dan akses pintu langsung.</li>
      </ul>

      <h2>3. Dapur Bersama yang Membantu Menghemat Pengeluaran</h2>
      <p>Salah satu beban biaya terbesar bagi perantau adalah pengeluaran makan harian. Dengan adanya Dapur Bersama yang menyediakan kompor gas dan kulkas penyimpanan, penghuni dapat menghemat biaya makan hingga Rp 500.000 sampai Rp 800.000 setiap bulannya.</p>

      <h2>4. Akses Transportasi Publik yang Terjangkau</h2>
      <p>Bagi yang sering bepergian ke Jakarta, Stasiun KRL Rawa Buntu dan Stasiun Serpong dapat dicapai dalam waktu 10 hingga 12 menit saja. Hal ini menjadikan Kost Batan Lama A-5 opsi hunian yang sangat seimbang antara harga, kenyamanan, dan aksesibilitas.</p>
    `
  },
  {
    id: "tips-memilih-kost-untuk-peneliti-dan-magang-brin-serpong",
    slug: "tips-memilih-kost-untuk-peneliti-dan-magang-brin-serpong",
    title: "Tips Memilih Kost untuk Peneliti & Mahasiswa Magang di BRIN Serpong",
    category: "Tips Hunian",
    date: "Oktober 2026",
    readTime: "5 menit baca",
    author: "Tim Riset Kost Batan Lama",
    excerpt: "Panduan penting bagi mahasiswa magang dan peneliti baru di BRIN KST Serpong agar tidak salah memilih kost dan tetap hemat budget bulanan.",
    keywords: "kost magang brin serpong, sewa kamar dekat puspiptek, kost mahasiswa iti serpong, tips kost hemat serpong",
    metaDescription: "Tips cerdas mencari tempat kost hemat dan bebas macet untuk mahasiswa magang dan peneliti di BRIN KST Serpong. Hindari jalan macet dan manfaatkan fasilitas dapur bersama.",
    content: `
      <p>Memulai aktivitas magang atau penelitian di laboratorium BRIN KST Serpong membutuhkan energi dan konsentrasi tinggi. Lingkungan tempat tinggal yang tenang dan dekat sangat mempengaruhi produktivitas harian Anda. Berikut beberapa tips praktis sebelum memutuskan menyewa kost:</p>

      <h2>1. Prioritaskan Jarak Tempuh di Bawah 10 Menit</h2>
      <p>Jalan Raya Puspiptek sering mengalami kepadatan pada jam masuk dan pulang kerja (pukul 07.30 - 08.30 dan 16.30 - 18.00). Memilih kost di dalam kawasan perumahan seperti Komplek Batan Lama No. A-5 memungkinkan Anda menuju lokasi riset dalam waktu 3-5 menit saja tanpa perlu berhadapan dengan kemacetan jalan utama.</p>

      <h2>2. Pastikan Transparansi Biaya Listrik dan Internet</h2>
      <p>Tanyakan di awal apakah tarif sewa sudah mencakup listrik dan Wi-Fi. Kamar Rumah A Utama di Kost Batan Lama A-5 menerapkan sistem <em>all-in</em>, sehingga Anda tidak perlu khawatir adanya tagihan listrik tak terduga di akhir bulan.</p>

      <h2>3. Pilih Lingkungan yang Tenang dan Rindang</h2>
      <p>Menulis laporan riset, jurnal, maupun skripsi membutuhkan suasana yang hening. Suasana asri dan jauh dari kebisingan jalan raya utama membuat Komplek Batan Lama menjadi tempat yang sangat kondusif untuk beristirahat dan belajar.</p>
    `
  },
  {
    id: "perbandingan-kontrakan-privat-vs-kamar-rumah-utama",
    slug: "perbandingan-kontrakan-privat-vs-kamar-rumah-utama",
    title: "Perbandingan Kontrakan Privat vs Kamar Rumah Utama di Kost Batan Lama A5",
    category: "Perbandingan Hunian",
    date: "Oktober 2026",
    readTime: "4 menit baca",
    author: "Tim Riset Kost Batan Lama",
    excerpt: "Bingung memilih antara unit Kontrakan Privat Rp 850rb atau Kamar Rumah Utama Rp 650rb? Simak perbandingan detail fasilitas, privasi, dan kepraktisannya.",
    keywords: "kontrakan murah serpong, kost kamar mandi dalam serpong, kost batan a5, sewa kontrakan brin",
    metaDescription: "Perbandingan lengkap tipe hunian di Kost Batan Lama A5: Kontrakan Privat mandiri Rp 650.000 vs Kamar Rumah Utama Rp 650.000. Temukan pilihan yang paling cocok untuk Anda.",
    content: `
      <p>Kost Batan Lama A-5 menyediakan berbagai tipe hunian yang dirancang untuk memenuhi kebutuhan privasi dan anggaran yang berbeda-beda. Dua pilihan terpopuler adalah unit <strong>Kontrakan Privat Mandiri</strong> dan <strong>Kamar Rumah Utama</strong>.</p>

      <h2>1. Kontrakan Privat Mandiri (Rp 650.000 / Bulan)</h2>
      <p>Tipe ini berada di deretan depan (KP-01 s/d KP-04) dengan pintu masuk mandiri dan kamar mandi di bagian dalam unit. Fitur utama mencakup:</p>
      <ul>
        <li>Kamar mandi dalam pribadi yang bersih.</li>
        <li>Area meja dapur mini dan wastafel cuci piring di dalam unit.</li>
        <li>Meteran listrik token 900VA mandiri sesuai pemakaian pribadi.</li>
        <li>Privasi maksimal tanpa harus berbagi koridor dengan penghuni lain.</li>
      </ul>

      <h2>2. Kamar Rumah Utama (Rp 650.000 / Bulan)</h2>
      <p>Tipe ini berada di dalam bangunan rumah A utama (R-01 s/d R-06) dan menjadi opsi paling ekonomis untuk mahasiswa dan staf yang ingin berhemat:</p>
      <ul>
        <li>Tarif sewa sudah <strong>All-In</strong> (bebas biaya tambahan listrik normal, air, dan Wi-Fi).</li>
        <li>Ukuran kamar luas hingga 3.5 x 4.0 meter.</li>
        <li>Kamar mandi luar yang selalu terawat dan bersih.</li>
        <li>Akses langsung ke koridor dalam yang adem dan Dapur Bersama di halaman.</li>
      </ul>

      <h2>Kesimpulan: Mana yang Paling Tepat untuk Anda?</h2>
      <p>Jika Anda memprioritaskan privasi penuh dan ingin memasak di dalam kamar sendiri, pilihlah <strong>Kontrakan Privat</strong>. Namun jika Anda ingin meminimalkan pengeluaran bulanan tanpa pusing biaya listrik, <strong>Kamar Rumah A Utama</strong> adalah opsi terbaik.</p>
    `
  },
  {
    id: "panduan-akses-rute-menuju-brin-kst-serpong-dan-batan-lama",
    slug: "panduan-akses-rute-menuju-brin-kst-serpong-dan-batan-lama",
    title: "Panduan Akses & Rute Menuju BRIN KST Serpong dan Komplek Batan Lama",
    category: "Panduan Rute",
    date: "Oktober 2026",
    readTime: "3 menit baca",
    author: "Tim Riset Kost Batan Lama",
    excerpt: "Rute tercepat menuju Komplek Batan Lama No. A-5 dari Stasiun KRL Rawa Buntu, Tol Serpong-Balaraja, dan kawasan Puspiptek Serpong.",
    keywords: "rute ke brin kst serpong, lokasi komplek batan lama, stasiun terdekat brin serpong, kost batan lama",
    metaDescription: "Panduan rute transportasi lengkap menuju Komplek Batan Lama A5 dekat BRIN KST B.J. Habibie Serpong via KRL Commuter Line, angkutan umum, dan rute motor cepat.",
    content: `
      <p>Bagi Anda yang baru pertama kali berkunjung ke kawasan penelitian KST Habibie Serpong, berikut panduan rute termudah menuju lokasi <strong>Kost Batan Lama No. A-5</strong>:</p>

      <h2>1. Menggunakan KRL Commuter Line</h2>
      <p>Turun di <strong>Stasiun Rawa Buntu</strong> atau <strong>Stasiun Serpong</strong>. Dari stasiun, Anda dapat melanjutkan perjalanan dengan ojek online (Gojek / Grab) dengan waktu tempuh sekitar 10-12 menit (ongkos berkisar Rp 12.000 - Rp 18.000) langsung menuju Komplek Batan Lama A-5.</p>

      <h2>2. Dari Arah Jakarta via Jalan Tol</h2>
      <p>Gunakan Tol Jakarta-Serpong dan ambil pintu keluar Tol BSD Barat / Rawa Buntu. Lanjutkan perjalanan menuju Jalan Raya Puspiptek ke arah Muncul/Setu. Komplek Batan Lama berada tepat di samping kawasan BRIN KST Serpong.</p>

      <h2>3. Hubungi Pengelola untuk Survei Lokasi</h2>
      <p>Jika Anda berencana datang langsung untuk melihat kamar dan lingkungan kost, Anda cukup menghubungi WhatsApp pengelola di nomor <strong>0896-6990-9373</strong> untuk mendapatkan share lokasi GPS akurat.</p>
    `
  }
];

// Helper Functions for Direct WhatsApp
function generateDirectWhatsAppUrl(customText = "") {
  const phone = KOST_INFO.whatsapp;
  const defaultMsg = `Halo Pengelola ${KOST_INFO.name},\nSaya tertarik tanya info kamar kost murah dekat BRIN KST Serpong (Komplek Batan Lama No. A-5). Apakah saat ini ada kamar yang tersedia? Terima kasih!`;
  const text = customText || defaultMsg;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function generateRoomWhatsAppUrl(roomId, roomName, priceFormatted) {
  const phone = KOST_INFO.whatsapp;
  const text = `Halo Pengelola ${KOST_INFO.name},\nSaya tertarik dengan kamar ${roomId} (${roomName} - ${priceFormatted}/bulan). Apakah unit ini masih tersedia? Kapan saya bisa survei ke Komplek Batan Lama No. A-5? Terima kasih!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Alias for backwards compatibility
function generateWhatsAppBookingUrl(roomId, roomName) {
  const room = getRoomById(roomId);
  const price = room ? room.priceFormatted : "Rp 650.000";
  return generateRoomWhatsAppUrl(roomId, roomName, price);
}

function getRoomById(id) {
  if (!id) return null;
  return ROOMS_DATA.find(r => r.id.toLowerCase() === id.toLowerCase());
}

function getArticleBySlug(slug) {
  if (!slug) return null;
  return SEO_ARTICLES.find(a => a.slug === slug || a.id === slug);
}

// Global browser window exports for seamless compatibility
if (typeof window !== "undefined") {
  window.KOST_INFO = KOST_INFO;
  window.ROOMS_DATA = ROOMS_DATA;
  window.COMMUNAL_FACILITIES = typeof COMMUNAL_FACILITIES !== "undefined" ? COMMUNAL_FACILITIES : null;
  window.SEO_ARTICLES = SEO_ARTICLES;
  window.getRoomById = getRoomById;
  window.getArticleBySlug = getArticleBySlug;
  window.generateRoomWhatsAppUrl = generateRoomWhatsAppUrl;
  window.generateDirectWhatsAppUrl = generateDirectWhatsAppUrl;
}

