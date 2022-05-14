import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Search: NextPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <div className="bg-white px-4">
        <Link href="/">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back Button"
            className="h-12 cursor-pointer"
          />
        </Link>
      </div>

      <div className="bg-white flex items-center px-4 mb-2">
        <div className="flex flex-col w-10 items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt="filled circle"
            className="h-2.5"
          />
          <img
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt="vertical line"
            className="h-10"
          />
          <img
            src="https://img.icons8.com/windows/50/square-full.png"
            alt="square"
            className="h-3"
          />
        </div>
        <div className="flex flex-col ml-2">
          <input
            type="text"
            placeholder="Enter pickup location"
            className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none"
          />
          <input
            type="text"
            placeholder="Where to?"
            className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none"
          />
        </div>
        <img
          src="https://img.icons8.com/ios/50/000000/plus-math.png"
          alt="Plus Sign"
          className="w-10 h-10 bg-gray-200 rounded-full ml-3"
        />
      </div>
      <div className="flex items-center bg-white px-4 py-2 mb-4">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          alt="Star"
          className="bg-gray-400 w-10 h-10 p-2 rounded-full mr-2"
        />
        Saved Places
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white px-4 py-2 w-80">
          Confirm Locations
        </button>
      </div>
    </div>
  );
}

export default Search