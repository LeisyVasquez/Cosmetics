import React, {useEffect, useState} from 'react'; 
const urlBase = "http://localhost:5156/api";


const PurchaseTotal = () =>{
    useEffect(
        () => {
            getOrderData();
        }, []
    );

    const [orderData, setOrderData] = useState({})

    const getOrderData = async () => {
        await fetch(`${urlBase}/getOrder`, { method: 'GET', mode: 'cors' })
            .then(res => {
                return res.json()
            }).then(res => {
                setOrderData(res)
            })
    }

    return(
        <div className="container mt-5 w-50 col">
            <h1 className="text mt-1">Total Compras</h1>
              <table className="table table-bordered mt-5 table-sm ">
                        <thead className="text">
                        {/*
                                orderData.map((item) =>
                                <tr>
                                <th scope="col">{item.numeroOrden}</th>
                                <th scope="col">{item.subtotal}l</th>
                                <th scope="col">{item.totalIva}</th>
                                <th scope="col">{item.totalCompra}</th>
                            </tr>
                                )
                        */}
                            
                        </thead>
                        <tbody className="text">
                            <tr>
                                <th scope="row">Articulo 2</th>
                                <td>2</td>
                                <td>$270.000</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">Articulo 3</th>
                                <td>2</td>
                                <td>$560.0000</td>
                                <td>@fat</td>
                            </tr>
                            
                          
                        </tbody>
                    </table>

        </div>
    )
}

export default PurchaseTotal; 