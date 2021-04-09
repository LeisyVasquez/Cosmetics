import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar d-inline navbar-light text">
            <div className="container-fluid text">
                <a className="nav-link text fs-5" href="/">Cosmetics</a>
                <a className="nav-link itemNav text fs-5" href="/makePurchase">Realizar compra <span className="sr-only">(current)</span></a>
                 <a className="nav-link text fs-5" href="/purchaseTotal">Total compras <span className="sr-only">(current)</span></a>
            </div>
        </nav>
    )
}

export default Nav;
