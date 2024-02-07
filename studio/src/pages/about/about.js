import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Dpm from './DPM-about.gif'
import './about.css';
function About(props) {
  
  return <div className='about' style={{backgroundColor: "black" }}>
    
    <Container>
  
        
          <Row className="w-100 align-items-center" >

         
        <div>
        
        
        <img src={Dpm} style={{width: '30vw'}} />

        <h1 className='left-about'>Founder - Creative Technology Director</h1>
          </div>
        </Row>

        <Row >
        <Col md={4}><h2 className='left'>Our Story.</h2> </Col>
        <Col md={2}></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' id='border-bottom'>Digital Matter Studio emerged from a profound realization: the transformative power of creative technology. In a world where innovation and technology are intertwined, our journey began with a commitment to not just witness but actively shape this evolving digital landscape. We recognized early on that technology's accelerating pace isn't just changing how we live—it's redefining our very existence.</h2>

          </Col>
        </Row>

     

        <Row id={props.ourstory} >
        <Col md={3}><h2 className='left'>What sets us apart.</h2> </Col>
        <Col md={3}><h2 className='left'>We're creative</h2></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' id='border-bottom'>
          The strength of our creativity resides in devising concepts that are not only imaginative but also technically feasible. 
          
          This dual focus enables us to dream big, ensuring that our ambitions are grounded in reality.  <br />  <br />  Through the lens of emerging technologies, we consistently prioritize narrative and concept, with technology serving as the supporting pillar to bring these visions to life. This approach ensures that our creations are not just technologically advanced but are also rich in story and meaning, making every project we undertake an appropriate and resonant experience for our audience.
          </h2>
          </Col>
        </Row>
        <Row >
        <Col md={3}></Col>
        <Col md={3}><h2 className='left'> We're Technical</h2></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' id='border-bottom'>
          We thrive on tackling technical challenges, from exposing APIs to ensuring that our technical framework is as scalable as possible. Our goal is to create digital experiences that can be simultaneously shared and enjoyed by a diverse array of users. <br /><br /> By focusing on robust, scalable solutions, we enable a wider audience to experience our creations in real time, together. This commitment to technical excellence and inclusivity is at the heart of everything we do, driving us to push the boundaries of what's possible in the digital realm.
          </h2>
          </Col>
        </Row>
        <Row >
        <Col md={3}></Col>
        <Col md={3}><h2 className='left'>We're not boring</h2></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' id='border-bottom'>
          We genuinely delight in navigating both creative and technical challenges, approaching each project with an innovative growth mindset. <br /><br /> By asking ourselves "What if?" we transform potential obstacles into opportunities for exploration and fun. This curious and expansive approach not only fuels our creativity but also leads to genuinely enjoyable experiences. It's this blend of enthusiasm for innovation and a commitment to pushing boundaries that defines our journey, turning every project into an adventure in creativity and technical mastery.</h2>
          </Col>
        </Row>
        </Container>
  </div>;
}

export default About;