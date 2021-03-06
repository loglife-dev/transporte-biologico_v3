import { Router } from "express";
import { DeleteServiceController } from "../../../modules/service/useCases/delete/ServiceController";
import { GetAllServiceController, GetServiceController } from "../../../modules/service/useCases/get/ServiceController";
import { UpdateServiceController } from "../../../modules/service/useCases/update/ServiceController";

const serviceRoutes = Router();
const getAllServiceController = new GetAllServiceController();
const getServiceController = new GetServiceController();
const updateServiceController = new UpdateServiceController();
const deleteServiceController = new DeleteServiceController();

serviceRoutes.get("/", getAllServiceController.handle);
serviceRoutes.get("/:id", getServiceController.handle);
serviceRoutes.put("/:id", updateServiceController.handle);
serviceRoutes.delete("/:id", deleteServiceController.handle);

export { serviceRoutes }