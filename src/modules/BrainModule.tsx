import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import Observer from "@researchgate/react-intersection-observer";
import "../styles/index-new.scss"
import { render } from 'react-dom';
import { Link } from "gatsby";
import Layout from '../components/layout-2';


class WindowFrame extends React.Component {
    state = {
        visibility: 'hidden',
    };
    unityContent = new UnityContent(
        "/Brain2/Build/Brain2.json",
        "/Brain2/Build/UnityLoader.js"
    );
    handleChange = (event) => {
        this.setState({
            visibility: event.isIntersecting ? 'visible' : 'invisible',
        });
    };
    triggerHomeAnim = (event) => {
      return event.isIntersecting ? this.unityContent.send("GameController","TriggerAnimFunc", "inHome true") : this.unityContent.send("GameController","TriggerAnimFunc", "inHome false");
  }
    triggerAdhdAnim = (event) => {
        return event.isIntersecting ? this.unityContent.send("GameController","TriggerAnimFunc", "inADHD true") : this.unityContent.send("GameController","TriggerAnimFunc", "inADHD false");
    }

    triggerBiAnim = (event) => {
      return event.isIntersecting ? this.unityContent.send("GameController","TriggerAnimFunc", "inBi true") : this.unityContent.send("GameController","TriggerAnimFunc", "inBi false");
  }
    
    render() {
        return (
          <>
              <Layout>
                <div>
                  <Unity unityContent={this.unityContent} />
                </div>
                <div className="app">
                  <div className="header">
                    <div className="header__left">
                      <span>J.D</span>
                    </div>
                    <div className="header__right">
                      <p>Thu, 14 Jun | 16:20</p>
                    </div>
                  </div>
                  <div className="main">
                    <Observer onChange={this.triggerHomeAnim}>
                      <div className="sectionTwo" id="Home" data-section>
                          <div className="sectionTwo__header">  
                            <div className="sectionTwo__controls">  
                            {/*  <div className="user">
                                  <img src="https://portfolio-videos-2019.s3-us-west-2.amazonaws.com/10157343414530667.jpg" className="user__img" alt="" />
                                  <span className="user__name">Jamal Dahbur</span>
                              </div> */}
                          </div>
                            <h1 className="sectionOne__title">Home</h1>
                            <p className="sectionOne__subtitle">Home Sub</p>
                          </div>
                      <div className="sectionTwo__content">
                      </div>
                      </div>
                    </Observer>
                    <Observer onChange={this.triggerAdhdAnim}>
                      <div className="sectionOne" id="Playground" data-section>
                        <header className="sectionOne__header">
                          <h1 className="sectionOne__title">ADHD</h1>
                          <p className="sectionOne__subtitle">ADHD Sub</p>
                      </header>
                        <div className="sectionOne__content">
                          <ul className="boxgrid">
                          </ul>
                        </div>
                      </div>
                    </Observer>
             {/*     <Observer onChange={this.triggerAdhdAnim}>
                    <div className="sectionThree" id="paidProjects" data-section>
                        <div className="sectionThree__header">
                            <h1 className="sectionThree__title">Professional Work</h1>
                            <p className="sectionThree__subtitle">UNDER CONSTRUCTION</p>
                        </div>
                        <div className="sectionThree__content">
                        </div>
                        </div>
                  </Observer>*/} 
                </div> 
                  <footer className="footer">
                    <p>Twiiter <a href="https://twitter.com/dahburj">@dahburj</a></p>
                  </footer>
                </div>
              </Layout>
            </>
        );
    }
    
}

const UnityComponent:React.FC = () => {

  const unityRef = useRef();

  const unityContent = new UnityContent(
      "/face-rect/Build/face-rect.json",
      "/face-rect/Build/UnityLoader.js"
  );
  
  return (
      <div ref={unityRef.current}>
          <Unity unityContent={unityContent} />
      </div>
  )

}

export default WindowFrame;

