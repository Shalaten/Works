import React, {useEffect, useState} from "react";
import Clothes from "./Images/clothes.jpg";
import Plus from "./Images/plus.png";

export const BusketItem = ({item, onDelete, addBusketNumber}) => {


    return (
        <div className="busket-item">
            <div className="busket-item-img">
                <img src={Clothes}/>
            </div>
            <div className="busket-item-inf">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.place}</p>
            </div>
            <div className="busket-item-logic">
                <button className="busket-item-logic-button-delete" onClick={() => {onDelete(item)}}>Убрать</button>
                <div>
                    <button onClick={() => {addBusketNumber(item)}}><img src={Plus}/></button>
                    <p>{item.number}</p>
                </div>
            </div>
        </div>
    )
}