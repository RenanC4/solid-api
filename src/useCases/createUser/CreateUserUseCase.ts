import { IMailProvider } from './../../providers/IMailProvider';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/User';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: ICreateUserRequestDTO){
    const userAwreadyExists = await this.usersRepository.findByemail(data.email)

    if (userAwreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data);
    await this.usersRepository.save(user);
    
    this.mailProvider.sendMail({
      to: {
        email: 'renanc433@gmail.com',
        name: 'renan'
      },
      from: {
        email: 'teste@teste.com',
        name: 'cuca'
      },
      body: '<>cuca beludo<>',
      subject: 'bem-vindo tonto'
    })
  }
}