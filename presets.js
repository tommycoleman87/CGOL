


const glider = () => {
    let gliderGrid = new Array(25).fill([]).map(row => new Array(25).fill(0))
    gliderGrid[0][0] = 1
    gliderGrid[1][1] = 1
    gliderGrid[1][2] = 1
    gliderGrid[2][0] = 1
    gliderGrid[2][1] = 1
    return gliderGrid
}

export {glider}