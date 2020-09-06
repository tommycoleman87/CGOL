

let generation = 0
let generationTxt = document.getElementsByClassName('generation')
generationTxt[0].innerHTML = `Generation: ${generation}`
let grid = new Array(25).fill([]).map(row => new Array(25).fill(0))

let playing = false

let playBtn = document.getElementById('playBtn')
playBtn.innerHTML = 'PLAY'

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

const toggleCell = (x, y) => {
    if(playing === false) {
        if(grid[x][y] === 1) {
            grid[x][y] = 0
        } else {
            grid[x][y] = 1
        }
        setGrid()
    }
 
}

function nextGen() {
    generation += 1
    generationTxt[0].innerHTML = `Generation: ${generation}`
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
let playInterval = null
function play() {
    
    playing = !playing
    if(playing) {
        playBtn.innerHTML = 'PAUSE'
    } else{
        playBtn.innerHTML = 'PLAY'
    }
    if(playing === true) {
        playInterval = setInterval(() => nextGen(), 1000)
    } else {
        clearInterval(playInterval)
    }

}

function clearGrid() {
    if(playing === false) {
        grid = new Array(25).fill([]).map(row => new Array(25).fill(0))
        setGrid()
        generation = 0
        generationTxt[0].innerHTML = `Generation: ${generation}`
    }

}

function glider() {
    let gliderGrid = new Array(25).fill([]).map(row => new Array(25).fill(0))
    gliderGrid[0][0] = 1
    gliderGrid[1][1] = 1
    gliderGrid[1][2] = 1
    gliderGrid[2][0] = 1
    gliderGrid[2][1] = 1
    grid = gliderGrid
    setGrid()

}

function random() {
    grid = new Array(25).fill([]).map(row => new Array(25).fill(0))
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let chance = Math.floor(Math.random() * 10)
            if(chance < 3) {
                grid[i][j] = 1
            }
        }
    }

    setGrid()
}




setGrid()