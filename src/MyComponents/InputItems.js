import React, { useState } from "react";

export const InputItems = ({addPurchase}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [place, setPlace] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!name || !price || !place) {
            alert("The form is not completed")
        }
        else {
            addPurchase(name, price, place);
            setName("");
            setPrice("");
            setPlace("");
        }
    }

    return (
        <div className="input-items">
            <h4>Add Shop's item</h4>
            <form onSubmit={submit} >
                <div>
                    <lable htmlFor="name" className="form-desc">Название товара</lable>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input"/>
                </div>
                <div>
                    <lable htmlFor="name" className="form-desc">Цена товара</lable>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input"/>
                </div>
                <div>
                    <lable htmlFor="name" className="form-desc">Расположение товара</lable>
                    <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} className="form-input"/>
                </div>
                <div>
                    <button type="submit" className="form-button">Добавить придмет</button>
                </div>
            </form>
        </div>
    )
}