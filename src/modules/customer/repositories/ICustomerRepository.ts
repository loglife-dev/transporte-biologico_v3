import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Customer } from "../infra/typeorm/entities/Customer";


export interface ICustomerRepository extends IBaseRepository<Customer> {

    Get():Promise<Customer[]>;
    findById(id: string): Promise<Customer>;
    findByCnpjAndCpf(cnpj_cpf: string): Promise<Customer>;

}