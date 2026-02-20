import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";

import SubNavbar from "./components/SubNavbar";
import Movies from "./pages/Movies";
import Stream from "./pages/Stream";
import Events from "./pages/Events";
import Plays from "./pages/Plays";
import Sports from "./pages/Sports";
import Activities from "./pages/Activities";




function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navbar />
      <SubNavbar />



      
      <div className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies" element={<Movies />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/userregister" element={<UserRegister />} />

          {/* Categories */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/events" element={<Events />} />
          <Route path="/plays" element={<Plays />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className="bg-black text-white">
        <Footer />
      </div>

    </div>
  );
}

export default App;