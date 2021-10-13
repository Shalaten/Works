import React from 'react';
import Clothes from "./Images/clothes.jpg";

export const Item = ({item, addBusketItem}) => {
    return (
        <div className="item">
            <img src={Clothes}/>
            <div className="item-inf">
                <div>
                    <p>{item.name}</p>
                </div>
                <div>
                    <p>{item.price}</p>
                </div>
                <div>
                    <p>{item.place}</p>
                </div>
            </div>
            <div className="item-button">
                <button onClick={() => {addBusketItem(item)}}>Купить</button>
            </div>
        </div>
    )
}