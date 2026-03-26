import { Flag } from "lucide-react";
import React from "react";
const Player = () => {

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-4 pt-4">
                <img
                    src="/src/assets/virat-koholi.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name</h2>
                <div className="flex justify-between">
                    <Flag />
                    <p className="text-gray-500"> Country</p>
                    <div className="px-4 py-2 bg-gray-100 rounded-xl">
                        <p>All Rounder</p>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="">
                    <p className="text-lg font-bold">Rating</p>
                    <div className="flex justify-between my-4">
                        <p className="text-md font-bold">Left-hand-ball</p>
                        <span className="text-md font-semibold text-gray-500">Right-hand-ball</span>
                    </div>
                    <div className="flex justify-between gap-10">
                        <p className="text-md font-bold">Price: $000000</p>
                        <button className="btn rounded-lg">Choose Player</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Player;