import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import Catalog from "./MyComponents/Catalog"
import { InputItems } from "./MyComponents/InputItems";
import {ShopItems} from "./MyComponents/ShopItems";
import { BusketButton } from "./MyComponents/BusketButton"
import { BusketItems } from "./MyComponents/BusketItems";
import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  // Get items  ============================
  const dbPurchases = localStorage.getItem("purchases");
  const dbShopItems = dbPurchases === null ? [] : JSON.parse(dbPurchases);
  const dbBusketPurchases = localStorage.getItem("busketpurchases");
  const dbBusketItems = dbBusketPurchases === null ? [] : JSON.parse(dbBusketPurchases);
  const dbBusketTimer = localStorage.getItem("busketbill");
  const dbBusketBill = dbBusketTimer === null ? 0 : JSON.parse(dbBusketTimer);
  //Functions  =======================================================================
  const addPurchase = (name, price, place) => {
    let sno;
    if (purchases.length === 0) {
      sno = 0;
    }  else {
      sno = purchases[purchases.length - 1].sno + 1;
    }
    const myPurchase = {
      sno: sno,
      name: name,
      price: price,
      place: place,
      number: 1
    }
    setPurchases([...purchases, myPurchase]);
  }

  const addBasketItem = (item) => {
    let i=0;
    if(busketItems !== null){
      busketItems.forEach(e => {
        if(e===item) {
          item.number++;
          i++;
          setBusketBill(Number(busketBill)+Number(e.price));
        }});
    }
    if (i == 0)
    {
      setBusketItems([...busketItems, item]);
    }
    localStorage.setItem("busketpurchases", JSON.stringify(busketItems));
  }

  const addBusketNumber = (item) => {
    setBusketItems(busketItems.filter((e) => {
      if (e === item) {
        setBusketBill(Number(busketBill)+Number(item.price));
        return e.number++;
      }
      setBusketBill(Number(busketBill)+Number(item.price));
      return e !== item;
    }));
  }


  const onDelete = (delItem) => {
    setBusketItems(busketItems.filter((e) => {
      if (e === delItem && e.number > 1) {
        setBusketBill(Number(busketBill)-Number(e.price));
        return e.number--;
      }
      return e !== delItem;
    }));
    localStorage.setItem("busketpurchases", JSON.stringify(busketItems));
  }
  //States  ==============================
  const [busketItems, setBusketItems] = useState(dbBusketItems)
  useEffect(() => {
    localStorage.setItem("busketpurchases", JSON.stringify(busketItems));
  }, [busketItems])

  const [purchases, setPurchases] = useState(dbShopItems);
  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases])

  const [busketActive, setBusketActive] = useState(false)

  const [busketBill, setBusketBill] = useState(dbBusketBill);
  useEffect(() => {
    localStorage.setItem("busketbill", JSON.stringify(busketBill));
  }, [busketBill])

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
                      <BusketButton setBusketActive={setBusketActive}/>
                      <BusketItems busketItems={busketItems} onDelete={onDelete} busketActive={busketActive} setBusketActive={setBusketActive} addBusketNumber={addBusketNumber} busketBill={busketBill}/>
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
