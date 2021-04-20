import { Repository, EntityRepository } from "typeorm";

import { Setting } from "../entities/settings";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
