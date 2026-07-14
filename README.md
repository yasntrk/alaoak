# AlaOak — Kurumsal Web Sitesi

AlaOak yazılım firmasının kurumsal web sitesi. **React + Vite + Tailwind CSS** ile geliştirildi, iki dilli (İngilizce ana / Türkçe ikincil), Cloudflare Pages üzerinde barınıyor.

- İngilizce (ana): `/`
- Türkçe: `/tr`
- Ürünler: **Dico**, **CoalaHR**

---

## 🚀 Geliştirme

```bash
npm install       # bağımlılıklar
npm run dev       # http://localhost:5173
npm run build     # üretim derlemesi -> dist/
npm run preview   # dist/ önizleme
```

## 🌐 Deploy (Cloudflare Pages + GitHub Actions)

`main` branch'e her push otomatik olarak Cloudflare Pages'e deploy eder
(`.github/workflows/deploy.yml`).

### Gerekli GitHub Secrets

GitHub repo → **Settings → Secrets and variables → Actions**:

| Secret | Açıklama |
| --- | --- |
| `CLOUDFLARE_TOKEN` | Cloudflare API token'ı (Pages: Edit yetkili). |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare hesap ID'niz. Dashboard'da herhangi bir sitenin **Overview** sayfasında sağ tarafta ya da URL'de (`dash.cloudflare.com/<ACCOUNT_ID>`) bulunur. |

> ⚠️ **Güvenlik:** Token'ı hiçbir zaman koda/commit'e yazmayın; yalnızca GitHub Secrets'ta tutun. Token bir yere sızdıysa Cloudflare panelinden **iptal edip (revoke)** yenisini oluşturun.

### Cloudflare Pages projesi

Workflow ilk çalıştığında `alaoak` adlı Pages projesini otomatik oluşturur.
Dilerseniz önceden Cloudflare → **Workers & Pages → Create → Pages → Direct Upload**
ile `alaoak` adında proje açabilirsiniz. Özel alan adı (ör. `alaoak.com`) proje
ayarlarından **Custom domains** ile eklenir.

Token türü Pages deploy için şu izinleri içermeli: **Account → Cloudflare Pages → Edit**.

---

## ✏️ İçeriği düzenleme

Tüm metinler tek yerde, dil dosyalarında toplanmıştır:

- `src/content/en.ts` — İngilizce
- `src/content/tr.ts` — Türkçe

Ürün eklemek/düzenlemek için ilgili dosyadaki `products` dizisini güncelleyin
(Google Play / App Store linkleri `href` alanlarında).

### Logo

- Vektörel marka işareti: `src/components/Logo.tsx` (favicon: `public/favicon.svg`).
- Kendi PNG logonuzu kullanmak isterseniz dosyayı `public/logo.png` olarak koyup
  `src/components/Logo.tsx` içinde işaretlenen yeri değiştirin.

---

## 🗂 Yapı

```
alaoak/
├─ .github/workflows/deploy.yml   # otomatik deploy
├─ public/                        # statik dosyalar (_redirects, robots, favicon, og)
├─ src/
│  ├─ content/                    # en.ts, tr.ts — tüm metinler
│  ├─ components/                 # Navbar, Footer, Logo, LangSwitcher, ...
│  ├─ sections/                   # Hero, Products, About, Why, CTA, Contact
│  ├─ lib/                        # tema, yardımcılar
│  ├─ App.tsx                     # router (/ -> EN, /tr -> TR)
│  └─ main.tsx
├─ tailwind.config.js
└─ vite.config.ts
```
