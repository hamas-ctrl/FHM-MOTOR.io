Vue.createApp({
  mixins: [FHM.baseMixin, FHM.cartMixin],
  data() {
    return {
      merek: [
        { nama: "HONDA", kelas: "b-honda" }, { nama: "YAMAHA", kelas: "b-yamaha" },
        { nama: "SUZUKI", kelas: "b-suzuki" }, { nama: "Kawasaki", kelas: "b-kawasaki" }
      ],
      keunggulan: FHM.keunggulan,
      layananRingkas: FHM.layanan.slice(0, 3),
      testimoni: FHM.testimoni
    };
  },
  computed: {
    unggulan() { return FHM.products.filter(p => p.label).slice(0, 4); }
  }
}).mount("#app");
