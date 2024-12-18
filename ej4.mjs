import data from "./posts.json" assert { type: "json" };

// 4. Create a function which receives the imported data and a userId as parameters and
//    returns an array of objects with both the titles and the post ids from user with id equal to the userId provided

function equalId(data, id) {
  const entries = [];
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].userId) {
      entries.push({ title: data[i].title, id: data[i].id });
    }
  }
  return entries;
}

console.log(equalId(data, 4));