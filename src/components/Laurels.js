import React from 'react'
import Subheading from './Subheading';
import awards from "./awards.js"
import "./laurels.css"

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
      <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/award02.png" alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
  
  const Laurels = () => (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <Subheading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
  
        <div className="app__laurels_awards">
          {awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>
  
      <div className="app__wrapper_img">
        <img src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/src/assets/laurels.png" alt="laurels_img" />
      </div>
    </div>
  );
  
export default Laurels