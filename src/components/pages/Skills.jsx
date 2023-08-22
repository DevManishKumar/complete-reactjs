import React from "react";
import "./allpages.css";

const Skills = () => {
  return (
    <div className="contained-center">
      <h1 className="head-text">My Skills.</h1>
      <div className="skills">
        <div className="skill-row">
          <div className="skill_head">
            <img className="skill_img" src="/frontend.png" alt="IMG_Frontend" />
            <h3 className="skill_head_text">Frontend Skills</h3>
          </div>
          <div className="skill_bottom">
            <ul className="skill_items">
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            <p className="skill_desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              itaque consequuntur molestias sapiente at, ad delectus eos ex
              exercitationem quas modi quia necessitatibus, nostrum, accusantium
              omnis quaerat cum. Quaerat, hic?
            </p>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill_head">
            <img className="skill_img" src="/backend.png" alt="IMG_Backend" />
            <h3 className="skill_head_text">Backend Skills</h3>
          </div>
          <div className="skill_bottom">
            <ul className="skill_items">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>Php</li>
            </ul>
            <p className="skill_desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              itaque consequuntur molestias sapiente at, ad delectus eos ex
              exercitationem quas modi quia necessitatibus, nostrum, accusantium
              omnis quaerat cum. Quaerat, hic? lore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
