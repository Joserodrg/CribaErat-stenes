import data from "./posts.json" assert { type: "json" };

// 2. Create a function which receives the imported data as parameter and
//    returns all entries from user with id 2

function jsonId2(data) {
  let entriesID2 = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].userId === 2) {
      entriesID2.push(data[i]);
    }
  }
  return entriesID2;
}

console.log(jsonId2(data));
