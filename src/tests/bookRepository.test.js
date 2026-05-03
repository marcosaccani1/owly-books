import { describe, it, expect } from "vitest";
import {
  mapBooksFromSubject,
  getBookDescription,
} from "../js/repositories/bookRepository";

describe("Repository", () => {
  it("mappa correttamente i libri", () => {
    const data = {
      works: [
        {
          key: "/works/1",
          title: "Libro",
          authors: [{ name: "Autore" }],
        },
      ],
    };

    const result = mapBooksFromSubject(data);

    expect(result[0].title).toBe("Libro");
    expect(result[0].authors[0]).toBe("Autore");
  });

  it("gestisce descrizione stringa", () => {
    expect(getBookDescription({ description: "Test" })).toBe("Test");
  });

  it("gestisce descrizione oggetto", () => {
    expect(getBookDescription({ description: { value: "Test2" } })).toBe(
      "Test2"
    );
  });
});