import { sleep } from '../src/sleep';
import { throttle } from '../src/throttle';

/**
 * @test {throttle} 
 */
describe('test throttle', () => {
  it('test immediate & end.', () => {
    (async () => {
      let i = 0;
      const func = throttle(() => { i++; }, 1000, { immediate: true, end: true });
      func();
      expect(i).toBe(1);
      await sleep(200); 
      func();
      expect(i).toBe(1);
      await sleep(800);
      func();
      expect(i).toBe(2);
      await sleep(500);
      func();
      expect(i).toBe(2);
      await sleep(1000);
      expect(i).toBe(3);
    })();
  });
  it('test not immediate & end.', () => {
    (async () => {
      let i = 0;
      const func = throttle(() => { i++; }, 1000, { immediate: false, end: false });
      func();
      expect(i).toBe(0);
      await sleep(200); 
      func();
      expect(i).toBe(0);
      await sleep(800);
      func();
      expect(i).toBe(1);
      await sleep(500);
      func();
      expect(i).toBe(1);
      await sleep(1000);
      expect(i).toBe(1);
    })();
  });
  it('test immdiate.', () => {
    (async () => {
      let i = 0;
      const func = throttle(() => { i++; }, 1000, { immediate: true, end: false });
      func();
      expect(i).toBe(1);
      await sleep(200); 
      func();
      expect(i).toBe(1);
      await sleep(800);
      func();
      expect(i).toBe(2);
      await sleep(500);
      func();
      await sleep(1000);
      expect(i).toBe(2);
    })();
  });
  it('test end.', () => {
    (async () => {
      let i = 0;
      const func = throttle(() => { i++; }, 1000, { immediate: false, end: true });
      func();
      expect(i).toBe(0);
      await sleep(200); 
      func();
      expect(i).toBe(0);
      await sleep(800);
      func();
      expect(i).toBe(1);
      await sleep(500);
      func();
      expect(i).toBe(1);
      await sleep(1000);
      expect(i).toBe(2);
    })();
  });
});
