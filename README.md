# Kochbuch

Statische Website mit Rezepten aus dem Trello-Board „Foodporn“ und den Reis- & Gemüserezepten von REWE.

- `index.html`: Seite und Logik; die REWE-Rezepte sind mit eingebetteten Bildern enthalten
- `rezepte.js`: die Rezepte aus Trello als Daten (Region, Tags, Zutaten, Schritte, Varianten, Notizen, Links, Bildnachweis)
- `naehrwerte.js`: geschätzter Gehalt an Eisen und Vitamin B12 pro Portion (aus den Zutaten berechnet, Nährwerte nach USDA FoodData Central / BLS, Bezug DGE-Referenzwerte)
- `img/`: Bilder zu den Trello-Rezepten
- Live: https://oliver-leder.github.io/kochbuch/

Jedes Rezept hat das Feld `region` (die Trello-Liste) als Metadatum. Über die Filter „Viel Eisen“ (ab 3,7 mg pro Portion, etwa ⅓ des Tagesbedarfs) und „Viel B12“ (ab 1 µg, ¼ des Tagesbedarfs) sowie die Sortierung nach Eisen oder B12 lassen sich passende Gerichte finden.

Deployment läuft über GitHub Pages: Jeder Push auf `main` aktualisiert die Seite.
