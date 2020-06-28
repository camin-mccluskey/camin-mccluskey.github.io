import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <h2>{message}</h2>
            </div>
         </div>
         <div className="row">
            <div className="seven columns">
               <form action="https://script.google.com/macros/s/AKfycby72hykuHuiyXKmpO3L4CdfvabGjAxJwKyg6Q6GosKhQwRagkuZ/exec" method="POST" id="contactForm" name="contactForm" class="gform">
					      <fieldset> 
                  <div>
						        <label htmlFor="contactName">Name <span className="required">*</span></label>
						        <input type="text" defaultValue="" size="35" id="contactName" name="name" onChange={this.handleChange}/>
                  </div>
                  <div>
						        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						        <input type="text" defaultValue="" size="35" id="contactEmail" name="email" onChange={this.handleChange}/>
                  </div>
                  <div>
						        <label htmlFor="contactSubject">Subject</label>
						        <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" onChange={this.handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                  </div>
                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>
            <aside className="five columns footer-widgets">
               <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <a class="twitter-timeline" data-width="1000" data-height="750" data-theme="dark" href="https://twitter.com/Camin_McCluskey?ref_src=twsrc%5Etfw">Tweets by Camin_McCluskey</a>
              </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
