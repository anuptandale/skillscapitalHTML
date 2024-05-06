// Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, useMediaQuery } from '@mui/material';
import { navLinks } from '@/constants/commonStyle';
import CustomButton from '@/components/atoms/button';
import css from "../../../styles/best.module.css";
import Image from 'next/image';
import { useRouter } from "next/router";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar: React.FC = () => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width: 960px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const handleSignInButton = () => {
    router.push('/signin')
  };



  return (

    // <div id={css.navbarContainer}>
    //   <Box component="div" >
    //     <Link href="/">
    //       <Image
    //         src="/HomePageImages/SkillsCapitalLogo.png"
    //         width={170}
    //         height={50}
    //         alt="WorldImg"
    //       />
    //     </Link>
    //   </Box>
    //   <div style={{ display: "flex" }}>
    //     <div>
    //       <Link href="/" style={navLinks}>
    //         Home
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/hire-sap-talent" style={navLinks}>
    //         Hire SAP Talent
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/hire-specialized-talent" style={navLinks}>
    //       Hire Specialized Talent
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/sap-talent-pool" style={navLinks}>
    //         SAP Talent Pool
    //       </Link>
    //     </div>
    //     <div><div className={css.dropdown}>
    //       <button className={css.dropbtn}>Company <KeyboardArrowDownIcon/>
    //         <i className={`${css.fa} ${css["fa-caret-down"]}`}></i>
    //       </button>
    //       <div className={css.dropdownContent}>
    //       <Link href="/about-us">About Us</Link>
    //         <Link href="/leadership">Leadership Team</Link>
    //         <Link href="/vetting">Vetting Process</Link>
    //         <Link href="/contact-us">Contact Us</Link>
    //       </div>
    //     </div> </div>
        
    //     {/* <div>
    //       <Link href="/leadership" style={navLinks}>
    //         Leadership
    //       </Link>
    //     </div>
    //     <div>
    //       <Link href="/contact-us" style={navLinks}>
    //         Contact Us
    //       </Link>
    //     </div> */}
    //   </div>
    //   {/* <Link href="/talent-pool" style={navLinks}>
    //     Talent Pool
    //   </Link>
    //   <Link href="/vetting" style={navLinks}>
    //     Vetting
    //   </Link>
    //   <Link href="/about" style={navLinks}>
    //     About
    //   </Link>
    //   <CustomButton label='SignIn/SignUp' disabled={false} onClick={handleSignInButton} buttonStyle={{ margin: '15px' }} /> */}

    // </div>
    <div>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
      <link href="css/fonts.css" rel="stylesheet" />
      <link href="css/reset.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <header className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="navbar-brand" href="index.html">
            <img src="/images/SkillsCapitalLogo.png" alt="skillCapital" height="50" />
          </a>

          {/* <!-- Menu Button (for mobile) --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Menu Items --> */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {/* <!-- <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>  --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" aria-haspopup="true" aria-expanded="false">Hire Elite Talent</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  <a className="dropdown-item" href="hire-sap-talent">Hire SAP Talent</a>
                  <a className="dropdown-item" href="hire-specialized-talent">Hire Specialized Talent</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="gobal-elastic-teams.html">Global Elastic Teams</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" aria-haspopup="true" aria-expanded="false">SAP Talent Solutions</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  <a className="dropdown-item" href="hire-sap-talent">Hire Top SAP Talent</a>
                  <a className="dropdown-item" href="sap-talent-pool.html">SAP Talent Pool</a>
                  <a className="dropdown-item" href="#">SAP Custom Solutions</a>
                  <a className="dropdown-item" href="#">SAP Elite Consulting</a>
                  <a className="dropdown-item" href="sap-portal-hub.html">SAP Portal Hub</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" aria-haspopup="true" aria-expanded="false">Company</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  <a className="dropdown-item" href="aboutus.html">About Us</a>
                  <a className="dropdown-item" href="leadership.html">Leadership Team</a>
                  <a className="dropdown-item" href="vetting-process.html">Vetting Process</a>
                  <a className="dropdown-item" href="#">Careers</a>
                  <a className="dropdown-item" href="contactus.html">Contact Us</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://talent.skillscapital.io/clientportal">Client Login</a>
              </li>
              {/* <!-- <li className="nav-item">
                <a className="nav-link" href="contact-us.html">Contact Us</a>
              </li> --> */}
            </ul>
          </div>
        </div>
      </header>
    </div>

  );
};

export default Navbar;
