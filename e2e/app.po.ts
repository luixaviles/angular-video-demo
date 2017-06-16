import { browser, by, element } from 'protractor';

export class AngularVideoDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('avd-root h1')).getText();
  }
}
