import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestList from "./components/TestList";
import AddTest from "./components/AddTest";
import EditTest from "./components/EditTest";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route exact path="/" element={
                <TestList />
              }/>
              <Route exact path="/add" element={
                <AddTest />
              }/>
              <Route exact path="/update/:id" element={
                <EditTest />
              }/>
              <Route exact path="/update/:id" element={
                <EditTest />
              }/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
