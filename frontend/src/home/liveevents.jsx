import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function LiveEvents() {
  const [showAll, setShowAll] = useState(false);

  const lives = [
    { id: 1, title: "Assi", genre: "Drama/Thriller", rating: "8.9/10", votes: "90+ Votes", img: "https://picsum.photos/300/450?1" },
    { id: 2, title: "Shatak", genre: "Drama/Historical", rating: "7.2/10", votes: "35+ Votes", img: "https://picsum.photos/300/450?2" },
    { id: 3, title: "O' Romeo", genre: "Action/Romantic", rating: "9.1/10", votes: "142K Likes", img: "https://picsum.photos/300/450?3" },
    { id: 4, title: "Bara Badhu", genre: "Drama", rating: "9.4/10", votes: "860+ Votes", img: "https://picsum.photos/300/450?4" },
    { id: 5, title: "Do Deewane", genre: "Drama/Romantic", rating: "8.6/10", votes: "150+ Votes", img: "https://picsum.photos/300/450?5" },
    { id: 6, title: "The Silent Storm", genre: "Thriller", rating: "8.2/10", votes: "300+ Votes", img: "https://picsum.photos/300/450?6" },
    { id: 7, title: "Shadow Hunt", genre: "Action", rating: "7.9/10", votes: "210+ Votes", img: "https://picsum.photos/300/450?7" },
    { id: 8, title: "Love Beyond", genre: "Romantic/Drama", rating: "8.8/10", votes: "520+ Votes", img: "https://picsum.photos/300/450?8" },
    { id: 9, title: "Mystic River", genre: "Mystery/Drama", rating: "9.0/10", votes: "900+ Votes", img: "https://picsum.photos/300/450?9" },
    { id: 10, title: "Final Strike", genre: "Action/Thriller", rating: "8.5/10", votes: "670+ Votes", img: "https://picsum.photos/300/450?10" },
  ];

  const visibleLives = showAll ? lives : lives.slice(0, 5);

  return (
    <div className="bg-gray-100 py-8">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Live Shows
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-red-500 font-medium hover:underline text-sm sm:text-base"
          >
            {showAll ? "Show Less" : "See All >"}
          </button>
        </div>

        {/* ===== Desktop / Tablet Grid ===== */}
        <div className="
          hidden sm:grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-6
        ">
          {visibleLives.map((live) => (
            <Card key={live.id} live={live} />
          ))}
        </div>

        {/* ===== Mobile Horizontal Scroll ===== */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {visibleLives.map((live) => (
            <div key={live.id} className="min-w-[70%]">
              <Card live={live} />
            </div>
          ))}
        </div>

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

/* ===== Reusable Card ===== */
function Card({ live }) {
  return (
    <div className="group cursor-pointer">

      <div className="relative rounded-xl overflow-hidden shadow-lg">

        <img
          src={live.img}
          alt={live.title}
          className="
            w-full 
            h-[300px] 
            sm:h-[340px] 
            md:h-[380px] 
            lg:h-[420px] 
            object-cover 
            group-hover:scale-105 
            transition duration-300
          "
        />

        <div className="absolute bottom-0 w-full bg-black text-white flex items-center gap-2 px-3 py-2 text-sm">
          <FaStar className="text-red-500" />
          <span>{live.rating}</span>
          <span className="text-gray-300">{live.votes}</span>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
          {live.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm">
          {live.genre}
        </p>
      </div>

    </div>
  );
}