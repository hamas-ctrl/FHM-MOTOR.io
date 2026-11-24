/* Logika Vue - halaman layanan */
Vue.createApp({
  mixins: [FHM.baseMixin, FHM.cartMixin],
  data() { return { layanan: FHM.layanan }; }
}).mount("#app");
