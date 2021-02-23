import { sleep } from '../src/sleep';

/**
 * @test {sleep}
 */
describe('test sleep', () => {
  it('simple example', () => {
    (async () => {
      const startTime = Date.now();
      await sleep(3000);
      const endTime = Date.now();
      
      expect(endTime - startTime).toBeGreaterThan(3000);
    })();
  });
});