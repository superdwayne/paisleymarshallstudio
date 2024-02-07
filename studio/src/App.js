import React, { useState, useEffect, Suspense, useRef } from 'react';
import Gif from './DM.gif'
import footerlogo from './logo-v3.png'
import About from './pages/about/about';
import Howwework from './pages/howwework/howwework';
import Services from './pages/services/services';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './App.css';

const videos = [
  "./video9.mp4",
  "./video10.mp4",
  // Add as many video paths as you like
];

const fallbackVideo = "./video6.mp4";

function App() {
 
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleScroll = () => {
    if (!isMobile) {
      setOffsetY(window.pageYOffset);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  
  const [currentVideo, setCurrentVideo] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideo(videos[randomIndex]);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
   
    <div className="App">

  <Navbar expand="lg">
        <Container fluid >
          <Row className="w-100 align-items-center">
            <Col xs={12} md={2} xl={2} xxl={2} >
              <Nav>

              <Nav.Link as={Link} to={{
  pathname: "/about",
  state: { scrollTo: 'ourStory' } // Indicating which section to scroll to
}}>About</Nav.Link>
                <Nav.Link  as={Link} to="/services" >Services</Nav.Link>
                {isMobile ? <Nav.Link herf="/contact">Contact</Nav.Link>  : null  }
              </Nav>
            </Col>
            <Col xxs={12} md={8} xl={8} xxl={8}  className="d-flex justify-content-center">
            <Nav.Link  as={Link} to="/" >Independent Creative technology studio</Nav.Link>
             
            </Col>
            <Col xs={12} md={2}  xl={2} xxl={2}  className="d-flex justify-content-end">
              <Nav>
                
                {isMobile ? null : <Nav.Link herf="/contact">Contact</Nav.Link>  } 
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <div className="parallax-content" style={{ transform: `translateY(${isMobile ? 0 : offsetY * 0.5}px)` }}>
        <header className="App-header" style={{paddingBottom: !isHomePage ? 0 : 150}}>

            <div className="video-mask-container" style={{width: !isHomePage ? '50vw' : '80vw'}}>
              
            {isMobile  ? <img src={Gif}  className="video"/> : 
              <video autoPlay loop muted className="video">
                <source src="./video27.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
            </div>

        </header>
       

        
        <Routes>
          <Route path="/about" element={  <About  />}></Route>
          <Route path="/howwework" element={  <Howwework />}></Route>
          <Route path="/services" element={  <Services />}></Route>
          {/* <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route> */}
        </Routes>
        <div style={{backgroundColor: "black" }} >
            <Container  >
              <Row>
              <Col md={6} lg={6} xs={12}>
                  <h3 className='left-footer'>
                  At Digital Matter Studio, we're in the business of turning the intangible into the tangible. We partner with visionary brands, leveraging emerging technologies to bring your boldest ideas to life. Our mission is simple yet profound: to transform your concepts into experiences that can be seen, touched, and felt.</h3>
                  <div className='footer'>
                    <span>
                    <h1>EMAIL</h1>
                    <p><a href='mailto:office@digitalmatter.studio'>office@digitalmatter.studio </a></p>  
                    </span>

                    <span>
                    <h1>INSTAGRAM</h1>
                    <p><a href='https://www.instagram.com/digitalmatter.studio/'>@digitalmatter.studio </a></p>  
                    </span>

                    <span>
                    <h1>LINKED-IN</h1>
                    <p><a href='https://www.linkedin.com/company/digital-matter-studio/'>@digitalmatter.studio</a></p>  
                    </span>

                  </div>
                </Col>
                <Col md={6} lg={6} xs={6} className="footer-logo">
                <img src={footerlogo} style={{width: '100%', display: 'flex'}} alt="Logo" className="footer-logo" />
               
                </Col>
                
              </Row>

         
    
    </Container>

        </div>

      </div>

        
      
      </div>
     
  
   
  );
}

export default App;
