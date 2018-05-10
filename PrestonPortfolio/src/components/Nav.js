import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'third', 'forth', 'footer'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">About Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Skills</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Projects</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="third">
                    <a href="#">Work Experience</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="forth">
                    <a href="#">Education</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="footer">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
