// Eisen (mg) und Vitamin B12 (µg) pro Person bzw. Stück – berechnet aus den Zutaten.
// Nährwerte: Bundeslebensmittelschlüssel (BLS) 4.0, Max Rubner-Institut 2025, CC BY 4.0, DOI 10.25826/Data20251217-134202-0;
// Gewürze, Minze, Thymian, weiße Bohnen: USDA FoodData Central SR Legacy (2018).
// Bedarf (DGE): Mann 30 J.: Eisen 11 mg, B12 4 µg · Frau 30 J. (menstruierend): Eisen 16 mg, B12 4 µg.
window.NAEHRWERTE = {
"blumenkohlbratlinge": {
"fe": 3.5,
"b12": 0.9,
"per": "Person",
"n": 2.0,
"note": "6 Bratlinge laut Rezept ≈ 2 Portionen",
"top_b12": [
[
"Hühnerei roh",
0.74,
"BLS E111100"
],
[
"Camembert mind. 45 % Fett i. Tr.",
0.19,
"BLS M602600"
]
],
"top_fe": [
[
"Kichererbsenmehl",
2.36,
"BLS H720400"
],
[
"Blumenkohl roh",
0.61,
"BLS G311100"
],
[
"Hühnerei roh",
0.49,
"BLS E111100"
]
]
},
"bohneneintopf-mit-feta": {
"fe": 11.3,
"b12": 0.9,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Feta mind. 45 % Fett i. Tr.",
0.88,
"BLS M012200"
]
],
"top_fe": [
[
"Beans, white, mature seeds, canned",
4.49,
"USDA 175204"
],
[
"Kidneybohne reif, Konserve, abgetropft",
3.18,
"BLS H742902"
],
[
"Tomate Konserve",
1.63,
"BLS G560900"
]
]
},
"flammkuchen": {
"fe": 1.3,
"b12": 0.7,
"per": "Person",
"n": 4.0,
"note": "2 Bleche laut Rezept ≈ 4 Portionen",
"top_b12": [
[
"Sauerrahm/Creme fraiche, 40 % Fett",
0.45,
"BLS M172900"
],
[
"Sauerrahm/Schmand, mind. 20 % Fett",
0.25,
"BLS M172700"
]
],
"top_fe": [
[
"Weizen Mehl, Type 405",
0.82,
"BLS C214100"
],
[
"Frühlingszwiebel/Lauchzwiebel, roh",
0.34,
"BLS G482100"
],
[
"Sauerrahm/Creme fraiche, 40 % Fett",
0.07,
"BLS M172900"
]
]
},
"gemuese-pasteten": {
"fe": 4.2,
"b12": 1.6,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Emmentaler mind. 45 % Fett i. Tr.",
1.11,
"BLS M304600"
],
[
"Sauerrahm/Schmand, mind. 20 % Fett",
0.5,
"BLS M172700"
]
],
"top_fe": [
[
"Champignon roh",
1.62,
"BLS K701100"
],
[
"Broccoli roh",
1.22,
"BLS G312100"
],
[
"Zucchini roh",
0.5,
"BLS G582100"
]
]
},
"kartoffelpuffer": {
"fe": 3.7,
"b12": 1.7,
"per": "Person",
"n": 3,
"note": "3 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
1.73,
"BLS E111100"
]
],
"top_fe": [
[
"Kartoffel geschält, roh",
2.08,
"BLS K110100"
],
[
"Hühnerei roh",
1.16,
"BLS E111100"
],
[
"Speisezwiebel roh",
0.37,
"BLS G480100"
]
]
},
"hokkaido-kuerbissuppe": {
"fe": 2.1,
"b12": 0.1,
"per": "Person",
"n": 6,
"note": "6 Portionen laut Rezept",
"top_b12": [
[
"Schlagsahne mind. 30 % Fett",
0.07,
"BLS M173800"
]
],
"top_fe": [
[
"Kartoffel geschält, roh",
0.89,
"BLS K110100"
],
[
"Kürbis Hokkaido (C. maxima) roh",
0.81,
"BLS G581000"
],
[
"Speisezwiebel roh",
0.18,
"BLS G480100"
]
]
},
"maronensuppe": {
"fe": 0.9,
"b12": 0.1,
"per": "Person",
"n": 8,
"note": "8 Portionen laut Rezept",
"top_b12": [
[
"Schlagsahne mind. 30 % Fett",
0.1,
"BLS M173800"
]
],
"top_fe": [
[
"Edelkastanie/Marone, gekocht",
0.82,
"BLS H230132"
]
]
},
"ofenkaese-baguette": {
"fe": 0.8,
"b12": 0.7,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Camembert mind. 45 % Fett i. Tr.",
0.74,
"BLS M602600"
]
],
"top_fe": [
[
"Walnuss",
0.42,
"BLS H120100"
],
[
"Weizenbrot/Weißbrot",
0.26,
"BLS B311000"
],
[
"Camembert mind. 45 % Fett i. Tr.",
0.13,
"BLS M602600"
]
]
},
"pasteten-gemuese-sahne": {
"fe": 1.5,
"b12": 0.1,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Schlagsahne mind. 30 % Fett",
0.1,
"BLS M173800"
]
],
"top_fe": [
[
"Champignon roh",
0.49,
"BLS K701100"
],
[
"Erbse grün, tiefgefroren",
0.46,
"BLS G760200"
],
[
"Petersilienblatt roh",
0.14,
"BLS G250100"
]
]
},
"pilzbratlinge": {
"fe": 3.1,
"b12": 1.2,
"per": "Person",
"n": 2.7,
"note": "8 Bratlinge laut Rezept ≈ 2.66667 Portionen",
"top_b12": [
[
"Hühnerei roh",
1.11,
"BLS E111100"
],
[
"Frischkäse aus Ziegenmilch, Natur, mind. 45 % Fett i. Tr.",
0.13,
"BLS M7A1600"
]
],
"top_fe": [
[
"Champignon roh",
1.22,
"BLS K701100"
],
[
"Hühnerei roh",
0.74,
"BLS E111100"
],
[
"Spices, cumin seed",
0.62,
"USDA 170923"
]
]
},
"ratatouille": {
"fe": 1.4,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Zucchini roh",
0.5,
"BLS G582100"
],
[
"Gemüsepaprika rot, roh",
0.34,
"BLS G543100"
],
[
"Tomate Konserve",
0.27,
"BLS G560900"
]
]
},
"spargel-pfannkuchen": {
"fe": 1.3,
"b12": 1.6,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
1.11,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.46,
"BLS M111300"
]
],
"top_fe": [
[
"Hühnerei roh",
0.74,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.52,
"BLS C214100"
]
]
},
"ueberbackene-suesskartoffel": {
"fe": 4.2,
"b12": 0.4,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Gorgonzola mind. 48 % Fett i. Tr.",
0.39,
"BLS M5B1600"
]
],
"top_fe": [
[
"Spinat tiefgefroren",
2.2,
"BLS G211200"
],
[
"Batate/Süßkartoffel, roh",
1.99,
"BLS K420100"
],
[
"Gorgonzola mind. 48 % Fett i. Tr.",
0.06,
"BLS M5B1600"
]
]
},
"bruschetta": {
"fe": 1.6,
"b12": 0.0,
"per": "Person",
"n": 2.0,
"note": "4 Bruschette laut Rezept ≈ 2 Portionen",
"top_b12": [],
"top_fe": [
[
"Weizenbrot/Weißbrot",
0.69,
"BLS B311000"
],
[
"Basilikum roh",
0.48,
"BLS G061000"
],
[
"Tomate roh",
0.45,
"BLS G561100"
]
]
},
"kuerbis-zucchini-suppe": {
"fe": 1.4,
"b12": 0.1,
"per": "Person",
"n": 6,
"note": "6 Portionen laut Rezept",
"top_b12": [
[
"Frischkäse aus Ziegenmilch, Natur, mind. 45 % Fett i. Tr.",
0.06,
"BLS M7A1600"
]
],
"top_fe": [
[
"Kürbis Hokkaido (C. maxima) roh",
0.61,
"BLS G581000"
],
[
"Zucchini roh",
0.5,
"BLS G582100"
],
[
"Haselnuss",
0.17,
"BLS H130100"
]
]
},
"mediterranes-ofengemuese-kichererbsen-minzjoghurt": {
"fe": 11.7,
"b12": 0.7,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Feta mind. 45 % Fett i. Tr.",
0.44,
"BLS M012200"
],
[
"Joghurt mild, mind. 3,5 % Fett",
0.26,
"BLS M141300"
]
],
"top_fe": [
[
"Kichererbse reif, Konserve, abgetropft",
3.4,
"BLS H720902"
],
[
"Batate/Süßkartoffel, roh",
1.99,
"BLS K420100"
],
[
"Blumenkohl roh",
1.64,
"BLS G311100"
]
]
},
"ofengemuese-ziegenkaese-zimt-tomatendip": {
"fe": 4.6,
"b12": 0.5,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Weichkäse aus Ziegenmilch, mind. 45 % Fett i. Tr.",
0.51,
"BLS M6A9600"
]
],
"top_fe": [
[
"Linse rot reif",
1.85,
"BLS H730000"
],
[
"Zucchini roh",
0.8,
"BLS G582100"
],
[
"Gemüsepaprika rot, roh",
0.57,
"BLS G543100"
]
]
},
"pasta-al-limone": {
"fe": 3.4,
"b12": 0.1,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Butter mild gesäuert",
0.07,
"BLS Q611000"
]
],
"top_fe": [
[
"Teigwaren eifrei, roh",
3.38,
"BLS E401000"
]
]
},
"pasta-mit-burrata": {
"fe": 4.0,
"b12": 1.6,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Mozzarella mind. 45 % Fett i. Tr.",
1.62,
"BLS M032100"
]
],
"top_fe": [
[
"Teigwaren eifrei, roh",
3.38,
"BLS E401000"
],
[
"Tomate roh",
0.25,
"BLS G561100"
],
[
"Pesto verde",
0.21,
"BLS X372012"
]
]
},
"pizza-belag": {
"fe": 1.8,
"b12": 1.9,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Emmentaler mind. 45 % Fett i. Tr.",
1.11,
"BLS M304600"
],
[
"Mozzarella mind. 45 % Fett i. Tr.",
0.81,
"BLS M032100"
]
],
"top_fe": [
[
"Tomaten passiert/Tomatenpüree",
1.2,
"BLS R161200"
],
[
"Tomate roh",
0.4,
"BLS G561100"
],
[
"Emmentaler mind. 45 % Fett i. Tr.",
0.1,
"BLS M304600"
]
]
},
"pizzateig": {
"fe": 1.1,
"b12": 0.0,
"per": "Person",
"n": 6.0,
"note": "6 Pizzen laut Rezept ≈ 6 Portionen",
"top_b12": [],
"top_fe": [
[
"Weizen Mehl, Type 405",
1.09,
"BLS C214100"
]
]
},
"risotto": {
"fe": 0.5,
"b12": 0.2,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Parmesan mind. 30 % Fett i. Tr.",
0.2,
"BLS M306400"
]
],
"top_fe": [
[
"Reis poliert, roh",
0.31,
"BLS C352000"
],
[
"Speisezwiebel roh",
0.14,
"BLS G480100"
]
]
},
"spaghetti-varianten": {
"fe": 4.2,
"b12": 0.1,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Parmesan mind. 30 % Fett i. Tr.",
0.1,
"BLS M306400"
]
],
"top_fe": [
[
"Vollkornteigwaren eifrei, roh",
3.4,
"BLS E510000"
],
[
"Rucola roh",
0.8,
"BLS G130100"
]
]
},
"couscoussalat": {
"fe": 4.9,
"b12": 0.4,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Feta mind. 45 % Fett i. Tr.",
0.44,
"BLS M012200"
]
],
"top_fe": [
[
"Couscous (Hartweizen) roh",
3.22,
"BLS C119200"
],
[
"Pinienkern",
0.72,
"BLS H320100"
],
[
"Zucchini roh",
0.5,
"BLS G582100"
]
]
},
"gewuerz-couscous-petersilie-zitrone": {
"fe": 9.3,
"b12": 0.0,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [],
"top_fe": [
[
"Couscous (Hartweizen) roh",
3.22,
"BLS C119200"
],
[
"Kichererbse reif, Konserve, abgetropft",
1.7,
"BLS H720902"
],
[
"Spices, cumin seed",
1.66,
"USDA 170923"
]
]
},
"kichererbsen-bulgur-puffer": {
"fe": 6.2,
"b12": 1.5,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
]
],
"top_fe": [
[
"Kichererbse reif, Konserve, abgetropft",
2.89,
"BLS H720902"
],
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Spices, cumin seed",
0.83,
"USDA 170923"
]
]
},
"shakshuka": {
"fe": 4.7,
"b12": 2.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
],
[
"Emmentaler mind. 45 % Fett i. Tr.",
0.56,
"BLS M304600"
]
],
"top_fe": [
[
"Kidneybohne reif, Konserve, abgetropft",
2.12,
"BLS H742902"
],
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Spices, cumin seed",
0.83,
"USDA 170923"
]
]
},
"beluga-linsen-curry": {
"fe": 5.8,
"b12": 0.0,
"per": "Person",
"n": 6,
"note": "6 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Linse reif",
4.01,
"BLS H725100"
],
[
"Tomaten passiert/Tomatenpüree",
0.4,
"BLS R161200"
],
[
"Spices, curry powder",
0.33,
"USDA 170924"
]
]
},
"linsen-dal-mit-spinat": {
"fe": 8.4,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Linse reif",
5.42,
"BLS H725100"
],
[
"Spices, cumin seed",
1.24,
"USDA 170923"
],
[
"Spinat tiefgefroren",
1.1,
"BLS G211200"
]
]
},
"rote-linsen-dal": {
"fe": 12.8,
"b12": 0.0,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [],
"top_fe": [
[
"Linse rot reif",
7.39,
"BLS H730000"
],
[
"Kichererbse reif, Konserve, abgetropft",
1.7,
"BLS H720902"
],
[
"Spices, cumin seed",
0.83,
"USDA 170923"
]
]
},
"chili-sin-carne": {
"fe": 2.3,
"b12": 0.0,
"per": "Person",
"n": 6,
"note": "6 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Sojaschnetzel/Sojagranulat, texturiert, trocken",
1.19,
"BLS H765000"
],
[
"Kidneybohne reif, Konserve, abgetropft",
0.35,
"BLS H742902"
],
[
"Gemüsepaprika rot, roh",
0.23,
"BLS G543100"
]
]
},
"fajitas": {
"fe": 2.6,
"b12": 0.7,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Emmentaler mind. 45 % Fett i. Tr.",
0.56,
"BLS M304600"
],
[
"Sauerrahm/Saure Sahne, mind. 10 % Fett",
0.12,
"BLS M172500"
]
],
"top_fe": [
[
"Weizentortilla",
0.87,
"BLS B783012"
],
[
"Kidneybohne reif, Konserve, abgetropft",
0.53,
"BLS H742902"
],
[
"Avocado roh",
0.33,
"BLS F502100"
]
]
},
"asia-nudelpfanne-tofu": {
"fe": 6.0,
"b12": 0.8,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
0.74,
"BLS E111100"
]
],
"top_fe": [
[
"Teigwaren eifrei, roh",
1.69,
"BLS E401000"
],
[
"Tofu",
1.42,
"BLS H861000"
],
[
"Kichererbse reif, Konserve, abgetropft",
1.02,
"BLS H720902"
]
]
},
"glasnudelsalat": {
"fe": 4.2,
"b12": 0.0,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [],
"top_fe": [
[
"Tofu",
2.84,
"BLS H861000"
],
[
"Glasnudeln aus Mungbohnenstärke, roh",
0.56,
"BLS H030400"
],
[
"Gemüsepaprika rot, roh",
0.34,
"BLS G543100"
]
]
},
"sommerrollen": {
"fe": 4.6,
"b12": 0.0,
"per": "Person",
"n": 3.0,
"note": "6 Rollen laut Rezept ≈ 3 Portionen",
"top_b12": [],
"top_fe": [
[
"Tofu",
2.37,
"BLS H861000"
],
[
"Mango roh",
0.65,
"BLS F516100"
],
[
"Frühlingszwiebel/Lauchzwiebel, roh",
0.34,
"BLS G482100"
]
]
},
"syrniki": {
"fe": 0.3,
"b12": 0.6,
"per": "Stück",
"n": 10,
"note": "10 Stück laut Rezept – pro Stück gerechnet",
"top_b12": [
[
"Speisequark Halbfettstufe, 20 % Fett i. Tr.",
0.32,
"BLS M713300"
],
[
"Hühnerei roh",
0.3,
"BLS E111100"
]
],
"top_fe": [
[
"Hühnerei roh",
0.2,
"BLS E111100"
],
[
"Speisequark Halbfettstufe, 20 % Fett i. Tr.",
0.15,
"BLS M713300"
]
]
},
"apfel-spekulatius-creme": {
"fe": 0.6,
"b12": 0.5,
"per": "Person",
"n": 8,
"note": "8 Portionen laut Rezept",
"top_b12": [
[
"Frischkäsezubereitung Natur, mind. 50 % Fett i. Tr.",
0.24,
"BLS M710700"
],
[
"Schlagsahne mind. 30 % Fett",
0.23,
"BLS M173800"
]
],
"top_fe": [
[
"Rosine/Sultanine (Weinbeere getrocknet)",
0.44,
"BLS F840100"
],
[
"Frischkäsezubereitung Natur, mind. 50 % Fett i. Tr.",
0.05,
"BLS M710700"
]
]
},
"pilzgulasch": {
"fe": 3.4,
"b12": 0.2,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Sauerrahm/Creme fraiche, 40 % Fett",
0.15,
"BLS M172900"
]
],
"top_fe": [
[
"Champignon roh",
1.62,
"BLS K701100"
],
[
"Spices, paprika",
0.53,
"USDA 171329"
],
[
"Steinpilz getrocknet",
0.44,
"BLS K718400"
]
]
},
"rotkraut-maronen": {
"fe": 2.5,
"b12": 0.0,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [],
"top_fe": [
[
"Edelkastanie/Marone, gekocht",
1.65,
"BLS H230132"
],
[
"Rotkohlgemüse (küchenfertig) Konserve",
0.86,
"BLS G341900"
]
]
},
"semmelknoedel": {
"fe": 2.3,
"b12": 1.6,
"per": "Person",
"n": 5.0,
"note": "15 kleine Knödel laut Rezept ≈ 5 Portionen",
"top_b12": [
[
"Hühnerei roh",
1.19,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.37,
"BLS M111300"
]
],
"top_fe": [
[
"Paniermehl/Semmelbrösel/Semmelmehl",
1.16,
"BLS B821000"
],
[
"Hühnerei roh",
0.79,
"BLS E111100"
],
[
"Petersilienblatt roh",
0.18,
"BLS G250100"
]
]
},
"blaetterteig-dreiecke-spinat-feta": {
"fe": 4.8,
"b12": 2.1,
"per": "Person",
"n": 2,
"note": "keine Portionsangabe im Rezept – 2 Personen angenommen",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
],
[
"Feta mind. 45 % Fett i. Tr.",
0.33,
"BLS M012200"
],
[
"Chester (Cheddar) mind. 45 % Fett i. Tr.",
0.26,
"BLS M303600"
]
],
"top_fe": [
[
"Spinat tiefgefroren",
3.3,
"BLS G211200"
],
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Speisezwiebel roh",
0.27,
"BLS G480100"
]
]
},
"kanelbullar": {
"fe": 0.4,
"b12": 0.2,
"per": "Stück",
"n": 30,
"note": "Gebäck: pro Stück gerechnet",
"top_b12": [
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.06,
"BLS M111300"
]
],
"top_fe": [
[
"Weizen Mehl, Type 405",
0.22,
"BLS C214100"
],
[
"Backhefe frisch (Frischbackhefe)",
0.06,
"BLS R459000"
],
[
"Spices, cinnamon, ground",
0.05,
"USDA 171320"
]
]
},
"nusskranz": {
"fe": 0.9,
"b12": 0.3,
"per": "Stück",
"n": 14,
"note": "Gebäck: pro Stück gerechnet",
"top_b12": [
[
"Hühnerei roh",
0.21,
"BLS E111100"
]
],
"top_fe": [
[
"Haselnuss",
0.37,
"BLS H130100"
],
[
"Weizen Mehl, Type 405",
0.19,
"BLS C214100"
],
[
"Rosine/Sultanine (Weinbeere getrocknet)",
0.17,
"BLS F840100"
]
]
},
"scones": {
"fe": 0.3,
"b12": 0.2,
"per": "Stück",
"n": 9,
"note": "Gebäck: pro Stück gerechnet",
"top_b12": [
[
"Hühnerei roh",
0.17,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.06,
"BLS M111300"
]
],
"top_fe": [
[
"Weizen Mehl, Type 405",
0.18,
"BLS C214100"
],
[
"Hühnerei roh",
0.11,
"BLS E111100"
]
]
},
"zimtschnecken-thermomix": {
"fe": 0.5,
"b12": 0.3,
"per": "Stück",
"n": 16,
"note": "Gebäck: pro Stück gerechnet",
"top_b12": [
[
"Hühnerei roh",
0.19,
"BLS E111100"
]
],
"top_fe": [
[
"Weizen Mehl, Type 405",
0.29,
"BLS C214100"
],
[
"Hühnerei roh",
0.12,
"BLS E111100"
]
]
},
"zitronenmuffins": {
"fe": 0.3,
"b12": 0.3,
"per": "Stück",
"n": 12,
"note": "Gebäck: pro Stück gerechnet",
"top_b12": [
[
"Hühnerei roh",
0.25,
"BLS E111100"
]
],
"top_fe": [
[
"Hühnerei roh",
0.17,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.14,
"BLS C214100"
]
]
},
"apfelkuechle-boskoop": {
"fe": 2.0,
"b12": 1.8,
"per": "Person",
"n": 1,
"note": "1 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.28,
"BLS M111300"
]
],
"top_fe": [
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.59,
"BLS C214100"
],
[
"Apfel roh",
0.36,
"BLS F110100"
]
]
},
"apfelkuechle": {
"fe": 1.0,
"b12": 0.8,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
0.74,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.09,
"BLS M111300"
]
],
"top_fe": [
[
"Hühnerei roh",
0.49,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.25,
"BLS C214100"
],
[
"Spices, cinnamon, ground",
0.16,
"USDA 171320"
]
]
},
"bananen-pancakes": {
"fe": 1.4,
"b12": 0.9,
"per": "Person",
"n": 4.0,
"note": "12 Pancakes laut Rezept ≈ 4 Portionen",
"top_b12": [
[
"Hühnerei roh",
0.74,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.14,
"BLS M111300"
]
],
"top_fe": [
[
"Dinkel Mehl, Type 630",
0.54,
"BLS C234000"
],
[
"Hühnerei roh",
0.49,
"BLS E111100"
],
[
"Banane roh",
0.36,
"BLS F503100"
]
]
},
"fondant-au-chocolat": {
"fe": 6.9,
"b12": 1.9,
"per": "Person",
"n": 4.0,
"note": "4 Förmchen laut Rezept ≈ 4 Portionen",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
],
[
"Zartbitter-/Halbbitterschokolade",
0.3,
"BLS S560000"
],
[
"Butter mild gesäuert",
0.09,
"BLS Q611000"
]
],
"top_fe": [
[
"Zartbitter-/Halbbitterschokolade",
5.8,
"BLS S560000"
],
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.08,
"BLS C214100"
]
]
},
"griessbrei": {
"fe": 0.2,
"b12": 0.9,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.93,
"BLS M111300"
]
],
"top_fe": [
[
"Weichweizen Grieß",
0.15,
"BLS C218000"
]
]
},
"kaiserschmarrn": {
"fe": 1.4,
"b12": 1.9,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.35,
"BLS M111300"
]
],
"top_fe": [
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.2,
"BLS C214100"
],
[
"Rosine/Sultanine (Weinbeere getrocknet)",
0.18,
"BLS F840100"
]
]
},
"milchreis": {
"fe": 0.2,
"b12": 0.9,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.93,
"BLS M111300"
]
],
"top_fe": [
[
"Reis poliert, roh",
0.18,
"BLS C352000"
]
]
},
"pfannkuchenteig": {
"fe": 0.6,
"b12": 0.8,
"per": "Stück",
"n": 8,
"note": "8 Stück laut Rezept – pro Stück gerechnet",
"top_b12": [
[
"Hühnerei roh",
0.56,
"BLS E111100"
],
[
"Vollmilch frisch, 3,5 % Fett, pasteurisiert",
0.23,
"BLS M111300"
]
],
"top_fe": [
[
"Hühnerei roh",
0.37,
"BLS E111100"
],
[
"Weizen Mehl, Type 405",
0.2,
"BLS C214100"
]
]
},
"porridge": {
"fe": 2.4,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Hafer Flocken",
1.77,
"BLS C133000"
],
[
"Sojadrink ungesüßt",
0.62,
"BLS H841100"
]
]
},
"fruehstuecksei": {
"fe": 1.2,
"b12": 1.2,
"per": "Ei",
"n": 1,
"note": "1 gekochtes Ei (60 g)",
"top_b12": [
[
"Hühnerei gekocht",
1.2,
"BLS E111132"
]
],
"top_fe": []
},
"kichererbsen-burger": {
"fe": 4.2,
"b12": 0.4,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
0.37,
"BLS E111100"
]
],
"top_fe": [
[
"Kichererbse reif, Konserve, abgetropft",
1.02,
"BLS H720902"
],
[
"Leinsamen geschrotet",
0.84,
"BLS H410400"
],
[
"Hafer Flocken",
0.67,
"BLS C133000"
]
]
},
"suesskartoffel-kichererbsen-guacamole": {
"fe": 4.2,
"b12": 0.0,
"per": "Person",
"n": 3,
"note": "3 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Batate/Süßkartoffel, roh",
1.99,
"BLS K420100"
],
[
"Kichererbse reif, Konserve, abgetropft",
1.36,
"BLS H720902"
],
[
"Avocado roh",
0.66,
"BLS F502100"
]
]
},
"kidneybohnen-burger": {
"fe": 2.3,
"b12": 0.0,
"per": "Person",
"n": 5.0,
"note": "5 Patties laut Rezept ≈ 5 Portionen",
"top_b12": [],
"top_fe": [
[
"Kidneybohne reif, Konserve, abgetropft",
1.02,
"BLS H742902"
],
[
"Hafer Flocken",
0.53,
"BLS C133000"
],
[
"Spices, cumin seed",
0.33,
"USDA 170923"
]
]
},
"veggie-burger-walnussbratling": {
"fe": 1.9,
"b12": 0.7,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
0.37,
"BLS E111100"
],
[
"Weichkäse aus Ziegenmilch, mind. 45 % Fett i. Tr.",
0.32,
"BLS M6A9600"
]
],
"top_fe": [
[
"Hafer Flocken",
0.55,
"BLS C133000"
],
[
"Weizenbrot/Weißbrot",
0.52,
"BLS B311000"
],
[
"Walnuss",
0.28,
"BLS H120100"
]
]
},
"kuerbisrisotto": {
"fe": 0.4,
"b12": 0.2,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Parmesan mind. 30 % Fett i. Tr.",
0.25,
"BLS M306400"
]
],
"top_fe": [
[
"Reis poliert, roh",
0.15,
"BLS C352000"
],
[
"Speisezwiebel roh",
0.14,
"BLS G480100"
]
]
},
"mediterran-gefuellte-paprika": {
"fe": 1.4,
"b12": 0.3,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Frischkäse aus Ziegenmilch, Natur, mind. 45 % Fett i. Tr.",
0.34,
"BLS M7A1600"
]
],
"top_fe": [
[
"Gemüsepaprika rot, roh",
0.68,
"BLS G543100"
],
[
"Frühlingszwiebel/Lauchzwiebel, roh",
0.51,
"BLS G482100"
],
[
"Reis poliert, roh",
0.07,
"BLS C352000"
]
]
},
"jollof-reis": {
"fe": 2.1,
"b12": 0.0,
"per": "Person",
"n": 6,
"note": "6 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Tomatenmark",
0.79,
"BLS R160000"
],
[
"Thyme, fresh",
0.35,
"USDA 173470"
],
[
"Reis poliert, roh",
0.24,
"BLS C352000"
]
]
},
"auberginen-reis-pfanne-feta": {
"fe": 2.2,
"b12": 0.2,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Feta mind. 45 % Fett i. Tr.",
0.17,
"BLS M012200"
]
],
"top_fe": [
[
"Kichererbse reif, Konserve, abgetropft",
1.02,
"BLS H720902"
],
[
"Tomatenmark",
0.38,
"BLS R160000"
],
[
"Reis poliert, roh",
0.18,
"BLS C352000"
]
]
},
"pfifferlings-risotto": {
"fe": 0.4,
"b12": 0.3,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Parmesan mind. 30 % Fett i. Tr.",
0.25,
"BLS M306400"
]
],
"top_fe": [
[
"Reis poliert, roh",
0.22,
"BLS C352000"
],
[
"Tomate roh",
0.1,
"BLS G561100"
]
]
},
"zucchini-zitronen-risotto": {
"fe": 0.9,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Zucchini roh",
0.5,
"BLS G582100"
],
[
"Reis poliert, roh",
0.29,
"BLS C352000"
],
[
"Speisezwiebel roh",
0.14,
"BLS G480100"
]
]
},
"reispfanne-pilze-fruehlingszwiebeln": {
"fe": 2.0,
"b12": 0.2,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Parmesan mind. 30 % Fett i. Tr.",
0.25,
"BLS M306400"
]
],
"top_fe": [
[
"Champignon roh",
1.62,
"BLS K701100"
],
[
"Reis poliert, roh",
0.22,
"BLS C352000"
],
[
"Frühlingszwiebel/Lauchzwiebel, roh",
0.13,
"BLS G482100"
]
]
},
"winterliche-kohlpfanne": {
"fe": 2.1,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Tofu",
1.31,
"BLS H861000"
],
[
"Haselnuss",
0.31,
"BLS H130100"
],
[
"Speisezwiebel roh",
0.27,
"BLS G480100"
]
]
},
"gefuellte-linsen-feta-paprika": {
"fe": 1.2,
"b12": 0.2,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Feta mind. 45 % Fett i. Tr.",
0.22,
"BLS M012200"
]
],
"top_fe": [
[
"Gemüsepaprika rot, roh",
0.68,
"BLS G543100"
],
[
"Petersilienblatt roh",
0.28,
"BLS G250100"
],
[
"Reis poliert, roh",
0.18,
"BLS C352000"
]
]
},
"kraeuter-risotto": {
"fe": 0.5,
"b12": 0.3,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Parmesan mind. 30 % Fett i. Tr.",
0.25,
"BLS M306400"
]
],
"top_fe": [
[
"Reis poliert, roh",
0.22,
"BLS C352000"
],
[
"Tomate roh",
0.1,
"BLS G561100"
],
[
"Petersilienblatt roh",
0.09,
"BLS G250100"
]
]
},
"gefuellte-tomaten": {
"fe": 1.5,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Pinienkern",
0.6,
"BLS H320100"
],
[
"Tomate roh",
0.48,
"BLS G561100"
],
[
"Basilikum roh",
0.24,
"BLS G061000"
]
]
},
"blumenkohl-reis-fritters": {
"fe": 1.3,
"b12": 1.2,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
0.74,
"BLS E111100"
],
[
"Frischkäsezubereitung Natur, mind. 50 % Fett i. Tr.",
0.49,
"BLS M710700"
]
],
"top_fe": [
[
"Hühnerei roh",
0.49,
"BLS E111100"
],
[
"Blumenkohl roh",
0.41,
"BLS G311100"
],
[
"Haselnuss",
0.21,
"BLS H130100"
]
]
},
"schneller-risoni-auflauf": {
"fe": 1.2,
"b12": 0.7,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Mozzarella mind. 45 % Fett i. Tr.",
0.33,
"BLS M032100"
],
[
"Feta mind. 45 % Fett i. Tr.",
0.22,
"BLS M012200"
],
[
"Schlagsahne mind. 30 % Fett",
0.2,
"BLS M173800"
]
],
"top_fe": [
[
"Spinat tiefgefroren",
0.55,
"BLS G211200"
],
[
"Zucchini roh",
0.25,
"BLS G582100"
],
[
"Gemüsepaprika rot, roh",
0.17,
"BLS G543100"
]
]
},
"gefuellte-paprika-reis-feta": {
"fe": 2.3,
"b12": 0.2,
"per": "Person",
"n": 2,
"note": "2 Portionen laut Rezept",
"top_b12": [
[
"Feta mind. 45 % Fett i. Tr.",
0.22,
"BLS M012200"
]
],
"top_fe": [
[
"Spices, curry powder",
0.48,
"USDA 170924"
],
[
"Tomatenmark",
0.38,
"BLS R160000"
],
[
"Gemüsepaprika rot, roh",
0.34,
"BLS G543100"
]
]
},
"spinat-reis-tortilla": {
"fe": 2.3,
"b12": 1.7,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [
[
"Hühnerei roh",
1.49,
"BLS E111100"
],
[
"Feta mind. 45 % Fett i. Tr.",
0.17,
"BLS M012200"
]
],
"top_fe": [
[
"Spinat tiefgefroren",
1.1,
"BLS G211200"
],
[
"Hühnerei roh",
0.99,
"BLS E111100"
],
[
"Reis poliert, roh",
0.18,
"BLS C352000"
]
]
},
"risi-bisi-erbsen-champignons": {
"fe": 2.6,
"b12": 0.0,
"per": "Person",
"n": 4,
"note": "4 Portionen laut Rezept",
"top_b12": [],
"top_fe": [
[
"Erbse grün, tiefgefroren",
1.37,
"BLS G760200"
],
[
"Champignon roh",
0.81,
"BLS K701100"
],
[
"Speisezwiebel roh",
0.27,
"BLS G480100"
]
]
}
};
