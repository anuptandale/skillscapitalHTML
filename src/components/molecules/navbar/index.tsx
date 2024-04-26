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

    <div id={css.navbarContainer}>
      <Box component="div" >
        <Link href="/">
          <Image
            src="/HomePageImages/SkillsCapitalLogo.png"
            width={170}
            height={50}
            alt="WorldImg"
          />
        </Link>
      </Box>
      <div style={{ display: "flex" }}>
        <div>
          <Link href="/" style={navLinks}>
            Home
          </Link>
        </div>
        <div>
          <Link href="/hire-sap-talent" style={navLinks}>
            Hire SAP Talent
          </Link>
        </div>
        <div>
          <Link href="/hire-specialized-talent" style={navLinks}>
          Hire Specialized Talent
          </Link>
        </div>
        <div>
          <Link href="/sap-talent-pool" style={navLinks}>
            SAP Talent Pool
          </Link>
        </div>
        <div><div className={css.dropdown}>
          <button className={css.dropbtn}>Company <KeyboardArrowDownIcon/>
            <i className={`${css.fa} ${css["fa-caret-down"]}`}></i>
          </button>
          <div className={css.dropdownContent}>
          <Link href="/about-us">About Us</Link>
            <Link href="/leadership">Leadership Team</Link>
            <Link href="/vetting">Vetting Process</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div> </div>
        
        {/* <div>
          <Link href="/leadership" style={navLinks}>
            Leadership
          </Link>
        </div>
        <div>
          <Link href="/contact-us" style={navLinks}>
            Contact Us
          </Link>
        </div> */}
      </div>
      {/* <Link href="/talent-pool" style={navLinks}>
        Talent Pool
      </Link>
      <Link href="/vetting" style={navLinks}>
        Vetting
      </Link>
      <Link href="/about" style={navLinks}>
        About
      </Link>
      <CustomButton label='SignIn/SignUp' disabled={false} onClick={handleSignInButton} buttonStyle={{ margin: '15px' }} /> */}

    </div>

  );
};

export default Navbar;
