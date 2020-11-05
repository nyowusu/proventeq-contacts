import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IContactList } from "../../state/types";
import Contact from "../contact";

export default function ContactList() {
  const { list } = useSelector(({ list }: IContactList) => ({ list }));

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(list));
    return () => {};
  }, [list]);

  return (
    <>
      {list.length ? (
        <div>
          {list?.map((contact) => (
            <Contact
              firstName={contact.firstName}
              lastName={contact.lastName}
              email={contact.email}
              mobile={contact.mobile}
              key={contact.index}
            />
          ))}
        </div>
      ) : (
        <div>contact list is empty</div>
      )}
    </>
  );
}
