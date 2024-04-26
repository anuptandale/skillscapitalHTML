import React from 'react'
import { useState, useEffect } from 'react';
import css from "../../styles/subreq.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import { FooterPageText, SubreqPageText } from '@/constants/texts';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from "../../styles/contactPageStyle.module.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Navbar from '@/components/molecules/navbar';
import FotterComponent from '@/components/molecules/Fotter';
import emailjs from 'emailjs-com';
import Letstalk from '@/components/molecules/Contact';
const Contact = () => {
    const [reci, setRecipient] = useState('');
    const [body, setBody] = useState('');
    const onSendMail = () => {
        const recipient = reci;
        const subject = 'Subject of the email';
        const Body = body;
        console.log('ABc', reci);
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(Body)}`;
        const anchor = document.createElement('a');
        // anchor.href = mailtoUrl;
        // anchor.click();
        // window.open
        setTimeout(() => {
            window.open(mailtoUrl, '_blank');
        }, 100);
    }
    const handleInputChange = (e: any) => {
        console.log(e.target.value)
        setRecipient(e.target.value);
    }

    const handleBody = (e: any) => {
        console.log(e.target.value);
        setBody(e.target.value);
    }
    return (
        <div>
            <Navbar />
            {/* <div className={style.step2container}>

            <div className={style.step2innercontainer}>
                <div className={style.leftContainet} >
                    <div className={style.heading}>Lets get in touch</div>
                    <div className={style.coninfo}>
                        <div className={style.flex}><LocationOnIcon/> {FooterPageText.address1} {FooterPageText.address2}</div>
                        <div className={style.flex}><EmailIcon/> {FooterPageText.email}</div>
                       
                    </div>
                    <div  className={style.coninfo2}>
                        <a href="#" className={css.socialIcon}>
                            <TwitterIcon sx={{ color: "black" }} />
                        </a>
                        <a href="#" className={css.socialIcon}>
                            <FacebookIcon sx={{ color: "black" }} />
                        </a>
                        <a href="#" className={css.socialIcon}>
                            <InstagramIcon sx={{ color: "black" }} />
                        </a>
                        <a href="https://www.linkedin.com/company/skillscapital/" target="_blank" className={css.socialIcon}>
                            <LinkedInIcon sx={{ color: "black" }} />
                        </a>
                        
                    </div>
                </div>
                <div className={css.fieldcontainer}>
                    <div className={css.fieldinnercontainer}>
                        <div className={css.enterdetails} >Enter Details</div>
                        <div>
                            <div className={css.namecontainer}>Name*</div>
                            <TextField
                                placeholder="Enter Your Name"
                                name="Name"
                                sx={{ width: "300px" }}
                            
                            />
                        </div>
                        <div>
                            <div className={css.namecontainer}>Email*</div>
                            <TextField
                                placeholder="Enter Your Email"
                                name="Email"
                                sx={{ width: "300px" }}
                            
                               onChange={handleInputChange}
                            
                            />
                        </div>
                        <div>
                            <div className={css.namecontainer}>Message*</div>
                            <TextField
                                placeholder="Message"
                                name="message"
                                sx={{ width: "300px" }}
                            
                               onChange={handleBody}
                            
                            />
                            
                        </div>
                        <Button
                            onClick={onSendMail} 
                            style={{ width: "190px", padding: "15px 15px", borderRadius: "45px" }}
                            variant="contained">
                            send
                        </Button>
                    </div>
                </div>
            </div>
        </div> */}
            <Letstalk />

            <section className={style.addressMostOuter} >
                <div style={{fontSize:"32px",fontWeight:"600"}}>Our Offices</div>
                <div className={style.addressOuter}>
                    <div className={style.eachaddress}>
                        <div style={{fontSize:"25px",fontWeight:"600",color:"#2871FF"}}>US OFFICE</div>
                        <div>
                            <div>5580 Merlin Court</div>
                            <div>Avila Beach. CA 93424</div>
                            <div>California, United States</div>
                        </div>
                    </div>
                    <div className={style.eachaddress}>
                        <div style={{fontSize:"25px",fontWeight:"600",color:"#2871FF"}}>UK OFFICE</div>
                        <div>
                            <div>145-157 St John Street,</div>
                            <div>London, EC1V 4PY</div>
                            <div>United Kingdom</div>
                        </div>
                    </div>
                    <div className={style.eachaddress}>
                        <div style={{fontSize:"25px",fontWeight:"600",color:"#2871FF"}}>GERMANY OFFICE</div>
                        <div>
                            <div>Griebenowstr. 10-11</div>
                            <div>10435 Berlin</div>
                            <div>Germany</div>
                        </div>
                    </div>
                </div>
                <div className={style.addressOuter}>
                    <div className={style.eachaddress}>
                        <div style={{fontSize:"25px",fontWeight:"600",color:"#2871FF"}}>BELGIUM OFFICE</div>
                        <div>
                            <div>Stoachup</div>
                            <div>Rue du Stampia 35</div>
                            <div>5310 Eghezée</div>
                            <div>Belgium</div>
                        </div>
                    </div>
                    <div className={style.eachaddress}>
                        <div style={{fontSize:"25px",fontWeight:"600",color:"#2871FF"}}>BRAZIL OFFICE</div>
                        <div>
                            <div>Rua Theodoro Makiolka, 1239</div>
                            <div>Stanta Cândida</div>
                            <div>82640-010 Curitiba, Paraná</div>
                            <div>Brazil</div>
                        </div>
                    </div>
                    <div className={style.eachaddress}>
                        <div style={{fontSize:"25px",fontWeight:"600",color:"#2871FF"}}>INDIA OFFICE</div>
                        <div>
                            <div>B1/H3, Mohan Estate,</div>
                            <div>Industrial Area,</div>
                            <div>New Delhi - 110044</div>
                            <div>India</div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <FotterComponent />
            </div>
        </div>
    )
}

export default Contact;
