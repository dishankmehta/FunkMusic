import { FunkMusicPage } from './app.po';

describe('funk-music App', function() {
  let page: FunkMusicPage;

  beforeEach(() => {
    page = new FunkMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
