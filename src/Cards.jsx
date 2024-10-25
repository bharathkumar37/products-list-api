import React from "react";

const Cards = (props) => {
    return (
        <div className="max-w-sm bg-gray-800 shadow-lg rounded-lg overflow-hidden m-10">
            <img className="w-full h-64 object-contain" src={props.image} alt={props.title}/>
            <div className="p-6">
                <h1 className="text-4xl font-bold text-slate-100 mb-4">{props.title}</h1>
                <h2 className="text-2xl text-purple-400 mb-2">${props.price}</h2>
                <p className="text-sm text-gray-300 mb-4">{props.description}</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default Cards;