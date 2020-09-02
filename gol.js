let generation = 0
let grid = new Array(50).fill([]).map(row => new Array(50).fill(false))
const toggleCell = (x, y) => {
    grid[x][y] = !grid[x][y]
    setGrid()
}
function setGrid() {
    let section = document.getElementById('grid')
    section.innerHTML = ''
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            if(grid[i][j] == false) {
                cell.classList.add('dead')
            } else {
                cell.classList.add('live')
            }
            cell.classList.add(`${i}${j}`)
            cell.addEventListener('click', () => toggleCell(i, j))
            section.appendChild(cell)
        }
    }
}

setGrid()