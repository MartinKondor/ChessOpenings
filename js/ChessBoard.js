
const ChessBoardComponent = ({moves}) => {

    function moveToCoords(move) {
        /**
         * move: like g3, e5, Bg2
         * returns: [pieceStr, xInt, yInt] coordinates for T
         */
        let coords = [" ", 0, 0, -1];
        let legalLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
        let isTaking = false;

        console.log(`Move: ${move}`);

        // Ignore taking move + others
        move = move.replaceAll("+", "");
        move = move.replaceAll("#", "");
        if (move.includes("x")) {
            move = move.replaceAll("x", "");
            isTaking = true;
        }

        // Not a pawn move
        if (!legalLetters.includes(move[0])) {
            coords[0] = move[0];
            move = move.slice(1);
        }

        // Ignore the source column
        if (isTaking) {
            coords[3] = move[0]; 
            move = move.slice(1);
        }

        // It is a clarified step
        if (move.length == 3) {
            move = move[0] + move[2];
        }

        if (move.length != 2) {
            console.log(`'Bad' move: ${move}, at ChessBoard.moveToCoords`);
        }

        coords[1] = 7 - (parseInt(move[1]) - 1);
        coords[2] = legalLetters.indexOf(move[0]);
        console.log(coords);
        return coords;
    }

    let black = {
        " ": "♟",
        "N": "♞",
        "R": "♜",
        "B": "♝",
        "Q": "♛",
        "K": "♚"
    };
    let white = {
        " ": "♙",
        "N": "♘",
        "R": "♖",
        "B": "♗",
        "Q": "♕",
        "K": "♔"
    };

    // TODO: show opening on the board
    const T = [
        [black["R"], black["N"], black["B"], black["Q"], black["K"], black["B"], black["N"], black["R"]],
        [black[" "], black[" "], black[" "], black[" "], black[" "], black[" "], black[" "], black[" "]],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [white[" "], white[" "], white[" "], white[" "], white[" "], white[" "], white[" "], white[" "]],
        [white["R"], white["N"], white["B"], white["Q"], white["K"], white["B"], white["N"], white["R"]],
    ];
    
    /** 
    // TODO: Place the figures according to the moves
    let isBblacksTurn = false;
    for (let i = 0; i <= moves.length - 1; i++) {
        let move = moves[i].trim();

        const [piece, x, y, fromX] = moveToCoords(move);
        
        // TODO: remove previous piece from the board
        if (piece == " ") {
            if (fromX != -1) {
                // TODO: remove from source column
            }
                     
        }

        T[x][y] = isBblacksTurn ? black[piece] : white[piece];
        isBblacksTurn = !isBblacksTurn;
    }
    */

    return (<table className="chess-board">
        <tbody>
            <tr>
                <th></th>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
                <th>f</th>
                <th>g</th>
                <th>h</th>
            </tr>
            <tr>
                <th>8</th>
                <td className="light">{T[0][0]}</td>
                <td className="dark">{T[0][1]}</td>
                <td className="light">{T[0][2]}</td>
                <td className="dark">{T[0][3]}</td>
                <td className="light">{T[0][4]}</td>
                <td className="dark">{T[0][5]}</td>
                <td className="light">{T[0][6]}</td>
                <td className="dark">{T[0][7]}</td>
            </tr>
            <tr>
                <th>7</th>
                <td className="dark">{T[1][0]}</td>
                <td className="light">{T[1][1]}</td>
                <td className="dark">{T[1][2]}</td>
                <td className="light">{T[1][3]}</td>
                <td className="dark">{T[1][4]}</td>
                <td className="light">{T[1][5]}</td>
                <td className="dark">{T[1][6]}</td>
                <td className="light">{T[1][7]}</td>
            </tr>
            <tr>
                <th>6</th>
                <td className="light">{T[2][0]}</td>
                <td className="dark">{T[2][1]}</td>
                <td className="light">{T[2][2]}</td>
                <td className="dark">{T[2][3]}</td>
                <td className="light">{T[2][4]}</td>
                <td className="dark">{T[2][5]}</td>
                <td className="light">{T[2][6]}</td>
                <td className="dark">{T[2][7]}</td>
            </tr>
            <tr>
                <th>5</th>
                <td className="dark">{T[3][0]}</td>
                <td className="light">{T[3][1]}</td>
                <td className="dark">{T[3][2]}</td>
                <td className="light">{T[3][3]}</td>
                <td className="dark">{T[3][4]}</td>
                <td className="light">{T[3][5]}</td>
                <td className="dark">{T[3][6]}</td>
                <td className="light">{T[3][7]}</td>
            </tr>
            <tr>
                <th>4</th>
                <td className="light">{T[4][0]}</td>
                <td className="dark">{T[4][1]}</td>
                <td className="light">{T[4][2]}</td>
                <td className="dark">{T[4][3]}</td>
                <td className="light">{T[4][4]}</td>
                <td className="dark">{T[4][5]}</td>
                <td className="light">{T[4][6]}</td>
                <td className="dark">{T[4][7]}</td>
            </tr>
            <tr>
                <th>3</th>
                <td className="dark">{T[5][0]}</td>
                <td className="light">{T[5][1]}</td>
                <td className="dark">{T[5][2]}</td>
                <td className="light">{T[5][3]}</td>
                <td className="dark">{T[5][4]}</td>
                <td className="light">{T[5][5]}</td>
                <td className="dark">{T[5][6]}</td>
                <td className="light">{T[5][7]}</td>
            </tr>
            <tr>
                <th>2</th>
                <td className="light">{T[6][0]}</td>
                <td className="dark">{T[6][1]}</td>
                <td className="light">{T[6][2]}</td>
                <td className="dark">{T[6][3]}</td>
                <td className="light">{T[6][4]}</td>
                <td className="dark">{T[6][5]}</td>
                <td className="light">{T[6][6]}</td>
                <td className="dark">{T[6][7]}</td>
            </tr>
            <tr>
                <th>1</th>
                <td className="dark">{T[7][0]}</td>
                <td className="light">{T[7][1]}</td>
                <td className="dark">{T[7][2]}</td>
                <td className="light">{T[7][3]}</td>
                <td className="dark">{T[7][4]}</td>
                <td className="light">{T[7][5]}</td>
                <td className="dark">{T[7][6]}</td>
                <td className="light">{T[7][7]}</td>
            </tr>
        </tbody>
    </table>);
}
