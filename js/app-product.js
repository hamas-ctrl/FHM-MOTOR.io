Vue.createApp({
  mixins: [FHM.baseMixin, FHM.cartMixin],
  data() {
    return {
      products: FHM.products,
      kategoriList: ["Semua", ...FHM.kategori],
      kategoriAktif: "Semua",
      cari: "",
      urut: "default"
    };
  },
  computed: {
    hasil() {
      let list = this.products.filter(p => {
        const cocokKat = this.kategoriAktif === "Semua" || p.kategori === this.kategoriAktif;
        const kunci = this.cari.toLowerCase().trim();
        const cocokCari = !kunci || (p.nama + " " + p.kekentalan).toLowerCase().includes(kunci);
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
