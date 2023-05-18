import React from 'react'
import { useEffect, useState } from "react";
import { onSnapshot, collection, setDoc, doc, getDocs, getDoc, writeBatch } from "@firebase/firestore";
import db from "../firebase";
import clearCart from "./ProductCollection"

export const Cart = () => {

  // Fetching data from cart collection
  const [cart, setCart] = useState([]);
  useEffect(() => onSnapshot(collection(db, "cart"), (snapshot) =>
          setCart(snapshot.docs.map((doc) => doc.data()))
      ),[]
  );
  
  // Calculate total cost
  let total_cost = 0;
  cart.map((item) => {
    total_cost += Number(item.cost);
  });

  const clearCart = async () => {
      const cartCollectionRef = collection(db, "cart");
    
      try {
        const querySnapshot = await getDocs(cartCollectionRef);
        const batch = writeBatch(db);
    
        querySnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });
    
        await batch.commit();
        console.log("Cart cleared successfully!");
      } catch (error) {
        console.error("Error clearing cart: ", error);
      }
  };

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
            {/* {total_price > 0} ? (<a type="button" href="/Cart/Checkout" className="btn btn-primary">Checkout</a>) : {null} */}
            <a type="button" href="/Cart/Checkout" className="btn btn-primary">Checkout</a>
          </div>
          <button className="btn btn-danger" onClick={clearCart}>Empty Cart</button>
        </div>
      </div>
    );
}