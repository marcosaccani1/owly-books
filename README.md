# Owly Books

Owly Books è un'applicazione web sviluppata per incentivare la lettura dei libri attraverso l'integrazione con le API di Open Library.

L'applicazione permette agli utenti di cercare libri per categoria (es. fantasy, history, science) e visualizzare informazioni essenziali come titolo, autori e descrizione completa.

---

## Demo online

https://owly-books.netlify.app

---

## Repository GitHub

https://github.com/marcosaccani1/owly-books

---

## Funzionalità

- Ricerca libri per categoria
- Integrazione con Open Library API
- Visualizzazione titolo e autori
- Visualizzazione descrizione completa tramite seconda chiamata API
- Gestione errori
- Interfaccia semplice e intuitiva

---

## Tecnologie utilizzate

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- Axios
- Vitest
- Open Library API

---

## Architettura del progetto

Il progetto è strutturato secondo il principio di separazione delle responsabilità.

La logica è suddivisa in moduli:

- `openLibraryService.js` → gestione delle chiamate API
- `bookRepository.js` → trasformazione e normalizzazione dei dati
- `bookView.js` → gestione dell'interfaccia utente
- `main.js` → gestione del flusso applicativo

È stato adottato il pattern **Service/Repository**, che consente di:

- separare la logica di accesso ai dati dalla UI  
- migliorare la manutenibilità  
- facilitare il testing  
- rendere il progetto scalabile  

---

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