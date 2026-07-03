function isPdf(url) {
  if (!url) return false;

  return (
    url.toLowerCase().includes(".pdf") ||
    url.toLowerCase().includes("pdf")
  );
}

// Ouvre dans l’onglet → laisse Chrome gérer le rendu natif (IMPORTANT)
function openNative(url) {
  window.location.href = url;
}

// Interception clic
document.addEventListener("click", (e) => {
  let el = e.target;

  while (el && el.tagName !== "A") {
    el = el.parentElement;
  }

  if (!el || !el.href) return;

  const url = el.href;

  if (!isPdf(url)) return;

  console.log("PDF intercepted (v4):", url);

  e.preventDefault();
  e.stopPropagation();

  openNative(url);
}, true);
