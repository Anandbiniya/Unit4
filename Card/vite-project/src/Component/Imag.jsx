import React from 'react'

function Imag(props) {
   // console.log(props)
  return (
    <div >
        <h2> {props.name}</h2>
        <img src={props.img} alt="" />
        <h3></h3>
    </div>
  )
}

export default Imag
