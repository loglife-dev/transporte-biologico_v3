import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IBoardServiceRepository } from "../../../repositories/IBoardServiceRepository";
import { BoardService } from "../entities/BoardService";

class BoardServiceRepository extends BaseRepository<BoardService> implements IBoardServiceRepository {
    constructor() {
        super(BoardService)
    }
   

    async Get(): Promise<BoardService[]> {
        return this.repository.find({ 
            relations: ["serviceId", "setToBoardId"],
            order: {
                created_at: 'ASC'
            }
        });
    }

    async findById(id: string): Promise<BoardService> {
        return this.repository.findOne({
            where: { id },
            relations: ["serviceId", "setToBoardId"],
            order: {
                created_at: 'ASC'
            }
        })
    }
    
    async findByBoardId(board_id: string): Promise<BoardService> {
        return this.repository.findOne({
            where: { board_id },
            relations: ["serviceId", "setToBoardId"],
            order: {
                created_at: 'ASC'
            }
        })
    }

}
export { BoardServiceRepository }