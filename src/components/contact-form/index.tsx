import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../state/actions";
import { IContact, IContactList } from "../../state/types";

import "./styles.css";

export interface IProps {
  [key: string]: string;
}

export const FormFieldNames: { [key: string]: string } = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  mobile: "Mobile",
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { list } = useSelector(({ list }: IContactList) => ({ list }));

  function onSubmit(values: IContact) {
    console.log(values);

    const contact: IContact = { ...values, index: list.length };

    dispatch(addContact(contact));
  }

  function updateContact() {}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(FormFieldNames).map((field) => {
          return (
            <div className="field" key={field}>
              <div className="label">
                <label htmlFor={field}>{`${FormFieldNames[field]}:`}</label>
              </div>
              <div className="input">
                <input type="text" ref={register} name={field} id="field" />
              </div>
            </div>
          );
        })}
        <div className="button-container">
          <button onClick={updateContact}>Update Contact</button>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
}
