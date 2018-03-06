import { Recipe } from './recipe';

/*export const RECIPES: Recipe[] = [
	{id: 1, name: "Low-Carb Müsli"},
	{id: 2, name: "Caprese"},
	{id: 3, name: "Tofustreifen-Salat mit Avocado"},
	{id: 4, name: "Hirselaibchen mit Joghurtsauce"},
	{id: 5, name: "Süßkartoffel-Linsen-Eintopf"}
];*/

export const RECIPES: Recipe[] = [
{"id": 1,
	"name": "Low-Carb Müsli",
	"calories": 400,
	"calories_diet_plan": 1400,
	"category": "breakfast",
	"ingredients": [
		{ "name": "Chia-Samen", "unit": "g", "quantity": 15, "category": "other"},
		{ "name": "Sojaflocken", "unit": "g", "quantity": 10, "category": "other"},
		{ "name": "Nüsse", "unit": "g", "quantity": 15, "category": "other"}
	],
	"preparation": [
	    "Chiasamen, Nüsse und Sojaflocken mit Wasser verrühren und über Nacht quellen lassen.",
	    "In der Früh Topfen unterrühren und mit geschnittenem Obst anrichten"
		],
    "image_filename": "1.jpg"
	},	
	{"id": 2,
	"name": "Caprese",
	"calories": 500,
	"category": "lunch",
	"calories_diet_plan": 1400,
	"ingredients": [
		{ "name": "Mozzarella", "unit": "g", "quantity": 250, "category": "other"},
		{ "name": "Tomaten", "unit": "g", "quantity": 300,"category": "fruits_vegtables"},
		{ "name": "Olivenöl", "unit": "g", "quantity": 5, "category": "other"},
		{ "name": "Basilikum", "unit": "g", "quantity": 1, "category": "other"},
		{ "name": "Salz", "unit": "g", "quantity": 0, "category": "spicery"},
		{ "name": "Pfeffer", "unit": "g", "quantity": 0, "category": "spicery"}
	],
	"preparation": [
	    "Mozzarella und Gemüse in Scheiben schneiden und schön anrichten."
		],
	"image_filename": "2.jpg"
	},	
	{"id": 3,
	"name": "Tofustreifen-Salat mit Avocado",
	"calories": 600,
	"calories_diet_plan": 1400,
	"category": "dinner",
	"ingredients": [
		{ "name": "Räuchertofu", "unit": "g", "quantity": 125, "category": "other"},
		{ "name": "Öl", "unit": "TL", "quantity": 1, "category": "other"},
		{ "name": "Sojasauce", "unit": "EL", "quantity": 1, "category": "other"},
		{ "name": "Gemüse", "unit": "g", "quantity": 250, "category": "other"},
		{ "name": "Olivenöl", "unit": "EL", "quantity": 1, "category": "other"},
		{ "name": "Essig", "unit": "EL", "quantity": 2, "category": "other"},
		{ "name": "Senf", "unit": "TL", "quantity": 1, "category": "other"},
		{ "name": "Avocado", "unit": "g", "quantity": 150, "category": "other"},
		{ "name": "Salz", "unit": "g", "quantity": 0, "category": "spicery"},
		{ "name": "Pfeffer", "unit": "g", "quantity": 0, "category": "spicery"}
	],
	"preparation": [
	    "Tofustreifen trocken tupfen, in Öl anbraten, mit Sojasauce würzen.",
        "Salat mit Dressing aus Essig, Öl und Senf marinieren.",
		"Tofustreifen und Avocadostücke am Salat anrichten."
		],
	"image_filename": "3.jpg"
	},	
	{"id": 4,
	"name": "Hirselaibchen mit Joghurtsauce",
	"calories": 303,
	"calories_diet_plan": 1400,
	"category": "dinner",
	"ingredients": [
		{ "name": "Hirse", "unit": "g", "quantity": 50, "category": "other"},
		{ "name": "Gemüsesuppe", "unit": "g", "quantity": 133, "category": "other"},
		{ "name": "Karotte", "unit": "g", "quantity": 27, "category": "other"},
		{ "name": "Vollkornmehl", "unit": "g", "quantity": 17, "category": "other"},
		{ "name": "Ei", "unit": "g", "quantity": 20, "category": "other"},
		{ "name": "Joghurt 1%", "unit": "g", "quantity": 50, "category": "other"},
		{ "name": "Petersilie", "unit": "g", "quantity": 2, "category": "other"},
		{ "name": "Schnittlauch", "unit": "g", "quantity": 150, "category": "other"},
		{ "name": "Salz", "unit": "g", "quantity": 0, "category": "spicery"},
		{ "name": "Pfeffer", "unit": "g", "quantity": 0, "category": "spicery"}
	],
	"preparation": [
	    "Hirse in Gemüsefond weich kochen und abkühlen lassen.",
        "Anschließend mit würfelig geschnittenen Karotten und den übrigen Zutaten vermischen. Kleine Laibchen formen, auf ein mit Backpapier ausgelegtes Backblech legen und im Rohr bei 180° C ca. 25 Minuten backen.",
        "Für die Schnittlauchsauce alle Zutaten miteinander vermischen, würzen und gut verrühren.",
		"Tofustreifen trocken tupfen, in Öl anbraten, mit Sojasauce würzen. Salat mit Dressing aus Essig, Öl und Senf marinieren. Tofustreifen und Avocadostücke am Salat anrichten."
		],
	"image_filename": "4.jpg"
	},
	{"id": 5,
	"name": "Süßkartoffel-Linsen-Eintopf",
	"calories": 263,
	"calories_diet_plan": 1400,
	"category": "dinner",
	"ingredients": [
		{ "name": "Süßkartoffel", "unit": "g", "quantity": 75, "category": "other"},
		{ "name": "Zwiebel", "unit": "g", "quantity": 15, "category": "other"},
		{ "name": "Karotte", "unit": "g", "quantity": 40, "category": "other"},
		{ "name": "Lauch", "unit": "g", "quantity": 29, "category": "other"},
		{ "name": "Linsen", "unit": "g", "quantity": 50, "category": "other"},
		{ "name": "Lorbeerblatt", "unit": "g", "quantity": 0.5, "category": "other"},
		{ "name": "Gemüsesuppe", "unit": "g", "quantity": 250, "category": "other"},
		{ "name": "Olivenöl", "unit": "g", "quantity": 5, "category": "other"},
		{ "name": "Salz", "unit": "g", "quantity": 0, "category": "spicery"},
		{ "name": "Pfeffer", "unit": "g", "quantity": 0, "category": "spicery"}
	],
	"preparation": [
	    "Süßkartoffeln schälen und in Würfel schneiden. Zwiebel und Karotten schälen und klein hacken. Porree waschen und in Ringe schneiden.",
        "Öl in einem Topf erhitzen. Süßkartoffeln, Zwiebeln, Karotten, Porree und Lorbeerblatt darin 5 Min. dünsten.",
        "Linsen und Brühe hineingeben und zum Kochen bringen. Bei niedriger Temperatur ca. 10 Min köcheln lassen.",
        "Mit Salz und Pfeffer abschmecken, Lorbeerblatt entfernen und servieren."
		],
	"image_filename": "5.jpg"
	}
];