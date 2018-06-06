import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
            <h2><span className="pink">Contact</span></h2>
                <h4> Preston Thomas McNabb </h4>
                <h4>Austin  &bull;  Texas </h4>
                <h4>(361) 944-0515</h4>
                <p><a href="mailto:prestonmcnabb22@gmail.com">prestonmcnabb22@gmail.com</a></p>

            
            
            <ul className="icons">
                <li><a href="https://www.facebook.com/preston.mcnabb?" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/prestonmcnabb/?" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/prestonmcnabb/" className="icon fa-linkedin alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/pmcnabb1993" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        
        <p className="copyright">Let's Grab Coffee. <a className="icon fa-coffee"></a></p>
        <p className="copyright">Built with ❤️ using GatsbyJS</p>
    </footer>
)

export default Footer
