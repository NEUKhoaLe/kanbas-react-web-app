import { Link, Route, Routes } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Assignment3 from "./a3";

function Labs() {
  return (
    <div className="container-fluid">
      <Nav />
      <h1>Labs</h1>
      <Link to="/Labs/a3">Assignment 3</Link> |
      <Link to="/Labs/a4">Assignment 4</Link>
      <Routes>
        <Route path="/a3/*" element={<Assignment3 />} />
        {/*<Route path="/a4" element={<Assignment4 />} />*/}
      </Routes>
    </div>
  );
}

export default Labs;
