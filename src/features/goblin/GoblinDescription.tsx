import Button from "../../ui/Button";
import StarRating from "../../ui/data-input/StarRating";

function GoblinDescription() {
  return (
    <div className="flex flex-col items-center text-center text-stone-50">
      <h2 className="text-3xl">Spingle Bumknicker</h2>
      <h4 className="text-lime-700">Type 2 goblin</h4>
      <div className="mt-3 self-stretch">
        <img
          src="icons/png/002-goblin-1.png"
          alt="image of a type 2 goblin"
          className="mx-auto block w-[25%]"
        />
      </div>
      <div className="mt-10 flex flex-col gap-5 divide-y divide-stone-700">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-lime-700">Occupation</span>
          <span className="text-stone-300">Gutter Cleaner</span>
        </div>
        <div className="flex flex-col gap-1 px-8">
          <span className="mt-3 text-sm text-lime-700">Enjoys</span>
          <span className="text-stone-300">
            Carving strange symbols into trees as warnings
          </span>
        </div>
        <div className="flex flex-col gap-1 px-8">
          <span className="mt-3 text-sm text-lime-700">Avg. Rating</span>
          <span className="text-stone-300">4.25 / 5</span>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <h4 className="text-stone-50">Rate this Goblin: </h4>
        <StarRating />
        <Button className="mt-8">Rate</Button>
      </div>
    </div>
  );
}

export default GoblinDescription;
