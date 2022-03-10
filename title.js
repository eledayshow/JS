var chText = document.querySelector('.chText');
var chButton = document.querySelector('.chButton');
var h1 = document.querySelector('.headerh1');
var h2 = document.querySelector('.h2');
var out = false;
var example = document.querySelector('.example');

function change(value) {
  document.title = String(value);
  h1.textContent = value;
  chText.value = '';
}