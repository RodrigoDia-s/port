import { Col, Row, Alert } from "react-bootstrap";
import fotoGit from '../assets/img/WhatsApp_Image_2023-05-16_at_16.23.44-removebg-preview.png';
import phone from '../assets/img/phone-solid.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
export const MailchimpForm = () => {


  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={true} align="left" >
            <div className='home-handle'>
              <img src={fotoGit} />
            </div>
          </Col>
          
          <Col className="align-me">
          <div className="social-icon-oposity">
              <a href="https://www.linkedin.com/in/rodrigo-dias-oliver/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/RodrigoDia-s"><img src={navIcon2} alt="" /></a>
            </div>
          </Col>
          <Col className="align-me">

            <div className="icon-phone">
              <img src={phone} />
            </div>
            <h5>+55 11 979514280</h5>

          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <h4>Rodrigo Oliveira</h4>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default MailchimpForm;