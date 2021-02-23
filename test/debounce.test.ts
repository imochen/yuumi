import { debounce } from '../src/debounce';
import { sleep } from '../src/sleep';

/**
 * @test {debounce} 
 */
describe('test debounce', () => {
  it('test not immdiate.', () => {
    (async () => {
      let i = 0;
      const func = debounce(() => {
        i++;
      }, 1000);
      
      for (let j = 0; j < 5; j++) {
        func();  
      }

      await sleep(1500);
      expect(i).toBe(1);
    })();
  });
  it('test immdiate.', () => {
    (async () => {
      let i = 0;
      const func = debounce(() => {
        i++;
      }, 1000, true);
      
      for (let j = 0; j < 10; j++) {
        func();  
      }

      await sleep(1500);
      expect(i).toBe(2);
    })();
  });
});
