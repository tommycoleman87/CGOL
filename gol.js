

let generation = 0
let generationTxt = document.getElementsByClassName('generation')
let grid = new Array(25).fill([]).map(row => new Array(25).fill(0))
let playing = false
let playBtn = document.getElementById('playBtn')
let speed = 1500
generationTxt[0].innerHTML = `Generation: ${generation}`

playBtn.innerHTML = 'PLAY'

function setGrid() {
    let section = document.getElementById('grid')
    section.innerHTML = ''
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            if (grid[i][j] == 0) {
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
    if (playing === false) {
        if (grid[x][y] === 1) {
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
    let liveCells = false
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let liveNeighbors = 0
            //right
            if (j < grid[i].length - 1) {
                if (grid[i][j + 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //top right
            if (j < grid[i].length - 1 && i > 0) {
                if (grid[i - 1][j + 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //bottom right
            if (j < grid[i].length - 1 && i < grid.length - 1) {
                if (grid[i + 1][j + 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //bottom
            if (i < grid.length - 1) {
                if (grid[i + 1][j] > 0) {
                    liveNeighbors += 1
                }
            }
            //bottom left
            if (j > 0 && i < grid.length - 1) {
                if (grid[i + 1][j - 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //left
            if (j > 0) {
                if (grid[i][j - 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //top left
            if (j > 0 && i > 0) {
                if (grid[i - 1][j - 1] > 0) {
                    liveNeighbors += 1
                }
            }
            //top
            if (i > 0) {
                if (grid[i - 1][j] > 0) {
                    liveNeighbors += 1
                }
            }

            if (grid[i][j] === 1 && liveNeighbors > 3) {
                grid[i][j] = 2
            } else if (grid[i][j] === 1 && liveNeighbors < 2) {
                grid[i][j] = 2
            } else if (grid[i][j] === 0 && liveNeighbors === 3) {
                grid[i][j] = -1
            }




        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === -1) {
                grid[i][j] = 1
                liveCells = true
            } else if (grid[i][j] === 2) {
                grid[i][j] = 0
            } else if (grid[i][j] === 1) {
                liveCells = true
            }
        }
    }

    if (liveCells === true) {
        setGrid()
    } else {
        playing = false
        playBtn.innerHTML = "PLAY"
        clearInterval(playInterval)
        clearGrid()
    }

}
let playInterval = null
function play() {

    playing = !playing
    if (playing) {
        playBtn.innerHTML = 'PAUSE'
    } else {
        playBtn.innerHTML = 'PLAY'
    }
    if (playing === true) {
        playInterval = setInterval(() => nextGen(), speed)
    } else {
        clearInterval(playInterval)
    }

}

function clearGrid() {
    playing = false
    grid = new Array(25).fill([]).map(row => new Array(25).fill(0))
    setGrid()
    clearInterval(playInterval)
    playBtn.innerHTML = "PLAY"
    generation = 0
    generationTxt[0].innerHTML = `Generation: ${generation}`


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
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let chance = Math.floor(Math.random() * 10)
            if (chance < 3) {
                grid[i][j] = 1
            }
        }
    }

    setGrid()
}

function pulsar() {
    grid = new Array(25).fill([]).map(row => new Array(25).fill(0))

    grid[5][9] = 1
    grid[5][10] = 1
    grid[5][11] = 1

    grid[5][15] = 1
    grid[5][16] = 1
    grid[5][17] = 1

    grid[7][7] = 1
    grid[7][12] = 1
    grid[7][14] = 1
    grid[7][19] = 1

    grid[8][7] = 1
    grid[8][12] = 1
    grid[8][14] = 1
    grid[8][19] = 1

    grid[9][7] = 1
    grid[9][12] = 1
    grid[9][14] = 1
    grid[9][19] = 1

    grid[10][9] = 1
    grid[10][10] = 1
    grid[10][11] = 1

    grid[10][15] = 1
    grid[10][16] = 1
    grid[10][17] = 1

    grid[12][9] = 1
    grid[12][10] = 1
    grid[12][11] = 1

    grid[12][15] = 1
    grid[12][16] = 1
    grid[12][17] = 1


    grid[13][7] = 1
    grid[13][12] = 1
    grid[13][14] = 1
    grid[13][19] = 1

    grid[14][7] = 1
    grid[14][12] = 1
    grid[14][14] = 1
    grid[14][19] = 1

    grid[15][7] = 1
    grid[15][12] = 1
    grid[15][14] = 1
    grid[15][19] = 1

    grid[17][9] = 1
    grid[17][10] = 1
    grid[17][11] = 1

    grid[17][15] = 1
    grid[17][16] = 1
    grid[17][17] = 1

    setGrid()
}

function spaceShip() {
    grid = new Array(25).fill([]).map(row => new Array(25).fill(0))


    grid[10][2] = 1
    grid[10][3] = 1

    grid[11][0] = 1
    grid[11][1] = 1
    grid[11][3] = 1
    grid[11][4] = 1

    grid[12][0] = 1
    grid[12][1] = 1
    grid[12][2] = 1
    grid[12][3] = 1

    grid[13][1] = 1
    grid[13][2] = 1

    setGrid()
}

function increaseSpeed() {
    if(speed > 100) {
        speed -= 100
        if(playing === true) {
            clearInterval(playInterval)
            playing = false
            play()
        }
    }
}

function decreaseSpeed() {
    if(speed < 5000) {
        speed += 100
        if(playing === true) {
            clearInterval(playInterval)
            playing = false
            play()
        }
    }
}



setGrid()

