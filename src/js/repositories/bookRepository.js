export function mapBooksFromSubject(data) {
  if (!data?.works) return [];

  return data.works.map((book) => ({
    key: book.key,
    title: book.title || "Titolo non disponibile",
    authors: book.authors?.map((a) => a.name) || ["Sconosciuto"],
  }));
}

export function getBookDescription(data) {
  if (!data?.description) return "Descrizione non disponibile";

  if (typeof data.description === "string") {
    return data.description;
  }

  return data.description.value || "Descrizione non disponibile";
}