import { useEffect, useRef } from "react";

export default function AutoSlideSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideSpeed = 1;

    const autoSlide = () => {
      if (!slider) return;

      scrollAmount += slideSpeed;
      slider.scrollLeft += slideSpeed;

      if (scrollAmount >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(autoSlide, 20);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { id: 1, img: "https://picsum.photos/1200/600?1" },
    { id: 2, img: "https://picsum.photos/1200/600?2" },
    { id: 3, img: "https://picsum.photos/1200/600?3" },
    { id: 4, img: "https://picsum.photos/1200/600?4" },
    { id: 5, img: "https://picsum.photos/1200/600?5" },
  ];

  const loopCards = [...cards, ...cards];

  return (
    <div className="w-full bg-white flex items-center justify-center">
      <div className="w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {loopCards.map((card, index) => (
            <div
              key={index}
              className="
              min-w-[90vw] 
              sm:min-w-[80vw] 
              md:min-w-[70vw] 
              lg:min-w-[60vw] 
              xl:min-w-[50vw]
              h-[200px] 
              sm:h-[250px] 
              md:h-[300px] 
              lg:h-[350px]
              shadow-lg rounded-xl overflow-hidden
              flex-shrink-0 hover:scale-105 transition
              "
            >
              <img
                src={card.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

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