import React from "react";
import Contact from "../contact-form";
import ContactList from "../contact-list";

import "./styles.css";

export default function Content() {
  return (
    <div className="container">
      <div className="left">
        <ContactList />
      </div>
      <div className="right">
        <Contact />
      </div>
    </div>
  );
}
