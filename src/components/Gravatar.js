import React from "react";

function Gravatar(props) {
  const first_name = props.first_name;
  const last_name = props.last_name;

  return (
    <img
      className={props.className}
      src={`https://ui-avatars.com/api/?name=${first_name}+${last_name}&background=7dcd40&color=fff`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
