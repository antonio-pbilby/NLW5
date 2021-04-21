import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1618931816168 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //yarn typeorm migration:run
    //executa o this.up();
    await queryRunner.createTable(
      new Table({
        name: "settings",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "chat",
            type: "boolean",
            default: true,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //yarn typeorm migration:revert
    //executa o this.down();
    await queryRunner.dropTable("settings");
  }
}
