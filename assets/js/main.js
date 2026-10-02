document.documentElement.classList.add("js");

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  if (!link.getAttribute("rel")) {
    link.setAttribute("rel", "noopener noreferrer");
  }
});
