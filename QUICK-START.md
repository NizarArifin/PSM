# PSM Website - Quick Start Guide 🚀

## ✅ Apa yang Sudah Selesai

### 📁 Struktur Lengkap

✓ Folder CSS dengan sistem modular
✓ Folder JavaScript dengan functionality lengkap
✓ Folder Components untuk reusable elements
✓ Folder img/ dengan semua assets

### 📄 Halaman yang Sudah Dibuat

✓ **index-new.html** - Landing page lengkap
✓ **about-us.html** - Halaman About Us
✓ **contact-us.html** - Halaman Contact dengan form
✓ **business-system-development.html** - Template service page

### 🎨 Fitur yang Sudah Diimplementasi

✓ Responsive design (mobile, tablet, desktop)
✓ Sticky navigation dengan dropdown
✓ Mobile hamburger menu
✓ Smooth scroll animations
✓ Article carousel (drag & swipe)
✓ Testimonial section
✓ Work culture accordion
✓ Contact form dengan validation
✓ Back to top button
✓ Hover effects di semua interaksi

## 📋 Yang Masih Perlu Dilakukan

### 1. Copy & Customize 3 Service Pages

Anda tinggal copy `business-system-development.html` dan rename menjadi:

- `system-innovation-technology.html`
- `implementation-mentoring.html`
- `fat-consultant.html`

**Yang perlu diubah di setiap file:**

```html
<!-- 1. Title -->
<title>FAT Consultant - PSM Manajemen</title>

<!-- 2. Icon -->
<img src="Content/asset/FAT.png" alt="FAT Consultant" />

<!-- 3. Hero Title & Description -->
<h1>FAT Consultant</h1>
<p>Deskripsi service...</p>

<!-- 4. Content sections -->
- Benefits - Process steps - CTA
```

### 2. Ganti index.html

Ketika sudah siap deploy:

```bash
# Backup old file
rename index.html index-old.html

# Use new version
rename index-new.html index.html
```

### 3. Update Content

- [ ] Ganti placeholder images di Impact section dengan foto real
- [ ] Update client logos di Clients section
- [ ] Isi testimonials dengan data real
- [ ] Update address/map di footer jika perlu

## 🎯 Cara Test Website

### Test di Browser

1. Buka `index-new.html` di browser
2. Resize window untuk test responsive
3. Test semua navigation links
4. Test dropdown menu
5. Test mobile menu (< 768px width)
6. Scroll untuk melihat animasi
7. Test form di contact page

### Test di Mobile

1. Buka Chrome DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Pilih device preset (iPhone, iPad, etc)
4. Test semua interaksi

## 🎨 Cara Kustomisasi

### Ganti Warna

Edit `css/variables.css`:

```css
:root {
  --color-primary-navy: #051c2c; /* Navy blue */
  --color-primary-blue: #2251ff; /* Bright blue */
  --color-primary-light-blue: #0084d1; /* Light blue */
}
```

### Ganti Font

Edit `css/variables.css`:

```css
:root {
  --font-primary: "Your Font", sans-serif;
}
```

Dan tambahkan Google Font di `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Ganti Spacing

Edit `css/variables.css`:

```css
:root {
  --spacing-xl: 80px; /* Large spacing */
  --spacing-lg: 50px; /* Medium spacing */
  --spacing-md: 30px; /* Small spacing */
}
```

## 🔧 Troubleshooting

### Animasi Tidak Jalan

**Cek:**

1. Pastikan element punya class `entrance-element` atau `scroll-animate`
2. Pastikan `main.js` sudah di-load
3. Cek console untuk errors (F12 → Console)

### Carousel Tidak Berfungsi

**Cek:**

1. Pastikan `carousel.js` di-load
2. Pastikan element punya class `article-carousel`
3. Cek structure HTML carousel (wrapper → items)

### Mobile Menu Tidak Muncul

**Cek:**

1. Width browser < 768px
2. `main.js` sudah di-load
3. Tidak ada error JavaScript di console

### Images Tidak Muncul

**Cek:**

1. Path image benar: `img/nama-file.png`
2. File ada di folder `img/`
3. Capitalization nama file sesuai (case-sensitive di server)

## 📱 Browser Support

✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Mobile Safari (iOS 12+)
✓ Chrome Mobile (Android 8+)

## 🚀 Deploy ke Server

### Langkah Deploy:

1. Rename `index-new.html` → `index.html`
2. Upload semua files ke server
3. Pastikan structure folder tetap sama
4. Test semua links dan images
5. Test responsive di mobile

### File yang Harus Di-Upload:

```
├── index.html (dari index-new.html)
├── about-us.html
├── contact-us.html
├── business-system-development.html
├── [3 service pages lainnya]
├── css/ (semua files)
├── js/ (semua files)
├── img/ (semua images)
└── Content/ (untuk reference assets)
```

## 💡 Tips & Best Practices

### Performance

- Compress images sebelum upload (gunakan TinyPNG)
- Minify CSS & JS untuk production
- Enable gzip compression di server
- Use lazy loading untuk images

### SEO

- Update meta descriptions di setiap page
- Add alt text untuk semua images
- Create sitemap.xml
- Add robots.txt
- Setup Google Analytics

### Maintenance

- Backup website regularly
- Update content secara berkala
- Monitor loading speed (Google PageSpeed)
- Check broken links bulanan

## 📞 Need Help?

Jika ada masalah atau pertanyaan:

1. Check README.md untuk dokumentasi lengkap
2. Check browser console untuk errors
3. Test di incognito/private mode
4. Clear browser cache

## ✨ Next Steps

1. ✅ Selesaikan 3 service pages yang tersisa
2. ✅ Update content dengan data real
3. ✅ Test di semua devices
4. ✅ Deploy ke server
5. ✅ Setup Google Analytics (optional)

---

**Selamat! Website PSM Anda sudah hampir siap! 🎉**

Anda tinggal duplikasi service pages dan update content, lalu siap di-deploy!
