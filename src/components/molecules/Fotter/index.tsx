// components/Footer.js

import React from "react";
import css from "./../../../styles/best.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import { FooterPageText } from "@/constants/texts";

const FotterComponent = () => {
  return (
    <footer className={css.footer}>
      {/* 1st Division */}
      <div id={css.division1}>
        <div>
          <div>Skills Capital</div>
        </div>
        <div  >
          <a href="#" id={css.socialIcon}>
            <TwitterIcon sx={{ color: "white" }} />
          </a>
          <a href="#" id={css.socialIcon}>
            <FacebookIcon sx={{ color: "white" }} />
          </a>
          <a href="#" id={css.socialIcon}>
            <InstagramIcon sx={{ color: "white" }} />
          </a>
          <a href="https://www.linkedin.com/company/skillscapital/" target="_blank" id={css.socialIcon}>
            <LinkedInIcon sx={{ color: "white" }} />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>

      {/* 2nd Division */} 
      <div id={css.division}>
        <div className={css.heading}>Pages</div>
        <li className={css.li2}>
          <Link href="/"  id={css.site}>
            Home
          </Link>
        </li>

        <li className={css.li2}>
          <Link href="/hire-sap-talent" id={css.site} >
            Hire SAP Talent
          </Link>
        </li>
        <li className={css.li2}>
          <Link href="/hire-sap-talent" id={css.site} >
          Hire Specialized Talent
          </Link>
        </li>
        <li className={css.li2}>
          <Link href="/sap-talent-pool" id={css.site} >
            SAP Talent Pool
          </Link>
        </li>
        <li className={css.li2}>
          <Link href="/about-us" id={css.site} >
            About Us
          </Link>
        </li>
        <li className={css.li2}>
          <Link href="/leadership" id={css.site} >
            Leadership Team
          </Link>
        </li>
        <li className={css.li2}>
          <Link href="/vetting" id={css.site} >
            Vetting Process
          </Link>
        </li>
        
        
        <li className={css.li2}>
          <Link href="/contact-us" id={css.site}>
            Contact Us
          </Link>
        </li>
        
        {/* <li>
          <Link href="/talent-pool" >
            Talent Pool
          </Link>
        </li>
        <li>
          <Link href="/vetting"  >
            Vetting
          </Link>
        </li>
        <li>
          <Link href="/about" >
            About
          </Link>
        </li> */}
      </div>

      {/* 3rd Division */}
      <div id={css.division}>
        <div style={{color:"white",fontSize:"30px",fontWeight:"900"}}>Tech Specialties</div>

        {/* <li>
          <Link href="/talent-pool#faq" >
            {FooterPageText.servicesPoint1}
          </Link>
        </li> */}
        <p>SAP</p>
        <p>Cloud & DevOps</p>
        <p>Legacy Tech</p>
        <p>AI/ML</p>
        {/* <p>{FooterPageText.servicesPoint2}</p>
        <p>{FooterPageText.servicesPoint3}</p> */}
      </div>
      {/* 4th Division */}
      <div id={css.division}>
        <div className={css.heading}>Contact</div>
        {/* <p>{FooterPageText.phone}</p> */}
        <p>{FooterPageText.email}</p>
        <div>Address: <div style={{ fontSize: "16px" }}><div>{FooterPageText.address1}</div>
          <div>{FooterPageText.address2}</div>
          <div>{FooterPageText.address3}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FotterComponent;
