function createGrid(dimensions) {
    const container = document.querySelector('.grid-container');

    for (let i = 1; i <= dimensions; i++) {
        // create columns
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        // create rows
        for (let j = 1; j <= dimensions; j++) {
            const element = document.createElement('div');
            element.classList.add('element');
            row.appendChild(element);
        }
    }

    var elements = document.querySelectorAll('.element')
    elements.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "red";
        });
    });
}

function deleteGrid() {
    const container = document.querySelector('.grid-container');
    container.innerHTML = ""
}

function getGridSize() {
    var size = prompt("Grid Size: ");
    // Delete existing before adding new
    deleteGrid()
    createGrid(size);
};

document.querySelector('#new_grid_button').addEventListener('click', getGridSize);