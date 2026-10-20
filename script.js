// script.js
// Hii ni FRONTEND PROTOTYPE tu — data zote ziko kwenye kumbukumbu ya kivinjari (in-memory),
// zinapotea ukisasisha ukurasa. Developer: unganisha na backend/API halisi badala ya PRODUCTS/CATEGORIES.

let state = {
  likedIds: new Set(),
  cargoIds: new Set(),
  currentProductId: null,
  idOption: "nida"
};

// ---------- NAVIGATION ----------
function goTo(screenName) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + screenName).classList.add("active");
  if (screenName === "home") renderHome();
  if (screenName === "results") renderResults();
}

function openProduct(id) {
  state.currentProductId = id;
  renderDetail();
  goTo("detail");
}

// ---------- RENDER: HOME ----------
function renderHome() {
  const catRow = document.getElementById("category-row");
  catRow.innerHTML = CATEGORIES.map(c =>
    `<button class="category-chip" onclick="filterByCategory('${c.id}')">
       <div class="swatch" style="background:${c.color}"></div>${c.name}
     </button>`
  ).join("");

  const grid = document.getElementById("home-products");
  grid.innerHTML = PRODUCTS.slice(0, 4).map(p => productCardHTML(p)).join("");
}

function filterByCategory(catId) {
  document.getElementById("filter-category").value = catId;
  goTo("results");
}

function productCardHTML(p) {
  return `
    <button class="product-card" onclick="openProduct(${p.id})">
      <div class="thumb"></div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="price-row">
          <span class="price">${p.priceLabel}</span>
          ${p.verified ? verifiedBadgeHTML() : ""}
        </div>
        <div style="margin-top:4px">
          <span class="tag ${p.type === "Wholesale" ? "wholesale" : "retail"}">${p.type}</span>
        </div>
      </div>
    </button>`;
}

function verifiedBadgeHTML() {
  return `<span class="badge-verified" title="Verified" aria-label="Verified">
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
  </span>`;
}

// ---------- RENDER: RESULTS ----------
function initCategoryFilterOptions() {
  const sel = document.getElementById("filter-category");
  CATEGORIES.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name;
    sel.appendChild(opt);
  });
}

function renderResults() {
  const query = (document.getElementById("search-input").value || "").toLowerCase();
  const cat = document.getElementById("filter-category").value;
  const type = document.getElementById("filter-type").value;
  const verifiedOnly = document.getElementById("filter-verified").checked;

  const filtered = PRODUCTS.filter(p => {
    if (query && !p.name.toLowerCase().includes(query)) return false;
    if (cat && p.category !== cat) return false;
    if (type && p.type !== type) return false;
    if (verifiedOnly && !p.verified) return false;
    return true;
  });

  document.getElementById("result-count").textContent = `Matokeo ${filtered.length}`;

  const list = document.getElementById("results-list");
  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty-state">Hakuna bidhaa zilizopatikana. Jaribu kubadilisha utafutaji wako.</div>`;
    return;
  }

  list.innerHTML = filtered.map(p => `
    <button class="result-card" onclick="openProduct(${p.id})">
      <div class="thumb"></div>
      <div class="body">
        <div class="name">${p.name}</div>
        <div class="price">${p.priceLabel}</div>
        <div class="tags">
          ${p.verified ? verifiedBadgeHTML() : ""}
          <span class="tag ${p.type === "Wholesale" ? "wholesale" : "retail"}">${p.type}</span>
          <span class="tag retail">${p.location}</span>
        </div>
      </div>
      <span class="like-btn ${state.likedIds.has(p.id) ? "liked" : ""}"
            onclick="event.stopPropagation(); toggleLike(${p.id})">${state.likedIds.has(p.id) ? "♥" : "♡"}</span>
    </button>
  `).join("");
}

// ---------- RENDER: DETAIL ----------
function renderDetail() {
  const p = PRODUCTS.find(x => x.id === state.currentProductId);
  if (!p) return;

  document.getElementById("detail-name").textContent = p.name;
  document.getElementById("detail-price").textContent = p.priceLabel;
  document.getElementById("detail-seller").innerHTML =
    p.seller + (p.verified ? " " + verifiedBadgeHTML() : "");
  document.getElementById("detail-location").textContent = p.location;

  document.getElementById("detail-tags").innerHTML = `
    <span class="tag ${p.type === "Wholesale" ? "wholesale" : "retail"}">${p.type}</span>
    ${p.type === "Wholesale" ? `<span class="tag retail">Kiwango cha chini: vipande 10</span>` : ""}
  `;

  const likeBtn = document.getElementById("detail-like-btn");
  likeBtn.textContent = state.likedIds.has(p.id) ? "♥" : "♡";
  likeBtn.style.color = state.likedIds.has(p.id) ? "#E11D48" : "var(--text)";

  const contactBtn = document.getElementById("detail-contact-btn");
  // Developer: hapa ndipo unaunganisha na WhatsApp/simu halisi, mfano:
  // href = `https://wa.me/255XXXXXXXXX?text=Habari, ninavutiwa na ${p.name}`
  contactBtn.onclick = () => alert("Developer: unganisha hii na WhatsApp/simu ya muuzaji wa kweli.");
}

// ---------- LIKE / CARGO ----------
function toggleLike(id) {
  if (state.likedIds.has(id)) state.likedIds.delete(id);
  else state.likedIds.add(id);
  renderResults();
}

function toggleLikeCurrent() {
  toggleLike(state.currentProductId);
  renderDetail();
}

function toggleCargoCurrent() {
  const id = state.currentProductId;
  if (state.cargoIds.has(id)) state.cargoIds.delete(id);
  else state.cargoIds.add(id);
  alert(state.cargoIds.has(id) ? "Imeongezwa kwenye Cargo" : "Imeondolewa kwenye Cargo");
}

function showFavorites() {
  const liked = PRODUCTS.filter(p => state.likedIds.has(p.id));
  alert("Vipendwa (" + liked.length + "): " + (liked.map(p => p.name).join(", ") || "Bado hakuna"));
}

function showCargo() {
  const cargo = PRODUCTS.filter(p => state.cargoIds.has(p.id));
  alert("Cargo (" + cargo.length + "): " + (cargo.map(p => p.name).join(", ") || "Bado hakuna"));
}

// ---------- REGISTER ----------
function selectIdOption(option) {
  state.idOption = option;
  document.getElementById("opt-nida").classList.toggle("active", option === "nida");
  document.getElementById("opt-card").classList.toggle("active", option === "card");
  document.getElementById("id-input-label").textContent =
    option === "nida" ? "Namba ya NIDA" : "Pakia picha ya Kitambulisho (mbele na nyuma)";
  document.getElementById("reg-id-value").placeholder =
    option === "nida" ? "Namba ya NIDA" : "Chagua picha...";
}

function submitRegister() {
  const name = document.getElementById("reg-name").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const idValue = document.getElementById("reg-id-value").value.trim();

  if (!name || !phone || !idValue) {
    alert("Tafadhali jaza taarifa zote kabla ya kuendelea.");
    return;
  }
  // Developer: hapa ndipo unatuma data hii kwenye backend/API yako kuhifadhi na kuanza
  // mchakato wa uthibitisho (OTP, ukaguzi wa manual, n.k) kama ilivyoelezwa kwenye mpango wa biashara.
  alert("Developer: tuma taarifa hizi kwenye seva yako.\n\nJina: " + name + "\nSimu: " + phone + "\nNjia: " + state.idOption + "\nThamani: " + idValue);
}

// ---------- INIT ----------
initCategoryFilterOptions();
renderHome();
