export default function Board() {
  return (
    <main className="flex items-center h-screen">
      <div className="grid-cols-4 h-full flex justify-around items-center gap-16 px-16 w-screen bg-zinc-950">
        <div className="flex gap-6 flex-col justify-center items-center flex-1 py-4">
          <h1 className="text-xl">
            hours before <span className="text-berryBlue">deploy</span>
          </h1>
          <ul className="text-left space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
          </ul>
        </div>
        <div className="flex gap-6 flex-col justify-center items-center flex-1 py-4">
          <h1 className="text-xl">
            minutes before <span className="text-berryBlue">deploy</span>
          </h1>
          <ul className="space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
          </ul>
        </div>
        <div className="flex gap-6 flex-col justify-center items-center flex-1 py-4">
          <h1 className="text-xl">
            during <span className="text-berryBlue">deploy</span>
          </h1>
          <ul className="text-left space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
          </ul>
        </div>
        <div className="flex gap-6 flex-col justify-center items-center flex-1 py-4">
          <h1 className="text-xl">
            after <span className="text-berryBlue">deploy</span>
          </h1>
          <ul className="text-left space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-zinc-950 border-zinc-700 border w-full h-full p-5" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
