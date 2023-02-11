import React from 'react'
import header from "./header.css"

function Subheading({title}) {
  return (
    <div style={{ marginBottom: '1rem' }}>
        <p className="p__cormorant">{title}</p>
        <img className='subhimg' src='https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/spoon.png' />
    </div>
  )
}

export default Subheading