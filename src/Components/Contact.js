import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(formDetails.nome.trim().length!== 0 && formDetails.message.trim().length !== 0 && formDetails.email.trim().length !== 0){
      setButtonText("Enviando...");
      emailjs.sendForm('service_ellnlfh', 'template_92l6g9v', form.current, 'ctoNrpkvEZH01BCbQ')
      .then((result) => {
        setStatus({ succes: true, mensagem: 'Mensagem enviada com sucesso' });
        setButtonText("Enviar");
      
      }, (error) => {
        setStatus({ succes: false, mensagem: 'Algo deu errado :c tente novamente mais tarde.' });
        setButtonText("Enviar");
        
      });
    }else {
      setStatus({ succes: false, mensagem: 'Preencha todos os campos.' });
    }
    
  };

  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Medium%20Skin%20Tone.png" alt="Waving Hand Medium Skin Tone"  />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div >
                  <h2>Não esqueça de mandar uma mensagem</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input id="nome" type="text" name="user_name" value={formDetails.firstName} placeholder="Nome" onChange={(e) => onFormUpdate('nome', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input id="email" type="email" name="user_email" placeholder="Seu email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea id="message" name="message" rows="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col >
                      {
                        status.mensagem &&
                        <Col size={12} sm={12} className="px-1">
                          <p className={status.success === false ? "danger" : "success"}>{status.mensagem}</p>
                          
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;