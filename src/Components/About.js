import React, { Component } from 'react';
const ReactMarkdown = require('react-markdown')

class About extends Component {
  render() {

    if(this.props.data){
      var bioHeadline = this.props.data.bioHeadline;
      var bioBody = this.props.data.bioBody;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <ReactMarkdown source={bioHeadline}/>
            <ReactMarkdown source={bioBody}/>
            <ReactMarkdown source="If you're a current or future collegue, or you'd like to know more about me and my professional interests you can checkout my [Personal User Manual](https://camin-mccluskey.github.io/personal-user-manual)" />
         </div>
      </div>

   </section>
    );
  }
}

export default About;
