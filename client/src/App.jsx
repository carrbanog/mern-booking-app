import "./App.css";
import { FaAirbnb, FaSearch } from "react-icons/fa";

function App() {
  return (
    <div>
      <header className="flex justify-between p-4">
        <a href="" className="flex items-center gap-1">
          <FaAirbnb className="w-8 h-8" />
          <span className="font-bold text-xl">airbnb</span>
        </a>
        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className="border-l border-gray-300 "></div>
          <div>Any week</div>
          <div className="border-l border-gray-300 "></div>
          <div className="">Add guests</div>
          <button className="bg-[#F5385D] rounded-full text-white p-1">
            <FaSearch className="w-4, h-4" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
