const gridContainer = document.getElementById("grid-container");

window.addEventListener("load", setDefaultGrid);

//create a default grid sized 16x16
let setDefaultGrid = () => {
	setGridSize(16);
	fillGrid(16);
};

let setGridSize = (size) => {
	gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

let fillGrid = (size) => {
	for (let i = 0; i < size * size; i++) {
		let gridElement = document.createElement("div");
		//gridElement.addEventListener("mouseover", getRandomColor());
		gridContainer.appendChild(gridElement).classList = "grid-element";
	}
};

let getRandomColor = (e) => {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	e.target.style.backgroundColor = color;
};
