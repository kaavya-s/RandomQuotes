import React from 'react';
// import './index.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='head'><h1>Random Quotes Generator</h1>
    {/* <Link to="/home" style={{textDecoration:"none",color:'azure'}}><h2>Home</h2></Link>
    <Link to="/contact" style={{textDecoration:"none",color:'azure'}}><h2>Contact</h2></Link> */}
    <a href="#App" style={{textDecoration:"none",color:"azure"}}><h2 className='h'>Home</h2></a>
    <a href= "#con" style={{textDecoration:"none",color:"azure"}}><h2 className='c'>Contact</h2></a>
    </div>
  )
}
