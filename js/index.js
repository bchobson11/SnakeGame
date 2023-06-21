const redButton = document.getElementById('red-theme');
const greenButton = document.getElementById('green-theme');
const blueButton = document.getElementById('blue-theme');
const purpleButton = document.getElementById('purple-theme');
const yellowButton = document.getElementById('yellow-theme');
const blackButton = document.getElementById('black-theme');
const whiteButton = document.getElementById('white-theme');
const orangeButton = document.getElementById('orange-theme');
const pinkButton = document.getElementById('pink-theme');


redButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '255, 0, 0')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  redButton.classList.add('clicked-theme')
}); 

greenButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '0, 255, 0')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  greenButton.classList.add('clicked-theme')

}); 

blueButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '0, 0, 255')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  blueButton.classList.add('clicked-theme')

});

purpleButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '255, 0, 255')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  purpleButton.classList.add('clicked-theme')

}); 

yellowButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '255, 255, 0')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  yellowButton.classList.add('clicked-theme')

}); 

blackButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '0, 0, 0')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  blackButton.classList.add('clicked-theme')

}); 

whiteButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '255, 255, 255')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  whiteButton.classList.add('clicked-theme')

});

orangeButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '255, 75, 0')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  orangeButton.classList.add('clicked-theme')

});

pinkButton.addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme-color', '255, 105, 180')
  let clicked = document.querySelector('.clicked-theme')
  clicked.classList.remove('clicked-theme')
  pinkButton.classList.add('clicked-theme')

}); 

function foo() {
  document.getElementsByClassName('theme-btn')
}