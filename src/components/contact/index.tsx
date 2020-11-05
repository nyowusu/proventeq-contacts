import React from "react";
import { IContact } from "../../state/types";
import MaleAvator from "../icons/male-avator";

import "./styles.css";

export default function Contact({
  email,
  firstName,
  lastName,
  mobile,
}: IContact) {
  return (
    <div className="contact-container">
      <div className="avatar">
        <MaleAvator height="50" width="50" />
      </div>
      <div className="details">
        <div className="name">
          <span>{lastName}</span>
          <span>{firstName}</span>
        </div>
        <div className="email">
          <span>{`Email: ${email}`}</span>
          <span>{`Mobile: ${mobile}`}</span>
        </div>
      </div>
    </div>
  );
}
