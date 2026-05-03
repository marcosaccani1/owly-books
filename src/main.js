import "./css/style.css";

import {
  fetchBooksBySubject,
  fetchBookDetails,
} from "./js/services/openLibraryService";

import {
  mapBooksFromSubject,
  getBookDescription,
} from "./js/repositories/bookRepository";

import {
  renderBooks,
  renderDescription,
  renderError,
} from "./js/ui/bookView";

const form = document.querySelector("#search-form");
const input = document.querySelector("#subject-input");
const results = document.querySelector("#results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = input.value.trim();

  if (!subject) {
    renderError(results, "Inserisci una categoria valida");
    return;
  }

  results.innerHTML = "<p>Caricamento...</p>";

  try {
    const data = await fetchBooksBySubject(subject);
    const books = mapBooksFromSubject(data);

    renderBooks(books, results, async (key, card) => {
      try {
        const existingDescription = card.querySelector(".desc");

        if (existingDescription) {
          existingDescription.remove();
          return;
        }

        renderDescription(card, "Caricamento...");

        const details = await fetchBookDetails(key);
        const description = getBookDescription(details);

        renderDescription(card, description);
      } catch {
        renderDescription(card, "Errore nel caricamento");
      }
    });
  } catch {
    renderError(results, "Errore nella ricerca");
  }
});