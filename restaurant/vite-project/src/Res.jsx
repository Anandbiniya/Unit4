import React from 'react'
import Reacors from '/db.json'

function Res() {
  return (
    <div>
        {
            Reacors.map(e=>{
                return(
                    <div className='record'>
                    <div className='dish'>
<h3>{e.name}</h3>
                  <img src={e.imgurl} alt="" />
       <p>{e.price}</p>           
                 <p>{`${e.votes}`}&#9733;</p>
                  </div>
                  
                    </div>
                )
            })
        }
    </div>
  )
}

export default Res