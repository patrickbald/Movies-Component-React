import React from "react";

// Input: liked boolean
// output: onClick event

// functional component
// get rid of this. and pass props as parameter when using functional component

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
