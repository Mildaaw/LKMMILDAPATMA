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
