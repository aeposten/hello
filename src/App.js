import Greeter from "./Greeter";
import NameEntry from "./NameEntry";

function App() {
  let name = "Amy"
  
  return (
    <div>
      <NameEntry />
      <Greeter name={name}/>
    </div>
  );
}

export default App;
