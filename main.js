function clicar() {
  const shareInfoCard = document.querySelector(".card__share-info");
  const ponta = document.querySelector(".ponta");
  const shareIcon = document.querySelector(".card__share-bigscreen");

  if (shareInfoCard.style.display === "none") {
    shareInfoCard.style.display = "flex";
    ponta.style.display = "block";
    shareIcon.style.display = "flex";
  } else {
    shareInfoCard.style.display = "none";
    ponta.style.display = "none";
    shareIcon.style.display = "none";
  }
}
