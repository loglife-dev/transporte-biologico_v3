import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateRequestedServiceUseCase } from "./RequestedServiceUseCase";

class UpdateRequestedServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { service_id, budget_id, source_address_id, destination_address_id, source_collector_id, destination_collector_id, source_branch_id,
            destination_branch_id, provider_id, deadline, service_type, franchising, modal, vehicle, caixa_termica, embalagem_secundaria, gelo_seco,
            gelox, isopor3l, isopor7l, terciaria3l, terciaria8l, collect_date, collect_hour_start, collect_hour_end, delivery_date, delivery_hour, observation,
        } = request.body;

        const updateRequestedServiceUseCase = container.resolve(UpdateRequestedServiceUseCase)

        const updateRequestedService = await updateRequestedServiceUseCase.execute({
            id,
            service_id,
            budget_id,
            source_address_id,
            destination_address_id,
            source_collector_id,
            destination_collector_id,
            source_branch_id,
            destination_branch_id,
            provider_id,
            deadline,
            service_type,
            franchising,
            modal,
            vehicle,
            caixa_termica,
            embalagem_secundaria,
            gelo_seco,
            gelox,
            isopor3l,
            isopor7l,
            terciaria3l,
            terciaria8l,
            collect_date,
            collect_hour_start,
            collect_hour_end,
            delivery_date,
            delivery_hour,
            observation,
        })
        return response.json(updateRequestedService);
    }
}

export { UpdateRequestedServiceController };