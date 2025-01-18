function Region(name, area, population) {
  this.name = name;
  this.area = area;
  this.population = population;
}
Region.prototype.about = function () {
  console.log(
    `Name: ${this.name}. Area: ${this.area}. Population: ${this.population}.`
  );
};
function Country(name, area, population, capital) {
  Region.call(this, name, area, population);
  this.capital = capital;
}
Country.prototype = Object.create(Region.prototype);
Country.prototype.constructor = Country;
Country.prototype.about = function () {
  console.log(
    `Name: ${this.name}. Area: ${this.area}. Population: ${this.population}. Capital: ${this.capital}.`
  );
};

function City(name, area, population, boroughs) {
  Region.call(this, name, area, population);
  this.boroughs = boroughs;
}
City.prototype = Object.create(Region.prototype);
City.prototype.constructor = City;
City.prototype.about = function () {
  console.log(
    `Name: ${this.name}. Area: ${this.area}. Population: ${this.population}. Boroughs: ${this.boroughs}.`
  );
};

let country = new Country("Ukraine", 603628, 38000000, "Kyiv");

country.about();

let city = new City("Kyiv", 836, 3000000, [
  "Darnytsia",
  "Obolon",
  "Svyatoshyn",
  "Pechersk",
]);

city.about();
