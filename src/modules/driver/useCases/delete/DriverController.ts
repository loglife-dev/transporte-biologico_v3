import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteDriverUseCase } from "./DriverUseCase";


class DeleteDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteDriverUseCase = container.resolve(DeleteDriverUseCase);

        await deleteDriverUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteDriverController }