import React from "react";
import PlayerCard from "../players/PlayerCard";
const AvailablePlayers = ({ playerData, setCoin, coin,selectedPlayers,setSelectedPlayers }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {playerData.map((player, index) => (
                <PlayerCard key={index} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
            ))
            }
        </div>
    );
};
export default AvailablePlayers;