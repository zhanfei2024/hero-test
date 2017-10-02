import { HeroTestPage } from './app.po';

describe('hero-test App', () => {
  let page: HeroTestPage;

  beforeEach(() => {
    page = new HeroTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
