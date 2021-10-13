import React from "react";
import Clothes from "./Images/clothes.jpg";

export const BusketItem = ({item, onDelete}) => {
    return (
        <div className="busket-item">
            <div>
                <img src={Clothes}/>
            </div>
            <div className="busket-item-inf">
                <div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.place}</p>
                </div>
                <div>
                    <button className="busket-item-button" onClick={() => {onDelete(item)}}>Убрать</button>
                </div>
            </div>
        </div>
    )
}