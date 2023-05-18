import React from 'react'
import { useEffect, useState } from "react";
import { onSnapshot, collection, setDoc, doc } from "@firebase/firestore";
import db from "../firebase";

export const Cart = () => {

    // Fetching data from cart collection
    const [cart, setCart] = useState([]);
    useEffect(() => onSnapshot(collection(db, "cart"), (snapshot) =>
            setCart(snapshot.docs.map((doc) => doc.data()))
        ),[]
    );
    
    let total_cost = 0;

    cart.map((item) => {
      console.log(`${item.cost} = ${item.name}`);
      total_cost += Number(item.cost);
    });
    console.log(total_cost);

    return (
        <div className="container mt-4">
          <h2>Shopping Cart</h2>
          <div>
            <ul className="list-group">
              {cart.map((item) => (
                item.id ? (
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span>{item.name}</span>
                    <span>
                      Price: ${item.cost}
                    </span>
                  </div>
                </li>) : null
              ))}
            </ul>
            
            <div className="mt-4">
              <h5>Total Price: ${Number(total_cost).toFixed(2)}</h5>
              <a type="button" href="/Cart/Checkout" className="btn btn-primary">Checkout</a>
            </div>
          </div>
        </div>
      );
}