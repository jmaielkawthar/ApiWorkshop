import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  const [list, setList] = useState(null);
  // console.log(list)
  const [loading, setLoading] = useState(true);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setList(data))
      .then(setLoading(false))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<UserList list={list} loading={loading} />}
          />
          <Route path="/detail/:id" element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
