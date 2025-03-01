import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  showArrow?: boolean;
  showDots?: boolean;
  haveTimer?: boolean;
  duration?:number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  showArrow=false,
  showDots=true,
  haveTimer=true,
  duration=3000
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (haveTimer) {
      timer = setInterval(() => {
        setCurrentImgIndex((preIndex) =>
          preIndex === images.length - 1 ? 0 : preIndex + 1
        );
      }, duration);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [haveTimer,duration, images.length]);

  const goToPrevious = () => {
    setCurrentImgIndex((preIndex) =>
      preIndex === 0 ? images.length - 1 : preIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImgIndex((preIndex) =>
      preIndex === images.length - 1 ? 0 : preIndex + 1
    );
  };
  return (
    <div>
      <div className="flex flex-row   items-center justify-between ">
        {showArrow && (
          <button
            onClick={goToPrevious}
            className="transition-transform duration-200 hover:-translate-x-2 p-2 "
          >
            <ChevronLeft
              size={50}
              className="hover:border hover:border-gray-200 rounded-3xl  "
            />
          </button>
        )}

        <div className="border border-gray-200 rounded-lg p-2 hover:border-gray-400 shadow-sm w-full">
          <img
            src={images[currentImgIndex]}
            alt={`Carousel Image ${currentImgIndex + 1}`}
            className="rounded-lg transition-opacity duration-500 object-cover h-96 w-full hover:opacity-75"
          />
        </div>

        {showArrow && (
          <button
            onClick={goToNext}
            className="transition-transform duration-200 hover:translate-x-2 p-2 "
          >
            <ChevronRight
              size={50}
              className="hover:border hover:border-gray-200   rounded-3xl  "
            />
          </button>
        )}
      </div>
      {showDots && (
        <div className="flex justify-center gap-2 m-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-200  ${
                index === currentImgIndex ? "bg-slate-500 w-4" : "bg-slate-200"
              }`}
              onClick={() => setCurrentImgIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
