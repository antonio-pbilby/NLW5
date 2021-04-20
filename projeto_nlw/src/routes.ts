import { request, response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();
/**
 * tipos de parâmetros
 * route params => parametro de rota
 * http://localhost:3333/settings/1
 *
 * query params => filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 *
 * body params => {}
 */

routes.post("/settings", settingsController.create);

export { routes };
