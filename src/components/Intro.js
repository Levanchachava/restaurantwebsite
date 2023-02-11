import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from './video'

import './intro.css';


function Intro() {
  return (
    <div className='app__video'>
        <video src={meal} ref={vidRef} type="video/mp4" loop control={false} muted />
    </div>
  )
}

export default Intro