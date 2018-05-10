import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Img from "gatsby-image";
import Project from '../components/Project'
import SkillBar from 'react-skillbars';



import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'


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
                <p>As a front-end engineer...  
               </p>

                {/* <p>Huge tech lover and always looking for a new exciting thing to learn! 
                Born and raised in Texas, I try to find the time to go there to find the ressource i need to give the best of me for my project
                 After an IT Degree and few years in the film industry in found my self again in the Tech area, 
                 understanding how our connected world work and explaining it to my peer is the most trilling challenge i faced. 
                 And now after my degree in one of the most famous french business school (i.e HEC Paris) i found new challenge in the entrepreneur way.</p> */}

                <p>When I'm not in front of a computer screen, I'm probably biking around town taking photography,
                trying out new restaurants and coffee shops, or crossing off another national park off my bucket list.</p>
                
              </div>
              <span className="image"><img src={Profile} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
          <header className="major">
              <h2>Skills</h2>
              <SkillBar skills={skills} animationDelay={100} />
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
                  timeperiod="HTML5, CSS, Bulma Framework, Javascript, MongoDB, MySQL "
                  subtitle="A application that allows indivudual users and non-profit
                  organizations to post donations or request donations. "
                /> 
              </li>
              <li>
              <Project
                  src={LiveAthlete}
                  colour="#FFFFFF"
                  title="Live Athlete"
                  link="https://gitdarren.github.io/LiveAthle…"
                  timeperiod="HTML5, CSS, Materialize Framework, Javascript, Firebase"
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
                  timeperiod="HTML5, CSS, Javascript, OpenWeatherAPI, GoogleMaps API"
                  subtitle="Simple weather app using the OpenWeatherMap API 
                  to get weather and forecast data for a searched location."
                />
              </li>

              <li>
              <Project
                  src={MetroTracker}
                  colour="#FFFFFF"
                  title="Metro Tracker"
                  link="https://preston-weather-app.herokuapp.com/"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>
              
              <li>
              <Project
                  src={BurgerApp}
                  colour="#FFFFFF"
                  title="Burger Menu"
                  link=" https://preston-burger-app.herokuapp.com/"
                  timeperiod="2017"
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
                  timeperiod="2017"
                  subtitle="GifTastic is a web application that uses the GIPHY API 
                  to make a dynamic web page that populates with gifs of your choice. 
                  Create a button for any keyword you want."
                />
              </li>
              <li>
              <Project
                  src={StrangerTrivia}
                  colour="#FFFFFF"
                  title="Stranger Things Trivia"
                  link="https://pmcnabb1993.github.io/Trivia_Game/"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>
              
              <li>
              <Project
                  src={FriendFinder}
                  colour="#FFFFFF"
                  title="Friend Finder"
                  link="https://preston-friend-finder.herokuapp.com/home.html"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>
              <li>
              <Project
                  src={MarioApp}
                  colour="#FFFFFF"
                  title="Memory Game"
                  link="https://mario-memory-game.herokuapp.com/"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>
            </ul>
          </section>

          <section id="third" className="main special">
          <header className="major">
              <h2>Work Experience</h2>
              <p>Luxe</p>
            </header>
          </section>

          <section id="forth" className="main special">
            <header className="major">
              <h2>Education</h2>
              <p>University of Texas - Bachelors</p>
              <p>University of Texas - UT coding bootcamp</p>
            </header>

            <footer className="major">
            </footer>
          </section>

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
