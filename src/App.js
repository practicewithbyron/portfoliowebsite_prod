import { Component } from "react";
import { Route } from "react-router-dom";
import { Introduction } from "./Pages/introduction";
import { About } from "./Pages/about.js";
import { Experience } from "./Pages/experience.js";
import { Work } from "./Pages/work.js";
import { Contact } from "./Pages/contact.js";

import NavigationBar from "./Components/NavigationBar/navigationbar.jsx";
import Footer from './Components/Footer/footer';

import "./App.css";


class App extends Component {
    render()
    {
        return (
            <div className="page">
                <NavigationBar/>
                <div id="content">
                    <Route exact path="/" component={Introduction}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/experience" component={Experience}/>
                    <Route exact path="/work" component={Work}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;