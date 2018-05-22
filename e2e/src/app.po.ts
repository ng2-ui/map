import {browser, by, element} from 'protractor';

export class AppPage {
  placesAutocomplete = element(by.css('[places-auto-complete]'));
  centerAndZoom = element(by.css('#center-zoom'));
  pacResults = element.all(by.css('.pac-item'));
  directions = element(by.css('#directions'));

  navigateTo() {
    return browser.get('/');
  }

  getText(selector) {
    return element(by.css(selector)).getText();
  }

  getTitle() {
    return browser.getTitle();
  }

  click(selector: string) {
    return element.all(by.css(selector)).first().click();
  }

  global(script: string) {
    return browser.executeScript('return ' + script);
  }

  searchForPlace(text: string) {
    return this.placesAutocomplete.sendKeys(text);
  }

  getPlaceText() {
    return this.placesAutocomplete.getAttribute('value');
  }

  selectDestination(option: string) {
    return element(by.css('select#directions-origin')).sendKeys(option);
  }

}
