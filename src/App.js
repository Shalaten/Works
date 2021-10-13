import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import Catalog from "./MyComponents/Catalog"
import { InputItems } from "./MyComponents/InputItems";
import {ShopItems} from "./MyComponents/ShopItems";
import { Busket } from "./MyComponents/Busket"
import { BusketItems } from "./MyComponents/BusketItems";
import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("purchases") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("purchases"));
  }

  let bPurchases;
  if (localStorage.getItem("busketpurchases") === null) {
    bPurchases = [];
  }
  else {
    bPurchases = JSON.parse(localStorage.getItem("busketpurchases"))
  }
  //===============================================================






  const addPurchase = (name, price, place) => {
    let sno;
    if (purchases.length === 0) {
      sno = 0;
    }
    else {
      sno = purchases[purchases.length - 1].sno + 1;
    }
    const myPurchase = {
      sno: sno,
      name: name,
      price: price,
      place: place
    }
    setPurchases([...purchases, myPurchase]);
  }

  const addBasketItem = (item) => {
    let sno;
    if (bItems.length === 0) {
      sno = 0;
    }
    else {
      sno = bItems[bItems.length - 1].sno + 1;
    }
    setBItems([...bItems, item]);
  }

  const onDelete = (delItem) => {
    console.log(" I am ondelete of busketItem", delItem);

    setBItems(bItems.filter((e) => {
      return e !== delItem;
    }));
    console.log("deleted", delItem);
    localStorage.setItem("busketpurchases", JSON.stringify(bItems));
  }






  //===============================================================
  const [bItems, setBItems] = useState(bPurchases)
  useEffect(() => {
    localStorage.setItem("busketpurchases", JSON.stringify(bItems));
  }, [bItems])

  const [purchases, setPurchases] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases])

  const [busketActive, setBusketActive] = useState(true)




  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={true} />
          <div className="section-main">
            <Catalog/>
            <Switch>
              <Route exact path={"/"} render = {() => {
                return (
                    <div className="all-logic">
                      <Busket setBusketActive={setBusketActive}/>
                      <BusketItems busketItems={bItems} onDelete={onDelete} busketActive={busketActive} setBusketActive={setBusketActive} />
                      <div className="section-inf">
                        <InputItems addPurchase={addPurchase} />
                        <ShopItems purchases={purchases} addBusketItem={addBasketItem}/>
                      </div>
                    </div>
                )
              }}>
              </Route>
            </Switch>
          </div>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
