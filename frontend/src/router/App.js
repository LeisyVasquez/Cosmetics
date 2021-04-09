import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../styles.css';

import Home from '../pages/Home';
import MakePurchase from '../pages/MakePurchase';
import PurchaseTotal from '../pages/PurchaseTotal';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/makePurchase" component={MakePurchase} />
                    <Route path="/purchaseTotal" component={PurchaseTotal} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;