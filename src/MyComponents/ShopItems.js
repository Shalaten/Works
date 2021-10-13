import React from "react";
import {Item} from "./Item";

export const ShopItems = (props) => {
    return (
        <div className="all-items">
            {props.purchases.length===0 ? "No ShopItems" :
                props.purchases.map((item)=>{
                    return (<Item item={item} addBusketItem={props.addBusketItem}/>)
                })
            }
        </div>
    )
}