const grid = document.querySelector("#grid");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
	const gridSize = prompt("Enter the number of squares per side.", 16);
	createGrid(gridSize);
});

// Drawing
grid.addEventListener(
	"mouseenter",
	(e) => {
		const target = e.target;
		if (target.classList.contains("grid-square")) {
			target.classList.add("active");
		}
	},
	true
);

// Initalise starting grid
createGrid(16);

function createGrid(gridSize) {
	// Clear grid
	for (let i = grid.childNodes.length; i > 0; i--) {
		grid.removeChild(grid.lastChild);
	}

	// Create grid
	for (let i = 0; i < gridSize * gridSize; i++) {
		const gridSquare = document.createElement("div");
		gridSquare.classList.add("grid-square");
		const gridSquareSize = (1 / gridSize) * 100; // Percentage of grid height/width
		gridSquare.setAttribute(
			"style",
			`height: ${gridSquareSize}%; flex: 0 1 ${gridSquareSize}%;`
		);
		grid.appendChild(gridSquare);
	}
}
