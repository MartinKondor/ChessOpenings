
const SearchComponent = () => {
    // TODO: Dropdown menu to choose from

    return (<div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm">
            <input className="form-control" placeholder="Search for an opening by name or ECO..." />
        </div>
        <div className="col-sm-1">
            <button className="btn btn-primary" title="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className="col-sm-3"></div>
    </div>);
};  // / SearchComponent

const PositionComponent = ({moves, openingsName}) => {

    function formatMoves(movesList) {
        let rows = [];
        let niceIndex = 1;

        for (let i = 0; i <= movesList.length - 1; i+=2) {
            let row = `${niceIndex}. ${movesList[i]}`;

            if (movesList.length > i+1) {
                row += " " + movesList[i + 1];
            }

            rows.push(<span>{row}<br /></span>);
            niceIndex++;
        }

        return (<div>
            {rows}
        </div>);
    }

    return (<div className="text-center">
        <h2>
            <strong>{openingsName}</strong>:
        </h2>

        {/* 
        <div className="row">
            <div className="col-sm">
                <ChessBoardComponent
                    moves={moves}
                /> 
            </div>
            <div className="col-sm">
                <p>{moves}</p>
            </div>
        </div>
        */}

        {formatMoves(getMovesAsArray(moves))}

    </div>);
};  // / PositionComponent

const ContentComponent = () => {
    // TODO: Dont make a position component until a search was made
    let hasResult = false;

    return (<main>
        <hr />
        <SearchComponent />
        <div className="mt-4"></div>

        {
            hasResult ? null :
            <PositionComponent
                moves="1. e4 d5 2. Nf3 Nc6 3. Bb5"
                openingsName="Ruy Lopez"
            />
        }
        <div className="mb-4"></div>
    </main>);
};  // / ContentComponent
