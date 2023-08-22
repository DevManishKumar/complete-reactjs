import { Highlighter } from "rc-highlight";
import React from "react";
import { propsCode } from "../../CodeData";

const PropsEx = (props) => {
  const { name, age, phone, address } = props;

  const codeProps = propsCode
  return (
    <div className="contained">
      <p>{name}</p>
      <p>{age}</p>
      <p>{phone}</p>
      <p>{address}</p>

      <h1 className="text-head">React Props</h1>
      <p className="text-body-start">
        React Props are like function arguments in JavaScript and attributes in
        HTML. To send props into a component, use the same syntax as HTML
        attributes:
      </p>

      <div className="syntax-highlighter">
        <Highlighter>{codeProps}</Highlighter>
      </div>
    </div>
  );
};

export default PropsEx;
