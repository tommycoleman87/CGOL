let generation = 0
let grid = new Array(50).fill([]).map(row => new Array(50).fill(false))
function setGrid() {
    let section = document.getElementById('grid')
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            section.appendChild(cell)
        }
    }
}

setGrid()