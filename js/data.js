const FHM = {
  WA_NUMBER: "6287846961119",   // format 62, tanpa 0 / +
  BENGKEL: "FHM MOTOR",

  icons: {
    oli: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    ban: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>',
    rem: '<circle cx="12" cy="12" r="9"/><path d="M7 12a5 5 0 0 1 5-5M17 12a5 5 0 0 1-5 5"/>',
    busi: '<path d="M9 2h6M10 2v6h4V2M8 8h8v3l-2 2v5a2 2 0 0 1-4 0v-5l-2-2z"/>',
    filter: '<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h8"/>',
    cvt: '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="3"/><path d="M7 8h10M7 16h10"/>',
    aksesori: '<path d="M5 12a7 7 0 0 1 14 0v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M9 12h6"/>',
    tune: '<path d="M3 14a9 9 0 0 1 18 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.2"/>',
    service: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>',
    bbm: '<rect x="4" y="7" width="16" height="10" rx="2"/><path d="M8 7V4h8v3M8 17v3M16 17v3M2 12h2M20 12h2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    bongkar: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="8" cy="7" r="1.5"/><circle cx="16" cy="12" r="1.5"/><circle cx="9" cy="17" r="1.5"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
    shield: '<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'
  },

  kontak: {
    alamat: "Jln.Desa Wanakarta, Ruko Bakso Khayalan",
    nomorTampil: "0878 4696 1119",
    jam: [
      { hari: "Senin – Sabtu", waktu: "[09.00 – 21.00]" },
      { hari: "Minggu", waktu: "[Tutup]" }
    ],
    instagram: "@fhmmotorofficial"
  },

  kategori: ["Oli Matic", "Oli Bebek", "Oli Sport", "Oli Gardan", "Oli Lainnya"],
  products: [
    { id: 1, nama: "Oli Mesin Matic SAE 10W-30 0,8 L", kategori: "Oli Matic", kekentalan: "10W-30", volume: "0,8 L", harga: 55000, deskripsi: "Oli harian untuk motor matic. Mesin lebih halus dan tarikan ringan.", label: "Terlaris" },
    { id: 2, nama: "Oli Mesin Matic SAE 10W-40 0,8 L", kategori: "Oli Matic", kekentalan: "10W-40", volume: "0,8 L", harga: 58000, deskripsi: "Sedikit lebih kental, cocok untuk motor matic yang sering dipakai jauh." },
    { id: 3, nama: "Oli Mesin Matic Full Synthetic 0,8 L", kategori: "Oli Matic", kekentalan: "10W-30", volume: "0,8 L", harga: 95000, deskripsi: "Perlindungan mesin lebih lama dan tahan panas untuk pemakaian berat.", label: "Premium" },
    { id: 4, nama: "Oli Mesin Bebek SAE 20W-50 1 L", kategori: "Oli Bebek", kekentalan: "20W-50", volume: "1 L", harga: 60000, deskripsi: "Oli standar motor bebek dengan kopling manual, tahan pemakaian harian." },
    { id: 5, nama: "Oli Mesin Bebek SAE 10W-40 1 L", kategori: "Oli Bebek", kekentalan: "10W-40", volume: "1 L", harga: 65000, deskripsi: "Lebih encer, membantu mesin cepat bersirkulasi saat dihidupkan pagi hari." },
    { id: 6, nama: "Oli Mesin Sport 4T SAE 10W-40 1 L", kategori: "Oli Sport", kekentalan: "10W-40", volume: "1 L", harga: 80000, deskripsi: "Dirancang untuk motor sport berputaran tinggi dan kopling basah.", label: "Sport" },
    { id: 7, nama: "Oli Mesin Sport Full Synthetic 1 L", kategori: "Oli Sport", kekentalan: "10W-40", volume: "1 L", harga: 135000, deskripsi: "Tahan panas dan gesekan tinggi, cocok untuk berkendara agresif." },
    { id: 8, nama: "Oli Gardan Matic 120 ml", kategori: "Oli Gardan", kekentalan: "80W-90", volume: "120 ml", harga: 15000, deskripsi: "Melumasi gigi transmisi akhir motor matic. Ganti tiap beberapa kali ganti oli mesin." },
    { id: 9, nama: "Oli Gardan Matic 150 ml", kategori: "Oli Gardan", kekentalan: "80W-90", volume: "150 ml", harga: 18000, deskripsi: "Ukuran lebih besar untuk matic yang kapasitas gardannya lebih banyak." },
    { id: 10, nama: "Oli Mesin Motor Bebek Ekonomis 800 ml", kategori: "Oli Bebek", kekentalan: "20W-50", volume: "0,8 L", harga: 42000, deskripsi: "Pilihan hemat untuk perawatan rutin motor bebek." },
    { id: 11, nama: "Oli Samping 2T 1 L", kategori: "Oli Lainnya", kekentalan: "2T", volume: "1 L", harga: 40000, deskripsi: "Khusus motor 2 tak yang memakai oli samping." },
    { id: 12, nama: "Oli Shockbreaker / Fork 1 L", kategori: "Oli Lainnya", kekentalan: "SAE 10", volume: "1 L", harga: 70000, deskripsi: "Untuk peredam kejut depan agar suspensi tetap empuk dan stabil." },
    { id: 13, nama: "Pembersih Mesin (Engine Flush) 300 ml", kategori: "Oli Lainnya", kekentalan: "-", volume: "300 ml", harga: 35000, deskripsi: "Dipakai sebelum ganti oli untuk membersihkan kerak di dalam mesin." },
    { id: 14, nama: "Oli Rantai (Chain Lube) 150 ml", kategori: "Oli Lainnya", kekentalan: "-", volume: "150 ml", harga: 30000, deskripsi: "Menjaga rantai tidak berkarat dan berisik." }
  ],

  layanan: [
    { judul: "Tune Up Semua Jenis", ikon: "tune", teks: "Menyetel ulang mesin agar tarikan halus, tenaga optimal, dan bahan bakar lebih irit.", poin: ["Motor matic", "Motor bebek", "Motor sport"] },
    { judul: "Service Motor", ikon: "service", teks: "Pemeriksaan dan perawatan menyeluruh supaya motor tetap aman dan awet dipakai harian.", poin: ["Cek mesin & kelistrikan", "Cek rem, rantai/CVT, kampas"] },
    { judul: "Karburator & Injeksi", ikon: "bbm", teks: "Pembersihan dan penyetelan sistem bahan bakar agar mesin tidak brebet dan mudah dihidupkan.", poin: ["Service karburator", "Pembersihan & cek injeksi"] },
    { judul: "Ganti Oli", ikon: "oli", teks: "Oli segar menjaga mesin tetap dingin dan terlumasi. Perawatan paling mudah, manfaatnya paling besar.", poin: ["Oli mesin", "Oli gardan (matic)"] },
    { judul: "Spareparts", ikon: "gear", teks: "Tersedia berbagai sparepart motor untuk kebutuhan penggantian dan perbaikan.", poin: ["Konsultasi pilihan sparepart", "Dipasang langsung mekanik"] },
    { judul: "Bongkar Pasang Motor", ikon: "bongkar", teks: "Pembongkaran dan perakitan ulang untuk perbaikan berat atau penggantian komponen mesin.", poin: ["Perbaikan mesin", "Ganti komponen dalam"] },
    { judul: "Tambal Ban", ikon: "ban", teks: "Ban bocor? Ditangani cepat supaya perjalanan Anda tidak terhenti lama.", poin: ["Tubeless & biasa", "Cek tekanan angin"] }
  ],
  opsiLayanan: ["Tune Up", "Service Motor", "Karburator & Injeksi", "Ganti Oli", "Beli / Pasang Sparepart", "Bongkar Pasang Motor", "Tambal Ban", "Belum tahu (konsultasi dulu)"],

  keunggulan: [
    { judul: "Pengerjaan Cepat", ikon: "clock", teks: "Antrean tertata dan mekanik bekerja efisien, sehingga motor Anda cepat kembali dipakai." },
    { judul: "Diagnosa Tepat", ikon: "target", teks: "Masalah dicek dulu sampai ketemu sumbernya, jadi perbaikan tepat sasaran." },
    { judul: "Terpercaya", ikon: "shield", teks: "Penjelasan jujur dan terbuka: apa yang rusak, apa yang perlu diganti, dan berapa biayanya." },
    { judul: "Sparepart & Oli Lengkap", ikon: "oli", teks: "Tersedia berbagai oli dan sparepart motor, jadi tidak perlu keliling mencari." }
  ],

  langkah: [
    { judul: "Isi Form Booking", teks: "Isi nama, jenis motor, layanan, dan keluhan pada form booking." },
    { judul: "Kirim via WhatsApp", teks: "Data otomatis terkirim ke WhatsApp bengkel, tinggal tekan kirim." },
    { judul: "Datang ke Bengkel", teks: "Bawa motor sesuai jadwal. Mekanik akan mengecek dan menjelaskan kondisinya." },
    { judul: "Motor Selesai", teks: "Setelah disetujui dan dikerjakan, motor siap dibawa pulang dalam kondisi prima." }
  ],

  tips: [
    ["Mesin brebet atau tersendat", "saat digas, bisa jadi karburator/injeksi kotor."],
    ["Susah dihidupkan", "terutama pagi hari, cek busi, aki, dan sistem bahan bakar."],
    ["Tarikan berat & boros bensin", "tanda perlu tune up."],
    ["Suara kasar dari mesin atau CVT", "jangan ditunda agar kerusakan tidak melebar."],
    ["Rem kurang pakem", "segera periksa kampas rem demi keselamatan."],
    ["Asap knalpot berlebih", "bisa menandakan masalah pembakaran atau oli."]
  ],
  tipsOli: [
    { judul: "Pilih sesuai jenis motor", teks: "Motor matic memakai oli khusus matic (JASO MB), sedangkan motor bebek dan sport dengan kopling manual memakai oli berstandar JASO MA." },
    { judul: "Perhatikan kekentalan (SAE)", teks: "Angka seperti 10W-30 atau 10W-40 menunjukkan kekentalan. Ikuti rekomendasi di buku manual motor Anda." },
    { judul: "Ganti tepat waktu", teks: "Jadwal ganti oli berbeda tiap motor dan oli. Cek buku manual, dan ganti lebih cepat jika motor sering dipakai macet atau beban berat." },
    { judul: "Jangan lupa oli gardan", teks: "Khusus motor matic, oli gardan juga perlu diganti secara berkala selain oli mesin." }
  ],
  faq: [
    { t: "Berapa lama waktu servis berkala?", j: "Tergantung jenis pekerjaannya. Ganti oli biasanya cepat, sedangkan tune up atau bongkar pasang butuh waktu lebih lama. Mekanik akan memberi perkiraan waktu sebelum pengerjaan." },
    { t: "Apakah harus booking dulu?", j: "Tidak wajib, tetapi booking membantu Anda mendapat jadwal pasti dan mengurangi waktu menunggu." },
    { t: "Apakah bisa konsultasi keluhan lewat WhatsApp?", j: "Bisa. Ceritakan keluhan motor Anda lewat WhatsApp, lalu kami bantu perkiraan penyebab dan langkah perbaikannya." },
    { t: "Apa beda tune up motor matic, bebek, dan sport?", j: "Prinsipnya sama, yaitu menyetel mesin agar optimal. Bagian yang diperiksa menyesuaikan jenis motor, misalnya CVT pada matic atau rantai dan gigi pada bebek dan sport." },
    { t: "Oli apa yang cocok untuk motor saya?", j: "Lihat jenis motor (matic, bebek, atau sport) dan kekentalan yang disarankan di buku manual. Di halaman Produk, gunakan filter kategori. Bingung? Tanyakan lewat WhatsApp." },
    { t: "Apakah biaya dijelaskan di awal?", j: "Ya. Sebelum pengerjaan, mekanik menjelaskan kondisi motor dan perkiraan biaya agar Anda bisa memutuskan dengan tenang." }
  ],

  testimoni: [
    { nama: "Riski Munadi", motor: "Pengguna Motor Matic", isi: "Servis disini enak, pelayananya ramah dan jelas banget pas njelasin motornya. Thanks FHM MOTOR!" },
    { nama: "Andrey", motor: "Pengguna Motor Sport", isi: "Mantep servis disini, harga terjangkau, mekaniknya juga detail dalam menjelaskan setiap pengerjaannya.Recommended banget pokoknya!" },
    { nama: "Fathur", motor: "Pengguna Motor Bebek", isi: "Pelayanannya cepat dan memuaskan. Motor saya jadi lebih halus setelah diservis. Recommended!" }
  ],

  rupiah(n) { return "Rp " + Number(n).toLocaleString("id-ID"); },

  wa(pesan) { return "https://wa.me6287846961119/" + this.WA_NUMBER + "?text=" + encodeURIComponent(pesan); },

  loadCart() {
    try { return JSON.parse(localStorage.getItem("fhm_cart")) || []; } catch (e) { return []; }
  },
  saveCart(c) {
    try { localStorage.setItem("fhm_cart", JSON.stringify(c)); } catch (e) { }
  },

  cartMixin: {
    data() {
      return { cart: FHM.loadCart(), cartOpen: false, namaPembeli: "", toast: "", toastTimer: null };
    },
    computed: {
      cartCount() { return this.cart.reduce((t, i) => t + i.qty, 0); },
      cartTotal() { return this.cart.reduce((t, i) => t + i.qty * i.harga, 0); }
    },
    watch: {
      cart: { deep: true, handler(v) { FHM.saveCart(v); } },
      cartOpen(v) { document.body.style.overflow = v ? "hidden" : ""; }
    },
    methods: {
      rupiah(n) { return FHM.rupiah(n); },
      tambah(p) {
        const ada = this.cart.find(i => i.id === p.id);
        if (ada) ada.qty++;
        else this.cart.push({ id: p.id, nama: p.nama, harga: p.harga, qty: 1 });
        this.showToast(p.nama + " ditambahkan");
      },
      ubahQty(item, d) {
        item.qty += d;
        if (item.qty <= 0) this.hapus(item);
      },
      hapus(item) { this.cart = this.cart.filter(i => i.id !== item.id); },
      kosongkan() { this.cart = []; },
      showToast(t) {
        this.toast = t;
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => (this.toast = ""), 1800);
      },
      checkout() {
        if (!this.cart.length) return;
        const baris = this.cart.map((i, n) => `${n + 1}. ${i.nama} x${i.qty} = ${FHM.rupiah(i.qty * i.harga)}`).join("\n");
        const pesan = `Halo ${FHM.BENGKEL}, saya mau pesan:\n\n${baris}\n\nTotal: ${FHM.rupiah(this.cartTotal)}\nNama: ${this.namaPembeli || "-"}\n\nApakah stok tersedia? Terima kasih.`;
        window.open(FHM.wa(pesan), "_blank");
      }
    }
  },

  baseMixin: {
    data() {
      return {
        menuOpen: false,
        icons: FHM.icons,
        waLink: FHM.wa("Halo " + FHM.BENGKEL + ", saya mau tanya soal servis motor."),
        tahun: new Date().getFullYear(),
        kontak: FHM.kontak
      };
    },
    mounted() {
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
      }), { threshold: 0.12 });
      this.$nextTick(() => document.querySelectorAll(".reveal").forEach(el => io.observe(el)));
    }
  }
};
