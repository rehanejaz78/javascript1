let mybtn = document.getElementById("mybtn");

let content = document.getElementById("content");

function getdata() {
  url = "https://api.github.com/users";

  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    });
}

//getdata();

//by doing with async await
async function getCall() {
  url = "https://api.github.com/users";
  const response = await fetch(url);

  const users = await response.json();
  return users;
}

let a = getCall();
a.then((data) => {
  data.map((a) => {
    console.log(a.id);
  });
  console.log(data);

  console.log(data[0]);
});
