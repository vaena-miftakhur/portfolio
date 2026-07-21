# Vaena Portfolio

Portfolio pribadi Vaena Miftakhur Risko — dibangun dengan **Astro**, **TypeScript**, dan **Tailwind CSS**.

## Tech Stack

- **Astro v4** — Static Site Generator
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Formspree** — Contact form handler

## Fitur

- ⚡ Lighthouse Score >95 (Performance, Accessibility, SEO)
- 🌙 Dark mode + Light mode (localStorage)
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 🎨 Animasi scroll reveal & typing effect
- ♿ Accessible (keyboard navigable, ARIA)
- 🔍 SEO friendly (OG, Twitter Card, robots.txt)

## Struktur Folder

```
portfolio/
├── public/
│   ├── images/           ← Foto profil & project screenshots
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/       ← Semua komponen Astro
│   ├── data/             ← Data projects, skills, experience, certificates
│   ├── layouts/          ← BaseLayout
│   ├── pages/            ← index.astro
│   ├── styles/           ← global.css
│   └── types/            ← TypeScript interfaces
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321)

### 3. Build untuk production

```bash
npm run build
```

### 4. Preview build

```bash
npm run preview
```

## Deploy ke Vercel

1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → **New Project**
3. Import repo → Vercel otomatis detect Astro
4. Klik **Deploy** — selesai!

Tidak perlu konfigurasi tambahan.

## Kustomisasi

### Ganti data pribadi

Edit file di `src/data/`:
- `projects.ts` — tambah/edit proyek
- `skills.ts` — update skill & level
- `experience.ts` — pengalaman kerja/organisasi
- `certificates.ts` — sertifikat

### Ganti foto profil

Letakkan foto di `public/images/profile.jpg` lalu update komponen `Hero.astro`:
```html
<img src="/images/profile.jpg" alt="Vaena" class="w-full h-full object-cover" />
```

### Setup Formspree (Contact Form)

1. Daftar di [formspree.io](https://formspree.io)
2. Buat form baru → copy Form ID
3. Edit `src/components/Contact.astro`:
   ```js
   const FORMSPREE_ID = 'your_form_id_here';
   ```

## License

MIT — bebas digunakan dan dimodifikasi.
