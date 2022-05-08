import logo from './logo.svg';
import './App.css';
import { Nav } from './components/navBar'
import { Button } from './components/button'
import {AuthContext} from './context/AuthContext'
import { useContext } from 'react';
import {Display} from './components/display'
function App() {
  const {Autho,Authotoggle}=useContext(AuthContext)
  return (
    <div className="App">
      <Nav>
      

        <Button onClick={() => {
          Authotoggle()
        }}>{Autho===false?'Logout':'Login'}</Button>
      <div>
      {Autho===false?'':<Display/>}
      </div>
      </Nav>
    </div>
  );
}

export default App;
