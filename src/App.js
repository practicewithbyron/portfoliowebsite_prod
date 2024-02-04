import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Introduction } from "./Pages/introduction.jsx";
import { About } from "./Pages/about.jsx";
import { Experience } from "./Pages/experience.jsx";
import { Work } from "./Pages/work.jsx";
import { Contact } from "./Pages/contact.jsx";

import NavigationBar from "./Components/NavigationBar/navigationbar.jsx";
import Footer from './Components/Footer/footer';

import "./App.css";


class App extends Component {
    render()
    {
        return (
            <Router>
                <div className="page">
                    <NavigationBar/>
                    <div id="content">
                        <Routes>
                            <Route exact path="/" element={<Introduction/>}/>
                            <Route exact path="/about" element={<About/>}/>
                            <Route exact path="/experience" element={<Experience/>}/>
                            <Route exact path="/work" element={<Work/>}/>
                            <Route exact path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </Router>

        )
    }
}

export default App;