import { Angular2PropBindingPage } from './app.po';

describe('angular2-prop-binding App', () => {
  let page: Angular2PropBindingPage;

  beforeEach(() => {
    page = new Angular2PropBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
