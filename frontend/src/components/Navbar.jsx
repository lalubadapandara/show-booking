import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-200 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">

        {/* Top Row */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold text-xl"
                : "text-gray-800 font-bold text-xl hover:text-red-600 transition"
            }
          >
            ShowBooking
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {/* Search */}
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
              <input
                type="text"
                placeholder="Search shows..."
                className="outline-none px-2 text-sm bg-transparent"
              />
              <span className="cursor-pointer text-gray-500">🔍</span>
            </div>

            {/* Location */}
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

            {/* Sign In */}
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">

            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
              <input
                type="text"
                placeholder="Search shows..."
                className="outline-none px-2 text-sm bg-transparent w-full"
              />
              <span className="cursor-pointer text-gray-500">🔍</span>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <select className="outline-none text-sm bg-gray-100 p-2 rounded">
                <option>Select Location</option>
                <option>Bhubaneswar</option>
                <option>Cuttack</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              <button className="text-sm text-blue-600 font-medium hover:underline text-left">
                Use Current
              </button>
            </div>

            {/* Sign In */}
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Sign In
            </button>

          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;