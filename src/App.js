const { useState, useEffect, useRef, createContext, useMemo, useFetch } = React;
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./Pages/Home/Home.js";
export const LocationContext = createContext(null);

export default function App(){
    const [location, setLocation] = useState("dk");

    const provided = useMemo(() => ({
        value: location,
        setLocation: (location) => setLocation(location)
    }, [location, setLocation]));
    return (<>
        <Router>
            <LocationContext.Provider value={ provided }>
                <Header />
                <div className="grid">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/price" exact>

                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </LocationContext.Provider>
        </Router>
    </>);
}