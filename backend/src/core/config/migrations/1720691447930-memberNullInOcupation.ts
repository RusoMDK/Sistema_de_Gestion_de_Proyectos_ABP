import { MigrationInterface, QueryRunner } from "typeorm";

export class MemberNullInOcupation1720691447930 implements MigrationInterface {
    name = 'MemberNullInOcupation1720691447930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member" ALTER COLUMN "ocupation" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member" ALTER COLUMN "ocupation" SET NOT NULL`);
    }

}
