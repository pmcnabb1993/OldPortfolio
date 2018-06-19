import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Img from "gatsby-image";
import Project from '../components/Project'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import GithubCorner from 'react-github-corner';

import weatherapp from '../assets/images/weatherapp.png'
import LIRI from '../assets/images/LIRI.png'
import MetroTracker from '../assets/images/MetroTracker.png'
import giphy from '../assets/images/giphy.png'
import TypeSearch from '../assets/images/TypeSearch.png'
import BurgerApp from '../assets/images/BurgerApp.png'
import MarioApp from '../assets/images/MarioApp.png'
import Dolo from '../assets/images/Dolo.png'
import FriendFinder from '../assets/images/LiveAthlete.png'
import LiveAthlete from '../assets/images/LiveAthlete.png'
import StrangerTrivia from '../assets/images/StrangerTrivia.png'
import skills from './skills.js'
import Profile from '../assets/images/Profile.png'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <section id="landing">
        <Header />
        </section>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <h3>Hey, I'm Preston.</h3>

                <p>I recently completed the full stack coding program at The University of Texas at Austin. 
                I have experience developing and designing software for the web, from simple landing pages to progressive web applications. 
                I enjoy being the bridge between engineering and design, and feel right at home as a front end engineer. </p>


                <p>When I'm not in front of a computer screen, I am probably biking around town taking photography,
                trying out new restaurants and coffee shops, or crossing off another national park off my bucket list.</p>

                <h3 class="intro__contact">
                <span>Get in touch </span> 
                <a className="icon fa-hand-o-right"></a>
                <span>  <a href="mailto:prestonmcnabb22@gmail.com" target="_blank" class="highlight-link">  prestonmcnabb22@gmail.com </a> 
                </span> 
                </h3>
                
              </div>
              <span className="image"><img src={Profile} alt="" /></span>
            </div>

            <header className="major">
                  <h2>Education</h2>
                </header>
                <div className="education">
                <div className="content">
                  <div className="utitle">The University of Texas at Austin</div>
                  <div className="college">UT Austin Software Development Program</div>
                  <div className="major">Center for Professional Education</div>
                  <div className="grad-date">Completion: May 2018</div>
                </div>
                <br></br>
                <div className="content">
                  <div className="utitle">The University of Texas at Austin</div>
                  <div className="college">Moody College of Communication</div>
                  <div className="major"><strong>Major:</strong> Bachelor of Science in Communications: Radio/TV/Film</div>
                  <div className="minor"><strong>Minor:</strong> Business Foundations</div>
                  <div className="grad-date">Graduation: May 2016</div>
                </div>
              </div>
          </section>

          <section id="first" className="main special">
         
          <header className="major">
          <div className="right">
            
            <h2>Skills and Experience</h2>
              <div className="skills">
                <div className="content">
                  <div className="skill-category">
                    <h3><strong>Languages: &nbsp;</strong></h3>
                    <span>JavaScript, HTML5, CSS3, Sass</span>
                  </div>
                  <div className="skill-category">
                  <h3><strong>Development: </strong></h3>
                  <span>React, Node.js, JQuery, npm, Yarn, MongoDB, Firebase, SQL</span>
                  </div>
                  <div className="skill-category">
                  <h3><strong> Frameworks: </strong></h3>
                  <span>Bootstrap, Bulma, Materialize </span>
                  </div>
                  <div className="skill-category">
                  <h3><strong> Dev Tools: &nbsp;</strong></h3>
                  <span>Github, Command Line, Terminal/iTerm, Chrome DevTools, VS Code</span>
                  </div>
                  <div className="skill-category">
                  <h3><strong> Design: </strong></h3>
                  <span>Adobe Photoshop, Illustrator, Lightroom </span>
                  </div>
                </div>
            </div>
            <h2></h2>
            <div className="skills">
                <div className="content">
                  <div className="skill-category">
                    <div className="job">
                      <div className="ctitle">Luxe</div>
                      <div className="duration">August 2016 &mdash; June 2017</div>
                    </div>
                    <div className="title">Logistics and Operations Coordinator</div>
                    <ul className="description">
                      <li>Oversaw quality assurance and troubleshooting for our proprietary, in-house built logistics platform and app.</li>
                      <li>Responsible for the day-to-day live operations, which included the managing of a large workforce, strategic problem solving, lot and asset inventory, customer escalations and in-field troubleshooting.</li>
                      <li>Communicated cross functionally with 5 city operations teams, in field supervisors and General Managers, overseeing an internal dispatch system to manage everyday logistics.</li>
                      <li>Managed incoming calls and was responsible for solving the technical support needs of our customers and employees.</li>
                      <li>Collaborated with customer service teams to resolved customer issues in a clear, courteous and timely manner.</li>
                      <li>Worked closely with product and engineering teams to constantly improve our internal processes and software.</li>
                    </ul>
                  </div>
                  <a class="resume" href="http://preston.mcnabb.com/resume.pdf" target="_blank" data-reactid=".0.1.0.5">
                  <div class="resume-link" data-reactid=".0.1.0.5.0">Grab a PDF of my full resume</div>
                  </a>
                </div>
              </div>
          </div>
          </header>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
              <Project
                  src={Dolo}
                  colour="#FFFFFF"
                  title="Donation Location"
                  link="http://www.dolo.io/"
                  timeperiod="HTML5 - CSS - Bulma Framework - Javascript - MongoDB - MySQL "
                  subtitle="An application that allows indivudual users and non-profit
                  organizations to post donations or request donations. "
                /> 
              </li>
              <li>
              <Project
                  src={LiveAthlete}
                  colour="#FFFFFF"
                  title="Live Athlete"
                  link="https://gitdarren.github.io/LiveAthlete/"
                  timeperiod="HTML5 - CSS - Materialize - Javascript - Firebase - Google Authentication"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                /> 
              </li>
              <li>
              <Project
                  src={weatherapp}
                  colour="#FFFFFF"
                  title="Weather App"
                  link="https://preston-weather-app.herokuapp.com/"
                  timeperiod="HTML5 - CSS - Javascript - OpenWeatherAPI - GoogleMaps API"
                  subtitle="A Simple weather app using the OpenWeatherMap API 
                  to get weather and forecast data for a searched location."
                />
              </li>

              <li>
              <Project
                  src={MetroTracker}
                  colour="#FFFFFF"
                  title="Metro Tracker"
                  link="https://preston-weather-app.herokuapp.com/"
                  timeperiod="HTML5 - CSS - Javascript - Bootstrap"
                  subtitle="A platform for tracking the fake metro lines of Austin Texas."
                />
              </li>
              
              <li>
              <Project
                  src={BurgerApp}
                  colour="#FFFFFF"
                  title="Burger Menu"
                  link=" https://preston-burger-app.herokuapp.com/"
                  timeperiod="HTML5 - CSS - Javascript - MySQL - Express.js"
                  subtitle="BurgerApp is a simple application that lets the user 
                  log and update new menu items. Which in this case happens to be burgers."
                />
              </li>
              <li>
              <Project
                  src={giphy}
                  colour="#FFFFFF"
                  title="Giph-tastic"
                  link="https://pmcnabb1993.github.io/giphy_Project/"
                  timeperiod="HTML5 - CSS - Javascript - Giphy API"
                  subtitle="GifTastic is a web application that uses the GIPHY API 
                  to make a dynamic web page that populates with gifs of your choice. 
                  Create a button for any keyword you want."
                />
              </li>
              <li>
              <Project
                  src={StrangerTrivia}
                  colour="#FFFFFF"
                  title="Stranger Trivia"
                  link="https://pmcnabb1993.github.io/Trivia_Game/"
                  timeperiod="HTML5 - CSS - Javascript - Bootstrap"
                  subtitle="A simple trivia game based on the popular televison show Stranger Things."
                />
              </li>
              
              <li>
              <Project
                  src={TypeSearch}
                  colour="#FFFFFF"
                  title="Friend Finder"
                  link="https://preston-friend-finder.herokuapp.com/home.html"
                  timeperiod="HTML5 - CSS - Javascript"
                  subtitle=" A compatibility-based friend finder application -- basically a dating app. 
                  This full-stack site takes in results from users surveys and then will then display the name and 
                  picture of the user with the best overall match."
                />
              </li>
              <li>
              <Project
                  src={MarioApp}
                  colour="#FFFFFF"
                  title="Memory Game"
                  link="https://mario-memory-game.herokuapp.com/"
                  timeperiod="React.js - HTML5 - CSS - Bootstrap - Heroku"
                  subtitle="The application is a memory game. The user's score goes up when clicking 
                  an image for the first time and the score resets to 0 if clicking an image twice. To win you must get a score of 20. "
                />
              </li>
            </ul>
          </section>

          <footer className="major">
            </footer>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
