import React from 'react'
import Card from '../crads/Card';
import Footer from '../Footer/Footer';
import Accessoriesproduct from '../Accessoriesproduct';

 const Accessories = () => {

  return ( 
      <>
         
         {Accessoriesproduct.map(function ncard(val){
            return(
              <Card 
                img= {val.img}
                name ={val.name}
                new_price = {val.new_price}
                old_price ={val.old_price}
              />
            )
         }
         )}

      </>
  )
}
export default Accessories;