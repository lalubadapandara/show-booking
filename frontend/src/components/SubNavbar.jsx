import { NavLink } from "react-router-dom";

function SubNavbar() {
  const linkClass =
    "whitespace-nowrap px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition";

  return (
    <div className="bg-gray-100 shadow-sm">

      {/* Scroll Container */}
      <div className="
        flex 
        gap-4 
        sm:gap-6
        px-4 
        py-3
        overflow-x-auto 
        no-scrollbar
        sm:justify-center
      ">

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-red-600 text-white` : linkClass
          }
        >
          Movies
        </NavLink>

        <NavLink
          to="/stream"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-red-600 text-white` : linkClass
          }
        >
          Stream
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-red-600 text-white` : linkClass
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/plays"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-red-600 text-white` : linkClass
          }
        >
          Plays
        </NavLink>

        <NavLink
          to="/sports"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-red-600 text-white` : linkClass
          }
        >
          Sports
        </NavLink>

        <NavLink
          to="/activities"
          className={({ isActive }) =>
            isActive ? `${linkClass} bg-red-600 text-white` : linkClass
          }
        >
          Activities
        </NavLink>

      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default SubNavbar;