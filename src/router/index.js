import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import DyLayout from '../components/layout';
import Login from '../pages/login/login';

const IndexRouter = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    {/* <Route path="/" component={Home} /> */}

                    <Route path="/" render={() => 
                        localStorage.getItem("token") ? <DyLayout /> : <Redirect to="/login" />
                    } />

                </Switch>
            </HashRouter>
        </div>
    );
}

export default IndexRouter;
