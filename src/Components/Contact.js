import React, { Component } from 'react';
const fetch = require("node-fetch");
const spreadsheetId = '1nJyDrNkwY-5TMad5yP2dFM6cRL_jL5c-1tt0efrISbs'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      error: false,
      sent: false
    };
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  submitForm = (e) => {
    e.preventDefault();
    const baseUrl = "https://pushtogsheet.herokuapp.com";
    const query = `valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj`;
    const url = new URL(`/proxy/google-sheets/spreadsheets/${spreadsheetId}/values/A1:append?${query}`, baseUrl);
    const { name, email, subject, message} = this.state;
    const data = [["name", "email", "subject", "message"], [name, email, subject, message]];

    fetch(url.href, {
      method: "POST",
      body: JSON.stringify({ values: data }),
      headers: { 'Pizzly-Auth-Id': '822620f0-b95f-11ea-ae44-0585064b5bfd' }
    })
    .then(this.setState({sent: true}))
    .catch(this.setState({error: true}));
  }


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
              {/* https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server */}
               <form>
					      <fieldset> 
                  <div>
						        <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      defaultValue="" 
                      size="35" 
                      id="contactName" 
                      name="name" 
                      onChange={this.handleChange}/>
                  </div>
                  <div>
						        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input 
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
						        <label htmlFor="contactSubject">Subject</label>
                    <input 
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="subject"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="message"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                     <button 
                      style={this.state.sent ? {backgroundColor: "#5cb85c"} : {backgroundColor: "#0275d8"}}
                      onClick={(e) => {this.submitForm(e)}} 
                      className="submit">
                        Submit
                    </button>
                    {this.state.sent && <p>Thanks!</p>}
                    {this.state.error && <p>Error, please try again</p>}
                  </div>
					</fieldset>
				   </form>
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
