import { useEffect, useState } from "react";
import React from 'react'

import { onSnapshot, collection } from "@firebase/firestore";
import db from "../firebase";


export const ProductCollection = ({entry, condition}) => {
    const [clothes, setClothes] = useState([]);
    
    console.log(clothes);
    useEffect(() => onSnapshot(collection(db, "clothes"),(snapshot) =>
            setClothes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        ),[]
    );

    return (
        <div className="ProductCollection">
            {clothes.map((product) => (
                    product[entry] == condition ? (
                        <div key={product.id} className="card clothing-card">
                        <img src={product.image_url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name} (Price: ${Number(product.cost).toFixed(2)})</h5>
                            <p className="card-text">{product.description}</p>
                            <a className="btn btn-info add-cart-btn">Add to Cart</a>
                        </div>
                        </div>
                    ) : null
                ))}
        </div>
    )
}