import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Login, Sacar } from './pages';
 
const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [saldo, setSaldo] = useState(() => {
    const saldo = localStorage.getItem('saldo');
    return saldo !== null ? Number(saldo) : 0;
  });
  const increaseSaldo = () =>{setSaldo(saldo + 10);}
  const saqueRealizado = () =>{setSaldo(0);}
  const [isLogged, setIsLoged] = useState(false);
  const loginRealizado = () => {setIsLoged(true)};

  useEffect(() => {
    localStorage.setItem('saldo', saldo);
  }, [saldo]);

  return (
    <div className="relative flex">
      <Sidebar saldo={saldo} isLogged={isLogged}/>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar saldo={saldo}/>

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover saldo={saldo} increaseSaldo={increaseSaldo}/>} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/login" element={<Login isLogged={isLogged} loginRealizado={loginRealizado}/>} />
              <Route path="/sacar" element={<Sacar saldo={saldo} saqueRealizado={saqueRealizado} />} />
              <Route path="/top-charts" element={<TopCharts saldo={saldo}/>} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay saldo={saldo} increaseSaldo={increaseSaldo}/>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
