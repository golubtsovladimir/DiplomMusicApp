import { useState } from "react";
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";



const Searchbar = () => (
  <form action="" autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
      Поиск песни
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4"/>
      <input 
      name="search-field"
      autoComplete="off"
      id="search-field"
      placeholder="Поиск"
      type="search"
      value="" 
      onChange={() => {}}
      className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
      />
    </div>
  </form>
);

export default Searchbar;
