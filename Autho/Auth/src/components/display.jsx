import '../App.css'
import { AuthContext } from '../context/AuthContext'
import {useContext} from 'react'
export const Display = () => {
    const {Autho,setAuthoToggle}=useContext(AuthContext)
    return (<div>
        <h4>Successfully Logged in</h4>
        <h5>{Autho}</h5>
    </div>)
}