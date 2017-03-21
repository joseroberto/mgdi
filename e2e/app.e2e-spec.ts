import { SgiPage } from './app.po';

describe('sgi App', () => {
  let page: SgiPage;

  beforeEach(() => {
    page = new SgiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
