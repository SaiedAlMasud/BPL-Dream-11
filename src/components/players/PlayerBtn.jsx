import React from "react";
const AvailablePlayers = () => {
    return (
        <div className="flex justify-between mt-3 mb-6 items-center">
            <h1 className="text-3xl font-bold">Available Players</h1>
            <div>
                <button className="bg-[#E7FE29] rounded-l-lg text-lg font-bold px-6 py-3">Available</button>
                <button className="bg-[#E7FE29] rounded-r-lg text-lg font-bold px-6 py-3">Selected</button>
            </div>
        </div>
    );
}
export default AvailablePlayers;