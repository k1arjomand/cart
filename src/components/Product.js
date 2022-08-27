import React from 'react'

export default function Product(probs) {
    const {product ,add} = probs;
  return (
    <div className='container-product'>

      <h1>
          {product.name}
      </h1>
      <div className='product'>
        <img className='small' src={product.imgSurce} alt={product.name}></img>
      </div>
      <section className='add-to-cart'>
          <div>{product.price}</div>
          <button className='btn' onClick={()=>add(product)}>Add To cart</button>
        </section>
    </div>
  )
}
