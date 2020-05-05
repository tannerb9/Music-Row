const createBluegrassArtist = (name, age) => ({
  artist: name,
  age: age,
  genre: "Bluegrass",
});

const createCountryArtist = (name, age) => ({
  artist: name,
  age: age,
  genre: "Country",
});

const createFunkArtist = (name, age) => ({
  artist: name,
  age: age,
  genre: "Funk",
});

const createRapArtist = (name, age) => ({
  artist: name,
  age: age,
  genre: "Rap",
});

const createPopArtist = (name, age) => ({
  artist: name,
  age: age,
  genre: "Pop",
});

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

chattenRecords.push(createCountryArtist("Bruce Atikins", 23));
polarRecords.push(createPopArtist("Jensen Brown", 20));
jumpStopRecords.push(createFunkArtist("Dre Funkz", 25));
jumpStopRecords.push(createRapArtist("Dusta Grimes", 21));
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 23));
chattenRecords.push(createCountryArtist("Avilee Dallas", 19));
polarRecords.push(createPopArtist("Austin Kinkaid", 22));
jumpStopRecords.push(createRapArtist("Loyancé Branis", 27));
