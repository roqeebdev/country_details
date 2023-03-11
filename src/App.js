import NavBar from "./NavBar";
import PageLayout from "./Pagelayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryInfo from "./CountryInfo";

function App() {
  return (
    <Router>
      <div className="App h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Pagelayout/>} />
          <Route path="/country/:id" element={<CountryInfo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
