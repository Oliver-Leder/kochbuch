# Kochbuch

Statische Website mit Rezepten aus dem Trello-Board „Foodporn“ und den Reis- & Gemüserezepten von REWE.

- `index.html`: Seite und Logik; die REWE-Rezepte sind mit eingebetteten Bildern enthalten
- `rezepte.js`: die Rezepte aus Trello als Daten (Region, Tags, Zutaten, Schritte, Varianten, Notizen, Links, Bildnachweis)
- `img/`: Bilder zu den Trello-Rezepten
- Live: https://oliver-leder.github.io/kochbuch/

Jedes Rezept hat das Feld `region` (die Trello-Liste) als Metadatum. Weitere Felder wie Nährstoffe (`nutr`) können später ergänzt werden.

Deployment läuft über GitHub Pages: Jeder Push auf `main` aktualisiert die Seite.
