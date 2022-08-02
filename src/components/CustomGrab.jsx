import React from 'react'
import {Row, Container, Col} from 'react-bootstrap';
import { Player } from '@lottiefiles/react-lottie-player';
import clickme from '../assets/img/clickme.gif';
import soon from '../assets/img/soon.gif';

 

const CustomGrab = () => {
  return (
    <section className="grab" id="grab">
        <Container>
            <div className='grab-bx'>
                <Row>
                    <Col>
                        <Player
                            src='https://assets9.lottiefiles.com/packages/lf20_lusca6rn.json'
                            className="player"
                            loop
                            autoplay
                            style={{ height: '150px', width: '150px' }}
                        />
                    </Col>
                    <Col>
                        <h2 className='judul'>
                            GrabFood
                        </h2>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <h6>PasarMayestik</h6>
                        <a href='https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C3MZR2ABNGCWRE&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C3MZR2ABNGCWRE&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload'>
                            <img src={clickme} className='clickme' alt='button'/>
                        </a>
                    </Col>
                    <Col>
                        <h6>GadingFestival</h6>
                        <a href='https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C3MERPUXN33TKA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C3MERPUXN33TKA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload'>
                            <img src={clickme} className='clickme' alt='button'/>
                        </a>
                    </Col>
                </Row>
                <Row className='sekat'>
                    <Col>
                        <h6>ITCManggaDua</h6>
                        <a href='www.google.com'>
                            <img src={soon} className='clickme' alt='comingsoon'/>
                        </a>
                    </Col>
                    <Col>
                        <h6>Ciracas</h6>
                        <a href='www.google.com'>
                            <img src={soon} className='clickme' alt='comingsoon'/>
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default CustomGrab