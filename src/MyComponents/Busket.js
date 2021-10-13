import React from 'react'
import Shopbusket from "./Images/premium-icon-add-cart-4153710.png";

export const Busket = ({setBusketActive}) => {
    return (
            <button className="busket-button" onClick={() => setBusketActive(true)}>
                <img src={Shopbusket}/>
            </button>
    )
}