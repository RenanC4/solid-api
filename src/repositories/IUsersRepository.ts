import { User } from "../entities/User";

export interface IUsersRepository {
  findByemail( email: string): Promise<User>;
  save(user:User): Promise<void>;
}