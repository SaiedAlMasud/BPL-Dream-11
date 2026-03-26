import React, { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";
const Player = ({ playerPromise , setCoin, coin }) => {
    const playerData = use(playerPromise);
    const [selectedType, setSelectedType] = useState("available");
    return (
        <>
            <div className="flex justify-between mt-3 mb-6 items-center">
                {selectedType === "available" ? <h1 className="text-3xl font-bold">Available Players</h1> : 
                <h1 className="text-3xl font-bold">Selected Players</h1>}
                <div>
                    <button 
                    onClick={()=>setSelectedType("available")}
                    className={`rounded-l-lg text-lg font-bold px-6 py-3 cursor-pointer 
                    ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-gray-200"}`}>
                        Available</button>
                    <button 
                    onClick={()=>setSelectedType("selected")}
                    className={`rounded-r-lg text-lg font-bold px-6 py-3 cursor-pointer
                    ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-gray-200"}`}>
                        Selected</button>
                </div>
            </div>
            {selectedType === "available" ? <AvailablePlayers playerData={playerData} setCoin={setCoin} coin={coin}/> : <SelectedPlayers playerData={playerData} setCoin={setCoin} coin={coin} />}
        </>
    );
}
export default Player;