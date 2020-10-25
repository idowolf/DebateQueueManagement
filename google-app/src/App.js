import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import MainComponent from "./MainComponent";

class App extends Component {
    render() {
        console.log("IDO hi")
        return (
            <Router>
                <Switch>
                    <Route path='/line/:line/:admin?' render={(matchProps) =>
                        <MainComponent
                            {...matchProps}
                            {...this.props}
                        />
                    }/>
                </Switch>
            </Router>
        );
    }
}

export default App;
