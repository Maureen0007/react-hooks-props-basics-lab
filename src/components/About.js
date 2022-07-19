import React from "react";

function About(props) {
  const isBio = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio? <p>{props.bio}</p>:""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}

  
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
      
    </div>
  );
}

export default About;
