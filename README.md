# 🛍️ Luxury Marketplace (React + TypeScript + Supabase)

Luxury Marketplace adalah aplikasi e-commerce modern yang dibuat menggunakan **React**, **TypeScript**, dan **Tailwind CSS**, dengan **Supabase** sebagai backend untuk autentikasi dan database.

## 🔗 Demo Langsung

🌐 Coba aplikasinya di: [luxury-marketplace.vercel.app](luxescape-ecommers.netlify.app)

## 🚀 Fitur Utama

- 🔐 Register & Login (via Supabase Auth)
- 🛒 Keranjang Belanja dan Wishlist (Local Context)
- 📦 Checkout & Simpan Pesanan (via Supabase Database)
- 🧾 Riwayat & Detail Pemesanan
- 📄 Halaman Informasi: About, Contact, FAQ, Returns

## 🧩 Teknologi

- Frontend: `React`, `TypeScript`, `Vite`, `Tailwind CSS`
- UI Icons: `lucide-react`
- State Management: React Context API
- Backend: `Supabase` (Auth + Database)
- Routing: `react-router-dom`

## 📁 Struktur Folder

```txt
src/
├── components/       # Komponen UI (Navbar, Footer, Button, dsb)
├── context/          # Cart, Auth, dan Favorites Context
├── lib/              # Supabase client dan API utilitas
├── pages/            # Semua halaman seperti Products, Checkout, dll
├── App.tsx           # Routing utama
└── main.tsx          # Entry point aplikasi
```

## 🛠️ Cara Menjalankan

1. **Clone repositori ini**
```bash
git clone https://github.com/VlynXx/project-paw-final.git
cd project-paw-final
```

2. **Install dependency**
```bash
npm install
```

3. **Buat file `.env` dan tambahkan konfigurasi Supabase**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. **Jalankan aplikasi lokal**
```bash
npm run dev
```

5. **Akses aplikasi lokal**
Buka browser di: `http://localhost:5173`

## 🧪 Catatan Pengembangan

- Untuk menampilkan produk dari Supabase, pastikan tabel `products` sudah diisi dan gunakan fungsi `getProducts()` dari `lib/api.ts`
- Checkout dan Order akan tersimpan di tabel `orders`, `order_items`, dan `order_tracking` di Supabase
- Komponen tombol seperti `<Button />` mendukung atribut `as={Link}` untuk routing internal


---

© 2025 [VlynXx](https://github.com/VlynXx)
