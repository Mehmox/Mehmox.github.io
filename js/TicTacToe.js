let buttonumid;
let turn = 1;
let resetcounter = 1;
let game = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
function xox(buttonumid) {
    let check = document.getElementById;
    let line = document.getElementById(buttonumid);
    if (turn < 10) {
        if (line.innerHTML !== "X" && line.innerHTML !== "O") {

            if (turn % 2 === 1) {
                line.innerHTML = "X";
                game.splice(buttonumid - 1, 1, "X");
                turn++;
            } else {
                line.innerHTML = "O";
                game.splice(buttonumid - 1, 1, "O");
                turn++;
            }
            console.log(game)

        }
        setTimeout(function () {
            if (
                game[0] !== " " && game[0] === game[1] && game[1] === game[2] ||
                game[3] !== " " && game[3] === game[4] && game[4] === game[5] ||
                game[6] !== " " && game[6] === game[7] && game[7] === game[8] ||

                game[0] !== " " && game[0] === game[3] && game[3] === game[6] ||
                game[1] !== " " && game[1] === game[4] && game[4] === game[7] ||
                game[2] !== " " && game[2] === game[5] && game[5] === game[8] ||

                game[4] !== " " && game[0] === game[4] && game[4] === game[8] ||
                game[4] !== " " && game[6] === game[4] && game[4] === game[2]
            ) {
                if (turn % 2 === 0) {
                    alert("X WİN!!");
                } else
                    alert("O WİN!!");

                for (let resetcounter = 1; resetcounter < 10; resetcounter++) {
                    document.getElementById(resetcounter).innerHTML = " ";
                }
                turn = 1;
                game = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
            }
        }, 20);
    }
    if (turn > 9) {
        setTimeout(function () {
            alert("Tie");
            for (let resetcounter = 1; resetcounter < 10; resetcounter++) {
                document.getElementById(resetcounter).innerHTML = " ";
            }
            turn = 1;
            game = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        }, 20);
    }
}