import { Ng2RoutePocPage } from './app.po';

describe('ng2-route-poc App', function() {
  let page: Ng2RoutePocPage;

  beforeEach(() => {
    page = new Ng2RoutePocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
