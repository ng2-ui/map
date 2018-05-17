import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getText(selector) {
    return element(by.css(selector)).getText();
  }

  getTitle() {
    return browser.getTitle();
  }

  click(selector) {
    return element.all(by.css(selector)).first().click();
  }

  global(script) {
    return browser.executeScript('return ' + script);
  }
}
