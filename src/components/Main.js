import React, { useState }  from "react";
import Product from "./Product";

export default function Main(probs){

    const {products, add}=probs;
    
    return <main className="block col-2">
        
        <h2>
            product
        </h2>
        <div className="pro">
            {products.map((product) => (
                <Product key={product.id} product={product} add={add}></Product>
            ))}
        </div>
    </main>
}