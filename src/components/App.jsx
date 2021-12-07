import React, {useState} from "react";

function App() {

  const[name, setName] = useState("");

  const[newName, setNewName] = useState("");

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }


  function handleClick(event){
    setNewName(name);


    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {newName} </h1>
      <form onSubmit={handleClick}>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" 
        value={name}
      />
      <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
