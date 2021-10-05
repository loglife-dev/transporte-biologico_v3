import { Router } from "express";
import { hubRoutes } from "./hub.routes";
import { cityRoutes } from "./city.routes";
import { customerRoutes } from "./customer.routes";
import { permissionRoutes } from "./permission.routes";
import { collectorRoutes } from "./collector.routes";
import { driverRoutes } from "./driver.routes";
import { userRoutes } from "./user.routes";
import { addressRoutes } from "./address.routes";
import { providerRoutes } from "./provider.routes";
import { shippingRoutes } from "./shipping.routes";
import { branchRoutes } from "./branch.routes";
import { collectorCostRoutes } from "./collectorCost.routes";
import { budgetRoutes } from "./budget.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { serviceRoutes } from "./service.routes";
import { requestedServiceRoutes } from "./requestedService.routes";
import { collectServiceRoutes } from "./collectService.routes";
import { boardServiceRoutes } from "./boardService.routes";
import { allocateServiceRoutes } from "./allocateService.routes";

const router = Router();
router.use("/hub", hubRoutes);
router.use("/city", cityRoutes);
router.use("/customer", customerRoutes);
router.use("/permission", permissionRoutes);
router.use("/collector", collectorRoutes);
router.use("/driver", driverRoutes);
router.use("/user", userRoutes);
router.use("/address", addressRoutes);
router.use("/provider", providerRoutes);
router.use("/shipping", shippingRoutes);
router.use("/branch", branchRoutes);
router.use("/cost/collector", collectorCostRoutes);
router.use("/budget", budgetRoutes);
router.use(authenticateRoutes);
router.use("/service", serviceRoutes);
router.use("/requested-service", requestedServiceRoutes);
router.use("/collect-service", collectServiceRoutes);
router.use("/board-service", boardServiceRoutes);
router.use("/allocate-service", allocateServiceRoutes);

export { router }
