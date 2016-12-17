import { LayoutAppPage } from './app.po';

describe('layout-app App', function() {
  let page: LayoutAppPage;

  beforeEach(() => {
    page = new LayoutAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
