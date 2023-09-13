import "./App.css";
import Person from "./components/Person";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Demo number ="1"/>
      <Person  />
      <Demo number ="2"/>
      <Person  />
      <Demo number ="3"/>
    </div>
  );
}

export default App;
