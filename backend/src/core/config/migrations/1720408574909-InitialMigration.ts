import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1720408574909 implements MigrationInterface {
    name = 'InitialMigration1720408574909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "estimated_end_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP, "taskId" uuid, CONSTRAINT "UQ_e0098522faf604f4f29ba54bba4" UNIQUE ("name"), CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event"."tb_event_community_development" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, CONSTRAINT "PK_dfd8ad5491914bd7e43c0a6b246" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event"."tb_event_reunion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, CONSTRAINT "PK_ccea39e9263fe7cba4c4c6bb0c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event"."tb_event_sensitization_activities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, CONSTRAINT "PK_e9aade6cd4cc637964e284cc115" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "projectId" uuid, CONSTRAINT "UQ_b535fbe8ec6d832dde22065ebdb" UNIQUE ("name"), CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_activity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "memberId" uuid, "activityId" uuid, CONSTRAINT "PK_25c864bdb2adcb3c6a4a0214a56" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "last_name" character varying NOT NULL, "ocupation" character varying NOT NULL, "projectId" uuid, CONSTRAINT "UQ_8174d0498e41d6e7c108b657e79" UNIQUE ("name"), CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project"."tb_project_infrastructure" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectId" uuid, CONSTRAINT "PK_2de34f5e5a09d0b0aa36756136c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project"."tb_project_community_work" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectId" uuid, CONSTRAINT "PK_e5a82199b23bbd0f29cae4eb00f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project"."tb_project_training_course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectId" uuid, CONSTRAINT "PK_8594f1dffa60a27e3f8918e12c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project"."tb_project_socioeconomic_activities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectId" uuid, CONSTRAINT "PK_3768ce22f94a4d987f283679f26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, "author_name" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "estimated_end_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP, "userId" uuid, CONSTRAINT "UQ_dedfea394088ed136ddadeee89c" UNIQUE ("name"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resource_project" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "amount_in_project" integer NOT NULL, "projectId" uuid, "resourceId" uuid, CONSTRAINT "PK_724571f4e06119501256dfe1639" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resource" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "type" character varying NOT NULL, "amount" integer, "description" character varying, CONSTRAINT "UQ_c8ed18ff47475e2c4a7bf59daa0" UNIQUE ("name"), CONSTRAINT "PK_e2894a5867e06ae2e8889f1173f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "estimated_end_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP, "projectId" uuid, CONSTRAINT "UQ_20f1f21d6853d9d20d501636ebd" UNIQUE ("name"), CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "roleId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_2743f8990fde12f9586287eb09f" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event"."tb_event_community_development" ADD CONSTRAINT "FK_84f660136462a56b063785c63d6" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event"."tb_event_reunion" ADD CONSTRAINT "FK_fc116869f9f4ff8b20abcd8598c" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event"."tb_event_sensitization_activities" ADD CONSTRAINT "FK_4c213ef32bdc9d8a3ec443d2ce8" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_3dde39f7b276bbc735a0f762ead" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "member_activity" ADD CONSTRAINT "FK_a108e37ad65511fc282741197ad" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_activity" ADD CONSTRAINT "FK_61eacc82d85f1428672a9fe7297" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_1521f298c02c827852ebb2aef72" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_infrastructure" ADD CONSTRAINT "FK_4e3309312d8a4097a925b99953d" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_community_work" ADD CONSTRAINT "FK_e1ad6f0489bcd3905c390fad922" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_training_course" ADD CONSTRAINT "FK_f561a6cd2ceff3ac3bf2afc1256" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_socioeconomic_activities" ADD CONSTRAINT "FK_c4369a908d5b0edd31a9cb8aa15" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resource_project" ADD CONSTRAINT "FK_273c845aa82bb40a58e75d56734" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resource_project" ADD CONSTRAINT "FK_d37e6213b81b6fcb7e9fe6f0e56" FOREIGN KEY ("resourceId") REFERENCES "resource"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe"`);
        await queryRunner.query(`ALTER TABLE "resource_project" DROP CONSTRAINT "FK_d37e6213b81b6fcb7e9fe6f0e56"`);
        await queryRunner.query(`ALTER TABLE "resource_project" DROP CONSTRAINT "FK_273c845aa82bb40a58e75d56734"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_socioeconomic_activities" DROP CONSTRAINT "FK_c4369a908d5b0edd31a9cb8aa15"`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_training_course" DROP CONSTRAINT "FK_f561a6cd2ceff3ac3bf2afc1256"`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_community_work" DROP CONSTRAINT "FK_e1ad6f0489bcd3905c390fad922"`);
        await queryRunner.query(`ALTER TABLE "project"."tb_project_infrastructure" DROP CONSTRAINT "FK_4e3309312d8a4097a925b99953d"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_1521f298c02c827852ebb2aef72"`);
        await queryRunner.query(`ALTER TABLE "member_activity" DROP CONSTRAINT "FK_61eacc82d85f1428672a9fe7297"`);
        await queryRunner.query(`ALTER TABLE "member_activity" DROP CONSTRAINT "FK_a108e37ad65511fc282741197ad"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_3dde39f7b276bbc735a0f762ead"`);
        await queryRunner.query(`ALTER TABLE "event"."tb_event_sensitization_activities" DROP CONSTRAINT "FK_4c213ef32bdc9d8a3ec443d2ce8"`);
        await queryRunner.query(`ALTER TABLE "event"."tb_event_reunion" DROP CONSTRAINT "FK_fc116869f9f4ff8b20abcd8598c"`);
        await queryRunner.query(`ALTER TABLE "event"."tb_event_community_development" DROP CONSTRAINT "FK_84f660136462a56b063785c63d6"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_2743f8990fde12f9586287eb09f"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "resource"`);
        await queryRunner.query(`DROP TABLE "resource_project"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "project"."tb_project_socioeconomic_activities"`);
        await queryRunner.query(`DROP TABLE "project"."tb_project_training_course"`);
        await queryRunner.query(`DROP TABLE "project"."tb_project_community_work"`);
        await queryRunner.query(`DROP TABLE "project"."tb_project_infrastructure"`);
        await queryRunner.query(`DROP TABLE "member"`);
        await queryRunner.query(`DROP TABLE "member_activity"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "event"."tb_event_sensitization_activities"`);
        await queryRunner.query(`DROP TABLE "event"."tb_event_reunion"`);
        await queryRunner.query(`DROP TABLE "event"."tb_event_community_development"`);
        await queryRunner.query(`DROP TABLE "activity"`);
    }

}
