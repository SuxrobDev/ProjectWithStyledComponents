import React, {Component} from 'react';
import GlobalStyles from "./globalStyles";
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import {Navbar , Footer} from "./components";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/Sign-Up/SignUp";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
    render() {
        return (
            <Router>
                <GlobalStyles/>
                <ScrollToTop/>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/services" exact component={Services}/>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;