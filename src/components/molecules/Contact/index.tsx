import React, { useState } from 'react'
import css from "../../../styles/sapTalentStyle.module.css";
import { Button } from '@mui/material';
const Letstalk = () => {
    const [reci,setRecipient]=useState('');
    const [body,setBody]=useState('');
    const onSendMail=()=>{
        const recipient = reci;
        const subject = 'Subject of the email';
        const Body = body;
        console.log('ABc',reci);
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(Body)}`;
        const anchor = document.createElement('a');
        // anchor.href = mailtoUrl;
        // anchor.click();
        // window.open
        setTimeout(() => {
            window.open(mailtoUrl, '_blank');
          }, 100);
    }
    const handleInputChange=(e:any)=>{
        console.log(e.target.value)
        setRecipient(e.target.value);
    }

    const handleBody=(e:any)=>{
        console.log(e.target.value);
        setBody(e.target.value);
    }
    return (
        <div>
            <div id={css.contactOuter}>
                <div style={{fontSize:"23px", fontWeight:"600"}}>LET&apos;S TALK</div>
                <div style={{opacity:"0.7"}}>Get in touch with us today to explore how our specialized tech ecosystem platform can elevate your business</div>
                <form id={css.formDesign}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <label htmlFor="fname">*First name</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname"  />
                        </div>
                        <div>
                            <label htmlFor="fname">*Last name</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname"  />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <label htmlFor="fname">*Email</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname"  />
                        </div>
                        <div>
                            <label htmlFor="fname">Phone</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname"  />
                        </div>
                    </div>
                    
                    <div>
                        <div className={css.namecontainer}>Message*</div>
                        <textarea className={css.inputTag} name="message" cols={46} rows={3} style={{ height: "100px", width: "730px", borderColor: "lightgray", borderRadius: "5px" }} ></textarea>

                    </div>
                    <Button
                         type='submit'
                        style={{ width: "190px", padding: "15px 15px", borderRadius: "5px" }}
                        variant="contained">
                        Submit
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default Letstalk;
