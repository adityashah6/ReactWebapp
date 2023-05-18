import React from 'react'
import { ProductCollection } from './ProductCollection';

export const Shorts = () => {
    return ( 
        <div className="Shorts">
            <h1>Welcome to Shorts 🩳</h1>
            <ProductCollection entry="category" condition="Shorts"/>
        </div>
     );
}
 