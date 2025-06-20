db.produk_wc.insertMany([
  {
    _id: 1,
    nama: "Laptop Asus X441",
    kategori: "Laptop",
    merk: "Asus",
    harga: 7500000,
    stok: 10,
    garansi: "1 Tahun",
    spesifikasi: {
      processor: "Intel Core i5",
      ram: "8GB",
      storage: "512GB SSD",
      os: "Windows 10"
    }
  },
  {
    _id: 2,
    nama: "HP Wireless Mouse 200",
    kategori: "Aksesori",
    merk: "HP",
    harga: 150000,
    stok: 50,
    garansi: "6 Bulan",
    spesifikasi: {
      konektivitas: "Wireless 2.4GHz",
      baterai: "AA",
      dpi: "1000"
    }
  },
  {
    _id: 3,
    nama: "Logitech Keyboard K380",
    kategori: "Aksesori",
    merk: "Logitech",
    harga: 300000,
    stok: 30,
    garansi: "1 Tahun",
    spesifikasi: {
      tipe: "Bluetooth Multi-Device",
      warna: "Hitam",
      kompatibel: ["Windows", "macOS", "Android", "iOS"]
    }
  },
  {
    _id: 4,
    nama: "Samsung Monitor 24\"",
    kategori: "Monitor",
    merk: "Samsung",
    harga: 2000000,
    stok: 15,
    garansi: "2 Tahun",
    spesifikasi: {
      resolusi: "1920x1080",
      ukuran: "24 inch",
      refresh_rate: "75Hz"
    }
  },
  {
    _id: 5,
    nama: "Canon PIXMA MG2570S",
    kategori: "Printer",
    merk: "Canon",
    harga: 1800000,
    stok: 7,
    garansi: "1 Tahun",
    spesifikasi: {
      tipe: "Inkjet",
      fitur: ["Print", "Scan", "Copy"],
      kecepatan: "8 ipm"
    }
  }
])
