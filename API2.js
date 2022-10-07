const products = "https://fakestoreapi.com/products";

// function getproducts() {
//   const res = fetch(products).then((response) => {
//     const data = response.json();
//     return data;
//   });
//   return res;
// }
// getproducts().then((d) => {
//   d.map((s) => {
//     console.log(s.title);
//   });
// });

function getproducts() {
  const res = fetch(products)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return res;
}

getproducts().then((d) => {
  d.map((s) => {
    console.log(s.title);
  });
});
