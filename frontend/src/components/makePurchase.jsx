import React from 'react';
import '../styles.css';

const MakePurchase = () => {
    return (
        <>
            <div className="row">
                <div className="container mt-5 mr-5 col">
                    <div className="form">
                        <h1 className="text mt-1">Orden</h1>
                        <h5 className="text mt-5 mx-auto mb-2">Número de la orden: 205</h5>
                        <h5 className="text mx-auto my-3">Fecha: 10/07/2020</h5>
                        <input type="text mx-auto my-3" className="form-control w-75 mx-auto my-2" placeholder="Nombre del cliente" />
                        <select className="form-select w-75 mx-auto my-3" aria-label="Default select example">
                            <option selected>Seleccione el artículo</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <input type="number" className="form-control w-75 mx-auto my-3" placeholder="Cantidad del artículo" />
                        <h5 className="text mx-auto my-3">Subtotal: $2.000</h5>
                    </div>
                    <button type="button" className="btn btn-outline-light">Agregar</button>
                </div>


                <div className="container mt-5 ml-5 col">
                    <h1 className="text mt-1">Detalles de la orden</h1>
                    <table className="table table-bordered mt-5 table-sm">
                        <thead className="textTable">
                            <tr>
                                <th scope="col">Articulo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Borrar ítem</th>
                            </tr>
                        </thead>
                        <tbody className="textTable">
                            <tr>
                                <th scope="row">Articulo 1</th>
                                <td>1</td>
                                <td>$64.0000</td>
                                <td>@mdo</td>
                            </tr>
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
                            <tr>
                                <th scope="row">Subtotal</th>
                                <td colspan="3">$894.000</td>
                            </tr>
                            <tr>
                                <th scope="row">Total IVA</th>
                                <td colspan="3">$168.860</td>
                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <td colspan="3">1.063.860</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <button type="button" className="btn btn-outline-light w-25 finishButton mt-5 ">Finalizar</button>

        </>
    );
}

export default MakePurchase;
