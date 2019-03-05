import { Test, TestingModule } from '@nestjs/testing';
import { OmdbProxyService } from './omdb-proxy.service';

describe('OmdbProxyService', () => {
  let service: OmdbProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmdbProxyService],
    }).compile();

    service = module.get<OmdbProxyService>(OmdbProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
