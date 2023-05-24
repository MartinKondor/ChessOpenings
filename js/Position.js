
const PositionComponent = ({dataset, openingObject}) => {
    let openingName = Object.keys(openingObject)[0];

    function formatMoves(movesList) {
        let rows = [];
        let niceIndex = 1;

        for (let i = 0; i <= movesList.length - 1; i+=2) {
            let row = `${niceIndex}. ${movesList[i]}`;

            if (movesList.length > i+1) {
                row += " " + movesList[i + 1];
            }

            rows.push(<span key={i}>
                {row}
                <br />
            </span>);
            niceIndex++;
        }

        return (<div style={{fontWeight: "bold"}}>
            {rows}
        </div>);
    }

    function get(openingObject, colName) {
        return openingObject[Object.keys(openingObject)[0]][dataset.columnToIndex(colName)];
    }

    function niceInfo(str) {
        return (<span
            style={{
                fontWeight: "bold"
            }}
            >
            {str}
        </span>);
    }

    function movesToList(movesStr) {
        console.log(`Moves: ${movesStr}`);

        movesStr = movesStr.slice(1, movesStr.length - 1).replaceAll("'", "").replaceAll('"', '');
        let movesList = movesStr.split(" ");
        
        for (let i = 0; i <= movesList.length - 1; i++) {
            if (movesList[i].match(/[0-9]+\./gim)) {
                movesList[i] = movesList[i].split(".")[1].trim();
            }
        }

        return movesList;
    }

    const side = get(openingObject, "side").toUpperCase();
    const preferedRating = get(openingObject, "perf_rating");
    const averageRating = get(openingObject, "avg_player");
    const chanceOfWinning = get(openingObject, "perc_player_win");
    const chanceOfDraw = get(openingObject, "perc_draw");
    const chanceOfLosing = get(openingObject, "pec_opponent_win");
    const movesList = movesToList(get(openingObject, "moves_list"));
    const precentageOfWhiteToWins = get(openingObject, "perc_white_win");
    const precentageOfBlackToWins = get(openingObject, "perc_black_win");

    return (<div>
        <h2 className="text-center">
            <strong>{openingName}</strong>:
        </h2>

        <div className="row">
            <div className="col-sm text-center">
                <ChessBoardComponent
                    moves={movesList}
                /> 
            </div>
            <div className="col-sm text-left">
                <p className="mt-2">
                    Played with {
                        <span
                            style={{
                                backgroundColor: side=="WHITE"?"#fff":"#000",
                                padding: "2px",
                                color: side=="WHITE"?"#000":"#fff",
                                fontWeight: "bold"
                            }}
                        >
                            {side}
                        </span>
                    }
                </p>

                <span>
                    Moves: 
                </span>
                {formatMoves(movesList)}

                <br />

                <p>
                    Chace of <span style={{color: "green"}}>WINNING</span>: {niceInfo(chanceOfWinning)}%
                </p>
                <p>
                    Chace of <span style={{color: "grey"}}>DRAW</span>: {niceInfo(chanceOfDraw)}%
                </p>
                <p>
                    Chace of <span style={{color: "red"}}>LOSING</span>: {niceInfo(chanceOfLosing)}%
                </p>

                <br />

                <p>
                    Precentage of games where <span style={{fontWeight:"bold"}}>WHITE</span> wins: {niceInfo(precentageOfWhiteToWins)}
                </p>
                <p>
                    Precentage of games where <span style={{fontWeight:"bold"}}>BLACK</span> wins: {niceInfo(precentageOfBlackToWins)}
                </p>

                <br />

                <p>
                    Prefered rating: {niceInfo(preferedRating)}
                </p>
                <p>
                    Average rating: {niceInfo(averageRating)}
                </p>
            </div>
        </div>

    </div>);
};  // / PositionComponent
