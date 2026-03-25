import React from "react";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                    <img src="/src/assets/logo.png" alt="" />
            </div>
            <div className="flex gap-10 justify-center items-center">
                <p className="text-[#494747]">Home</p>
                <p className="text-[#494747]">Fixture</p>
                <p className="text-[#494747]">Teams</p>
                <p className="text-[#494747]">Schedules</p>
                <button className="btn btn-ghost border-gray-200 rounded-lg">
                    <span className=" font-bold">0 Coin</span>
                    <img src="/src/assets/Currency.png" alt="" />
                </button>
            </div>
        </div>
    );
}
export default Navbar;