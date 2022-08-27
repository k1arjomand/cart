import { useState } from 'react';
import Header from  './components/Header'
import Basket from './components/Basket'
import Main from './components/Main'
import  data  from './data';

function App() {
  let {products,persons}= data;
  const [cartItems,setCartItems] = useState([]);
  const [loginn,setLoginn]=useState([]);
  const [loginp,setLoginp]=useState([]);
  let  [pass,setPass]= useState("")
  
  const add = (product) =>{
    const exist = cartItems.find((x) => x.id ===product.id);
    if (exist){
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist , qty:exist.qty +1} : x)
      );
    }else{
      setCartItems([...cartItems,{...product,qty:1}])
    }
  }
  const remove=(product)=>{
    const exist = cartItems.find((x)=> x.id===product.id);
    if (exist.qty===1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id))
    }else{
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist , qty:exist.qty -1} : x)
      );
    }
  }
  const login=() =>{
    
    setPass( persons.find((x) => x.name===loginn && x.password===loginp))
    console.log("hi");
    
  }
  const logout=() =>{
    setPass("");
    setLoginn("");
    setLoginp("");
    console.log("22");
  }
  const signut=(a,b) =>{
    const p ={id:persons.length+1,name:a,password:b,};
    persons.push(p);
    console.log(p);
    console.log(persons);
    setLoginn("");
    setLoginp("");
  }
  return (
    
    <div className="App ">
      {pass?<>
        <Header count ={cartItems.length} logout={logout}></Header>
      <div className='row'>
      
        <Main add={add} products={products}></Main>
        <Basket add={add} remove ={remove} cartItems={cartItems}></Basket>
      </div>
      </>
      :<div className='container-log'>
        <div className='log'>
          <div>Login First</div>
          <div>
            <h1>name :</h1>
            <input type='text' onChange={(e) => setLoginn(e.target.value)} value={loginn}></input>
          </div>
          <div>
            <h1>password:</h1>
            <input type='password' onChange={(e) => setLoginp(e.target.value)} value={loginp}></input>
          </div>
          <div className='login-signup'>
            <button  className='btn' onClick={()=>login()} >Login</button>
            <button className='btn' onClick={()=>signut(loginn,loginp)} >SignUp</button>
          </div>
      </div>
      </div>}
      
    </div>
    
  );
}

export default App;
