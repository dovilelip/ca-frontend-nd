var countries = [
    { name: "Lithuania", population: 2800000, area: 65300 },
    { name: "Latvia", population: 1900000, area: 64589 },
    { name: "Bangladesh", population: 163000000, area: 57360 },
    { name: "United Arab Emirates", population: 9200000, area: 83600 },
    { name: "Greece", population: 10700000, area: 13676 }];

function data(name, population, area){
  var population = population / 1000000;
  var areaPerPerson = area / population;
  areaPerPerson = areaPerPerson.toFixed(2);
  console.log("Šalis: " + name + ", joje gyvena " + population
  + " mln. gyventojų. Valstyvės plotas: " + area + " km², plotas vienam gyventojui: " + areaPerPerson + " m².");
}


for (var i = 0; i < countries.length; i++){
  data(countries[i].name, countries[i].population, countries[i].area);
}