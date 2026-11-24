Vue.createApp({
  mixins: [FHM.baseMixin, FHM.cartMixin],
  data() {
    return { tips: FHM.tips, tipsOli: FHM.tipsOli, faq: FHM.faq, faqBuka: 0 };
  },
  methods: {
    toggleFaq(i) { this.faqBuka = this.faqBuka === i ? -1 : i; }
  }
}).mount("#app");
