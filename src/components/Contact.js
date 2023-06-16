import React from "react";

export default function Contact(props) {
  const { name, email, number } = props;
  return (
    <div className="contact-card">
      {name && <h3>Name : {name}</h3>}
      <h4>MailID : {email}</h4>
      <h4>Number : {number}</h4>
    </div>
  )
}