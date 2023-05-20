const { useState, useEffect, useRef } = React;
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import DevContainer from "./components/DevContainer/DevContainer.js";

export default function App(){
    return (<>
        <Router>
            <Header />
            <div className="grid">
                <Switch>
                    <Route path="/" exact>
                        <DevContainer />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
            <Footer />
        </Router>
    </>);
}