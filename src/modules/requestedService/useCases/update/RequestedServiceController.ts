import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateRequestedServiceUseCase } from "./RequestedServiceUseCase";
import { ServiceRepository } from "../../../service/infra/typeorm/repositories/ServiceRepository";

class UpdateRequestedServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceRepository = new ServiceRepository();
        const { id } = request.params;
        const { budget_id, source_address_id, destination_address_id, source_collector_id, destination_collector_id, source_branch_id,
            destination_branch_id, provider_id, deadline, service_type, franchising, modal, vehicle, caixa_termica, embalagem_secundaria, gelo_seco,
            gelox, isopor3l, isopor7l, terciaria3l, terciaria8l, collect_date, collect_hour_start, collect_hour_end, delivery_date, delivery_hour, observation,
            hasValidate, hasCancelled } = request.body;

        if (hasValidate === true) {
            const serviceId = await serviceRepository.findById(id);
            serviceId.step = 'toCollectService';
            await serviceRepository.Update(serviceId)

            const updateRequestedServiceUseCase = container.resolve(UpdateRequestedServiceUseCase)

            const updateRequested = await updateRequestedServiceUseCase.execute({
                service_id: serviceId.id,
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
            return response.json(updateRequested);
        }

        if (hasCancelled === true) {
            const serviceId = await serviceRepository.findById(id)
            serviceId.step = 'cancelledService';
            await serviceRepository.Update(serviceId);
        }

        const updateRequestedServiceUseCase = container.resolve(UpdateRequestedServiceUseCase)

        const updateRequested = await updateRequestedServiceUseCase.execute({
            service_id: id,
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
        return response.json(updateRequested);


    }
}

export { UpdateRequestedServiceController };