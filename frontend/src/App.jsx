import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import UserRegister  from "./pages/UserRegister";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col">

        
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-4xl font-bold text-green-400 text-center mt-10">
                  Tailwind is FINALLY working ✅
                </h1>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/UserRegister" element={<UserRegister/>}/>
          </Routes>
        </div>
        <div className="bg-black text-white">
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
