import Greeter from "./Greeter";

function App() {
  let name = "Amy"
  
  return (
    <div>
      <Greeter name={name}/>
    </div>
  );
}

export default App;
