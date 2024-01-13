const grid = document.querySelector("#grid");

// 16 x 16 grid
for (let i = 1; i <= 256; i++) {
	const gridSquare = document.createElement("div");
	gridSquare.classList.add("grid-square");
	grid.appendChild(gridSquare);
}

// Draw
const gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach(square => square.addEventListener('mouseenter', () => { square.classList.add('active'); }));