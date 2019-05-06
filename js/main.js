/*----- constants -----*/
        // store value of each cell
var onOff = {
    "0": "white",
    "1": "black"
}

/*----- app's state variables -----*/
var board, winner;
// store value of puzzle solution

var solution = [
[0, 0, 0, 0, 0, 1, 1, 1, 1, 0] // column 0
[1, 0, 0, 0, 1, 1, 0, 0, 0, 0] // column 1
[0, 1, 0, 1, 1, 1, 1, 1, 1, 0] // column 2
[0, 1, 1, 1, 0, 1, 1, 0, 1, 0] // column 3
[0, 0, 0, 1, 1, 1, 1, 0, 0, 1] // column 4
[0, 0, 0, 1, 1, 1, 1, 0, 0, 1] // column 5
[0, 1, 1, 1, 0, 1, 1, 0, 1, 0] // column 6
[0, 1, 0, 1, 1, 1, 1, 1, 1, 0] // column 7
[1, 0, 0, 0, 1, 1, 0, 0, 0, 0] // column 8
[0, 0, 0, 0, 0, 1, 1, 1, 1, 0] // column 9
];

/*----- cached element references -----*/
var message = document.querySelector("");

/*----- event listeners -----*/
document.querySelector("section").addEventListener("click", handleClick);
document.getElementById("check").addEventListener("click", checkSolution);
document.getElementById("play").addEventListener("click", displayKey);

/*----- functions -----*/
initialize();

        // process shading activity
function handleClick(evt) {

}

        // check if current board array === solution array
function checkSolution() {

}

        // display empty clickable grid
function render() {

}


        // initialize empty board
function initialize() {
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 4
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // column 9
    ];
    winner = null;
    render();
}

function displayKey() {

}