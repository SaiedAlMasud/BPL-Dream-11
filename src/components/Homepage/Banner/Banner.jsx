RTCDTMFToneChangeEvent
import React from 'react'
const Banner = () => {
    return (
        <div className="banner min-h-60vh bg-linear-to-r from-[#2b74c7] to-[#ccc4c4] justify-center items-center text-center flex flex-col gap-4 rounded-2xl">
            <img className="mt-5" src="/src/assets/banner-main.png" alt="" />
            <h1 className="text-4xl font-bold text-[#130c0c]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-gray-600 mt-4">Beyond Boundaries Beyond Limits</p>
            <div className="border-1 border-[#E7FE29] p-1 rounded-xl my-6">
                <button className="btn bg-[#E7FE29] rounded-xl">Claim Free Coins</button>
            </div>
        </div>
    );
}
export default Banner;