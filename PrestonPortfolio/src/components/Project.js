import React, { Component } from 'react'



class Project extends Component {
  render() {
    return (
      <div className="project col-xs-12 col-sm-6 col-md-4">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.src})`,
              backgroundColor: this.props.colour
            }}>
          </div>
        </a>
        <div className="title">
          {this.props.title}
        </div>
        <div className="tools">
          {this.props.timeperiod}
        </div>
        <div className="subtitle2">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default Project