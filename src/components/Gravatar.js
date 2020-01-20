import React from "react";

function Gravatar(props) {
  const firstName = props.firstName;
  const lastName = props.lastName;

  return (
    <img
      className={props.className}
      src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=7dcd40&color=fff`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
