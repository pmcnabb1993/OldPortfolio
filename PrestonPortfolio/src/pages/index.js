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

        <Header />

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
                <p>As a front-end engineer, I enjoy bridging the gap between engineering 
                and design — combining my technical knowledge with my keen eye for design 
                to create a beautiful product. My goal is to always build applications that 
                are scalable and efficient under the hood while providing engaging user Projects.
                Allow me to introduce myself: I am a designer, an educator-in-training, and a wine lover. I like to work with grids, distort letters with the scanner, crack stupid jokes, cry at bad design, take dangerous photos, and dance when no one is watching. I am still figuring out what I am doing with my life. But hey, nice to meet you!</p>

                <p>Huge tech lover and always looking for new exciting thing to learn ! Born and raised in the moutain, i try to find the time to go there to find the ressource i need to give the best of me for my project ! After an IT Degree and few years in the film industry in found my self again in the Tech area, understanding how our connected world work and explaining it to my peer is the most trilling challenge i faced. And now after my degree in one of the most famous french business school (i.e HEC Paris) i found new challenge in the entrepreneur way.</p>

                <p>When I'm not in front of a computer screen, I'm probably biking around town taking photography,
                trying out new restaurants and coffee shops, or crossing off another national park off my bucket list.</p>
                
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
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
                  timeperiod="HTML5, CSS"
                  subtitle="A application that allows indivudual users and non-profit
                  organizations to post donations or request donations. 
                  This full-stack site takes in posts/donations from users and then
                  allows organizations to respond to whats posted if they are in need
                  of that item."
                /> 
              </li>
              <li>
              <Project
                  src={LiveAthlete}
                  colour="#FFFFFF"
                  title="Live Athlete"
                  link="https://gitdarren.github.io/LiveAthle…"
                  timeperiod="2017"
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
                  timeperiod="2017"
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
                  title="Weather App"
                  link="https://pmcnabb1993.github.io/Trivia_Game/"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>
              <li>
              <Project
                  src={TypeSearch}
                  colour="#FFFFFF"
                  title="Weather App"
                  link="https://preston-weather-app.herokuapp.com/"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>
              <li>
              <Project
                  src={FriendFinder}
                  colour="#FFFFFF"
                  title="Weather App"
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
                  title="Weather App"
                  link="https://mario-memory-game.herokuapp.com/"
                  timeperiod="2017"
                  subtitle="A platform for socially aware travellers. Runs on
                    React+Redux with a Ruby on Rails backend."
                />
              </li>

              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
              
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
            </footer>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Education</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
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
