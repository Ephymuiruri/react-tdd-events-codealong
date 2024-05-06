import { useState } from "react";
function App() {
  const [pepperoniIsChecked,setPepperoniIsChecked]=useState(false)
  function togglePepperoni(e){
    setPepperoniIsChecked(e.target.checked)
  }
  return (
    <div>
      <h1>Select pizza Toppings</h1>
      <input
      type="checkbox"
      id="pepperoni"
      checked={pepperoniIsChecked}
      aria-checked={pepperoniIsChecked}
      onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>cheese</li>
        {pepperoniIsChecked ?<li>Pepperoni</li>:null}
      </ul>
    </div>
  )
}

export default App;
