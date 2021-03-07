import { uuid } from "uuidv4";

export class User {
  public readonly id: string | undefined;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this._name: props.name;
    this._email: props.email;
    this._password: props.password;
  }

  if(!id) {
    this._id = uuid()
  }
}