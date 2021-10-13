import React from "react";
import {BusketItem} from "./BusketItem";

export const BusketItems = (props) => {
    return (
        <div className={props.busketActive ? "busket-window active" : "busket-window"} onClick={() => props.setBusketActive(false)}>
            <div className="busket-items" onClick={e => e.stopPropagation()}>
                    <h1>Корзина</h1>
                {props.busketItems.length === 0 ? "No ShopItems" :
                    props.busketItems.map((item) => {
                        return (<BusketItem item={item} key={item.sno} onDelete={props.onDelete}/>)
                    })
                }
            </div>

        </div>
    )
}