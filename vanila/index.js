import { reducer } from "./reducer.js";
import Store from "./store.js";


const store = new Store(reducer, {
  count: 0,
});

let counter = document.getElementById("countervalue");
let inc = document.getElementById("Incrementcounter");
let dec = document.getElementById("decrementcounter");

inc.addEventListener("click", function () {
    store.dispatch({
      type: "INCREMENT",
    });
    
    counter.innerHTML = store.getState().count;
  });
  
  dec.addEventListener("click", function () {
    store.dispatch({
      type: "DECREMENT",
    });
  
    counter.innerHTML = store.getState().count;
  });
  

let mul = document
  .getElementById("multiplecounter")
  .addEventListener("click", function () {
    let valu = document.getElementById("x").value;
    counter.innerHTML = store.getState().count * +valu;
  });
let divs = document
  .getElementById("divisoncounter")
  .addEventListener("click", function () {
    let valu = document.getElementById("x").value;

    counter.innerHTML = store.getState().count / +valu;
  });
let incx = document
  .getElementById("incrementbyx")
  .addEventListener("click", function () {
    store.dispatch({
      type: "INCX",
    });
    // let c=counter.innerHTML;
    var increx = store.getState().count;
    let g = document.getElementById("x").value;
    //  counter.innerHTML=store.getState().count
    counter.innerHTML = +g + increx;
  });
let decx = document.getElementById("decrebyx");
store.dispatch({
  type: "DECX",
});

var increx = store.getState().count;
let g = document.getElementById("x").value;

counter.innerHTML = increx - g;

counter.innerHTML = store.getState().count;

// mul.addEventListener("click",function(){
//     store.dispatch({
//         type:"MULTIPLE"
//     })

//       counter.innerHTML=store.getState().count
//   })
