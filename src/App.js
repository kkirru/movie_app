import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About"
import Detail from "./routes/Detail"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"

function App() {
    return (
        <HashRouter>
            <Navigation>
            </Navigation>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/movie-detail" component={Detail}></Route>
        </HashRouter>)
}

export default App;