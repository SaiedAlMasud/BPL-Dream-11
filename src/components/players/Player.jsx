import React, { use } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
const Player = ({playerPromise}) => {
const playerData = use(playerPromise);
    return (
        <AvailablePlayers playerData={playerData} />
    );
}
export default Player;