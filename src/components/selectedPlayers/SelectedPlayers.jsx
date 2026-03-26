import { Trash2 } from "lucide-react";
import React from "react";
const SelectedPlayers = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm mb-5">
                <figure className="p-4 ">
                    <img
                        className="w-35 h-35 rounded-lg"
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Name</h2>
                    <p className="text-lg">Right-Arm-bowler</p>
                    <div className="flex text-red-500 justify-end align-center my-auto">
                        <Trash2/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SelectedPlayers;