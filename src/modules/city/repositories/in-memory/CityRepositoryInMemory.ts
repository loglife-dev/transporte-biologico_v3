import { ICityDTO } from "../../dtos/ICityDTO";
import { City } from "../../infra/entities/City";
import { ICityRepository } from "../ICityRepository";


class CityRepositoryInMemory implements ICityRepository {
    citys: City[] = [];


    async Get(): Promise<City[]> {
        const all = this.citys;
        return all;
    }

    async Create({
        id,
        name,
        state,
        hub_id,
        schedule_deadline,
        observation,
    }: ICityDTO): Promise<City> {
        const city = new City();

        Object.assign(city, {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name,
            state,
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            schedule_deadline: new Date(),
            observation

        })
        this.citys.push(city);

        return city;
    }

    async findByName(name: string): Promise<City> {
        const city = this.citys.find((city) => city.name === name)

        return city;
    }

    async findById(id: string): Promise<City> {
        const city = this.citys.find((city) => city.id === id)

        return city;
    }

    async Update(city: City): Promise<City> {
        this.citys.push(city);

        return city;
    }

    async Delete(city: City): Promise<void> {
        const findIndex = this.citys.findIndex(city => city === city)

        this.citys.splice(findIndex, 1);
    }

    async list(): Promise<City[]> {
        const all = this.citys;

        return all;
    }

}

export { CityRepositoryInMemory }