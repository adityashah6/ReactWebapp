import { useEffect, useState } from "react";
import React from 'react'

import { onSnapshot, collection, setDoc, doc } from "@firebase/firestore";
import db from "../firebase";


export const ProductCollection = ({entry, condition}) => {
    const [clothes, setClothes] = useState([]);
    const [cart, setCart] = useState([]);
    
    // Populating clothes for sale
    useEffect(() => onSnapshot(collection(db, "clothes"),(snapshot) =>
            setClothes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        ),[]
    );

    // Populating users cart
    useEffect(() => onSnapshot(collection(db, "cart"), (snapshot) =>
            setCart(snapshot.docs.map((doc) => doc.data()))
        ),[]
    );

    const addToCart = async (e) => {        
        let res;
        for (const item of clothes) {
            if (item.id === e.target.id) {
                res = item
            }
        }

        const docRef = doc(db, "cart", res.id);
        const payload = {
            category: res.category,
            cost: res.cost,
            description: res.description,
            featured: res.featured,
            id: res.id,
            name: res.name
        };

        await setDoc(docRef, payload);
    }

    return (
        <div className="ProductCollection">
            {clothes.map((product) => (
                    product[entry] === condition ? (
                        <div key={product.id} className="card clothing-card">
                        <img src={product.image_url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name} (Price: ${Number(product.cost).toFixed(2)})</h5>
                            <p className="card-text">{product.description}</p>
                            <button id={product.id} className="btn btn-info add-cart-btn" onClick={addToCart}>Add to Cart</button>
                        </div>
                        </div>
                    ) : null
                ))}
        </div>
    )
}