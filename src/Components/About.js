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
         {/* <div className="two columns">
            <img className="profile-pic"  src={profilepic} alt="Camin McCluskey Profile Pic" />
         </div> */}
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <ReactMarkdown source={bioHeadline}/>
            <ReactMarkdown source={bioBody}/>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
						      <span>Phone: {phone}</span>
                  <br />
                 <span>Email: {email}</span>
               </div>
               {/* <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
