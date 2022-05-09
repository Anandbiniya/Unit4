import '../App.css'
import { AuthContext } from '../context/Context'
import {useContext} from 'react'
export const Display = () => {
    
    const {Autho,AuthoToggle}=useContext(AuthContext)
    return (<div>
        <h4>Successfully Logged in</h4>
        <h5>{Autho}</h5>
    </div>)
}