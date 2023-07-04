import React from 'react'
import Algarve from './algarve.jpg';
import Family from './family.jpg';
import Home from './home.jpg';
import Loki from './loki.jpg';
import Norway from './norway.jpg';
import Sintra from './sintra.jpg';

export default function PhotoGallery() {
    return (
        <div className='galleryDiv'>
            <div className='photo1'>
                <img className={`photoInitial`} src={Family} alt='family' />
            </div>
            <div className='photo2'>
                <img className={`photoInitial`} src={Home} alt='home' />
            </div>
            <div className='photo3'>
                <img className={`photoInitial`} src={Loki} alt='Loki' />
            </div>
            <div className='photo4'>
                <img className={`photoInitial`} src={Sintra} alt='Sintra' />
            </div>
            <div className='photo5'>
                <img className={`photoInitial`} src={Algarve} alt='Algarve' />
            </div>
            <div className='photo6'>
                <img className={`photoInitial`} src={Norway} alt='Norway' />
            </div>
        </div>
  )
}
