import React from 'react'
import aboutus from "./aboutus.css"

function Aboutus() {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/G.png" alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/spoon.png" alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
            <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/knife.png" alt="about_knife" />
        </div>

        
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/spoon.png" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  )
}

export default Aboutus