import React from 'react'
import { useContext } from 'react'

const Cart=()=>{
    const value=useContext(cartConsumer);

  return (
    <div className='border'>Cart
        <button>ADD to</button>
    </div>
  )
}

export default Cart