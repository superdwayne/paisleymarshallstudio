import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './howwework.css';
function Howwework() {
  return <div style={{backgroundColor: "white", height: '230vh'}}>
    
    <Container fluid >
  
        
  <Row className="w-100 align-items-center">

 
<div>




<h1 className='left-about'>if you can imagaine it we can built it</h1>

{/* <h2 className='left'>Our Story.</h2>
 <h2 className='left p25'>Digital Matter Studio emerged from a profound realization: the transformative power of creative technology. In a world where innovation and technology are intertwined, our journey began with a commitment to not just witness but actively shape this evolving digital landscape. We recognized early on that technology's accelerating pace isn't just changing how we live—it's redefining our very existence.</h2> */}

  {/* <h2 className='left'>Digital Matter Studio emerged from a profound realization: the transformative power of creative technology. In a world where innovation and technology are intertwined, our journey began with a commitment to not just witness but actively shape this evolving digital landscape. We recognized early on that technology's accelerating pace isn't just changing how we live—it's redefining our very existence.</h2>
  <h2 className='left'>Guiding Brands into Tomorrow</h2>
  <h2 className='left'>Our mission at Digital Matter Studio is clear. We aim to guide brands and companies through the ever-shifting future with confidence and insight. Through a process rooted in experimentation, iteration, and a relentless growth mindset, we navigate the new and unknown. Our goal is not simply to keep pace with digital evolution but to forge new paths and possibilities.</h2>
  <h2 className='left'> Crafting Stories That Resonate</h2>
  <h2 className='left'>At the core of our philosophy is a commitment to storytelling. Digital Matter Studio exists to elevate your narrative, bringing your voice and values to life in ways that forge genuine connections with your audience. By embracing emerging technologies, we craft experiences that are not just engaging but transformative, enriching lives and deepening relationships.</h2>
  <h2 className='left'>Your Partner in the Digital Journey</h2>
  <h2 className='left'>Choosing Digital Matter Studio means choosing a future where technology and creativity converge to create unparalleled experiences. As your partners, we are dedicated to pushing the boundaries of what's possible, ensuring that together, we can tell stories that not only captivate but truly matter in the digital age.</h2> */}

  </div>
</Row>



<Row >
<Col md={3}><h2 className='left'>What sets us apart.</h2> </Col>
<Col md={3}><h2 className='left'>We're creative</h2></Col>
<Col md={6} >
  <h2 className='left aboutspacing' id='border-bottom'>
  The strength of our creativity resides in devising concepts that are not only imaginative but also technically feasible. 
  
  This dual focus enables us to dream big, ensuring that our ambitions are grounded in reality.  <br />  <br />  Through the lens of emerging technologies, we consistently prioritize narrative and concept, with technology serving as the supporting pillar to bring these visions to life. This approach ensures that our creations are not just technologically advanced but are also rich in story and meaning, making every project we undertake an appropriate and resonant experience for our audience.
  </h2>
  </Col>
</Row>

</Container>
  </div>;
}

export default Howwework;