import { handleActions } from "redux-actions";
import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from "./action-types";
import { IContactList } from "./types";

export const defaultState: IContactList = {
  list: [],
};

export default handleActions(
  {
    [ADD_CONTACT]: (state, { payload }) =>
      ({
        ...state,
        list: [...state.list, payload],
      } as IContactList),

    [UPDATE_CONTACT]: (state, { payload }) => {
      const position = state.list.findIndex(
        //@ts-ignore
        (contact) => contact.index === payload.index
      );

      if (position) {
        const list = [
          ...state.list.slice(0, position),
          payload,
          ...state.list.slice(position + 1),
        ];

        return { ...state, list } as IContactList;
      }

      return state;
    },
    [REMOVE_CONTACT]: (state, { payload }) => {
      const position = state.list.findIndex(
        //@ts-ignore
        (contact) => contact.index === payload.index
      );

      if (position) {
        const list = [
          ...state.list.slice(0, position),
          ...state.list.slice(position + 1),
        ];

        return { ...state, list } as IContactList;
      }

      return state;
    },
  },
  defaultState
);
