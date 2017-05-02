import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#" onClick={
          (e) => {
          e.preventDefault();
          props.changeCategory("headlights");
          }
        }>Car Lights</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("tires");
          }
        }>Car Tires</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("bumpers");
          }
        }>Car Bumpers</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("audio");
          }
        }>Car Audio</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            props.changeCategory("engine");
          }
        }>Engine</a></li>
        <li><a href="#" onClick={
          (e) => {
            e.preventDefault();
            alert('Feedback received');
          }
        }>Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;
