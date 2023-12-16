import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-black focus-within:text-black">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center w-[25%]">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-[#0a1118]" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-[#1a73d880] outline-none text-base text-[#1a73d8] p-3"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;