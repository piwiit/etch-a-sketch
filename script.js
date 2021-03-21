const gridContainer = document.getElementById('grid-container');
const initButton = document.querySelector('#init-button');
console.log(initButton);

//create a default grid sized 16x16
let setDefaultGrid = () => {
  setGridSize(16);
  fillGrid(16);
};

//load setDefaulgrid first
window.addEventListener('load', setDefaultGrid);

let setGridSize = (size) => {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

let fillGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    let gridElement = document.createElement('div');
    gridContainer.appendChild(gridElement).classList = 'grid-element';
    gridElement.addEventListener('mouseover', changeColor);
  }
};

//changing color
let changeColor = (e) => {
  e.target.style.background = getRandomColor();
};

//random color
let getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

initButton.addEventListener('click', () => {
  let size = Number(prompt('Enter size !'));
  if (size === 0 || size === NaN) {
    gridContainer.remove();
  } else {
    setGridSize(size);
    fillGrid;
  }
});
