import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { AppModule } from '../src/app.module';

describe('App', () => {
  let app: INestApplication;
  let request: supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    request = supertest(app.getHttpServer());
  });

  it('/ (GET)', async () => {
    // When
    const { status, body } = await request.get('/');

    // Then
    expect(status).toBe(200);
    expect(body).toEqual(
      expect.arrayContaining([{ id: 1, name: 'Rocky Balboa' }]),
    );
  });
});
