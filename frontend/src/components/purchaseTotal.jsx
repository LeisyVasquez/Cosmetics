import React, { useEffect, useState } from 'react';
const urlBase = "http://localhost:5156/api";


const PurchaseTotal = () => {
    useEffect(
        () => {
            getOrderData();
        }, []
    );

    const [orderData, setOrderData] = useState([])

    const getOrderData = async () => {
        await fetch(`${urlBase}/getOrder`, { method: 'GET', mode: 'cors' })
            .then(res => {
                return res.json();
            }).then(res => {
                setOrderData(res.data)
            })
    }

    return (
        <div className="purchaseTotal">
        <div className="container w-50 col">
            <h1 className="text mt-1">Total Compras</h1>
            <table className="table table-bordered mt-5 table-sm ">
                <thead className="text">
                    <tr>
                        <th scope="col">Número de orden</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Total Iva</th>
                        <th scope="col">Total compra</th>
                    </tr>

                </thead>
                <tbody className="text">
                    {
                        orderData.map((item) =>
                            <tr>
                                <th>{item.numeroOrden}</th>
                                <th>$ {item.subtotal}</th>
                                <th>$ {item.totalIva}</th>
                                <th>$ {item.totalCompra}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
        </div>
    )
}

export default PurchaseTotal;