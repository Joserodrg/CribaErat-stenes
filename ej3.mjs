import data from "./posts.json" assert { type: "json" };

// 3. Create a function which receives the imported data as parameter and
//    returns an array of objects with both the titles and the post id from user with id 9

function jsonUserId9(data) {
  let user9 = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].userId === 9) {
      /* let obj = {};
      obj.title = data[i].title;
      obj.id = data[i].id;
      user9.push(obj); */

      user9.push({ title: data[i].title, id: data[i].id });
    }
  }
  return user9;
}

console.log(jsonUserId9(data));

// [
//     { title: 'tempora rem veritatis voluptas quo dolores vero', id: 81 },
//     { title: 'laudantium voluptate suscipit sunt enim enim', id: 82 },
//     { title: 'odit et voluptates doloribus alias odio et', id: 83 },
//     { title: 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut', id: 84 }
//     // ...
// ]
