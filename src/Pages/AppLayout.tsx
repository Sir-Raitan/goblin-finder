import { HiStar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";

export default function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(60dvh,1fr)_auto]">
      <div className="bg-lime-800 p-3">
        <div className="mx-auto my-0 flex items-center justify-center gap-2">
          <img className="h-24 w-24" src="icons/brand.png" />
          <span className="font-logo text-2xl text-amber-100">
            Goblin Finder
          </span>
        </div>
      </div>
      <div className="mb-[-1rem]">
        <img
          src="/images/map-mockup.png"
          alt="map"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="z-10 flex flex-col items-center rounded-t-lg bg-lime-950 px-6 pb-24 pt-10 text-center text-stone-50">
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
          <div className="mt-2 flex items-center gap-3 text-3xl text-amber-500">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiOutlineStar />
            <HiOutlineStar />
            <span className="ml-2 text-amber-50">3</span>
          </div>
          <button className="mt-4 rounded-xl bg-lime-600 px-4 py-2 text-xl uppercase hover:bg-lime-500 active:bg-lime-700">
            Rate
          </button>
        </div>
      </div>
    </div>
  );
}
