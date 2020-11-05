export interface IContactList {
  list: IContact[];
}

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  index?: number;
}
