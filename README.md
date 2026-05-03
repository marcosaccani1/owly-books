# Owly Books

Owly Books è un'applicazione web sviluppata per incentivare la lettura dei libri attraverso l'integrazione con il servizio esterno Open Library.

L'applicazione permette all'utente di cercare libri appartenenti a una specifica categoria, ad esempio fantasy, history o science, e di visualizzare le informazioni principali dei risultati ottenuti.

## Funzionalità

- Ricerca di libri per categoria
- Recupero dei dati tramite API Open Library
- Visualizzazione del titolo del libro
- Visualizzazione degli autori
- Visualizzazione della descrizione completa del libro tramite una seconda chiamata API
- Gestione dei messaggi di errore
- Interfaccia semplice e intuitiva

## Tecnologie utilizzate

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- Axios
- Vitest
- Open Library API

## Architettura del progetto

Il progetto utilizza una struttura modulare basata sulla separazione delle responsabilità.

La logica è divisa in più file:

- `openLibraryService.js`: gestisce le chiamate API verso Open Library
- `bookRepository.js`: si occupa della trasformazione e normalizzazione dei dati
- `bookView.js`: gestisce la visualizzazione degli elementi nell'interfaccia
- `main.js`: collega gli eventi dell'utente con la logica applicativa

È stato applicato il pattern Service/Repository per separare la logica di accesso ai dati dalla gestione dell'interfaccia utente, rendendo il codice più ordinato, testabile e manutenibile.

## Struttura del progetto

```txt
OWLY-BOOKS
├─ public
├─ src
│  ├─ css
│  │  └─ style.css
│  ├─ js
│  │  ├─ repositories
│  │  │  └─ bookRepository.js
│  │  ├─ services
│  │  │  └─ openLibraryService.js
│  │  └─ ui
│  │     └─ bookView.js
│  ├─ tests
│  │  └─ bookRepository.test.js
│  └─ main.js
├─ index.html
├─ package.json
└─ README.md