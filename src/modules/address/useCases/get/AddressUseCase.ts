import { inject, injectable } from "tsyringe";
import { Address } from "../../infra/entities/Address";
import { IAddressRepository } from "../../repositories/IAddressRepository";

@injectable()
class GetAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository) { }

    async execute(id: string): Promise<Address> {
        const address = await this.addressRepository.Get(id);

        return address;
    }
}

@injectable()
class GetAllAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository) { }

    async execute(): Promise<Address[]> {
        const addresses = await this.addressRepository.GetAll();

        return addresses
    }
}

export { GetAddressUseCase, GetAllAddressUseCase }