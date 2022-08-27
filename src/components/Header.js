import React  from "react";
export default function Header(probs){
    const {count,logout}=probs;
    return (
        <header className="row block center">
            <div>
                <a href="#/">shopping cart</a>
            </div>
            <div>
                <a href="#/cart">
                    Cart {" "}
                    {count? (
                        <button className="btn">{count}</button>
                    ):""}
                     </a>
                    <button className="btn" onClick={()=>logout()}>Logout</button>
            </div>
        </header>
    );
}