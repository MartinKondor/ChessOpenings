
function getMovesAsArray(moves) {
    let movesList = [];

    for (let line of moves.split(".")) {
        for (let parts of line.split(" ")) {
            parts = parts.trim();
            
            if (parts.match(/[a-zA-Z]{1,2}[1-8]{1}/ig)) {
                movesList.push(parts)
            }
        }
    }

    return movesList;
}

const ChessBoardComponent = ({moves}) => {
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
    const table = getMovesAsArray(moves);

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
                <td className="light">♜</td>
                <td className="dark">♞</td>
                <td className="light">♝</td>
                <td className="dark">♛</td>
                <td className="light">♚</td>
                <td className="dark">♝</td>
                <td className="light">♞</td>
                <td className="dark">♜</td>
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
