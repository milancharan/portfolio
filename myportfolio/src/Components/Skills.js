import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import myAV from '../assets/img/myAV.png'
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import "./Skills.css"

import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 17000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 17000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
              <div className="homeSkills">
                <div className="homeCubeSkills">
                  <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                    <img width={170} src={myAV} alt="Face1" />
                  </div>

                  <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                    <img width={170} src={myAV} alt="Face2" />
                  </div>

                  <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                    <img width={170} src={myAV} alt="Face3" />
                  </div>

                  <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                    <img width={170} src={myAV} alt="Face4" />
                  </div>

                  <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                    <img width={170} src={myAV} alt="Face5" />
                  </div>

                  <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                    <img width={170} src={myAV} alt="Face6" />
                  </div>
                </div>

                <div className="cubeShadow"></div>

                <div className="homeskillsBox" id="homeskillsBox">
                  <SiCplusplus />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <SiMongodb />
                  <SiExpress />
                  <SiReact />
                  <SiNodedotjs />
                  <SiThreedotjs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}