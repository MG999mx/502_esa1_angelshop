import "./style.css";

// INTERFACE: Eine Beschreibung, wie eine Angel aussieht (aussehen muss). Sieht wie eine klasse aus, ist aber keine.
// Jede Angel MUSS genau diese Felder mit exakt diesen Typen haben.
interface Angel {
  artikelnummer: string;
  name: string;
  bild: string;
  preis: number;
  lagerbestand: number;
}

// DATEN: ein Array (Liste) von Angeln: Angel[].

const angeln: Angel[] = [
  {
    artikelnummer: "A001",
    name: "Teleskopangel TIGER",
    bild: "angel1.jpg",
    preis: 189.9,
    lagerbestand: 5,
  },
  {
    artikelnummer: "A002",
    name: "Teleskopangel LUCHS",
    bild: "angel2.jpg",
    preis: 129,
    lagerbestand: 14,
  },
  {
    name: "Teleskopangel LEOPARD",
    artikelnummer: "A003",
    bild: "angel3.jpg",
    preis: 114.5,
    lagerbestand: 20,
  },
  {
    name: "Teleskopangel LÖWE",
    artikelnummer: "A004",
    bild: "angel4.jpg",
    preis: 194.5,
    lagerbestand: 2,
  },
  {
    name: "Steckangel HAI",
    artikelnummer: "A005",
    bild: "angel5.jpg",
    preis: 44.9,
    lagerbestand: 8,
  },
  {
    name: "Steckangel BARRAKUDA",
    artikelnummer: "A006",
    bild: "angel6.jpg",
    preis: 54.3,
    lagerbestand: 44,
  },
  {
    name: "Steckangel FLOSSE",
    artikelnummer: "A007",
    bild: "angel7.jpg",
    preis: 63.9,
    lagerbestand: 4,
  },
  {
    name: "Steckangel HECHT",
    artikelnummer: "A008",
    bild: "angel8.jpg",
    preis: 78.9,
    lagerbestand: 19,
  },
  {
    name: "Steckangel FORELLE",
    artikelnummer: "A009",
    bild: "angel9.jpg",
    preis: 82.1,
    lagerbestand: 1,
  },

  // Angelliste dann noch fertig machen (bis Nr. A009)
];

// FUNKTION 1: Formatierung für ordentliche Preisdarstellung (ich brauche mind. 2 Funktionen für die ESA)
// (preis: number) = bekommt eine Zahl, ": string" = gibt einen Text zurück
function formatPreis(preis: number): string {
  return `${preis.toFixed(2).replace(".", ",")} €`;
}

// FUNKTION 2: baut das HTML für eine Angel (article mit figure + figcaption) 2. Funktion
function erstelleAngelHtml(angel: Angel): string {
  return `
    <li>
      <article>
        <figure>
          <img src="/images/${angel.bild}" alt="Produktfoto der ${angel.name}" />
          <figcaption>${angel.name}</figcaption>
        </figure>
        <p>Artikelnummer: ${angel.artikelnummer}</p>
        <p>Preis: ${formatPreis(angel.preis)}</p>
        <p>Lagerbestand: ${angel.lagerbestand} Stück</p>
      </article>
    </li>
  `;
}

// Die leere Liste <ul id="produktliste"> aus index.html holen
const produktliste = document.querySelector<HTMLUListElement>("#produktliste");

// Null-Prüfung: weitermachen nur dann, wenn die Liste auch gefunden wurde (wie bei Modul 02, Seite 30)
if (produktliste) {
  // ARRAY-METHODE map: macht aus jeder Angel ihr HTML. join("") packt alles zusammen.
  produktliste.innerHTML = angeln.map(erstelleAngelHtml).join("");
}
