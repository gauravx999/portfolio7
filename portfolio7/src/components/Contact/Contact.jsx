import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          'service_ya8ee6f',        // Replace with your own service ID
          'template_b5ldfgl',       // Replace with your own template ID
          form.current,
          'QFChaXxKSVRapaOqf'       // Replace with your own public key
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFormData({
              from_name: '',
              reply_to: '',
              message: ''
            });
            form.current.reset(); // Clears form fields
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && 'Please, fill all the input fields'}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done &&
                'Thanks for contacting me! I’ve received your message. Feel free to connect with me on LinkedIn too.'}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
