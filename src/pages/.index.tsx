import React, { useRef, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Logo  from "../components/logo";
import Layout from "../components/layout-2";
import SEO from "../components/seo"
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import VideoPlayer from '../components/videoPlayerNew';
import VIDEOS from "../constants/videos";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import "../styles/index-new.scss";

import { useTransform, useMotionValue, useViewportScroll, motion, useAnimation } from 'framer-motion';

import { useInView } from "react-intersection-observer";
import ParallaxCard from "react-parallax-card";

import Img from "gatsby-image";
import DPCardComponent from "../components/depthcard";
import Unity,{ UnityContent } from "react-unity-webgl";

const TopOfPage: React.FC = () => {
  return(
    <>
      <SEO title="Home" />
      <Navbar />
      <MobileNavbar />
    </>
  );
}



const BoxVariants = {
  open: {
    opacity: 1,
    rotate: 360,
    x: [60, 80, 150],
    scaleX: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    rotate: 0,
    scaleX: 0,
    opacity: 0,
  },
}


const CardComponent = () => {

  const [filterValue, setFilterValue] = useState('');

  const [ref, inView, entry] = useInView();

  const data = useStaticQuery(graphql`
    query {
      moeHoe: file(relativePath: { eq: "Space-HD.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 950) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      allContentfulContentfulProject(limit: 1000) {
        edges {
          node {
            id
            type
            title
            slug
            createdAt
            bodyRichText {
              json
            }
            image {
              file {
                url
              }
            }
            tags
            description
          }
        }
      }
    }`
  )

  const allProjects = data.allContentfulContentfulProject.edges;
  
  console.log(allProjects);

  const filteredProjects = allProjects;

  {/*const filteredProjects = allProjects.filter(item => (
  item.node.title.toLowerCase().search(filterValue.toLowerCase()) !== -1 || item.node.description.toLowerCase().search(filterValue.toLowerCase()) !== -1));*/}

  return(
    <Grid container justify="space-around" direction="row" alignItems="center" spacing={6} >

        {filteredProjects.map(project=> (
        <div key={`${project.node.slug}`} >
            <motion.div ref={ref} variants={CardVariants} animate={inView ? "show" : "hide"} style={{width: "100%"}}>
              <DPCardComponent linkTo={`/project/${project.node.slug}`} data={project} />
            </motion.div>
        </div>
      ))}
    </Grid>
  )
}

const SectionComponent = () => {

  return(
    <div id="sectionNew">
      <CardComponent />
    </div>
  )
}

const CardVariants = {
  show: {
    opacity: 1,
    rotate: 360,
    scaleX: 1,
    ScaleY: 0.1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  hide: {
    opacity: 0,
    rotate: 0,
    scaleX: 0,
    x: -20,
    y: 50,
    transition: {
      duration: 0.1,
    },
  },
}
const UnityComponent = () => {
  const [ref, inView, entry] = useInView();
  const unityContent = new UnityContent(
    "/test/Build/test.json",
    "/test/Build/UnityLoader.js"
  );

  return(
    <div ref={ref}>
      <Unity unityContent={unityContent} />
    </div>
  )
}

const IndexPage: React.FC = () => {

  const { scrollYProgress } = useViewportScroll();

  const controls = useAnimation();

  function StartAnim(){
    controls.start("open");
  }

  return(
    <>
      <Grid container justify="space-between" align-items="stretch" direction="column">
        <Grid item xs={12}>
          <SectionComponent />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </>
  )
}

const variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
      easeOut: "easeOut",
      duration: 1.5,
    },
  },
}


interface Props{
  state?: {
    videosLoaded: any,
    videosEmbedded: any,
    videoIsLoaded: any,
  }

}

const DigitalWalls = () => {
  const SELECTORS = {
    section: '[data-section]',
    scrollTo: '[data-scroll-to]',
    scrollDir: '[data-scroll-dir]'
  }
  {/*
  const sectionsArray = Array.from(document.querySelectorAll(SELECTORS.section))
  const scrollToElements = document.querySelectorAll(SELECTORS.scrollTo)
  const scrollDirElements = document.querySelectorAll(SELECTORS.scrollDir)
  
  let currentSectionIndex = 0
  
  const getScrollTarget = dir => {
    if (dir === 'prev' && currentSectionIndex > 0) {
      currentSectionIndex--
      return sectionsArray[currentSectionIndex]
    }
    if (dir === 'next' && currentSectionIndex < sectionsArray.length-1) {
      currentSectionIndex++
      return sectionsArray[currentSectionIndex]
    }
    return false
  }*/
}
  
  return(
    <div className="app">
        <header className="header">
            <div className="header__left">
            <span>J.D</span>
            </div>
            <div className="header__right">
            <p>Thu, 14 Jun | 16:20</p>
            </div>
        </header>
        
        <nav className="nav">
            <ul className="nav__menu">
            <li className="nav__item">
                <a href="#Home" className="nav__link" data-scroll-to>
                <div className="media">
                    <img src="https://images.pexels.com/photos/1544947/pexels-photo-1544947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="media__img" />
                    <h4 className="media__content">
                    {/*<strong>Home</strong>*/}
                      Home
                    </h4>
                </div>
                </a>
            </li>
            <li className="nav__item">
                <a href="#Playground" className="nav__link" data-scroll-to>
                <div className="media">
                    <img src="https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&vib=20&w=2000" alt="" className="media__img" />
                    <h4 className="media__content">
                    PlayGround
                    </h4>
                </div>
                </a>
            </li>
            <li className="nav__item">
                <a href="#paidProjects" className="nav__link" data-scroll-to>
                <div className="media">
                    <img src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=2000" alt="" className="media__img" />
                    <h4 className="media__content">
                    <strong>Professional Projects</strong>
                    </h4>
                </div>
                </a>
            </li>
            </ul>
        </nav>
        
        <main className="main">
          <div className="sectionTwo" id="Home" data-section>
                <div className="sectionTwo__header">
                  <VideoPlayer id={'video1'} video={VIDEOS[0]} />

                  {/*<h1 className="sectionTwo__title">
                    <h1>
                      Home
                    </h1>
                  </h1>
                  <p className="sectionTwo__subtitle">38.44°N, 09.82°W</p>*/}
                  <div className="sectionTwo__controls">  
  
                {/* <button className="btn btn--prev" title="Previous">
                        <span className="arrow arrow--left"></span>
                    </button>
                    <button className="btn btn--next" title="Next">
                        <span className="arrow arrow--right"></span>
                    </button>*/}
                    <div className="user">
                        <img src="https://portfolio-videos-2019.s3-us-west-2.amazonaws.com/10157343414530667.jpg" className="user__img" alt="" />
                        <span className="user__name">Jamal Dahbur</span>
                    </div>
                    </div>
                    </div>
                <div className="sectionTwo__content">
                    {/*<CardComponent />*/}
                    <Logo />
                </div>
              </div>
          <div className="sectionOne" id="Playground" data-section>
                  <header className="sectionOne__header">
                      <h1 className="sectionOne__title">Playground</h1>
                      <p className="sectionOne__subtitle">48.21°N, 16.36°E</p>
                    {/* <div className="sectionOne__controls">
                      <button className="btn btn--prev" title="Previous">
                          <span className="arrow arrow--left"></span>
                      </button>
                      <button className="btn btn--next" title="Next">
                          <span className="arrow arrow--right"></span>
                      </button>
                      <div className="user">
                          <img src="https://source.unsplash.com/200x200/?people" className="user__img" alt="" />
                          <span className="user__name">Jamie</span>
                  </div>
                      </div>*/}
                  </header>
                  <div className="sectionOne__content">
                      <ul className="boxgrid">
                        <Link to="/PosePage">
                          <li className="boxgrid__item">
                              <a href="#" className="box box--posenet">
                                <img src="https://img.icons8.com/ios/96/000000/yoga.png" style={{height: 150, width:150, bottom: 0, position: "fixed"}} />
                              </a>
                            </li>
                        </Link>
                        <Link to="/faceDetector/">
                          <li className="boxgrid__item boxgrid__item--wide">
                            <a href="#" className="box box--image">
                          {/*    <p><span className="text--large">Face</span><br />Detect</p> */}
                            </a>
                          </li>
                        </Link>
                        <Link to="/OpticalFlowPage/">
                          <li className="boxgrid__item boxgrid__item">
                            <a href="#" className="box box--optical-flow">
                              <div /><div /><div />
                            </a>
                          </li>
                        </Link>
                    {/*}   <li className="boxgrid__item boxgrid__item--push">
                          <a href="#" className="box box--image">
                          <img src="https://source.unsplash.com/300x300/?people" className="box__img" alt="" />
                          </a>
                        </li>
                        <li className="boxgrid__item">
                          <a href="#" className="box box--cost">
                          <p><span className="text--large">120€</span><br />Daily cost</p>
                          </a>
                        </li>
                        <li className="boxgrid__item boxgrid__item--push">
                          <a href="#" className="box box--video">
                          <img src="https://source.unsplash.com/300x300/?art" className="box__img" alt="" />
                          </a>
                    </li> */}
                        
                      </ul>
                  </div>
              </div>
          <div className="sectionThree" id="paidProjects" data-section>
              <div className="sectionThree__header">
                  <h1 className="sectionThree__title">Professional Work</h1>
                  <p className="sectionThree__subtitle">UNDER CONSTRUCTION</p>
              </div>
              <div className="sectionThree__content">
                  <CardComponent />
              </div>
            </div>
        </main>
        
  
        
        <footer className="footer">
            <p>Twiiter <a href="https://twitter.com/dahburj">@dahburj</a></p>
            
          {/*  <p className="footer__more">
            <a href="https://codepen.io/mxbck/pen/81020404c9d5fd873a717c4612c914dd?editors=1000" target="_blank" rel="noopener noreferrer">View Source</a>
            &nbsp;&middot;&nbsp;
            <a href="https://mxb.at/blog/layouts-of-tomorrow/">Read More</a>
            </p> */}
        </footer>
        </div>
  );
}

class IndexClass extends React.Component <Props> {


  
  render () {
      
    return(
      <Layout>
        <DigitalWalls />
       {/* <UnityComponent />*/}
      </Layout>
    )
  }
}
export default IndexClass