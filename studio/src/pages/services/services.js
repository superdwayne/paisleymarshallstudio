import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './services.css';
function Services() {
  return <div style={{backgroundColor: "black"}}>
    
    <Container  >
  
        
  <Row className="w-100 align-items-left">
 
<div>
<h1 className='left-services'>What we do</h1>
  </div>
</Row>



<Row >
<Col md={4}  >
<ul>
    <li>Generative Visuals</li>
    <li>Data Visualization</li>
    <li>3D Visuals</li>
    <li>Realtime 3D</li>
    <li>AI chatbots</li>
    <li>Digital Fashion</li>
</ul>

 </Col>
<Col md={4}>

<ul>
<li>Physical Installations</li>
    <li>Generative Design Tools</li>
    <li>Campaign Websites</li>
    <li>Web Platforms & Products</li>
    <li>E-Commerce</li>
    <li>AR/VR</li>
</ul>

</Col>
<Col md={4} >
<ul>
<li>Social Media Filters</li>
    <li>Metaverse Experiences</li>
    <li>Retail Installations</li>
    <li>Retail Activations</li>
    <li>Creative Technology consultations</li>
    <li>Front-End & Back-End</li>
</ul>
  </Col>
</Row>

<Row className="w-100 align-items-center">
 
 <div>
 <h1 className='left-services'>How we do it</h1>
   </div>
 </Row>

 <Row >
        <Col md={5}><h2 className='left'>Listening, Researching, Planning, and Innovating</h2></Col>
        <Col md={1}></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' >
          At Digital Matter, our approach is rooted in understanding, exploration, inspiration, strategizing, and innovation. We're committed to developing a collective strategy that fosters communication, collaboration, inspiration, and the ability to navigate any challenges that may arise.

Our collaboration kicks off with a workshop aimed at harmonizing our visions, clarifying our objectives, prioritizing our actions, and pinpointing your unique technological requirements.

With this foundation, we'll segment larger objectives into manageable tasks. This process allows us to pinpoint optimal solutions, discover opportunities for innovation, and meticulously plan for the resources needed to accomplish our shared goals.





          </h2>
          </Col>
        </Row>

        <Row >
        <Col md={5}><h2 className='left'>Prototyping, Collaborating, and Developing</h2></Col>
        <Col md={1}></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' >
          Once we're all in sync with our collective strategy, the creation process begins, with our sights set on delivering unparalleled quality.

During this stage, we thrive on collaboration across different fields, prototyping concepts, sharing inspirations, and consistently adopting the perspectives of both end-users and content managers.

Our workflow is structured around sprints, allowing us to progress quickly, keep in close contact with our partners, and adapt promptly with solutions whenever necessary.
          </h2>
          </Col>
        </Row>

        <Row >
        <Col md={5}><h2 className='left'>Refining and Pivoting</h2></Col>
        <Col md={1}></Col>
        <Col md={6} >
          <h2 className='left aboutspacing' >
          Once we're all in sync with our collective strategy, the creation process begins, with our sights set on delivering unparalleled quality.

During this stage, we thrive on collaboration across different fields, prototyping concepts, sharing inspirations, and consistently adopting the perspectives of both end-users and content managers.

Our workflow is structured around sprints, allowing us to progress quickly, keep in close contact with our partners, and adapt promptly with solutions whenever necessary.
          </h2>
          </Col>
        </Row>


</Container>
  </div>;
}

export default Services;