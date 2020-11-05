import { createStore } from "redux";

import contactListReducer from "./reducer";

const store = createStore(contactListReducer);

export default store;
