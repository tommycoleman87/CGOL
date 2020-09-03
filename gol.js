let generation = 0
let grid = new Array(25).fill([]).map(row => new Array(25).fill(0))
const toggleCell = (x, y) => {
    if(grid[x][y] === 1) {
        grid[x][y] = 0
    } else {
        grid[x][y] = 1
    }
    setGrid()
}
function setGrid() {
    let section = document.getElementById('grid')
    section.innerHTML = ''
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            if(grid[i][j] == 0) {
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

function nextGen() {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++){
            let liveNeighbors = 0
            //right
            if(j < grid[i].length - 1) {
                if(grid[i][j+1] > 0) {
                    liveNeighbors += 1
                }
            }
            //top right
            if(j < grid[i].length - 1 && i > 0) {
                if(grid[i- 1][j + 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //bottom right
            if(j < grid[i].length - 1 && i < grid.length - 1) {
                if(grid[i + 1][j + 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //bottom
            if(i < grid.length - 1) {
                if(grid[i + 1][j] > 0) {
                    liveNeighbors += 1
                }
            }
            //bottom left
            if(j > 0 && i < grid.length - 1) {
                if(grid[i + 1][ j - 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //left
            if(j > 0) {
                if(grid[i][j - 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //top left
            if (j > 0 && i > 0) {
                if(grid[i - 1][j - 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //top
            if(i > 0) {
                if(grid[i -1][j] > 0) {
                    liveNeighbors += 1
                }
            }

            if(grid[i][j] === 1 && liveNeighbors > 3) {
                grid[i][j] = 2
            } else if(grid[i][j] === 1 && liveNeighbors < 2) {
                grid[i][j] = 2
            } else if(grid[i][j] === 0 && liveNeighbors === 3) {
                grid[i][j] = -1
            }




        }
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === -1) {
                grid[i][j] = 1
            } else if(grid[i][j] === 2) {
                grid[i][j] = 0
            }
        }
    }

    setGrid()
}

const play = setInterval(nextGen(), 1000)


setGrid()