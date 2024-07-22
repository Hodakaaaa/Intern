function openGoogle() {
  window.open("https://www.google.com", "_blank");
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
