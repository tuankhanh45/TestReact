import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var res = null;
        if (routes.length > 0) {
            res = routes.map((route, index) => {
                return(
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                >
                </Route>
                )
               
            })
        }
        return <Switch>{res}</Switch>
    }
}

export default App;
