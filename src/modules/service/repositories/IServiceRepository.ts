import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Service } from "../infra/typeorm/entities/Service";

export interface IServiceRepository extends IBaseRepository<Service> {

    Get(): Promise<Service[]>;
    findById(id: string): Promise<Service>;
    findByProtocol(protocol: number): Promise<Service>;
    filterSla(startFilter: string, endFilter: string): Promise<Service[]>;
}