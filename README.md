# Kochbuch

Statische Website mit Rezepten aus dem Trello-Board „Foodporn“ und den Reis- & Gemüserezepten von REWE.

- `index.html`: Seite und Logik; die REWE-Rezepte sind mit eingebetteten Bildern enthalten
- `rezepte.js`: die Rezepte aus Trello als Daten (Region, Tags, Zutaten, Schritte, Varianten, Notizen, Links, Bildnachweis)
- `naehrwerte.js`: Eisen und Vitamin B12 pro Person (aus den Zutaten berechnet; Nährwerte aus dem Bundeslebensmittelschlüssel 4.0 des Max Rubner-Instituts, CC BY 4.0, ergänzend USDA FoodData Central). Ohne Portionsangabe sind 2 Personen angenommen.
- `b12.html`: Unterseite zu Vitamin B12 mit Bedarf (Mann/Frau, 30 J.), Lebensmitteltabelle mit Quelle je Wert, Rangliste der Gerichte und Ergänzungen
- `img/`: Bilder zu den Trello-Rezepten
- Live: https://oliver-leder.github.io/kochbuch/

Jedes Rezept hat das Feld `region` (die Trello-Liste) als Metadatum. Über die Filter „Viel Eisen“ (ab 3,7 mg pro Portion, etwa ⅓ des Tagesbedarfs) und „Viel B12“ (ab 1 µg, ¼ des Tagesbedarfs) sowie die Sortierung nach Eisen oder B12 lassen sich passende Gerichte finden.

Deployment läuft über GitHub Pages: Jeder Push auf `main` aktualisiert die Seite.
