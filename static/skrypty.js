var isChooseNumber = false // potrzebne do sprawdzenia czy już nie wybieramy liczby
var selectedNumber; // 
var selectedCell; // wybrana komurka na planszy
function changeNumber(number, id) {
    alert(number)
    //$('#' + id).css('background-image', "url(public/img/" + number + ".jpg")
}

$("#article").append( '<div class="chooseNumber">' + 
                    '<div class="cell" id="s10c0" style="background-image:url(public/img/1.jpg);" ></div>' +
                    '<div class="cell" id="s10c1" style="background-image:url(public/img/2.jpg);" ></div>' +
                    '<div class="cell" id="s10c2" style="background-image:url(public/img/3.jpg);" ></div>' +
                    '<div class="cell" id="s10c3" style="background-image:url(public/img/4.jpg);" ></div>' +
                    '<div class="cell" id="s10c4" style="background-image:url(public/img/5.jpg);" ></div>' +
                    '<div class="cell" id="s10c5" style="background-image:url(public/img/6.jpg);" ></div>' +
                    '<div class="cell" id="s10c6" style="background-image:url(public/img/7.jpg);" ></div>' +
                    '<div class="cell" id="s10c7" style="background-image:url(public/img/8.jpg);" ></div>' +
                    '<div class="cell" id="s10c8" style="background-image:url(public/img/9.jpg);" ></div>' +
                    '</div>' )
$('.chooseNumber').hide()


class CorrectCell {
    constructor(id, value) {
        this.id = id
        this.value = value
    }
}


class Cell {
    /* Pojedyncza komórka w sudoku */
    constructor(id, value, changed = false) {
        this.id = id
        this.value = value
        this.changed = changed // true w przypadku pustego pola

        $('#' + this.id).css('background-image', "url(public/img/" + this.value + ".jpg)")

        if (this.changed) {
            $('#' + this.id).addClass('cellChanged')

            let div = document.getElementById(this.id)
            div.addEventListener("click", function() {
                /* Funkcja obsługuje kliknięcie na komórkę */
                /* wyświetla poniżej planszy pola z cyframi do wyboru */
                selectedCell = this.id
                $('.chooseNumber').show()

                if (!isChooseNumber) {
                    isChooseNumber = true


                    for (let i = 0; i < 9; i++) {
                        $('#s10c' + i).addClass('cellChanged')
                        $('#s10c' + i).click(function(){
                            wpiszLiczbe(i);
                        })
                    }

                }
                

            })
        }
    }

}


class Plansza {
    constructor(solution, example_board) {
        this.solution = solution
        this.example_board = example_board
    }
}

function wpiszLiczbe(i) {
    var correctValue = 0
    for (let i = 0; i < correctCells.length; i++) {
        if (correctCells[i].id == selectedCell) 
            correctValue = correctCells[i].value
    }

    if ( correctValue != (i + 1))
        alert("Poprawna wartość to: " + correctValue + "  wpisałeś: " + (i + 1))

    else {
        $('#' + selectedCell).css('background-image', "url(public/img/" + (i + 1) + ".jpg)");
        $('.chooseNumber').hide();
    } 
}

function id_creator(row, column) {
    /* zwraca id odpowiadające komórce */
    id = "null"

    if (row < 3) {
        if (column < 3) {
            id = "s0"
            let r = row * 3
            let position = r + column
            id += "c" + position

        }
        if (3 <= column && column < 6) {
            id = "s1"
            let r = row * 3
            let position = r + column - 3
            id += "c" + position

        }
        if (column >= 6) {
            id = "s2"
            let r = row * 3
            let position = r + column - 6
            id += "c" + position
        }
        
    }
    if (3 <= row && row < 6) {
        if (column < 3) {
            id = "s3"
            let r = (row - 3) * 3
            let position = r + column
            id += "c" + position

        }
        if (3 <= column && column < 6) {
            id = "s4"
            let r = (row - 3) * 3
            let position = r + column - 3
            id += "c" + position

        }
        if (column >= 6) {
            id = "s5"
            let r = (row - 3) * 3
            let position = r + column - 6
            id += "c" + position
        }
    }
    if (row >= 6) {
        if (column < 3) {
            id = "s6"
            let r = (row - 6) * 3
            let position = r + column
            id += "c" + position

        }
        if (3 <= column && column < 6) {
            id = "s7"
            let r = (row - 6) * 3
            let position = r + column - 3
            id += "c" + position

        }
        if (column >= 6) {
            id = "s8"
            let r = (row - 6) * 3
            let position = r + column - 6
            id += "c" + position
        }
    }

    return id
}

function idToArray2D(id){
    let sector = id[1]
    let cell = id[3]
    let row = 0;
    let column = 0;
    alert('sektor: ' + id[1] + "  \n" + "komórka: " + id[3])

    if (sector < 3) {
        if (cell < 3) {
            column = cell + sector * 3
        }
        if (3 <= cell && cell < 6) {
            row = 1
            column = cell - 3
        }
        if (6 <= cell) {
            row = 2
            column = cell - 6
        }

    }

    if (3 <= sector && sector < 6) {
        if (cell < 3) {
            row = 3
            column = cell
        }
        if (3 <= cell && cell < 6) {
            row = 4
            column = cell - 3
        }
        if (6 <= cell) {
            row = 5
            column = cell - 6
        }
    }

    if (6 <= sector) {
        if (cell < 3) {
            row = 6
            column = cell
        }
        if (3 <= cell && cell < 6) {
            row = 7
            column = cell - 3
        }
        if (6 <= cell) {
            row = 8
            column = cell - 6
        }
    }
    //alert('row: ' + row + "\ncolumn: " + column)
}


var solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

  var example_board = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9]
]

var plansza = new Plansza(solution, example_board)
var cells = []
var correctCells = []


for (let i = 0; i < solution.length; i++) {
    /* odpowiada za stworzenie komórek */
    for (let j = 0; j < solution[i].length; j++) {
        switch (solution[i][j]) {
            case "":
                correctCells.push(new CorrectCell(id_creator(i, j), 0))
                break;
            case 1:
                correctCells.push(new CorrectCell(id_creator(i, j), 1))
                break;
            case 2:
                correctCells.push(new CorrectCell(id_creator(i, j), 2))
                break;
            case 3:
                correctCells.push(new CorrectCell(id_creator(i, j), 3))
                break;
            case 4:
                correctCells.push(new CorrectCell(id_creator(i, j), 4))
                break;
            case 5:
                correctCells.push(new CorrectCell(id_creator(i, j), 5))
                break;
            case 6:
                correctCells.push(new CorrectCell(id_creator(i, j), 6))
                break;
            case 7:
                correctCells.push(new CorrectCell(id_creator(i, j), 7))
                break;
            case 8:
                correctCells.push(new CorrectCell(id_creator(i, j), 8))
                break;
            case 9:
                correctCells.push(new CorrectCell(id_creator(i, j), 9))
                break;
            default:
                break;
        }
        
    }
}


// dla widocznej planszy
for (let i = 0; i < example_board.length; i++) {
    /* odpowiada za stworzenie komórek */
    for (let j = 0; j < example_board[i].length; j++) {
        switch (example_board[i][j]) {
            case "":
                cells.push(new Cell(id_creator(i, j), 0, changed=true))
                break;
            case 1:
                cells.push(new Cell(id_creator(i, j), 1))
                break;
            case 2:
                cells.push(new Cell(id_creator(i, j), 2))
                break;
            case 3:
                cells.push(new Cell(id_creator(i, j), 3))
                break;
            case 4:
                cells.push(new Cell(id_creator(i, j), 4))
                break;
            case 5:
                cells.push(new Cell(id_creator(i, j), 5))
                break;
            case 6:
                cells.push(new Cell(id_creator(i, j), 6))
                break;
            case 7:
                cells.push(new Cell(id_creator(i, j), 7))
                break;
            case 8:
                cells.push(new Cell(id_creator(i, j), 8))
                break;
            case 9:
                cells.push(new Cell(id_creator(i, j), 9))
                break;
            default:
                break;
        }
        
    }
}



