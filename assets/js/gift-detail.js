const params = new URLSearchParams(window.location.search);
const requestedId = params.get("idea");
const gifts = Array.isArray(window.WEDDING_GIFTS) ? window.WEDDING_GIFTS : [];
const gift = gifts.find((item) => item.id === requestedId) || gifts[0];

if (gift) {
  const title = document.querySelector("#gift-title");
  const description = document.querySelector("#gift-description");
  const image = document.querySelector("#gift-image");

  title.textContent = gift.title;
  description.textContent = gift.description;
  image.src = gift.image;
  image.alt = gift.alt;
  document.title = `${gift.title} — Daniela & Tommaso`;
}
