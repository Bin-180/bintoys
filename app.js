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
  },
  {
    id: "lego-arcade-pinball-machine",
    title: "LEGO 推出真的能玩的 Arcade Pinball Machine：復古電玩感從展示品變成桌上遊戲",
    category: "積木新品",
    date: "2026-06-18",
    source: "https://www.gamesradar.com/toys-collectibles/this-lego-pinball-machine-actually-works-and-its-a-love-letter-to-all-things-70s-arcades/",
    images: [],
    imageCredit: "LEGO",
    summary:
      "LEGO Arcade Pinball Machine 預計 2026 年 7 月 4 日上市，18+ 系列、2,274 片、售價 229.99 美元。這款不是把彈珠台外觀做成靜態模型，而是真的配有彈簧發射器、雙撥桿和旋轉碰撞器，可以實際遊玩。我覺得這是 LEGO 成人收藏品開始從「拼完看」轉向「拼完玩」的一個明確訊號。",
    body:
      "GamesRadar 報導，LEGO 即將推出 Arcade Pinball Machine，預計 2026 年 7 月 4 日上市，定位為 18+ 成人系列，共 2,274 片，美國售價 229.99 美元、英國售價 189.99 英鎊。這款的重點不是復刻彈珠台的外觀造型，而是真的做進了彈簧發射器、雙撥桿、旋轉碰撞器與坡道橋，讓拼砌完成後可以實際遊玩，而不只是擺著看。\n\n讓我比較注意的是這款定位上的切換。LEGO 成人系列這幾年做了很多值得收藏的展示品，花盆、吉他、老爺車，大部分的入手理由都是「拼完之後擺在架子上看」。但 Arcade Pinball Machine 的核心賣點在於它可以玩，而且 70 年代電玩廳的主題天然地和一批對那個年代有情懷的人說話。靜態展示和真正可動的互動體驗，這是兩種不同的入手理由，產品把這兩個都納進來了。\n\n從收藏角度來看，229.99 美元在 LEGO 成人系列裡屬於中高段定價，但 2,274 片加上機構設計，拼砌本身就已經有一定份量。完成品同時有展示價值和娛樂功能，這種雙重屬性對說服自己入手的玩家來說是挺有力的理由。如果這款口碑好，LEGO 往後推出更多「可互動」的成人系列也不讓人意外。\n\n小彬觀察：LEGO 近年的成人收藏品走得很穩，但多半還是靜態展示品。Arcade Pinball Machine 是個有點不同的訊號，它想讓你拼完之後繼續拿起來玩，而不只是放著看。從展示品走向互動體驗，這個方向值得繼續追蹤 LEGO 後續有沒有更多這類產品出來。"
  },
  {
    id: "lego-pokemon-smart-play",
    title: "LEGO Pokémon Smart Play 智慧積木登場：寶可夢從拼砌模型變成可以互動對戰的玩具",
    category: "互動玩具",
    date: "2026-06-02",
    source: "https://www.theguardian.com/lifeandstyle/2026/jun/02/lego-launches-pokemon-smart-bricks-battles-trainer",
    images: [],
    imageCredit: "LEGO",
    summary:
      "LEGO 宣布推出 Pokémon 智慧積木系列，拼好的寶可夢模型可以透過動作感應和聲光效果回應玩家動作，入門組英國售價約 60 英鎊、擴充組從約 13 英鎊起，預計 8 月上市。LEGO 和 Pokémon 的粉絲本來重疊度就高，這次多了互動機制，讓它同時在收藏、遊戲、親子三條線上說話。",
    body:
      "The Guardian 報導，LEGO 宣布推出 Pokémon 智慧積木系列（Pokémon Smart Play），讓拼砌完成的寶可夢模型能透過動作感應和聲光效果回應玩家動作，主打對戰與訓練家的沉浸感。入門組英國定價約 60 英鎊，擴充組從約 13 英鎊起跳，預計 8 月上市。\n\nLEGO 和 Pokémon 原本就是粉絲群高度重疊的兩個品牌，過去的 LEGO Pokémon 系列主要是靜態模型，這次加入感應互動讓它的定位有了明顯的不同。把積木拼砌和對戰機制結合在一起，代表這款商品同時在和收藏玩家、Pokémon 遊戲粉，以及想找親子互動玩具的家長說話，切入面比一般聯名授權商品更廣，也更有延伸空間。\n\n從商品結構看，入門組 60 英鎊、擴充組 13 英鎊起的分層定價是成熟的系列化設計，讓玩家先用相對合理的門檻試水，之後再依自己想收的角色和場景逐步擴充。對收藏玩家來說，這種架構比一次性的單一盒組更容易讓人持續跟進，也讓系列本身有機會慢慢累積起規模。\n\n小彬觀察：LEGO 和 Pokémon 的聯名本身已經夠強，加入互動感應是讓這個系列多了一層差異化。它設計成拼完之後還想繼續拿起來玩，這個方向和 LEGO 同期推出的 Arcade Pinball Machine 有點接近，感覺品牌正在認真測試「完成品不只是靜態展示」這條路會走到哪裡。"
  },
  {
    id: "toy-story-5-interactive-toys",
    title: "《Toy Story 5》周邊提前升溫：Mattel 互動 Woody 與 Buzz 把角色玩具做得更像螢幕裡的朋友",
    category: "電影周邊",
    date: "2026-06-17",
    source: "https://www.techradar.com/streaming/entertainment/i-rounded-up-the-best-toy-story-5-toys-and-merch-these-are-the-high-tech-figures-lego-sets-and-apparel-worth-buying",
    images: [],
    imageCredit: "Disney Pixar / Mattel",
    summary:
      "《Toy Story 5》上映前，Mattel 推出具備臉部動作與互相對話設計的高互動 Woody 與 Buzz，同期還有 PlayScale 人偶、LeapFrog 平板玩具、Funko Pop、LEGO 盒組與 Adidas 聯名等周邊陣容。Toy Story 的商品化很特別，因為電影本身就在講玩具，角色與現實玩具之間的距離天然比其他 IP 更近。",
    body:
      "TechRadar 整理了《Toy Story 5》上映前的周邊商品，焦點落在 Mattel 推出的互動版 Woody 與 Buzz，兩款都具備臉部動作與互相對話功能。同期周邊還有 PlayScale 互動人偶、LeapFrog 的 Lilypad 平板玩具、Funko Pop 系列、LEGO 盒組，以及 Adidas 聯名服飾等，整體陣容比一般電影周邊更廣，涵蓋的客層也很多元。\n\nToy Story 的商品化有一個很特別的地方，就是電影本身講的就是玩具活過來的故事，這讓角色和現實玩具之間的距離天然就比其他 IP 更近。Mattel 的互動 Woody 和 Buzz 會動、會說話、會彼此對話，你幾乎可以說這不只是「電影周邊」，而是電影裡那個世界的延伸。這種一致性是這個 IP 在商品化上的天然優勢，其他動畫 IP 不容易複製。\n\n從收藏市場來看，Toy Story 系列因為橫跨好幾個世代，粉絲年齡層很廣，從三十多歲看著第一集長大的觀眾，到現在第一次接觸這個 IP 的孩子都有。Mattel 這次主打高互動功能，明顯是在瞄準願意花更多預算的成年粉絲，這和 Funko Pop 及 LEGO 各自面向的客層形成層次很豐富的周邊矩陣，讓這一波周邊整體有不錯的市場覆蓋面。\n\n小彬觀察：《Toy Story 5》的周邊量能應該不會小，但比較值得追的是互動類這條線。Mattel 的 Woody 和 Buzz 如果互動口碑好，對往後動畫 IP 的商品化策略會是個參考點。玩具主題的電影能讓角色商品「更像電影裡的那個樣子」，這種天然優勢是其他 IP 很難複製的。"
  },
  {
    id: "hasbro-ultimate-grogu-animatronic",
    title: "Hasbro Ultimate Grogu 要價 599 美元：Baby Yoda 從可愛周邊升級成電影道具級電子收藏",
    category: "電影周邊",
    date: "2026-04-30",
    source: "https://people.com/hasbro-will-release-star-wars-ultimate-grogu-baby-yoda-animatronic-11960871",
    images: [],
    imageCredit: "Hasbro",
    summary:
      "Hasbro 推出 Star Wars: Ultimate Grogu，售價 599.99 美元，是《The Mandalorian and Grogu》電影拍攝中 Grogu 替身道具的 1:1 複製收藏品，高約 14.6 吋、近 9 磅，具備超過 250 種動畫與聲音組合，並能感應回應聲音、觸碰與方向。這不是一般兒童玩具，而是把電子寵物、角色情感與電影道具感融合在一起的高價收藏。",
    body:
      "People 報導，Hasbro 宣布推出 Star Wars: Ultimate Grogu，售價 599.99 美元，高約 14.6 吋、重近 9 磅。這款的定位說得很直接：它是《The Mandalorian and Grogu》電影拍攝現場 Grogu 替身道具的 1:1 複製收藏品。功能上具備超過 250 種動畫與聲音組合，可以眨眼、發聲、走動、做出類似使用原力的動作，並透過感應器回應周圍的聲音、觸碰與人物方向。\n\n這款的有趣之處在於它和一般「高端電子玩具」的定位有所不同。把自己定義成電影替身道具的複製品，等於是在向買家說：這不是玩具部門做給孩子的商品，而是給願意為劇組道具感買單的成年收藏者準備的。Grogu 的外型本來就偏向電子寵物那種能帶出情感互動的設計，加上感應回應功能，展示時很容易讓人覺得它有自己的存在感，而不只是靜靜擺著的雕像。\n\n599.99 美元的定價在電子收藏品裡屬於明確的高價段，主要在和已經有足夠星戰收藏預算、同時對《曼達洛人》情感連結深的玩家溝通。從市場定位來看，它更接近高階電子雕像或紀念級道具，而不是一般消費電子玩具。這種精準定位決定了它的受眾不需要很廣，只要能找到對的人，定價本身就不會是主要障礙。\n\n小彬觀察：Grogu 商品化這幾年走得很穩，從小公仔到 Funko Pop 都有，但 Ultimate Grogu 是目前看過規格感最重的一款。它的訴求很清楚，就是讓你覺得家裡有個「真的」Grogu。把電子寵物感、角色情感和電影道具收藏融合在一起，這個組合比純靜態雕像難做，但做好了話題性很強，是值得關注的高端收藏品走向。"
  }
];

sampleArticles.sort((a, b) => b.date.localeCompare(a.date));

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
