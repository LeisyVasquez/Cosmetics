import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../styles.css';

import MakePurchase from '../pages/MakePurchase';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/makePurchase" component={MakePurchase} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App; 