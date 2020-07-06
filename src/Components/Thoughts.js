import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediumProfile from "react-medium-profile";


class Thoughts extends Component {
  render() {
    return (
      <section id="thoughts" style={{backgroundColor: "white"}}>
        <h1 style={{flexGrow:1, textAlign: "center", paddingBottom: 50}}>Thoughts</h1>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{flex: 1, textAlign: "center", alignItems: "center"}}>
            <h3>My Writing</h3>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",  
              }}>
              <MediumProfile username="caminmccluskey" size={50}/>
            </div>
          </div>
          <div style={{flex: 1, textAlign: "center"}}>
            <h3>My Reading List</h3>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",  
              }}>
            <p style={{fontSize: 50, paddingTop: 15}}>
              <Link to="/ReadingList">
                <span role="img" aria-label="books">📚</span>
              </Link>
            </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Thoughts;
