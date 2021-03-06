import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { CollectService } from "../infra/typeorm/entities/CollectService";

export interface ICollectServiceRepository extends IBaseRepository<CollectService> {

    Get(): Promise<CollectService[]>;
    findAllIds(id: string): Promise<CollectService[]>;
    findQuery(service_id: string, address_id: string): Promise<CollectService>
}