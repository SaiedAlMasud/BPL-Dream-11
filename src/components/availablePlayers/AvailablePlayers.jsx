import { Flag } from "lucide-react";
import React from "react";
const AvailablePlayers = ({ playerData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {playerData.map((player, index) => (
                <div key={index} className="card bg-base-100 shadow-sm p-4">
                    <figure className="px-4 pt-4">
                        <img
                            src="/src/assets/virat-koholi.jpg"
                            alt={player.playername}
                            className="rounded-xl" />
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
                                <p className="text-md font-bold">Price: $000000</p>
                                <button className="btn rounded-lg">Choose Player</button>
                            </div>

                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
};
export default AvailablePlayers;