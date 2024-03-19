import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Kurt from "./components/Kurt";
import Arjay from "./components/Arjay";
import Jan from "./components/Jan";
import NoPage from "./components/NoPage";
import Ellis from './components/Ellis';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Kurt />} />
                <Route index element={<Arjay />}/>
                <Route index element={<Ellis />}/>
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
