import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const foundUser = this.usersRepository.findById(user_id);

    if (!foundUser) {
      throw new Error("User not found")
    }

    const updatedUser = this.usersRepository.turnAdmin(foundUser);

    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
