import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((elem) => {
        if (searchTerm === "") {
          return elem;
        } else if (elem.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return elem;
        }
        return false;
      }).map((elem, key) => {
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
