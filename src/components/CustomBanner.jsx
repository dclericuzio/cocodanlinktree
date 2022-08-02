import React from 'react'
import Typewriter from 'typewriter-effect';
import {Row, Container, Col} from 'react-bootstrap';
import navIcon1 from '../assets/img/whatsapp.svg';
import navIcon2 from '../assets/img/tiktok.svg';
import navIcon3 from '../assets/img/instagram.svg';

const CustomBanner = () => {
  return (
    <section className="banner" id="sosmed">
        <Container>
                <Row className="align-item-center">
                    <Col>
                        <br></br>
                        <h1>{`Get`}
                            <span className="wrap">
                                <Typewriter
                                    options={{
                                        strings:["ACTIVE!", "HYDRATED!", "COCODAN!"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <div className='social-icon'>
                            <a href="https://wa.me/62818589669"><img src={navIcon1} alt="whatsapp"/></a>
                            <a href="www.tiktok.com/@cocodan.id"><img src={navIcon2} alt="tiktok"/></a>
                            <a href="https://instagram.com/cocodan.id?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="instagram"/></a>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Col>
                </Row>
            </Container>
    </section>
  )
}

export default CustomBanner