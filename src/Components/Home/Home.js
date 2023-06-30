import React from 'react';
import CardAnimation from '../CardAnimation/CardAnimation';

export default function Home() { 
  return (
    <>
      <header className="homeHeader">
        <blockquote className='fade-in-tl'>
        Simplicity is the fundamental part of design where we so often miss our <span style={{color: 'red'}}>target</span>. 
        <br/><br />
        <u className='focus-in-contract'>Let me help you <span style={{color: 'red'}}>hit yours</span>.</u>
        </blockquote>
        <p className='fade-in'>Kevin</p>
      </header>
      <CardAnimation />
    </>
  )
}
