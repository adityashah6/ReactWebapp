import React from 'react'
import { ProductCollection } from './ProductCollection';
import { FrontPageImg } from './FrontPageImg';

export const Home = () => {

    return (
        <div className='Home'>
            <h1>Sew It Seems 🏠</h1>
            <section id="shop-now" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <h2>Shop with Confidence</h2>
                        <p>Find the perfect outfit for any occasion from our wide range of high-quality clothing. We offer a variety of
                            styles, sizes, and colors to suit your unique taste and preference.</p>
                        </div>
                        <FrontPageImg/>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <h1>Featured Items</h1>
                <ProductCollection entry="featured" condition={true}/>

            </section>
        </div>
    )
}


