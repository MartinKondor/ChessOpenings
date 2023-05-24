
const App = () => {
    return (<div className="container">
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
    </div>);
};

/*
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
