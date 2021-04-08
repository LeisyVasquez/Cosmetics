import React, { useState, useEffect } from 'react'; import '../styles.css';
import swal from "sweetalert2";
const urlBase = "http://localhost:5156/api";

const MakePurchase = () => {

    useEffect(
        () => {
            generateDate();
            generateOrderNumber();
            getInfoProducts();
        }, []
    );

    const [date, setDate] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [priceArticle, setPriceArticle] = useState();
    const [quantityExistence, setQuantityExistence] = useState();
    const [infoProducts, setInfoProducts] = useState([]);
    const [itemOrder, setItemOrder] = useState([]);
    let descriptionProducts = [];
    
    

    const generateDate = () => {
        var dateJS = new Date();
        dateJS = dateJS.getFullYear() + '/' + (dateJS.getMonth() + 1) + '/' + dateJS.getDate() + ' ' + dateJS.getHours() + ':' + dateJS.getMinutes();
        return setDate(dateJS);
    }

    const generateOrderNumber = () => {
        const numberRandom = Math.floor(Math.random() * (99999 - 1 + 1)) + 1;
        return setOrderNumber(numberRandom)
    }

    const getInfoProducts = async () => {
        await fetch(`${urlBase}/getJSON`, { method: 'GET', mode: 'cors' })
            .then(res => {
                return res.json()
            }).then(res => {
                setInfoProducts(res)
            })
    }

    const getDescriptionProducts = () => {
        for (let i = 0; i < Object.values(infoProducts).length; i++) {
            descriptionProducts.push(infoProducts[i]['descripcion']);
        }
        console.log(Object.keys(infoProducts).length)
    }

    const calculateSubtotal = (e) => {
        if (document.querySelector('#article').value !== 'Seleccione el artículo') setSubtotal(e.target.value * priceArticle);
        else {
            swal.fire('Error', 'Debe seleccionar primero el nombre del producto', 'error')
                .then((result) => {
                    if (result.isConfirmed) document.querySelector('#quantity').value = "";
                })
        }
    }

    const changeArticle = (e) => {
        for (let i = 0; i < Object.values(infoProducts).length; i++) {
            if (infoProducts[i]['descripcion'] === e.target.value) {
                setPriceArticle(infoProducts[i]['precio'])
                setQuantityExistence(infoProducts[i]['existencia'])
            }
        }
    }

    const addProduct = (e) => {
        let quantityValue = document.querySelector('#quantity').value;
        let nameValue = document.querySelector('#name').value;

        //Validar nombre
        if (nameValue == "") {
            swal.fire('Error', 'El dato digitado en el campo nombre no es valido.', 'error')
                .then((result) => {
                    if (result.isConfirmed) {
                        nameValue = "";
                        setSubtotal(0);
                    }
                })
        }

        //Validar cantidad
        else if (quantityValue > quantityExistence) {
            swal.fire(
                'Error',
                `Las unidades del producto solicitadas no están disponibles, solo hay ${quantityExistence} unidades existentes`,
                'error'
            ).then((result) => {
                if (result.isConfirmed) {
                    quantityValue = "";
                    setSubtotal(0);
                }
            })
        }
        else if (quantityValue <= 0) {
            swal.fire('Error', 'No puede ingresar cantidades negativas o neutras', 'error')
                .then((result) => {
                    if (result.isConfirmed) {
                        quantityValue = "";
                        setSubtotal(0);
                    }
                })
        }
       else{
           const string = nameValue + ' ' + quantityValue + ' ' + subtotal; 
           const array = string.split(' '); 
           console.log(array) 
           setItemOrder(itemOrder,
            array
          );
       }
    }

    return (
        <>
            <div className="row">
                <div className="container mt-5 mr-5 col">
                    <div className="form">
                        <h1 className="text mt-1">Orden</h1>
                        <h5 className="text mt-5 mx-auto mb-2">Número de la orden: {orderNumber}</h5>
                        <h5 className="text mx-auto my-3">Fecha: {date}</h5>
                        <input type="search" className="form-control w-75 mx-auto my-2" id="name" placeholder="Nombre del cliente" />
                        <select className="form-select w-75 mx-auto my-3" aria-label="Default select example" id="article" onChange={changeArticle}>
                            <option selected>Seleccione el artículo</option>
                            {getDescriptionProducts()}
                            {
                                descriptionProducts.map((description) =>
                                    <option>{description}</option>
                                )
                            }
                        </select>z
                        <input type="number" className="form-control w-75 mx-auto my-3" id="quantity" placeholder="Cantidad del artículo" onChange={calculateSubtotal} />
                        <h5 className="text mx-auto my-3">Subtotal: {subtotal}</h5>
                    </div>
                    <button type="button" className="btn btn-outline-light" onClick={addProduct}>Agregar</button>
                </div>


                <div className="container mt-5 ml-5 col">
                    <h1 className="text mt-1">Detalles de la orden</h1>
                    <table className="table table-bordered mt-5 table-sm ">
                        <thead className="text">
                            <tr>
                                <th scope="col">Articulo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Borrar ítem</th>
                            </tr>
                        </thead>
                        <tbody className="text">
                           
                        {
                                itemOrder.map((item) =>
                                    <tr>
                                        <th scope="row">{item[0]}</th>
                                        <td>{item.quantityValue}</td>
                                        <td>{item.subtotal}</td>
                                        <td><input type="image" src="https://raw.githubusercontent.com/JuanManuel-GAA/equipo7_gaa_ppi2020/master/Recursos%20gu%C3%ADa/cerrar.png" className="iconDelete" /></td>
                                    </tr>
                                )
                            }

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
