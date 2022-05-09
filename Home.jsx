import React from 'react'
import Pro from "../db.json"

const HOme = () => {
  return (
  <div className='imgdata'>
    {Pro.map((e)=>{
      return(
        <div >
          <div>
          <img src={e.img} alt="" />
          </div>
        </div>
      )
    })}
  </div>
   
  )
}

export default HOme