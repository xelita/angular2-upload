import { ImporterPage } from './app.po';

describe('importer App', function() {
  let page: ImporterPage;

  beforeEach(() => {
    page = new ImporterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
