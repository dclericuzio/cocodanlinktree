import React from 'react'
import {Row, Container, Col} from 'react-bootstrap';
import clickme from '../assets/img/clickme.gif';
import gojek from '../assets/img/gojek.gif';
import soon from '../assets/img/soon.gif';
 

const CustomGo = () => {
  return (
    <section className="go" id="gojek">
        <Container>
            <div className='go-bx'>
                <Row>
                    <Col>
                        <img src={gojek} className='gojekgif' alt='logo-gojek'/>
                    </Col>
                    <Col>
                        <h2 className='judul'>
                            GoFood
                        </h2>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <h6>PasarMayestik</h6>
                        <a href='https://gofood.link/a/EHM7S95'>
                            <img src={clickme} className='clickme' alt='button'/>
                        </a>
                    </Col>
                    <Col>
                        <h6>GadingFestival</h6>
                        <a href='https://gofood.link/a/ECArJ5L'>
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
                        <a href='https://gofood.link/a/ELuQ6J1'>
                            <img src={clickme} className='clickme' alt='button'/>
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default CustomGo