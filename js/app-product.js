/* Logika Vue - halaman Produk */
Vue.createApp({
  mixins: [FHM.cartMixin],
  data() {
    return {
      menuOpen: false,
      icons: FHM.icons,
      products: FHM.products,
      kategoriList: ["Semua", ...FHM.kategori],
      kategoriAktif: "Semua",
      cari: "",
      urut: "default",
      waLink: FHM.wa("Halo " + FHM.BENGKEL + ", saya mau tanya soal sparepart motor."),
      tahun: new Date().getFullYear()
    };
  },
  computed: {
    hasil() {
      let list = this.products.filter(p => {
        const cocokKat = this.kategoriAktif === "Semua" || p.kategori === this.kategoriAktif;
        const cocokCari = p.nama.toLowerCase().includes(this.cari.toLowerCase().trim());
        return cocokKat && cocokCari;
      });
      if (this.urut === "murah") list = [...list].sort((a, b) => a.harga - b.harga);
      if (this.urut === "mahal") list = [...list].sort((a, b) => b.harga - a.harga);
      if (this.urut === "nama") list = [...list].sort((a, b) => a.nama.localeCompare(b.nama));
      return list;
    }
  },
  methods: {
    resetFilter() { this.cari = ""; this.kategoriAktif = "Semua"; this.urut = "default"; }
  }
}).mount("#app");
