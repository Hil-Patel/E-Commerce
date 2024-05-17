
import React, { useContext} from 'react'
import Navbar from '../components/Navbar'
import ItemCard from '../components/ItemCard';
import { likeContext } from '../routes/App';
const Favourite = () => {
    const [like]=useContext(likeContext)
  return (
    <div>
      <Navbar loggedInStatus={true} />
      <div className="home-product p-10">
      {like.length>0?like.map((val)=><div key={val.id} ><ItemCard dataValue={val}/></div>):null}
      </div>
    </div>
  )
}

export default Favourite
