import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Kurt from "./components/Kurt";
import Ellis from "./components/Ellis";
import Clyde from "./components/Clyde";
import Jan from "./components/Jan";
import Arjay from "./components/Arjay";
import Von from "./components/Von";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Kurt />} />
                <Route path="ellis" element={<Ellis/>} />
                <Route path="clyde" element={<Clyde/>} />
                <Route path="jan" element={<Jan/>} />
                <Route path="arjay" element={<Arjay/>} />
                <Route path="von" element={<Von/>} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
