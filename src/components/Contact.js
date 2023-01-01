import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from "../styles/Button";

const ContactFormWrapper = styled.section`
  padding: 50px;
  text-align: center;
`;

const ContactFormTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
`;

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ContactFormInput = styled.input`
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

const ContactFormTextarea = styled.textarea`
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
  resize: none;
`;


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate form and send data to server
    };

    return (
        <ContactFormWrapper>
            <ContactFormTitle>Contact Us</ContactFormTitle>
            <ContactForm onSubmit={handleSubmit}>
                <ContactFormInput
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                    required
                />
                <ContactFormInput
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    required
                />
                <ContactFormInput
                    type="text"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Subject"
                    required
                />
                <ContactFormTextarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Message"
                    required
                />
                <Button type="submit">Send Message</Button>
            </ContactForm>

        </ContactFormWrapper>
    );
};

export default Contact;
