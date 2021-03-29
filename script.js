const gridContainer = document.getElementById("grid-container");
const initButton = document.querySelector("#init-button");

const setGridSize = (size) => {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

// random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// changing color
const changeColor = (e) => {
  e.target.style.background = getRandomColor();
};

const fillGrid = (size) => {
  for (let i = 0; i < size * size; i += 1) {
    const gridElement = document.createElement("div");
    gridContainer.appendChild(gridElement).classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
  }
};

// create a default grid sized 16x16
const setDefaultGrid = () => {
  setGridSize(16);
  fillGrid(16);
};

// load setDefaulgrid first
window.addEventListener("load", setDefaultGrid);

// const customPrompt = alert("Enter size : ");

// const changeSize = () => {
//   const size = Number(customPrompt);
//   if (size === 0 || isNaN(size)) {
//     alert("Enter a number of new grid");
//     changeSize();
//   } else {
//     setGridSize(size);
//     fillGrid(size);
//   }
// };

const changeSize = () => {
  // eslint-disable-next-line no-alert
  alert("Coming soon");
};

initButton.addEventListener("click", changeSize);
