import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Avatar from '../assets/avatar.jpg'

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../css/GlobalStyles";
import { lightTheme, darkTheme } from "../css/Themes"
import { CgSun } from 'react-icons/cg';
import { BiMoon } from 'react-icons/bi';

export default function Navigation() {

  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(stored === "true" ? true : false);
 
  const navItems = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Education',
      href: '#education',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Achievements',
      href: '#achievements',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar
        collapseOnSelect
        variant='dark'
        expand='lg'
        className='fixed-top'
        id='sideNav'
      >
        <Navbar.Brand onClick={() => (window.location = '/#about')}>
          <div className='d-flex flex-row p-1'>
            <span className='d-block d-lg-none ps-2'>Sagnik Ghosh</span>
            <span className='d-block d-lg-none ps-3'>
              <div className="SunMoon" onClick={() => setIsDarkMode(!isDarkMode)}>
                <div>{isDarkMode === true ? <CgSun color='#ffc107' size='2rem' /> : <BiMoon color="#007BFF" size='2rem' />}</div>
              </div>
            </span>
          </div>
          <span className='d-none d-lg-block'>
            <motion.img
              className='img-fluid img-profile rounded-circle mx-auto mb-2'
              src={Avatar}
              alt='Sagnik Ghosh'
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.1}
            />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            {navItems.map((navItem, index) => (
              <Nav.Link href={navItem.href} key={index}>
                {navItem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <span className='d-none d-lg-block pb-5'>
          <div
            className="SunMoon"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("isDarkMode", !isDarkMode);
            }}
          >
            <div>{isDarkMode === true ? <CgSun color='#ffc107' size='2rem' /> : <BiMoon color="#007BFF" size='2rem' />}</div>
          </div>
        </span>
      </Navbar>
    </ThemeProvider>
  )
}