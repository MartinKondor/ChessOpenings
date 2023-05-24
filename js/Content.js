// TODO: Openings should be viewable on the board, where I can step forward and backwards too

const ContentComponent = () => {
    const [openingName, setOpeningName] = React.useState("");
    const dataset = new Dataset();

    const testOpening = "Catalan Opening Open Defense";
    return (<main><PositionComponent
        dataset={dataset}
        openingObject={
            {
                [testOpening]: dataset.getOpeningByName(testOpening)
            }
        }
    /></main>);

    return (<main>
        <hr />
        <SearchComponent
            dataset={dataset}
            setOpeningName={setOpeningName}
        />
        <div className="mt-4"></div>

        {
            openingName.length != 0  ?
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
