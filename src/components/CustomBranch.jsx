import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import man from '../assets/img/man.gif';
import pin from '../assets/img/pin.gif';
import down from '../assets/img/down.gif';


const CustomBranch = () => {
  return (
    <section className="branch" id="branch">
        <Container>
        <div className='branch-bx'>
          <Row>
              <Col>
                <img src={man} className='mangif' alt='logo-man'/>
              </Col>
              <Col>
                <h2 className='judulbranch'>
                    Branches
                </h2>
                <p>Click for direction! <img src={down} className='downgif' alt='logo-down'/></p>
              </Col>
          </Row>
          {/* <Row>
            <h6>Press for the map</h6>
          </Row> */}
          <Row>
            <div className='card'>
              <a href='https://goo.gl/maps/fNhWX2w2yopUhnCKA'>
                <img src={pin} className='gif' alt='pinmap'/>
                <span><strong>Gading Festival</strong></span>
              </a>
              <a href='https://goo.gl/maps/cwTui4ZuY9ARRBwRA'>
                <img src={pin} className='gif' alt='pinmap'/>
                <span><strong>Pasar Mayestik</strong></span>
              </a>
              <a href='https://goo.gl/maps/P3E7TmSkSFFY24qV8'>
                <img src={pin} className='gif' alt='pinmap'/>
                <span><strong>ITC Mangga Dua</strong></span>
              </a>
              <a href='https://goo.gl/maps/hbCLTYXFGr5Ew5by6'>
                <img src={pin} className='gif' alt='pinmap'/>
                <span><strong>Ciracas</strong></span>
              </a>

            </div>
          </Row>
          </div>
        </Container>
    </section>
  )
}

export default CustomBranch