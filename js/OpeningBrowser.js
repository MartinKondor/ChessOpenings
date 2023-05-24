// TODO: Filter for colors, sorting for chances

const OpeningBrowserComponent = ({dataset, setIsBrowseOpen, setOpeningName}) => {
    const [sortType, setSortType] = React.useState("name");
    const D = dataset.dataset;

    function onNameClick(e, name) {
        e.preventDefault();
        setIsBrowseOpen(false);
        setOpeningName(name);
    } 

    function sortBy(aName, bName) {
        if (sortType == "name") {
            return aName.localeCompare(bName);
        }

        const a = D[aName][dataset.columnToIndex(sortType)];
        const b = D[bName][dataset.columnToIndex(sortType)]

        if (sortType == "side") {
            return a.localeCompare(b);
        }
        
        return b - a;
    }

    return (<div className="text-center">
        <table className="table">
            <tbody>
                <tr>
                    <th>
                        <a href="#" onClick={(e) => setSortType("name")}>
                            NAME
                        </a>
                    </th>
                    <th>
                        <a href="#" onClick={(e) => setSortType("side")}>
                            SIDE
                        </a>
                    </th>
                    <th>
                        <a href="#" onClick={(e) => setSortType("perc_player_win")}>
                            CHANCE OF WIN
                        </a>
                    </th>
                    <th scope="col">
                        <a href="#" onClick={(e) => setSortType("avg_player")}>
                            AVG. RATING
                        </a>
                    </th>
                    <th scope="col">
                        <a href="#" onClick={(e) => setSortType("move1w")}>
                            FIRST MOVES
                        </a>
                    </th>
                </tr>
                {Object.keys(D)
                    .sort(sortBy)
                    .map((name, index) => {
                    const O = D[name];
                    const side = O[dataset.columnToIndex("side")].toUpperCase();

                    return (<tr key={index}>
                        <td>
                            <a href="#" onClick={(e) => onNameClick(e, name)}>
                                {name}
                            </a>
                        </td>
                        <td
                            style={{
                                color: side=="WHITE"?"#000":"#fff",
                                backgroundColor: side=="WHITE"?"#fff":"#000",
                                boxShadow: "0px 0px 1px black"
                            }}
                        >
                            {side}
                        </td>
                        <td>{O[dataset.columnToIndex("perc_player_win")]}%</td>
                        <td>{O[dataset.columnToIndex("avg_player")]}</td>
                        <td>
                            1. {O[dataset.columnToIndex("move1w")]} {O[dataset.columnToIndex("move1b")]}
                        </td>
                    </tr>);
                })}
            </tbody>
        </table>
    </div>);
};
