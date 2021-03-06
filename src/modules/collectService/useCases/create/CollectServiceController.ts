import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCollectServiceUseCase } from "./CollectServiceUseCase";

class CreateCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, address_id, driver_id, provider_id, arrival_latitude, arrival_longitude, arrival_timestamp, responsible_name, responsible_cpf, volume,
            sample, problem, box_photo, content_declaration, receipt_photo, departure_latitude, departure_longitude, departure_timestamp, unsuccess_latitude,
            unsuccess_longitude, unsuccess_timestamp, observation } = request.body;

        const createCollectServiceUseCase = container.resolve(CreateCollectServiceUseCase);

        const collectService = await createCollectServiceUseCase.execute({
            service_id,
            address_id,
            driver_id,
            provider_id,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            responsible_name,
            responsible_cpf,
            volume,
            sample,
            problem,
            box_photo,
            content_declaration,
            receipt_photo,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            unsuccess_latitude,
            unsuccess_longitude,
            unsuccess_timestamp,
            observation,
        });

        const collectServiceResponse = {
            service_id: collectService.service_id,
            address_id: collectService.address_id,
            driver_id: collectService.driver_id,
            step: collectService.step,
            arrival_latitude: collectService.arrival_latitude,
            arrival_longitude: collectService.arrival_longitude,
            arrival_timestamp: collectService.arrival_timestamp,
            responsible_name: collectService.responsible_name,
            responsible_cpf: collectService.responsible_cpf,
            volume: collectService.volume,
            sample: collectService.sample,
            problem: collectService.problem,
            box_photo: collectService.box_photo,
            content_declaration: collectService.content_declaration,
            receipt_photo: collectService.receipt_photo,
            departure_latitude: collectService.departure_latitude,
            departure_longitude: collectService.departure_longitude,
            departure_timestamp: collectService.departure_timestamp,
            unsuccess_latitude: collectService.unsuccess_latitude,
            unsuccess_longitude: collectService.unsuccess_longitude,
            unsuccess_timestamp: collectService.unsuccess_timestamp,
            observation: collectService.observation,
        }

        return response.status(201).json(collectServiceResponse);
    }
}
export { CreateCollectServiceController }


