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
    // <footer className={css.footer}>
    //   {/* 1st Division */}
    //   <div id={css.division1}>
    //     <div>
    //       <div>Skills Capital</div>
    //     </div>
    //     <div  >
    //       <Link href="#" id={css.socialIcon}>
    //         <TwitterIcon sx={{ color: "white" }} />
    //       </Link>
    //       <Link href="#" id={css.socialIcon}>
    //         <FacebookIcon sx={{ color: "white" }} />
    //       </Link>
    //       <Link href="#" id={css.socialIcon}>
    //         <InstagramIcon sx={{ color: "white" }} />
    //       </Link>
    //       <Link href="https://www.linkedin.com/company/skillscapital/" target="_blank" id={css.socialIcon}>
    //         <LinkedInIcon sx={{ color: "white" }} />
    //       </Link>
    //       {/* Add more social media icons as needed */}
    //     </div>
    //   </div>

    //   {/* 2nd Division */} 
    //   <div id={css.division}>
    //     <div className={css.heading}>Pages</div>
    //     <li className={css.li2}>
    //       <Link href="/"  id={css.site}>
    //         Home
    //       </Link>
    //     </li>

    //     <li className={css.li2}>
    //       <Link href="/hire-sap-talent" id={css.site} >
    //         Hire SAP Talent
    //       </Link>
    //     </li>
    //     <li className={css.li2}>
    //       <Link href="/hire-sap-talent" id={css.site} >
    //       Hire Specialized Talent
    //       </Link>
    //     </li>
    //     <li className={css.li2}>
    //       <Link href="/sap-talent-pool" id={css.site} >
    //         SAP Talent Pool
    //       </Link>
    //     </li>
    //     <li className={css.li2}>
    //       <Link href="/about-us" id={css.site} >
    //         About Us
    //       </Link>
    //     </li>
    //     <li className={css.li2}>
    //       <Link href="/leadership" id={css.site} >
    //         Leadership Team
    //       </Link>
    //     </li>
    //     <li className={css.li2}>
    //       <Link href="/vetting" id={css.site} >
    //         Vetting Process
    //       </Link>
    //     </li>
        
        
    //     <li className={css.li2}>
    //       <Link href="/contact-us" id={css.site}>
    //         Contact Us
    //       </Link>
    //     </li>
        
    //     {/* <li>
    //       <Link href="/talent-pool" >
    //         Talent Pool
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/vetting"  >
    //         Vetting
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/about" >
    //         About
    //       </Link>
    //     </li> */}
    //   </div>

    //   {/* 3rd Division */}
    //   <div id={css.division}>
    //     <div style={{color:"white",fontSize:"30px",fontWeight:"900"}}>Tech Specialties</div>

    //     {/* <li>
    //       <Link href="/talent-pool#faq" >
    //         {FooterPageText.servicesPoint1}
    //       </Link>
    //     </li> */}
    //     <p>SAP</p>
    //     <p>Cloud & DevOps</p>
    //     <p>Legacy Tech</p>
    //     <p>AI/ML</p>
    //     {/* <p>{FooterPageText.servicesPoint2}</p>
    //     <p>{FooterPageText.servicesPoint3}</p> */}
    //   </div>
    //   {/* 4th Division */}
    //   <div id={css.division}>
    //     <div className={css.heading}>Contact</div>
    //     {/* <p>{FooterPageText.phone}</p> */}
    //     <p>{FooterPageText.email}</p>
    //     <div>Address: <div style={{ fontSize: "16px" }}><div>{FooterPageText.address1}</div>
    //       <div>{FooterPageText.address2}</div>
    //       <div>{FooterPageText.address3}</div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <div>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
      <link href="css/fonts.css" rel="stylesheet" />
      <link href="css/reset.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 footerheader">
                  <h5>Pages</h5>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="hire-sap-talent">Hire SAP Talent</Link></li>
                    <li><Link href="hire-specialized-talent">Explore Specialized Talent</Link></li>
                    <li><Link href="gobal-elastic-teams.html">Global Elastic Teams</Link></li>
                    <li><Link href="vetting-process.html">Vetting Process</Link></li>
                    <li><Link href="leadership-team.html">Leadership Team</Link></li>
                    <li><Link href="contact-us.html">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 footerheader">
                  <h5>Tech Specialties</h5>
                  <ul>
                    <li><Link href="">Tech Specialties</Link></li>
                    <li><Link href="">SAP</Link></li>
                    <li><Link href="">Cloud &amp; DevOps</Link></li>
                    <li><Link href="">Legacy Tech</Link></li>
                    <li><Link href="">AI &amp; ML</Link></li>

                  </ul>
                </div>
                <div className="col-md-4 footerheader">
                  <h5>Contact</h5>
                  <ul>
                    <li><Link href="">Email: contact@skillscapital.io</Link></li>
                    <li>Address:<br />B1/H3, NH-19, Block B,<br />Mohan Cooperative Industrial<br /> Estate, New Delhi, 110044,<br />India</li>

                  </ul>
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-12 copyright">
                  <p>&copy; 2024 skills Capital. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
};

export default FotterComponent;
