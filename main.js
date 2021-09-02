
const defaultColor = '#'
const defaultColorMode = 'color'

let colorMode = defaultColorMode
let currentColor = defaultColor

const grid = document.querySelector('.grid');

for (let k = 1; k<=16; k++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 1; i<=16; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener('mouseover', turnColor)
        row.appendChild(content);
    }
    grid.appendChild(row);
}

//const cells = document.querySelector('.content');
//cells.addEventListener('mouseover', turnColor)
const colormode = document.querySelector('.colormode');
const erase = document.querySelector('.erase');

colormode.onclick = () => changeMode('color');
erase.onclick = () => changeMode('erase');

function changeMode(e) {
    colorMode = e;
}

function turnColor(e) {
    if (colorMode == 'color') {
        e.target.classList.add('active');
        //e.target.style.backgroundColor = 'rgb(0, 0, 0)';
    } else if (colorMode == 'erase') {
        e.target.classList.remove('active')
    }
}

