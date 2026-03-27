import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import SubscribeEmail from "../subscribeEmail/SubscribeEmail";
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    const handleDeletePlayer = (player) => {
        const updatedPlayers = selectedPlayers.filter((p) => p.playername !== player.playername);
        setSelectedPlayers(updatedPlayers);
        setCoin(coin + player.playerPrice);
    }
    return (
        <div>
            {selectedPlayers.length === 0 ?
                <div className="`h-[400px]` flex flex-col justify-center items-center gap-4">
                    <h1 className="text-4xl font-bold text-gray-500 text-center my-auto">No players selected yet</h1>
                    <p className="text-2xl text-gray-500 text-center my-auto">Select players from the available list</p>
                </div> :
                selectedPlayers.map((player, index) => (
                    <div>
                        <div className="card card-side bg-base-100 shadow-sm mb-5">
                            <div className="p-3">
                                <img
                                    className="w-35 rounded-lg"
                                    src="/src/assets/virat-koholi.jpg"
                                    alt="{player.playername}" />
                            </div>
                            <div className="p-6 w-full flex justify-between items-center">
                                <div className="p-3">
                                    <div className="flex gap-4">
                                        <FaUser className="text-2xl my-auto" />
                                        <h2 className="card-title text-3xl font-bold text-[#131313]">{player.playername}</h2>
                                    </div>
                                    <p className="text-xl mt-3 ml-10 text-[#535252]">{player.playerType}</p>
                                </div>
                                <button className="btn" onClick={() => handleDeletePlayer(player)}>
                                    <RiDeleteBin6Line className="text-3xl text-red-500" />
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
                <SubscribeEmail/>
        </div>
    );
}
export default SelectedPlayers;