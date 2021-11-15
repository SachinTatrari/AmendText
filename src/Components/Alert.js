import React from "react";

export default function Alert(props) {
    function Capitalize(word){
        const lower = word.toLowerCase()
         return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
    <div>{
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
       
      </div>
}</div>
  );
}
// In the above code I have put a curly brace after the first div, which is unusual. This is done because we used alert.type . 1stly alert state is "null", so alert.type becomes undefined because null has no type. So for that thing we had to make whole thing after 1st div as a javascript. So then we used AND(&&) operator and gave the command that, if alert.type  is not null then go for the further JSX code.
