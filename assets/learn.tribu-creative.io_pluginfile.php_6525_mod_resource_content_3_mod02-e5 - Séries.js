const series = {
  Arcane: {
    releaseYear: 2021,
    country: "U.S.A.",
    availableOn: "Netflix",
    styles: ["Aventure", "Science fiction", "Action", "Animation"],
    createdBy: ["Alex Yee", 'Christian "Praeco" Linke'],
    actors: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro"],
    episodeDurationInMinutes: 45,
    numberOfSeasons: 2,
    numberOfEpisods: 18,
    ongoing: true,
  },
  "Game of Thrones": {
    releaseYear: 2011,
    country: "U.S.A.",
    availableOn: "OCS",
    styles: ["Drame", "Fantastique"],
    createdBy: ["D.B. Weiss", "David Benioff"],
    actors: ["Emilia Clarke", "Peter Dinklage", "Kit Harington", "Lena Headey"],
    episodeDurationInMinutes: 52,
    numberOfSeasons: 8,
    numberOfEpisods: 73,
    ongoing: false,
  },
  "Breaking Bad": {
    releaseYear: 2008,
    country: "U.S.A.",
    availableOn: "Netflix",
    styles: ["Drame"],
    createdBy: ["Vince Gilligan"],
    actors: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    episodeDurationInMinutes: 42,
    numberOfSeasons: 5,
    numberOfEpisods: 62,
    ongoing: false,
  },
  Chernobyl: {
    releaseYear: 2019,
    country: "U.S.A.",
    availableOn: "OCS",
    styles: ["Drame"],
    createdBy: ["Craig Mazin"],
    actors: ["Jared Harris", "Stellan Skarsgård", "Paul Ritter"],
    episodeDurationInMinutes: 58,
    numberOfSeasons: 1,
    numberOfEpisods: 5,
    ongoing: false,
  },
  "Peaky Blinders": {
    releaseYear: 2013,
    country: "Grande-Bretagne",
    availableOn: "Netflix",
    styles: ["Drame", "Historique", "Policier"],
    createdBy: ["Steven Knight"],
    actors: ["Cillian Murphy", "Natasha O'Keeffe", "Helen McCrory"],
    episodeDurationInMinutes: 52,
    numberOfSeasons: 6,
    numberOfEpisods: 36,
    ongoing: false,
  },
  "Shingeki no Kyojin": {
    releaseYear: 2013,
    country: "Japon",
    availableOn: "Netflix",
    styles: ["Aventure", "Action", "Animation"],
    createdBy: ["Yasuko Kobayashi"],
    actors: ["Yûki Kaji", "Yui Ishikawa", "Marina Inoue"],
    episodeDurationInMinutes: 24,
    numberOfSeasons: 4,
    numberOfEpisods: 95,
    ongoing: true,
  },
  Sherlock: {
    releaseYear: 2010,
    country: "Grande-Bretagne",
    availableOn: "Amazon",
    styles: ["Aventure", "Drame", "Policier"],
    createdBy: ["Steven Moffat", "Mark Gatiss"],
    actors: ["Benedict Cumberbatch", "Martin Freeman", "Amanda Abbington"],
    episodeDurationInMinutes: 90,
    numberOfSeasons: 4,
    numberOfEpisods: 14,
    ongoing: false,
  },
  "The Queen's Gambit": {
    releaseYear: 2020,
    country: "U.S.A.",
    availableOn: "Netflix",
    styles: ["Drame"],
    createdBy: ["Scott Frank", "Allan Scott"],
    actors: ["Anya Taylor-Joy", "William Horberg", "Harry Melling"],
    episodeDurationInMinutes: 60,
    numberOfSeasons: 1,
    numberOfEpisods: 7,
    ongoing: false,
  },
  "When They See Us": {
    releaseYear: 2019,
    country: "U.S.A.",
    availableOn: "Netflix",
    styles: ["Drame"],
    createdBy: ["Ava DuVernay"],
    actors: ["Asante Blackk", "Caleel Harris", "Ethan Herisse"],
    episodeDurationInMinutes: 35,
    numberOfSeasons: 1,
    numberOfEpisods: 4,
    ongoing: false,
  },
  "Stranger Things": {
    releaseYear: 2016,
    country: "U.S.A.",
    availableOn: "Netflix",
    styles: ["Drame", "Fantastique", "Thriller"],
    createdBy: ["Matt Duffer, Ross Duffer"],
    actors: ["Winona Ryder", "Millie Bobby Brown", "Finn Wolfhard"],
    episodeDurationInMinutes: 55,
    numberOfSeasons: 5,
    numberOfEpisods: 43,
    ongoing: true,
  },
  "Hunter X Hunter": {
    releaseYear: 2011,
    country: "Japon",
    availableOn: "Netflix",
    styles: ["Aventure", "Comédie", "Animation"],
    createdBy: ["Megumi Han", "Keiji Fujiwara", "Miyuki Sawashiro"],
    actors: ["Megumi Han", "Keiji Fujiwara", "Miyuki Sawashiro", "Mariya Ise"],
    episodeDurationInMinutes: 22,
    numberOfSeasons: 4,
    numberOfEpisods: 148,
    ongoing: false,
  },
  Heartstopper: {
    releaseYear: 2022,
    country: "Grande-Bretagne",
    availableOn: "Netflix",
    styles: ["Drame", "Romance"],
    createdBy: ["Alice Oseman"],
    actors: ["Kit Connor", "Joe Locke", "Corinna Brown"],
    episodeDurationInMinutes: 30,
    numberOfSeasons: 3,
    numberOfEpisods: 16,
    ongoing: true,
  },
  Vikings: {
    releaseYear: 2013,
    country: "Canada",
    availableOn: "Netflix",
    styles: ["Aventure", "Drame", "Historique"],
    createdBy: ["Michael Hirst"],
    actors: ["Alex Høgh Andersen", "Gustaf Skarsgård", "Marco Ilsø"],
    episodeDurationInMinutes: 52,
    numberOfSeasons: 6,
    numberOfEpisods: 89,
    ongoing: false,
  },
  "True Detective": {
    releaseYear: 2014,
    country: "U.S.A.",
    availableOn: "OCS",
    styles: ["Drame", "Policier", "Thriller"],
    createdBy: ["Nic Pizzolatto"],
    actors: ["Mahershala Ali", "Stephen Dorff", "Carmen Ejogo"],
    episodeDurationInMinutes: 55,
    numberOfSeasons: 4,
    numberOfEpisods: 24,
    ongoing: true,
  },
  Shameless: {
    releaseYear: 2011,
    country: "U.S.A.",
    availableOn: "Amazon",
    styles: ["Comédie", "Drame"],
    createdBy: ["Paul Abbott"],
    actors: ["William H. Macy", "Jeremy Allen White", "Shanola Hampton"],
    episodeDurationInMinutes: 45,
    numberOfSeasons: 11,
    numberOfEpisods: 134,
    ongoing: false,
  },
};

/* --------------------------------------------- */

console.info("1/ Quel est le pays d'origine de la série Sherlock");

console.log(series.Sherlock.country);

/* --------------------------------------------- */

console.info(
  "2/ Quelle est la série la plus ancienne entre Breaking Bad et Shameless ?"
);

let older = "";
if (series["Breaking Bad"].releaseYear < series.Shameless.releaseYear) {
  older = "Bbreaking Bad";
} else {
  older = "Shameless";
}
console.log(older);

older =
  series["Breaking Bad"].releaseYear < series.Shameless.releaseYear
    ? "Bbreaking Bad"
    : "Shameless";
console.log(older);

/* --------------------------------------------- */

console.info(
  "3/ Quelle est la durée totale de la série Game of Thrones en heures et minutes ?"
);

let durationGOT =
  series["Game of Thrones"].episodeDurationInMinutes *
  series["Game of Thrones"].numberOfEpisods;

console.log(
  `le film a une durée de ${Math.floor(durationGOT / 60)} heures et ${
    durationGOT % 60
  } minutes`
);

/* --------------------------------------------- */

console.info("4/ Donnez la liste des séries d'animation.");

// Recherchez dans la documentation sur les Array une méthode appropriée à la recherche d'une valeur.
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9thodes_des_instances

// for (let title in series){

// console.log(series[title].styles);
// }
// console.log(styles.includes(Animation));

let animation = [];

for (const title in series) {
  if (series[title].styles.includes("Animation")) {
    animation.push(title);
  }
}
console.log(animation);
/* --------------------------------------------- */

console.info(
  "5/ Il est 23h. J'ai décidé de faire une nuit blanche et de regarder une série complète avant 8h demain matin. quelles sont les séries complètes dont la durée est égale 8h-23h (9h) "
);
console.info("Quelles sont les séries que je peux regarder ?");
let films9h = [];
let durationSeries;
for (const title in series) {
  if (
    series[title].episodeDurationInMinutes * series[title].numberOfEpisods <
    540
  ) {
    durationSeries = title;
    films9h.push(durationSeries);
  }
}
console.log(films9h);
/* --------------------------------------------- */

console.info(
  "6/ Quelles sont les séries terminées originaires de Grande-Bretagne ou du Japon ?"
);
let filmArray = [];

for (let c in series) {
  if (
    !series[c].ongoing &&
    (series[c].country === "Grande-Bretagne" || series[c].country === "Japon")
  ) {
    filmArray.push(c);
  }
}

console.log(filmArray);

/* --------------------------------------------- */

console.info(
  "7/ J'ai uniquement un abonnement Netflix. Quelles series de science fiction ou thriller puis-je regarder ?"
);
let seriesArray = [];

for (let c in series) {
  if (
    series[c].availableOn === "Netflix" &&
    (series[c].styles.includes("Science fiction") ||
      series[c].styles.includes("Thriller"))
  ) {
    seriesArray.push(c);
  }
}

console.log(seriesArray);

/* --------------------------------------------- */

console.info(
  "8/ Retournez la liste des series avec pour chacune le nombre de personnes dans l'équipe de réalisation (createdBy) ?"
);
let arrayListe = {};
for (let serieName in series) {
  const team = series[serieName].createdBy.length;
  arrayListe[serieName] = team;
}

console.log(arrayListe);
console.table(arrayListe);

/* --------------------------------------------- */

console.info("9/ Combien il y a-t-il de series originaires de chaque pays ?");

let serieByCountry = {};
for (let serie in series) {
  const série = series[serie];
  const pays = série.country;
  if (serieByCountry[pays]) {
    serieByCountry[pays]++;
  } else {
    serieByCountry[pays] = 1;
  }
}

console.log(serieByCountry);

/* --------------------------------------------- */

console.info(
  "10/ Quel est le style de série le plus représenté dans cette liste ?"
);
// Créez un objet pour compter le nombre de séries par style
const stylesCount = {};

// Parcourez chaque série et comptez les styles
for (const nomSerie in series) {
  const série = series[nomSerie];
  const styles = série.styles;

  // Parcourez chaque style de la série
  for (const style of styles) {
    // Si le style existe déjà dans l'objet, incrémentez le compteur
    if (stylesCount[style]) {
      stylesCount[style]++;
    } else {
      // Sinon, initialisez le compteur à 1
      stylesCount[style] = 1;
    }
  }
}

// Recherchez le style avec le nombre le plus élevé
let stylePlusReprésenté = "";
let max = 0;

for (const style in stylesCount) {
  if (stylesCount[style] > max) {
    max = stylesCount[style];
    max = style;
  }
}

// Affichez le style le plus représenté
console.log("Le style de série le plus représenté est :", max);

/* --------------------------------------------- */

console.info(
  "BONUS 1/ Retournez la liste des titres de toutes les séries classées de la plus récente à la plus ancienne."
);
let oldSeries = [];
for (let serieName in series) {
  oldSeries.push({ Name: serieName, Release: series[serieName].releaseYear });
}
// console.table(oldSeries)
oldSeries.sort(function compareNB(a, b) {
  return b.Release - a.Release;
});
console.table(oldSeries);

/* --------------------------------------------- */

console.info(
  "BONUS 2/ Je vais passer mes 8 jours de vacance à regarder les séries de cette liste dans l'ordre à raison de 16 heures par jour. Par quel épisode de quelle série vais-je conclure mes vacances ?"
);

console.log();
