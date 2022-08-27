import React  from "react";
export default function Basket(probs){
    const {cartItems,add,remove} =probs;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price*c.qty,0)
    return <aside className=" block col-1">
        <h2>
            cart Items
        </h2>
        <div> 
            {cartItems.length ===0 && <div>Cart Empty</div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id} className='basket'>
                <div className="col-1">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>add(item)} className='btn '>add</button>
                    <button onClick={()=>remove(item)} className='btn'>remove</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x $ {item.price.toFixed(2)}
                </div>
            </div>
            
            
        ))}
        {cartItems.length !==0 && (
            <>
             <hr></hr>
             <div className="col-2"> Item Price</div>
             <div className="col-1 text-right">$ {itemsPrice.toFixed(2)} </div>
            </>
        )}
    </aside>
}