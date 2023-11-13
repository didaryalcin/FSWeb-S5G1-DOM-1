const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

// header bölümü

const linkler = document.querySelectorAll("nav a");
const linkler1 = Object.keys(siteContent.nav);
for (let i = 0; i < linkler1.length; i++) {
  linkler[i].textContent = siteContent.nav[linkler1[i]];
  linkler[i].classList.add("italic");
}

//document.querySelector("nav").style.fontStyle = "italic";

const headerImg = (document.querySelector(".logo").src =
  "http://localhost:9000/img/logo.png");

// cta bölümü

const ctaText = (document.querySelector("h1").textContent = "Bu DOM Mükemmel");

const ctaButon = (document.querySelector("button").textContent = "Başlayın");

const ctaImg = (document.querySelector("#cta-img").src =
  "http://localhost:9000/img/cta.png");

// ana içerik

document.getElementsByTagName("h4")[0].textContent = "Özellikler";
document.getElementsByTagName("h4")[1].textContent = "Hakkında";
document.getElementsByTagName("h4")[2].textContent = "Servisler";
document.getElementsByTagName("h4")[3].textContent = "Ürünler";
document.getElementsByTagName("h4")[4].textContent = "Vizyon";

const anaIcerikImg = (document.querySelector("#middle-img").src =
  "http://localhost:9000/img/accent.png");

document.getElementsByTagName("p")[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("p")[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("p")[2].textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("p")[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("p")[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// contact bölümü

document.getElementsByTagName("h4")[5].textContent = "İletişim";

document.getElementsByTagName("p")[5].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
document.getElementsByTagName("p")[6].textContent = "+90 (123) 456-7899";

document.getElementsByTagName("p")[7].textContent =
  "satis@birsirketsitesi.com.tr";

// footer

const footerCr = document.querySelector("footer a");
footerCr.textContent = "Copyright Bir Şirket Sitesi 2022";
footerCr.classList.add("bold");
//document.querySelector("footer a").style.fontWeight = "bold";