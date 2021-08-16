import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/Sagnik Resume.pdf"
import SGCartoon from "../assets/sagnik_cartoon.png"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/sagnik-ghosh-564574199",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/sagnikghoshcr7",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/sagnikghoshcr7",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=100036939404474",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/sagnikghoshcr7",
      icon: <FaInstagram />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
            Sagnik
            <span className="text-primary" style={{paddingLeft: '2vw'}}>Ghosh</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Impossible is nothing!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <a href="mailto:sagnikghoshmandra@gmail.com" className='home-mail'>
              sagnikghoshmandra@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Sagnik Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
        I am a third-year undergraduate Information Technology Student at KIIT University. I am amongst the top contributors in Github from India. I am an Full-Stack Intern at Kaglorsys & Flutter Developer Intern at Skillablers, presently leading the Microsoft Student Ambassadors Community KIIT. I am a Machine Learning Enthusiast also. My other interests are DevOps and UI/UX.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
