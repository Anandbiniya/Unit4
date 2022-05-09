import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
 import { Nav } from './components/nav'
import { Button } from './components/Button'
import {AuthContext} from './context/Context'
import {Display} from './components/Display'
// const Nav = styled.div`
// display: flex;
// margin: 10px;
// border: 1px solid lavender;
// border-radius: 10px;
// background-color: lavender;
// justify-content: center;
// align-items: center;


// `

function App() {
  const {Autho,AuthoToggle}=useContext(AuthContext)
 

  return (
    <div className="App">
      <Nav>
      

        <Button onClick={() => {
          AuthoToggle()
        }}>{Autho===false?'Logout':'Login'}</Button>
      <div>
      {Autho===false?'':<Display/>}
      </div>
      </Nav>
    </div>
  );
}

export default App;
