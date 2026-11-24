/* =========================================================
   FHM MOTOR - Data & fungsi bersama (dipakai index & product)
   ========================================================= */
const FHM = {
  WA_NUMBER: "6287846961119",   // format 62, tanpa 0 / +
  BENGKEL: "FHM MOTOR",

  /* Ikon SVG (isi dalam <svg viewBox="0 0 24 24">) */
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

  /* Daftar produk. HARGA = CONTOH, silakan ganti sesuai harga bengkel */
  kategori: ["Oli & Pelumas", "Ban & Velg", "Rem", "Busi & Kelistrikan", "Filter", "CVT & Rantai", "Aksesori"],
  products: [
    { id: 1, nama: "Oli Mesin Motor Matic 0,8 L", kategori: "Oli & Pelumas", harga: 55000, ikon: "oli", deskripsi: "Oli khusus motor matic, menjaga mesin tetap halus dan dingin.", label: "Terlaris" },
    { id: 2, nama: "Oli Mesin Motor Bebek/Sport 1 L", kategori: "Oli & Pelumas", harga: 65000, ikon: "oli", deskripsi: "Cocok untuk motor bebek dan sport dengan kopling manual." },
    { id: 3, nama: "Oli Gardan Matic 120 ml", kategori: "Oli & Pelumas", harga: 15000, ikon: "oli", deskripsi: "Melumasi gigi transmisi akhir motor matic." },
    { id: 4, nama: "Ban Tubeless Ring 14", kategori: "Ban & Velg", harga: 280000, ikon: "ban", deskripsi: "Ban tubeless untuk motor matic, grip baik di jalan kering maupun basah." },
    { id: 5, nama: "Ban Dalam Motor", kategori: "Ban & Velg", harga: 35000, ikon: "ban", deskripsi: "Ban dalam untuk motor bebek dan sport." },
    { id: 6, nama: "Kampas Rem Depan", kategori: "Rem", harga: 45000, ikon: "rem", deskripsi: "Kampas rem pakem dan tahan panas.", label: "Penting" },
    { id: 7, nama: "Kampas Rem Belakang", kategori: "Rem", harga: 40000, ikon: "rem", deskripsi: "Pengganti kampas belakang yang sudah tipis." },
    { id: 8, nama: "Busi Standar", kategori: "Busi & Kelistrikan", harga: 25000, ikon: "busi", deskripsi: "Busi pengapian standar untuk performa mesin stabil." },
    { id: 9, nama: "Busi Iridium", kategori: "Busi & Kelistrikan", harga: 120000, ikon: "busi", deskripsi: "Pengapian lebih kuat dan tahan lama, tarikan lebih responsif." },
    { id: 10, nama: "Aki Kering Motor", kategori: "Busi & Kelistrikan", harga: 185000, ikon: "busi", deskripsi: "Aki bebas perawatan, starter lebih mudah." },
    { id: 11, nama: "Filter Udara", kategori: "Filter", harga: 35000, ikon: "filter", deskripsi: "Menyaring debu agar pembakaran bersih dan irit." },
    { id: 12, nama: "Filter Oli", kategori: "Filter", harga: 30000, ikon: "filter", deskripsi: "Menjaga oli tetap bersih saat beredar di mesin." },
    { id: 13, nama: "V-Belt (CVT) Matic", kategori: "CVT & Rantai", harga: 120000, ikon: "cvt", deskripsi: "Pengganti belt CVT yang aus agar tarikan kembali halus.", label: "Matic" },
    { id: 14, nama: "Roller CVT Set", kategori: "CVT & Rantai", harga: 85000, ikon: "cvt", deskripsi: "Satu set roller untuk akselerasi lebih lancar." },
    { id: 15, nama: "Kit Rantai & Gir", kategori: "CVT & Rantai", harga: 225000, ikon: "cvt", deskripsi: "Paket rantai dan gir untuk motor bebek dan sport." },
    { id: 16, nama: "Helm Standar SNI", kategori: "Aksesori", harga: 150000, ikon: "aksesori", deskripsi: "Helm berstandar SNI demi keselamatan berkendara." }
  ],

  /* Format rupiah */
  rupiah(n) { return "Rp " + Number(n).toLocaleString("id-ID"); },

  /* Link WhatsApp */
  wa(pesan) { return "https://wa.me/" + this.WA_NUMBER + "?text=" + encodeURIComponent(pesan); },

  /* Penyimpanan keranjang (localStorage) agar sama di semua halaman */
  loadCart() {
    try { return JSON.parse(localStorage.getItem("fhm_cart")) || []; } catch (e) { return []; }
  },
  saveCart(c) {
    try { localStorage.setItem("fhm_cart", JSON.stringify(c)); } catch (e) { }
  },

  /* Mixin Vue: logika keranjang dipakai di kedua halaman */
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
      rupiah: FHM.rupiah,
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
  }
};
