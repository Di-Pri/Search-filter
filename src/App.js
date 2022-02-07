import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search" />
      {JSONDATA.map((elem, key) => {
        return (
          <div className="user" key={key}>
            {elem.first_name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
