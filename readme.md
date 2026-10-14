# Top Angelshop

ESA1 Aufgabe für DAT502: Eine statische Webseite für einen fiktiven Angelshop.
Martin Gölles, Matrikelnummer 9827329

## Starten

Voraussetzung: Node.js (LTS)

```
npm install
npm run dev
```

## Technische Entscheidungen

Die technischen Entscheidungen sind weitgehend von der Angabe vorgegeben

- Vite mit TypeScript, ohne Framework
- Semantisches HTML (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`), Navigationen mit `aria-label`
- Interface `Angel` für die Produktdaten, die Anzeige und die Suche erledigt TypeScript mit `map()` und `filter()`
- Bewusst schlichtes Design mit wenig CSS
- Lighthouse-Barrierefreiheit: 95 (siehe `lighthouse.png`)

## Was die Webseite zeigt

- 9 Angeln mit Bild, Artikelnummer, Preis und Lagerbestand
- Suchfeld: Beim Tippen werden nur die passenden Angeln angezeigt, dazu die Trefferanzahl (z. B. „1 von 9 Angeln“)
- Bereiche sind: Fisch der Woche, Über uns, Kontakt
