import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IUserRepository } from "../../../repositories/IUserRepositories";
import { User } from "../entities/User";



class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor() {
        super(User)
    }

    async Get(): Promise<User[]> {
        return this.repository.find({
            relations: ["customerId", "collectorId", "driverId"],
            order: {
                firstname: 'ASC'
            }
        })
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ 
            where: { id },
            relations: ["customerId", "collectorId", "driverId"]
        })
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email })
    }

}
export { UserRepository }