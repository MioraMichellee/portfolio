import { useRef, useState } from "react"
import contactImg from "../assets/img/Miora.png"
import emailjs from '@emailjs/browser';
import { Container,Col,Row } from "react-bootstrap";

export const Contact = () => {
    const form = useRef()
    const formInitialDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})

    const onFormUpdate = (categorie, value) =>{
        setFormDetails({
            ...formDetails,
            [categorie]:value
        })
    }

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nq9j0ac', 'template_ia3mc0q', form.current, {
        publicKey: 'cDEMDGDv06OsDuUwX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        //   setModalSucces(true)
          // navigate('/ThankYou')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
        
    

    return (
        <>
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    
                    <Col md={6}>
                        <h2>Get In Touch </h2>
                      
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                            <Col sm={6} className="px-1">
                                <input id="user_name" type="text" name="from_name" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input id="user_email" type="email" name="user_email" value={formDetails.email} placeholder="email " onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Tel " onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <textarea  id="message" row="6" name="message"  value={formDetails.message} placeholder="Message " onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                {/* <button type="submit"><span>{buttonText}</span></button> */}
                                <input type="submit" value="Send" className="submit"/>
                            </Col>
                            {/* {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            } */}
                            </Row>
                        </form>
                    </Col>
                    <Col className="align-items-center" md={6}>
                    <div class="absolute blur blur3"></div>
                        <img src={contactImg} alt="Contact us"/>
                    </Col>
                </Row>
            </Container>

        </section>
        </>
    )
}