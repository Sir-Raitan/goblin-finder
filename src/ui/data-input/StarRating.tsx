import { useState } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

type StarRatingProps = {
  onSetRating?: (id: number) => void;
};

type StarProps = {
  id: number;
  activeId: number;
  hoverId: number;
  onSetActive: (id: number) => void;
  setHover: React.Dispatch<React.SetStateAction<number>>;
};
function StarRating({ onSetRating }: StarRatingProps) {
  const [activeId, setActiveId] = useState(0);
  const [hoverId, setHoverId] = useState(-1);

  function handleSetActive(id: number) {
    setActiveId(id);
    onSetRating?.(id);
  }
  return (
    <div
      className="mt-2 flex items-center gap-3 text-3xl text-amber-500"
      onPointerLeave={() => setHoverId(-1)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          id={i + 1}
          activeId={activeId}
          hoverId={hoverId}
          onSetActive={handleSetActive}
          setHover={setHoverId}
          key={i}
        />
      ))}
      <span className="ml-2 text-amber-50">
        {hoverId === -1 ? activeId : hoverId}
      </span>
    </div>
  );
}

function Star({ id, activeId, onSetActive, setHover, hoverId }: StarProps) {
  const isFilled = id <= activeId || (hoverId !== -1 && id <= hoverId);
  return (
    <span onClick={() => onSetActive(id)} onPointerEnter={() => setHover?.(id)}>
      {isFilled ? <HiStar /> : <HiOutlineStar />}
    </span>
  );
}

export default StarRating;
