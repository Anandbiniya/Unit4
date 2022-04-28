import "./App.css";
import { Button } from "./components/button";
function App() {
  return (
    <div className="App">
      <Button color="white" backgroundcolor="blue" border="0px">
        Primary Button
      </Button>
      <Button
        color="black"
        backgroundcolor="#ffffff"
        border="  #DDDDDD 1px solid "
      >
        Default Button
      </Button>
      <Button
        color="black"
        backgroundcolor="white"
        border=" #DDDDDD 1px dashed "
      >
        Dashed Button
      </Button>
      <Button color="black" backgroundcolor="white" border="none">
        Text Button
      </Button>
      <Button color="blue" backgroundcolor="white" border="none"> 
        Link Button
      </Button>
    </div>
  );
}

export default App;
