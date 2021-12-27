//components import
import { Navbar } from "./components";

//pages import
import { Home, Characters, Episodes, Locations } from "./pages";

//library import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {

    return (
        <div className="App">
            <div id="modal__root"></div>
            <Router disableScrollToTop={true}>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/characters" component={Characters} />

                    <Route exact path="/locations" component={Locations} />

                    <Route exact path="/episodes" component={Episodes} />
                </Switch>
            </Router>
        </div>
    );
}
