import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExampleUser1684932932203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into "user" (name) values ($1)`, [
      'Rocky Balboa',
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from "user" where name = $1`, [
      'Rocky Balboa',
    ]);
  }
}
