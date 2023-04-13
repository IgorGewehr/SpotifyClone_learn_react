import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup, HiCurrencyDollar, HiLogin } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Sacar', to: '/sacar', icon: HiCurrencyDollar },
  { name: 'Login', to: '/login', icon: HiLogin },
];

const NavLinks = ({ handleClick, isLogged }) => (
  <div className="mt-10">
    {links.map((item) => {
      if (item.name === 'Login' && isLogged) {
        return null; // Não exibe o link de login se o usuário estiver logado
      }

      return (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      );
    })}
  </div>
);



const Sidebar = ({ saldo, isLogged }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />

        <div style={{ marginTop: "30px" }}>
        <h1 style={{ color: "green", marginTop: 0 }}>SALDO: R${saldo}</h1>
      
      </div>
        
        <NavLinks />
      </div>
      

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <div className="md:hidden flex flex-col justify-center items-center">
          <h1 style={{ color: "#00cc66", marginTop: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
            SALDO: R${saldo}
          </h1>
        </div>


        <NavLinks handleClick={() => setMobileMenuOpen(false)} isLogged={isLogged}/>
      </div>
    </>
  );
};


export default Sidebar;