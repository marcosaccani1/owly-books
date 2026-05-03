export function renderBooks(books, container, onClick) {
  container.innerHTML = "";

  if (books.length === 0) {
    container.innerHTML = "<p>Nessun libro trovato</p>";
    return;
  }

  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";

    const title = document.createElement("h2");
    title.textContent = book.title;

    const authors = document.createElement("p");
    authors.textContent = `Autori: ${book.authors.join(", ")}`;

    const btn = document.createElement("button");
    btn.textContent = "Mostra descrizione";

    btn.addEventListener("click", () => onClick(book.key, card));

    card.append(title, authors, btn);
    container.appendChild(card);
  });
}

export function renderDescription(card, text) {
  let p = card.querySelector(".desc");

  if (!p) {
    p = document.createElement("p");
    p.className = "desc";
    card.appendChild(p);
  }

  p.textContent = text;
}

export function renderError(container, msg) {
  container.innerHTML = `<p class="error">${msg}</p>`;
}