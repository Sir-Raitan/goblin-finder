export function LandingPage() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="space-y-4 rounded-lg bg-lime-700 p-10">
        <div className="flex items-center gap-2">
          <img className="h-24 w-24" src="icons/brand.png" />
          <span className="font-logo text-2xl text-amber-100">
            Goblin Finder
          </span>
        </div>
        <div className="flex flex-col items-stretch gap-2">
          <button className="rounded-xl bg-lime-500 px-4 py-2 hover:bg-lime-400 active:bg-lime-600">
            Browse goblins
          </button>
          <button className="rounded-xl bg-lime-500 px-4 py-2 hover:bg-lime-400 active:bg-lime-600">
            Find nearest goblin
          </button>
        </div>
      </div>
    </div>
  );
}
