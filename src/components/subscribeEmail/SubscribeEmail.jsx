import React from "react";
const SubscribeEmail = () => {
    return (
        <div className="p-4 border-4 border-gray-300 rounded-xl mt-10 mb-10 w-6/12  mx-auto">
            <div className="bg-linear-to-r from-[#746db3] to-[#d8af88] p-6 flex flex-col items-center text-center rounded-xl">
                <h1 className="text-3xl font-bold text-[#131313] mt-10">Subscribe to our Newsletter</h1>
                <p className="text-xl text-[#000000]">Enter your email address to subscribe to our newsletter.</p>
                <div className="mt-4 flex mb-10">
                    <input type="email" placeholder="Enter your email" className="text-black p-2 rounded-lg w-90 border border-gray-500" />
                    <button className="bg-linear-to-r from-[#a56db3] to-[#e7ca25] text-white ml-4 p-3 rounded-lg">Subscribe</button>
                </div>
            </div>
        </div>
    );
}
export default SubscribeEmail;