import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { DeliveryService } from "../infra/typeorm/entities/DeliveryService";

export interface IDeliveryServiceRepository extends IBaseRepository<DeliveryService> {
    Get(): Promise<DeliveryService[]>;
    findById(id: string): Promise<DeliveryService>;
}