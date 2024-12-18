 import data from "./posts.json" assert { type: "json" };

// 1. Create a function which receives the imported data as parameter and
//    returns an array of only the titles

function jsonTitles(data) {
  let titles = [];
  for (let i = 0; i < data.length; i++) {
    titles.push(data[i].title); // Acceder a la propiedad 'title'
  }
  return titles;
}

console.log(jsonTitles(data));
