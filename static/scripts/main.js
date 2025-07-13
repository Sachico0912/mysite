const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-content");
function toggleSidebar() {
  sidebar.classList.toggle("open");
  main.classList.toggle("with-sidebar");
}

function addArticle() {
  const list = document.getElementById("article-list");
  const count = list.children.length + 1;
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.textContent = `新文章 ${count}`;
  list.appendChild(newCard);
}
