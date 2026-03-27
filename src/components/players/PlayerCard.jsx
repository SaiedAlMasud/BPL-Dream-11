import React from "react";
import { Flag } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
const PlayerCard = ({ player, index, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelected = () => {
        if (coin >= player.playerPrice && !isSelected) {
            setIsSelected(true);
            setCoin(coin - player.playerPrice);
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`${player.playername} has been selected!`, {
                position: "top-right",
                autoClose: 3000,
            });
        }
        else{
            toast.error("Not enough coins to select this player", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };
    return (
        <>
            <div key={index} className="card bg-base-100 shadow-sm p-4">
                <figure className="px-4 pt-4">
                    <img
                        src="/src/assets/virat-koholi.jpg"
                        alt={player.playername}
                        className="rounded-xl w-90" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{player.playername}</h2>
                    <div className="flex justify-between">
                        <Flag />
                        <p className="text-gray-500">{player.playerCountry}</p>
                        <div className="px-4 py-2 bg-gray-100 rounded-xl">
                            <p>{player.playerType}</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="">
                        <p className="text-lg font-bold">Rating: {player.rating}</p>
                        <div className="flex justify-between my-4">
                            <p className="text-md font-bold">{player.battingstyle}</p>
                            <span className="text-md font-semibold text-gray-500">{player.bowlingStyle}</span>
                        </div>
                        <div className="flex justify-between gap-10">
                            <p className="text-md font-bold">Price: ${player.playerPrice}</p>
                            <button
                                onClick={handleSelected}
                                className="btn rounded-lg">
                                {isSelected ? "Selected" : "Choose Player"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default PlayerCard;