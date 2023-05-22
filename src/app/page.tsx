export default function Home() {
  return (
    <main className="flex items-center h-screen">
      <div className="grid-cols-4 h-auto flex justify-around items-center w-screen bg-offBlack">
        <div className="flex flex-col justify-center items-center w-72 py-4 rounded-2xl">
          <h1 className="font-semibold mb-4">hours before deploy</h1>
          <ul className="text-left space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-72 py-4 rounded-2xl">
          <h1 className="font-semibold mb-4">minutes before deploy</h1>
          <ul className="space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-72 py-4 rounded-2xl">
          <h1 className="font-semibold mb-4">during deploy</h1>
          <ul className="text-left space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-72 py-4 rounded-2xl">
          <h1 className="font-semibold mb-4">after deploy</h1>
          <ul className="text-left space-y-6 flex flex-col w-full justify-center items-center">
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
            <li className="flex justify-left w-full">
              <input className="bg-offBlack border-white border outline-berryBlue w-full h-full p-5 rounded-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
