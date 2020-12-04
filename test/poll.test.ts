import { run } from '../src/poll';

test('Polling return true', (done) => {
  let i = 0;
  run(() => {
    i++;
    return i > 0;
  }).then(() => {
    expect(i).toEqual(1);
    done();
  });
});

test('Polling promise return true', (done) => {
  let i = 0;
  run(() => {
    i++;
    return Promise.resolve(i > 0);
  }).then(() => {
    expect(i).toEqual(1);
    done();
  });
});

test('Polling timeout', (done) => {
  let i = 0;
  run(() => {
    i++;
    return i > 1000;
  }, {
    interval: 5,
    timeout: 10,
  }).catch(() => {
    expect(i).toEqual(3);
    done();
  });
});

test('Polling options', (done) => {
  let i = 0;
  run(() => {
    i++;
    return i > 1000;
  }, {
    timeout: 200,
  }).catch(() => {
    expect(i).toEqual(3);
    done();
  });
});