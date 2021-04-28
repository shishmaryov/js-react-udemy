var textElement = document.querySelector('.menu');
var menu = document.querySelector('.menu');
var menuItem = document.getElementsByClassName("menu-item");
var textElementContent = textElement.innerHTML;
var newElement = document.createElement('li');
var title = document.querySelector('#title');
var ad = document.querySelector('.adv');
var opinion = document.querySelector('.prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

newElement.innerHTML = 'Пятый пункт';
newElement.className = 'menu-item';
textElement.append(newElement);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.innerHTML = "Мы продаем только подлинную технику Apple";

ad.remove();

var writeOpinion = function () {
  var answer = prompt('Как вы относитесь к технике apple?');
  opinion.innerHTML = answer;

};

writeOpinion();