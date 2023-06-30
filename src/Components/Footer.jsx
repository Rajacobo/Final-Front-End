import React from 'react'
import faceIcon from '../images/ico-facebook.png'
import dh from '../images/DH.png'
import wapp from '../images/ico-whatsapp.png'
import ig from '../images/ico-instagram.png'
import tik from '../images/ico-tiktok.png'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <a href="https://www.digitalhouse.com" target='blank'><img className = 'dhicon' src={dh} alt='DH-logo' /></a>
        <a href="https://www.fb.com" target='blank'><img className = 'icon' src={faceIcon} alt='fbIcon'/></a>
        <a href="https://www.whatsapp.com" target='blank'><img className = 'icon' src={wapp} alt='wappIcon'/></a>
        <a href="https://www.instagram.com" target='blank'><img className = 'icon' src={ig} alt='igIcon'/></a>
        <a href="https://www.tiktok.com" target='blank'><img className = 'icon' src={tik} alt='tikIcon'/></a>
    </footer>
  )
}

export default Footer
