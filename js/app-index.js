/* Logika Vue - halaman Beranda */
Vue.createApp({
  mixins: [FHM.cartMixin],
  data() {
    return {
      menuOpen: false,
      icons: FHM.icons,
      merek: [
        { nama: "HONDA", kelas: "b-honda" }, { nama: "YAMAHA", kelas: "b-yamaha" },
        { nama: "SUZUKI", kelas: "b-suzuki" }, { nama: "Kawasaki", kelas: "b-kawasaki" }
      ],
      keunggulan: [
        { judul: "Pengerjaan Cepat", ikon: "clock", teks: "Antrean tertata dan mekanik bekerja efisien, sehingga motor Anda cepat kembali dipakai." },
        { judul: "Diagnosa Tepat", ikon: "target", teks: "Masalah dicek dulu sampai ketemu sumbernya, jadi perbaikan tepat sasaran." },
        { judul: "Terpercaya", ikon: "shield", teks: "Penjelasan jujur dan terbuka: apa yang rusak, apa yang perlu diganti, dan berapa biayanya." },
        { judul: "Sparepart Lengkap", ikon: "service", teks: "Tersedia berbagai sparepart motor, jadi tidak perlu keliling mencari komponen." }
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
      langkah: [
        { judul: "Isi Form Booking", teks: "Isi nama, jenis motor, layanan, dan keluhan pada form di bawah." },
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
      faq: [
        { t: "Berapa lama waktu servis berkala?", j: "Tergantung jenis pekerjaannya. Ganti oli biasanya cepat, sedangkan tune up atau bongkar pasang butuh waktu lebih lama. Mekanik akan memberi perkiraan waktu sebelum pengerjaan." },
        { t: "Apakah harus booking dulu?", j: "Tidak wajib, tetapi booking membantu Anda mendapat jadwal pasti dan mengurangi waktu menunggu." },
        { t: "Apakah bisa konsultasi keluhan lewat WhatsApp?", j: "Bisa. Ceritakan keluhan motor Anda lewat WhatsApp, lalu kami bantu perkiraan penyebab dan langkah perbaikannya." },
        { t: "Apa beda tune up motor matic, bebek, dan sport?", j: "Prinsipnya sama, yaitu menyetel mesin agar optimal. Bagian yang diperiksa menyesuaikan jenis motor, misalnya CVT pada matic atau rantai dan gigi pada bebek dan sport." },
        { t: "Apakah menyediakan sparepart?", j: "Ya, tersedia berbagai sparepart motor. Lihat daftarnya di halaman Produk, atau tanyakan lewat WhatsApp jika komponen yang dicari belum ada." },
        { t: "Apakah biaya dijelaskan di awal?", j: "Ya. Sebelum pengerjaan, mekanik menjelaskan kondisi motor dan perkiraan biaya agar Anda bisa memutuskan dengan tenang." }
      ],
      faqBuka: 0,
      /* GANTI dengan testimoni asli pelanggan */
      testimoni: [
        { nama: "Nama Pelanggan", motor: "Pengguna Motor Matic", isi: "[Ganti dengan testimoni asli pelanggan Anda di sini.]" },
        { nama: "Nama Pelanggan", motor: "Pengguna Motor Sport", isi: "[Ganti dengan testimoni asli pelanggan Anda di sini.]" },
        { nama: "Nama Pelanggan", motor: "Pengguna Motor Bebek", isi: "[Ganti dengan testimoni asli pelanggan Anda di sini.]" }
      ],
      /* GANTI alamat & jam buka sesuai bengkel */
      alamat: "[Isi alamat lengkap bengkel Anda di sini]",
      jam: [
        { hari: "Senin – Sabtu", waktu: "[00.00 – 00.00]" },
        { hari: "Minggu", waktu: "[Buka / Tutup]" }
      ],
      nomorTampil: "0878 4696 1119",
      waLink: FHM.wa("Halo " + FHM.BENGKEL + ", saya mau tanya soal servis motor."),
      /* Form booking */
      hariIni: new Date().toISOString().split("T")[0],
      form: { nama: "", jenis: "", merek: "", layanan: "", tanggal: "", keluhan: "" },
      opsiLayanan: ["Tune Up", "Service Motor", "Karburator & Injeksi", "Ganti Oli", "Beli / Pasang Sparepart", "Bongkar Pasang Motor", "Tambal Ban", "Belum tahu (konsultasi dulu)"],
      tahun: new Date().getFullYear()
    };
  },
  computed: {
    unggulan() { return FHM.products.filter(p => p.label).slice(0, 4); }
  },
  methods: {
    kirimBooking() {
      const f = this.form;
      const tgl = new Date(f.tanggal).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const pesan = `Halo ${FHM.BENGKEL}, saya mau booking servis:\n\nNama: ${f.nama}\nJenis motor: ${f.jenis}\nMerek & tipe: ${f.merek}\nLayanan: ${f.layanan}\nRencana tanggal: ${tgl}\nKeluhan: ${f.keluhan || "-"}\n\nTerima kasih.`;
      window.open(FHM.wa(pesan), "_blank");
    },
    toggleFaq(i) { this.faqBuka = this.faqBuka === i ? -1 : i; }
  },
  mounted() {
    /* animasi muncul saat scroll */
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    this.$nextTick(() => document.querySelectorAll(".reveal").forEach(el => io.observe(el)));
  }
}).mount("#app");
