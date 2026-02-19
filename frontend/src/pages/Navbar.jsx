import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-200 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">

        
        <div className="text-2xl font-bold text-blue-600">
          ShowBookin
        </div>

        
        <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
          <input
            type="text"
            placeholder="Search shows..."
            className="outline-none px-2 text-sm bg-transparent"
          />
          <span className="cursor-pointer text-gray-500">🔍</span>
        </div>

        
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1 shadow-sm">
          <span className="text-gray-500">📍</span>

          <select className="outline-none text-sm bg-transparent cursor-pointer">
            <option>Select Location</option>
            <option>Bhubaneswar</option>
            <option>Cuttack</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>

          <button className="text-xs text-blue-600 font-medium hover:underline">
            Use Current
          </button>
        </div>

        
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Sign In
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
