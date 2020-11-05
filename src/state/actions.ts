import { createAction } from "redux-actions";
import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from "./action-types";

export const addContact = createAction(ADD_CONTACT);
export const updateContact = createAction(UPDATE_CONTACT);
export const removeContact = createAction(REMOVE_CONTACT);
