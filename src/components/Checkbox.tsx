import React from "react";

const Checkbox = (props: any) => {
  return (
    <input
      type="checkbox"
      className="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
};

export default Checkbox;
