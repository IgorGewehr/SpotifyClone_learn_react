import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = ({ saldo }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center h-16">
        <h1 className="text-green-400 font-bold text-xl mx-auto py-4 sm:hidden">Saldo: R$ {saldo.toFixed(2)}</h1>
      </div>
    </form>
  );
};

export default Searchbar;
