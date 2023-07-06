import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/contact';
    navigate(path);
  }
  return (
    <div className='footerDiv'>
        <button onClick={routeChange} className='contactBtn'>Contact</button>
        <p className='footerQuote'>The process is about what you want, so let's think outside the box to realise your design.</p>
    </div>
  )
}