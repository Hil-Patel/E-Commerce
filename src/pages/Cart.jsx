import React, { useContext} from 'react'
import Navbar from '../components/Navbar'
import { userContext } from "../routes/App";
import ItemCard from '../components/ItemCard';

const Cart = () => {
    const [item]=useContext(userContext);

    
    
  return (
    <>
        <Navbar loggedInStatus={true} />
        <div className="home-product p-10">
        {item.length>0?item.map((val)=><ItemCard key={val.id} dataValue={val}/>):null}
        </div>

    </>
  )
}

export default Cart
