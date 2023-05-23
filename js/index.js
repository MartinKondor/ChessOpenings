
const MainComponent = () => {
    return (<div className="container">
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
    </div>);
};

ReactDOM.render(
    <MainComponent />,
    document.getElementById("root")
);
