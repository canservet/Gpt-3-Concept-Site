import React from 'react'
import {useState} from "react"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from "../../assets/logo.svg"
import "./navbar.css"

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)

  const Menu =() => (
    <>
    <ul> <a href='#home'>Home </a></ul>
    <ul> <a href='/my-app/public/blogsayfa.html'>wgpt3</a></ul>
    <ul> <a href='#possibility'>Open AI</a></ul>
    <ul> <a href='#features'> Case Studies</a></ul>
    <ul> <a href='#blog'>  Library </a></ul>
    </>
  )
  return (   
    <div className='gpt3__navbar'>

      <div className='gpt3__navbar-links'>

      <div className='gpt3__navbar-links_logo'>
 
 <img src={logo} alt="" />
 </div>
 <div className='gpt3__navbar-links_container'>
 
<Menu/>
</div>
 </div>

<div className='gpt3__navbar-sign'>
  <p> Sign İn</p>
  <button type="button">sing in</button>
</div>
<div className='gpt3__navbar-menu'>
 {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu &&  ( <div className='gpt3__navbar-menu_container scale-up-center '>
        <div className='gpt3__navbar-menu_container-links '>
          <Menu />
         
          <div className='gpt3__navbar-menu_container-links-sign'>
            <p> Sign İn</p>
          <button type="button">sing in</button>
          </div>
           </div>
       </div>

       )}
     </div>
    </div>
  )
}

export default Navbar
