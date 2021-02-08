import { ToUsdPipe } from './to-usd.pipe';

describe('ToUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new ToUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
