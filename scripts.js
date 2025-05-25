function cevapVer(secim) {
  const soruKutusu = document.getElementById("soruKutusu");
  const soru = document.getElementById("soru");
  const cevaplar = document.getElementById("cevaplar");

  // Önce animasyonu kaldır
  soruKutusu.classList.remove("fade");

  // Küçük bir gecikmeyle içerik güncelle
  setTimeout(() => {
    if (secim === "hic") {
      soru.innerHTML = "😢 Kalbim kırıldı...";
      cevaplar.innerHTML = "";
    } else if (secim === "biraz") {
      soru.innerHTML = "🤔 Demek biraz... Peki neden affetmelisin?";
      cevaplar.innerHTML = `
        <button onclick="cevapVer('cunku_seviyorum')">Çünkü seni seviyorum</button>
        <button onclick="cevapVer('cunku_hakettin')">Çünkü ikinci şansı hak ettin</button>
      `;
    } else if (secim === "cok") {
      soru.innerHTML = "❤️ Ben de seni çok özledim... Devam edelim mi?";
      cevaplar.innerHTML = `
        <button onclick="cevapVer('cunku_seviyorum')">Evet, devam</button>
      `;
    } else if (secim === "cunku_seviyorum" || secim === "cunku_hakettin") {
      soru.innerHTML = "🥺 O zaman... Beni affeder misin?";
      cevaplar.innerHTML = `
        <button onclick="cevapVer('evet')">Evet</button>
        <button onclick="cevapVer('hayir')">Hayır</button>
      `;
    } else if (secim === "evet") {
      soru.innerHTML = `<h2>🎉 Yaşasın! Seni asla üzmek istemem.</h2>`;
      cevaplar.innerHTML = "";
    } else if (secim === "hayir") {
      soru.innerHTML = "💔 Olsun... Seni hep seveceğim.";
      cevaplar.innerHTML = "";
    }

    // Animasyonu tekrar uygula
    soruKutusu.classList.add("fade");
  }, 150);
}
function rastgeleKalp() {
  const kalp = document.createElement("div");
  kalp.classList.add("kalp");

  kalp.style.left = Math.random() * 100 + "vw";
  kalp.style.animationDuration = (4 + Math.random() * 2) + "s";

  document.querySelector(".kalpContainer").appendChild(kalp);

  // Belirli süre sonra kalbi sil
  setTimeout(() => {
    kalp.remove();
  }, 6000);
}

// Her 500ms'de bir kalp üret
setInterval(rastgeleKalp, 500);
