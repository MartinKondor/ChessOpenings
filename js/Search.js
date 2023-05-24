
const SearchComponent = ({dataset, setOpeningName}) => {
    const [searchPhrase, setSearchPhrase] = React.useState("");
    const [options, setOptions] = React.useState([]);
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
    const [isBrowseOpen, setIsBrowseOpen] = React.useState(false);

    function onTyping(e) {
        setIsBrowseOpen(false);
        setSearchPhrase(e.target.value);
        let similarPhrases = dataset.searchOpening(searchPhrase);
        setOptions(similarPhrases);
    }

    function selectOpeningOption(e, option) {
        e.preventDefault();
        setOptions([]);
        setSearchPhrase(option);
        setOpeningName(option);
    }

    return (<div>
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm">
                <div
                    className="rbt"
                    tabIndex="-1"
                    style={{
                        outline: "currentcolor",
                        position: "relative"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flex: "1 1 0%",
                            height: "100%",
                            position: "relative"
                        }}>
                        <input
                            className="rbt-input-main form-control rbt-input  focus"
                            placeholder="Search for an opening by name..."
                            value={searchPhrase}
                            onInput={onTyping}
                            onFocus={() => setIsOptionsVisible(true)}
                            onBlur={() => setIsOptionsVisible(false)}
                            autoComplete="off"
                            type="text"
                            aria-autocomplete="both"
                            aria-expanded={true}
                            aria-haspopup="listbox"
                            role="combobox"/>
                    </div>

                    {/* Autocomplete */}
                    <div
                        aria-label="menu-options"
                        className={"rbt-menu dropdown-menu " + ((isOptionsVisible && searchPhrase.length!=0) ? "show" : "")}
                        role="listbox"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-start"
                        style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            transform: "translate(0px, 56px)",
                            maxHeight: "300px",
                            overflow: "auto"
                        }}>

                        {
                            options.length == 0 ?
                            <a role="option" className="dropdown-item disabled" href="#">No matches found.</a> :
                            options.map((option, index) => {
                                return (<a
                                    aria-label={option}
                                    aria-selected="false"
                                    href="#"
                                    role="option"
                                    key={index}
                                    className="dropdown-item"
                                    onClick={(e) => selectOpeningOption(e, option)}
                                >
                                    {option}
                                </a>);
                            })
                        }

                    </div>
                </div>
                {/* / Autocomplete */}

            </div>
            
            <div className="col-sm-1">
                <button
                    className="btn btn-primary"
                    title="Browse openings"
                    onClick={(e) => setIsBrowseOpen(!isBrowseOpen)}
                >
                    <i className="fa-solid fa-bars me-2"></i>
                    <span>BROWSE</span>
                </button>
            </div>
            <div className="col-sm-2"></div>
        </div>

        <br />

        <div className="text-center">
            {isBrowseOpen ?
                <OpeningBrowserComponent
                    dataset={dataset}
                    setIsBrowseOpen={setIsBrowseOpen}
                    setOpeningName={setOpeningName}
                />
            : null}
        </div>
    </div>);
};  // / SearchComponent
