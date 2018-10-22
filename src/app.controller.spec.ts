import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app =  await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    xit('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      spyOn(appController, 'root').and.stub();

      expect(appController.root).toHaveBeenCalled();
    });
  });
});
