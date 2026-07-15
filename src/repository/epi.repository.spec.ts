import { EpiRepository } from './epi.repository';

describe('EpiRepository', () => {
  it('loads the JSON database from the project db directory', () => {
    const repository = new EpiRepository();
    const epis = repository.findAll();

    expect(Array.isArray(epis)).toBe(true);
  });
});
