Vue.createApp({
  mixins: [FHM.baseMixin, FHM.cartMixin],
  data() {
    return {
      langkah: FHM.langkah,
      opsiLayanan: FHM.opsiLayanan,
      hariIni: new Date().toISOString().split("T")[0],
      form: { nama: "", jenis: "", merek: "", layanan: "", tanggal: "", keluhan: "" }
    };
  },
  methods: {
    kirimBooking() {
      const f = this.form;
      const tgl = new Date(f.tanggal).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const pesan = `Halo ${FHM.BENGKEL}, saya mau booking servis:\n\nNama: ${f.nama}\nJenis motor: ${f.jenis}\nMerek & tipe: ${f.merek}\nLayanan: ${f.layanan}\nRencana tanggal: ${tgl}\nKeluhan: ${f.keluhan || "-"}\n\nTerima kasih.`;
      window.open(FHM.wa(pesan), "_blank");
    }
  }
}).mount("#app");
