import { FlashCardManagerPage } from './app.po';

describe('flash-card-manager App', () => {
  let page: FlashCardManagerPage;

  beforeEach(() => {
    page = new FlashCardManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
