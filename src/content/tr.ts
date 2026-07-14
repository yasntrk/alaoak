import type { Content } from './types'
import { LINKS } from './types'

export const tr: Content = {
  lang: 'tr',
  meta: {
    title: 'AlaOak — Oyun ve Yazılım Stüdyosu',
    description:
      'AlaOak, oyunlar ve dijital ürünler geliştiren bir oyun ve yazılım stüdyosudur; özenle üretilen, büyümek için tasarlanan işler. Ürünlerimiz Dico ve CoalaHR ile tanışın.',
    ogTitle: 'AlaOak — Özenle Üretilen Oyun ve Yazılım',
    ogDescription: 'Oyunları ve dijital ürünleri gerçek bir ustalıkla geliştiren bir stüdyo. AlaOak’un ürünleri Dico ve CoalaHR’ı keşfedin.',
  },
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    products: 'Ürünler',
    why: 'Neden AlaOak',
    contact: 'İletişim',
  },
  hero: {
    badge: 'Oyun ve Yazılım Stüdyosu',
    headline: 'Oyun ve yazılım,',
    highlight: 'kalıcı olsun diye',
    subhead:
      'AlaOak bir oyun ve yazılım stüdyosudur. Oyunları ve dijital ürünleri gerçek bir ustalığın sabrıyla tasarlar ve geliştiririz; kullanması keyifli, büyümek için üretilmiş deneyimler.',
    ctaPrimary: 'Ürünlerimizi keşfedin',
    ctaSecondary: 'Bize ulaşın',
  },
  trustBar: ['Oyun ve yazılım', 'Google Play’de', 'Özenle üretildi', 'Büyüme için tasarlandı'],
  about: {
    eyebrow: 'AlaOak Hakkında',
    heading: 'Ustalığa kök salmış bir stüdyo',
    body: [
      'AlaOak, basit bir inançla kurulmuş bir oyun ve yazılım stüdyosudur: iyi bir yazılım, asırlık bir meşe kadar güven vermeli; bugün kullanması keyifli, yıllar boyu büyümeye hazır olmalı. Zarif, güvenilir ve gerçekten keyifli oyunlar ile dijital ürünler üretiyoruz.',
      'Bir meşe palamudunun koca bir ormana dönüşmesi gibi, biz de uzun vadeli düşünürüz. Oyunlardan gündelik uygulamalara ve özel yazılımlara kadar sunduğumuz her ürün, onu kullananların katkısıyla şekillenerek büyümek için üretilir.',
    ],
    stats: [
      { value: '2', label: 'Yayında ve büyüyen ürün' },
      { value: 'Oyun + Uygulama', label: 'Ürettiğimiz işler' },
      { value: 'Mobil + Web', label: 'Oynadığınız ve çalıştığınız her yerde' },
    ],
    values: [
      { title: 'Köklü', desc: 'Sağlam temeller üzerine inşa ederiz; zamana meydan okuyan özenli mühendislik ve tasarım.' },
      { title: 'Özenli', desc: 'Her ayrıntı düşünülür. Oyunlarımız ve uygulamalarımız tam yerinde hissettirsin diye küçük şeylere kafa yoruruz.' },
      { title: 'Kullanıcı odaklı', desc: 'Ekranın diğer tarafındaki insanlar için üretiriz; netlik, keyif ve zamanlarına saygı.' },
      { title: 'Büyümeye odaklı', desc: 'Ürünlerimiz sizinle birlikte gelişir. Bugün işe yarayan, yarın daha da iyi çalışmalı.' },
    ],
  },
  productsIntro: {
    eyebrow: 'Ürünlerimiz',
    heading: 'İki ürün, tek stüdyo',
    sub: 'Gerçek sorunları çözmek için özel olarak geliştirilmiş araçlar; biri öğrenenler, diğeri geleceği inşa eden ekipler için.',
  },
  products: [
    {
      id: 'dico',
      name: 'Dico',
      category: 'Dil ve Öğrenme',
      tagline: 'Akıllı sözlüğünüz ve dil arkadaşınız',
      description:
        'Dico, bir kelimeye bakmayı onu gerçekten öğrenmeye dönüştürür. Anlık ve bağlama duyarlı tanımlar ile çeviriler sunar; ardından kişiselleştirilmiş kelime çalışmasıyla önemli olanı hatırlamanıza yardımcı olur. Dil becerilerini geliştirmek isteyen herkes için sade, hızlı ve mobil öncelikli bir arkadaş.',
      features: [
        { title: 'Anlık tanımlar ve çeviriler', desc: 'Herhangi bir kelimeye bakın; saniyeler içinde diller arası net ve doğru anlamlar ile çeviriler elde edin.' },
        { title: 'Bağlama duyarlı örnekler', desc: 'İhtiyacınız olan anlama uygun örnek cümlelerle kelimelerin gerçekte nasıl kullanıldığını görün.' },
        { title: 'Kişiselleştirilmiş kelime çalışması', desc: 'Kelimeleri kaydedin ve öğrenme tarzınıza uyum sağlayan aralıklı tekrar yöntemiyle kalıcı hale getirin.' },
        { title: 'Telaffuz desteği', desc: 'Kelimeleri dinleyip pratik yapın; yalnızca okumakla kalmayın, konuşurken de kendinize güvenin.' },
      ],
      platforms: ['Google Play', 'Android'],
      status: 'Google Play’de',
      statusType: 'live',
      cta: 'Dico’yu Google Play’den edinin',
      href: LINKS.dicoPlayStore,
    },
    {
      id: 'coalahr',
      name: 'CoalaHR',
      category: 'İK ve İnsan Operasyonları',
      tagline: 'Ekibinizle birlikte büyüyen İK',
      description:
        'CoalaHR, insan operasyonlarınızı tek bir sıcak ve modern platformda toplar; çalışan kayıtlarından izin, devam ve işe alıştırmaya kadar. Büyüyen ekiplerin ve KOBİ’lerin idari işlere daha az, insana daha çok vakit ayırmasını sağlar.',
      features: [
        { title: 'Çalışan kayıtları ve öz servis', desc: 'Her çalışan profilini tek bir yerde düzenli tutun; İK yükünüzü hafifleten öz servis erişimiyle.' },
        { title: 'İzin ve devam takibi', desc: 'İzinleri, onayları ve devam durumunu hem yöneticiler hem de çalışanlar için netçe yönetin.' },
        { title: 'Basit ve hızlı işe alım', desc: 'Adayları takip edin; başvurudan teklife kadar gereksiz işlerle uğraşmadan ilerleyin.' },
        { title: 'İşe alıştırma ve performans', desc: 'Yeni çalışanları sorunsuzca karşılayın; yapılandırılmış işe alıştırma ve performans araçlarıyla gelişimlerini destekleyin.' },
      ],
      platforms: ['Web', 'Google Play', 'Android'],
      status: 'Çok yakında',
      statusType: 'soon',
      cta: 'CoalaHR bekleme listesine katılın',
      href: '#contact',
    },
  ],
  why: {
    eyebrow: 'Neden AlaOak',
    heading: 'Kök salabileceğiniz yazılımlar',
    items: [
      { title: 'Her ayrıntıda ustalık', desc: 'Ürettiğimiz her şey cilalı, düşünülmüş ve eksiksiz hissettirsin diye ayrıntılara kafa yoruyoruz.' },
      { title: 'Kalıcı olmak için tasarlandı', desc: 'Geçici çözümler yerine premium ve özenli ustalık; haftalarca değil, yıllarca hizmet etmek için yapılmış ürünler.' },
      { title: 'Gerçek insanlar için geliştirildi', desc: 'Zamanınıza ve dikkatinize saygı duyan sade arayüzler ve dürüst özellikler.' },
      { title: 'Her zaman büyüyen', desc: 'Ürünlerimiz gerçekte nasıl kullanıldıklarına göre şekillenerek sürekli gelişir.' },
    ],
  },
  cta: {
    heading: 'AlaOak ile büyümeye hazır mısınız?',
    sub: 'Ürünlerimizi hemen deneyin ya da hayalini kurduğunuz oyunu veya ürünü bize anlatın.',
    button: 'Ürünleri keşfedin',
  },
  contact: {
    eyebrow: 'Bize Ulaşın',
    heading: 'Kalıcı bir şey inşa edelim',
    sub: 'Sorular, iş birlikleri ya da aklınızdaki bir proje; sizden haber almayı çok isteriz. Ekibimiz her mesajı okur.',
    email: LINKS.email,
    buttonLabel: 'E-posta gönderin',
  },
  footer: {
    tagline: 'Ustalığa kök salmış — büyümek için üretilen oyun ve yazılım.',
    columns: [
      { title: 'Ürünler', links: ['Dico', 'CoalaHR'] },
      { title: 'Şirket', links: ['Hakkımızda', 'Neden AlaOak', 'İletişim'] },
      { title: 'Bağlantı', links: ['Google Play', 'E-posta'] },
    ],
    rights: '© 2026 AlaOak. Tüm hakları saklıdır.',
  },
}
