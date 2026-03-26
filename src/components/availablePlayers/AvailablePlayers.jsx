import React from "react";
import PlayerCard from "../players/PlayerCard";
const AvailablePlayers = ({ playerData, setCoin, coin }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {playerData.map((player, index) => (
                <PlayerCard key={index} player={player} setCoin={setCoin} coin={coin} />
            ))
            }
        </div>
    );
};
export default AvailablePlayers;