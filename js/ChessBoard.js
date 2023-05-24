
const ChessBoardComponent = ({movesList}) => {
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
    let T = [
        black["R"], black["N"], black["B"], black["Q"], black["K"], black["B"], black["N"], black["R"],
        black[" "], black[" "], black[" "], black[" "], black[" "], black[" "], black[" "], black[" "],
        " ", " ", " ", " ", " ", " ", " ", " ",
        " ", " ", " ", " ", " ", " ", " ", " ",
        " ", " ", " ", " ", " ", " ", " ", " ",
        " ", " ", " ", " ", " ", " ", " ", " ",
        " ", " ", " ", " ", " ", " ", " ", " ",
        " ", " ", " ", " ", " ", " ", " ", " ",
    ];
    console.log(T);

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
                <td className="dark">♟</td>
                <td className="light">♟</td>
                <td className="dark">♟</td>
                <td className="light">♟</td>
                <td className="dark">♟</td>
                <td className="light">♟</td>
                <td className="dark">♟</td>
                <td className="light">♟</td>
            </tr>
            <tr>
                <th>6</th>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
            </tr>
            <tr>
                <th>5</th>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
            </tr>
            <tr>
                <th>4</th>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
            </tr>
            <tr>
                <th>3</th>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
                <td className="dark"></td>
                <td className="light"></td>
            </tr>
            <tr>
                <th>2</th>
                <td className="light">♙</td>
                <td className="dark">♙</td>
                <td className="light">♙</td>
                <td className="dark">♙</td>
                <td className="light">♙</td>
                <td className="dark">♙</td>
                <td className="light">♙</td>
                <td className="dark">♙</td>
            </tr>
            <tr>
                <th>1</th>
                <td className="dark">♖</td>
                <td className="light">♘</td>
                <td className="dark">♗</td>
                <td className="light">♕</td>
                <td className="dark">♔</td>
                <td className="light">♗</td>
                <td className="dark">♘</td>
                <td className="light">♖</td>
            </tr>
        </tbody>
    </table>);
}
