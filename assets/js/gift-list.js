const giftGrid = document.querySelector("#gift-grid");

if (giftGrid && Array.isArray(window.WEDDING_GIFTS)) {
  window.WEDDING_GIFTS.forEach((gift) => {
    const card = document.createElement("article");
    card.className = "gift-card";
    card.innerHTML = `
      <div class="gift-card-visual">
        <img src="${gift.image}" alt="${gift.alt}" loading="lazy">
      </div>
      <div class="gift-card-copy">
        <h3>${gift.title}</h3>
        <p>${gift.summary}</p>
        <a href="regalo.html?idea=${encodeURIComponent(gift.id)}" aria-label="Scopri: ${gift.title}">
          Scopri questa idea →
        </a>
      </div>
    `;
    giftGrid.append(card);
  });
}
