//reverse the  string

var text = "hello";
var reverse = "";

for (var i = text.length - 1; i >= 0; i--) {
  reverse += text[i];
}
console.log(reverse);
