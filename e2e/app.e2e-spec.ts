import { AngularVideoDemoPage } from './app.po';

describe('angular-video-demo App', () => {
  let page: AngularVideoDemoPage;

  beforeEach(() => {
    page = new AngularVideoDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to avd!!');
  });
});
