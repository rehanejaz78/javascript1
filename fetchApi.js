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

getdata();
