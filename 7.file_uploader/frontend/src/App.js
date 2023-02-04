import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const handleupload = (e) => {
    // e.preventDefault();
    console.log(e.target);
    axios.post("http://localhost:3500/upload");
  };
  return (
    <div className="App">
      <div style={{ marginTop: "100px" }}>
        <form
          action="http://local/upload"
          encType="multipart/form-data"
          method="post"
        >
          <input type="file" id="myFile" name="myFile" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
