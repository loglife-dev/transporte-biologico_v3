import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateCollectServiceUseCase } from './CollectServiceUseCase';

class UpdateCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const files = request.files as any;
        const { service_id, address_id, driver_id, provider_id, responsible_name, responsible_cpf, volume, sample, problem, departure_latitude, departure_longitude, departure_timestamp, unsuccess_latitude,
            unsuccess_longitude, unsuccess_timestamp, observation, hasUnsuccess } = request.body;
        
        const updateCollectServiceUseCase = container.resolve(UpdateCollectServiceUseCase)
        let collectService: any

        if (!hasUnsuccess) {
            let box_photo = ''
            let content_declaration = ''
            let receipt_photo = ''

            for (let file of files) {

                if (file.fieldname === 'box_photo') {
                    box_photo = file.key
                }
                if (file.fieldname === 'content_declaration') {
                    content_declaration = file.key
                }
                if (file.fieldname === 'receipt_photo') {
                    receipt_photo = file.key
                }
            }

            collectService = await updateCollectServiceUseCase.execute({
                service_id: id,
                address_id,
                driver_id,
                provider_id,
                step: 'DONE',
                responsible_name,
                responsible_cpf,
                box_photo: box_photo,
                content_declaration: content_declaration,
                receipt_photo: receipt_photo,
                volume,
                sample,
                problem,
                departure_latitude,
                departure_longitude,
                departure_timestamp,
                observation,
            })
        } else {
            collectService = await updateCollectServiceUseCase.execute({
                service_id: id,
                address_id,
                driver_id,
                provider_id,
                step: 'UNSUCCESS',
                unsuccess_latitude,
                unsuccess_longitude,
                unsuccess_timestamp
            })
        }


        return response.json(collectService);
    }
}


export { UpdateCollectServiceController }