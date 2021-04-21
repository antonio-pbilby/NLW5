import { getCustomRepository, Repository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";
import { User } from "../entities/Users";

class UsersService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    //verificar se o usuário existe
    //se não cria
    //se sim retorna user

    const userExists = await this.userRepository.findOne({
      email,
    });

    if (userExists) return userExists;

    const user = this.userRepository.create({
      email,
    });

    await this.userRepository.save(user);

    return user;
  }
}

export { UsersService };
