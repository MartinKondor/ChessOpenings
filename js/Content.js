// TODO: Make an opening browser, where I can select if I want black or white openings
// TODO: Openings should be viewable on the board, where I can step forward and backwards too

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

            rows.push(<span key={i}>{row}<br /></span>);
            niceIndex++;
        }

        return (<div>
            {rows}
        </div>);
    }

    // TODO: Format the opening to be nice to view
    return (<div className="text-center">
        <h2>
            <strong>{openingName}</strong>:
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

    {openingObject[openingName].map((value, index) => {
        return (<p
            key={index}>
                {dataset.indexToColumn(index)}: {value}
        </p>);
    })}

    </div>);
};  // / PositionComponent

const ContentComponent = () => {
    const [openingName, setOpeningName] = React.useState("");
    const dataset = new Dataset();

    return (<main>
        <hr />
        <SearchComponent
            dataset={dataset}
            setOpeningName={setOpeningName}
        />
        <div className="mt-4"></div>

        {
            openingName.length!=0 ?
            <PositionComponent
                dataset={dataset}
                openingObject={
                    {
                        [openingName]: dataset.getOpeningByName(openingName)
                    }
                }
            /> : null
        }
        <div className="mb-4"></div>
    </main>);
};  // / ContentComponent
