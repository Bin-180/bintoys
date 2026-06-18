const STORAGE_KEY = "bin-bought-toys-articles";

const sampleArticles = [
  {
    id: "lego-kpop-demon-hunters-derpy",
    title: "LEGO 首款《KPop Demon Hunters》盒組亮相：Derpy Tiger 與 Sussie Bird 把迷因熱度做成可動展示品",
    category: "授權新品",
    date: "2026-06-16",
    source: "https://www.gamesradar.com/toys-collectibles/get-your-first-look-at-lego-kpop-demon-hunters-derpy-tiger-and-sussie-bird/",
    images: [
      "Derpy Tiger1.jpg",
      "Derpy Tiger2.jpg",
      "Derpy Tiger3.jpg",
      "Derpy Tiger4.jpg",
      "Derpy Tiger5.jpg",
      "Derpy Tiger6.jpg",
      "Derpy Tiger7.jpg",
      "Derpy Tiger8.jpg"
    ],
    imageCredit: "LEGO",
    summary:
      "LEGO 公開《KPop Demon Hunters》Derpy Tiger and Sussie Bird 盒組，825 片、預計 2026 年 8 月 1 日上市。我覺得這款比較值得注意的地方，是它先從辨識度高的動物角色切入，而不是從主角人形，這個選擇本身就挺有意思的。",
    body:
      "LEGO 公開首款《KPop Demon Hunters》盒組「Derpy Tiger and Sussie Bird」，把作品裡這兩個討喜的動物角色做成 825 片的拼砌模型。根據 GamesRadar 報導，這款盒組具備可動的腿、腳與頭部，也提供可替換表情零件，讓 Derpy Tiger 可以在咧嘴笑與吐舌之間切換。\n\n我覺得比較有趣的是，LEGO 這次沒有從主角人形入手，而是先選了這兩個在社群上流傳度很高的動物角色。Derpy Tiger 和 Sussie Bird 的輪廓辨識度強，本來就適合做成擺拍用的桌上展示物，對親子族群也比人形角色更好入手。這個切入點比直接做主角更聰明一些。\n\n從收藏角度來看，825 片落在輕中量級，門檻不算高，但體積和表情可動的組合確實足以製造展示效果。如果後續推出舞台、場景或其他角色，這條線是有機會慢慢累積成可以整套收的系列的。\n\n小彬觀察：迷因動物角色商品化這個方向我個人挺注意的。能帶動話題的不一定是主角，而是那些大家在社群上已經熟悉、反覆看到的表情和符號。LEGO 選這兩個角色，我認為主要就是看準了這一點。"
  },
  {
    id: "star-wars-bdx-droids",
    title: "Disney Store 星戰日新品聚焦 BDX Droid：從樂園互動角色走向桌上收藏",
    category: "電影周邊",
    date: "2026-05-04",
    source: "https://www.techradar.com/streaming/entertainment/exclusive-bdx-droid-figures-a-talking-mandalorian-and-more-star-wars-toys-are-landing-at-disney-store-for-may-the-4th",
    images: [
      "星戰1.jpg",
      "星戰2.jpg",
      "星戰3.jpg",
      "星戰4.jpg",
      "星戰5.jpg",
      "星戰6.jpg"
    ],
    imageCredit: "Disney Store",
    summary:
      "Disney Store 於 2026 星戰日推出多款《The Mandalorian and Grogu》相關玩具與收藏品。這波裡面 BDX Droid 的背景比較特別，它不是靠電影主線建立知名度，而是先從樂園互動角色起步，這點讓它和一般新品有點不同。",
    body:
      "配合 2026 年 5 月 4 日星戰日，Disney Store 推出一波《The Mandalorian and Grogu》相關玩具與收藏品。TechRadar 報導，這次新品包含 BDX Droid 公仔、可變聲曼達洛頭盔、發光護臂、會說話的曼達洛人與 Grogu 可動玩具，以及 Anzellan droidsmith 等商品。\n\n這波裡面我比較有興趣追的是 BDX Droid。它的背景比較特別，不是靠電影主線累積知名度，而是先以互動角色的形式出現在 Disney Parks 和 Disney Cruise Line，讓去過樂園的人留下直接的記憶點，再隨著電影上映順勢推出商品。這種「體驗先行、收藏跟上」的路徑，讓它比一般新角色公仔多了一些情感基礎。\n\nBDX Droid 有紅、藍、綠、橘等配色版本，對收藏展示來說挺有彈性的。單隻入手不虧，整排擺出來也有視覺節奏。玩家通常也喜歡討論哪個配色最對味，這種互動本身就是收藏社群裡常見的話題切入點。\n\n小彬觀察：星戰周邊很擅長把機器人和頭盔變成收藏重心，BDX Droid 也延續了這個方向。對已經有星戰角色展示架的玩家來說，這一波不算是完全陌生的品項，但 BDX 本身是個比較新鮮的臉，值得注意後續商品線怎麼發展。"
  },
  {
    id: "shadowheart-nendoroid",
    title: "《柏德之門 3》Shadowheart 黏土人剪影公開：角色輪廓夠強，粉絲第一眼就認出來了",
    category: "遊戲角色",
    date: "2026-03-24",
    source: "https://www.gamesradar.com/toys-collectibles/gurl-its-happening-a-shadowheart-nendoroid-figure-is-on-the-way-and-baldurs-gate-3-fans-are-losing-it/",
    images: ["柏德之門3.jpg"],
    imageCredit: "Good Smile Company",
    summary:
      "Good Smile Company 以剪影預告《柏德之門 3》Shadowheart 黏土人，粉絲幾乎第一眼就從高馬尾輪廓和手持的 Mysterious Artefact 認出角色。正臉和配件都還沒公開，反應就這麼熱烈，可見角色的輪廓記憶點有多紮實。",
    body:
      "Good Smile Company 以剪影形式預告《Baldur's Gate 3》Shadowheart 黏土人。GamesRadar 報導，雖然配件與發售資訊都還沒正式公布，但粉絲幾乎第一眼就從高馬尾輪廓和手持的 Mysterious Artefact 認出來了。\n\n這個反應挺說明問題的。Shadowheart 是《柏德之門 3》裡討論度最高的幾個隊友之一，外型特徵辨識度強，加上角色本身的劇情厚度，對有通關過的玩家來說記憶點特別深。黏土人的比例和可替換零件設計，剛好也適合還原 RPG 裡那些玩家自己走出來的場景，和動作類角色的收藏方式不太一樣。\n\n目前《柏德之門 3》的黏土人商品線已經有 Astarion，Shadowheart 算是第二個加入的主要隊友。後續如果陸續推出 Karlach、Gale、Lae'zel 等角色，整條線就會從「買了一個喜歡的角色」演變成「想把全隊收齊」的那種收藏需求，對玩家來說是完全不同的心理狀態。\n\n小彬觀察：遊戲角色商品化最難的地方，通常不是外型還原，而是有沒有抓到玩家的情感記憶點。Shadowheart 剪影就能被認出這件事，說明角色本身的輪廓設計夠紮實，這類商品往往不需要太多介紹，粉絲自己就會找上門。"
  }
];

const articleGrid = document.querySelector("#articleGrid");
const readerSection = document.querySelector("#reader");
const readerContent = document.querySelector("#readerContent");
const closeReader = document.querySelector("#closeReader");
const form = document.querySelector("#articleForm");
const resetSamples = document.querySelector("#resetSamples");

const fields = {
  title: document.querySelector("#titleInput"),
  category: document.querySelector("#categoryInput"),
  date: document.querySelector("#dateInput"),
  source: document.querySelector("#sourceInput"),
  image: document.querySelector("#imageInput"),
  summary: document.querySelector("#summaryInput"),
  body: document.querySelector("#bodyInput")
};

function getArticles() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return [...sampleArticles];
  }

  try {
    return JSON.parse(stored);
  } catch {
    return [...sampleArticles];
  }
}

function saveArticles(articles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(`${dateValue}T00:00:00`));
}

function renderArticles() {
  const articles = getArticles().sort((a, b) => b.date.localeCompare(a.date));

  articleGrid.innerHTML = articles
    .map((article) => {
      const sample = sampleArticles.find((s) => s.id === article.id);
      const thumbnail = sample && Array.isArray(sample.images) && sample.images.length
        ? sample.images[0]
        : "";

      return `
        <article class="article-card">
          ${thumbnail ? `<img class="article-thumb" src="${thumbnail}" alt="${article.title}" loading="lazy">` : ""}
          <span class="tag">${article.category}</span>
          <h3>${article.title}</h3>
          <div class="meta">
            <span>${formatDate(article.date)}</span>
          </div>
          <p>${article.summary}</p>
          <button class="button ghost" type="button" data-read="${article.id}">閱讀文章</button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-read]").forEach((button) => {
    button.addEventListener("click", () => openArticle(button.dataset.read));
  });
}

function openArticle(id) {
  const article = getArticles().find((item) => item.id === id);
  if (!article) return;

  const sample = sampleArticles.find((s) => s.id === id);
  const images = (sample && sample.images) || [];
  const imageCredit = (sample && sample.imageCredit) || "";

  const hasMultiple = images.length > 1;
  const imagePanel = images.length
    ? `<aside class="reader-image-panel" data-gallery='${JSON.stringify(images)}' data-index="0">
        <div class="reader-image-frame">
          ${hasMultiple ? `<button class="reader-image-nav prev" type="button" aria-label="上一張">&#8249;</button>` : ""}
          <img src="${images[0]}" alt="${article.title}" class="reader-feature-image${images[0].includes("Derpy Tiger1") ? " is-zoomed" : ""}">
          ${hasMultiple ? `<button class="reader-image-nav next" type="button" aria-label="下一張">&#8250;</button>` : ""}
        </div>
        <div class="reader-image-footer">
          <span class="reader-image-count">1 / ${images.length}</span>
          <span class="image-credit">圖片來源：${imageCredit}</span>
        </div>
      </aside>`
    : "";

  readerContent.innerHTML = `
    <div class="reader-layout">
      <article class="reader">
        <span class="tag">${article.category}</span>
        <h2>${article.title}</h2>
        <div class="meta">
          <span>${formatDate(article.date)}</span>
          <a href="${article.source}" target="_blank" rel="noreferrer">原始來源</a>
        </div>
        <p><strong>摘要：</strong>${article.summary}</p>
        <div class="body">${article.body}</div>
      </article>
      ${imagePanel}
    </div>
  `;

  const panel = readerContent.querySelector(".reader-image-panel");
  if (panel) {
    const gallery = JSON.parse(panel.dataset.gallery);
    const img = panel.querySelector(".reader-feature-image");
    const count = panel.querySelector(".reader-image-count");
    let index = 0;

    function showImage(nextIndex) {
      index = (nextIndex + gallery.length) % gallery.length;
      img.src = gallery[index];
      img.classList.toggle("is-zoomed", index === 0 && gallery[0].includes("Derpy Tiger1"));
      count.textContent = `${index + 1} / ${gallery.length}`;
    }

    const prev = panel.querySelector(".prev");
    const next = panel.querySelector(".next");
    if (prev && next && gallery.length > 1) {
      prev.addEventListener("click", () => showImage(index - 1));
      next.addEventListener("click", () => showImage(index + 1));
    }
  }

  if (fields.title) {
    fields.title.value = article.title;
    fields.category.value = article.category;
    fields.date.value = article.date;
    fields.source.value = article.source;
    fields.summary.value = article.summary;
    fields.body.value = article.body;
  }

  readerSection.hidden = false;
  readerSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function slugify(text) {
  const safe = text
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return safe || `article-${Date.now()}`;
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const article = {
      id: slugify(fields.title.value),
      title: fields.title.value.trim(),
      category: fields.category.value.trim(),
      date: fields.date.value,
      source: fields.source.value.trim(),
      summary: fields.summary.value.trim(),
      body: fields.body.value.trim()
    };

    const existing = getArticles();
    const nextArticles = [article, ...existing.filter((item) => item.id !== article.id)];
    saveArticles(nextArticles);
    renderArticles();
    openArticle(article.id);
  });
}

if (resetSamples) {
  resetSamples.addEventListener("click", () => {
    saveArticles([...sampleArticles]);
    if (form) form.reset();
    readerSection.hidden = true;
    renderArticles();
  });
}

closeReader.addEventListener("click", () => {
  readerSection.hidden = true;
  document.querySelector("#articles").scrollIntoView({ behavior: "smooth" });
});

if (!localStorage.getItem(STORAGE_KEY)) {
  saveArticles([...sampleArticles]);
}

if (fields.date) fields.date.value = new Date().toISOString().slice(0, 10);
renderArticles();

// Gallery lightbox
const galleryItems = document.querySelectorAll(".gallery-item");
const photoModal = document.getElementById("photoModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalScroll = document.getElementById("modalScroll");

if (photoModal) {
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const photos = JSON.parse(item.dataset.photos);
      const group = item.dataset.group;
      modalScroll.innerHTML = photos
        .map((src) => `<img src="${src}" alt="${group}">`)
        .join("");
      photoModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    photoModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
