import {AppPage} from './app.po';
import {browser, ExpectedConditions} from 'protractor';

describe('Angular(2+) Google Maps Demo', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getTitle()).toEqual('Angular(2+) Google Maps');
  });

  describe('Simple map', () => {
    it('should display a simple map', () => {
      browser.get('#/simple-map');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('nguiMapRef.map.getCenter().lat()')).toEqual(42.99);
    });
  });

  describe('Simple Circle', () => {
    it('should display a simple circle', () => {
      browser.get('#/simple-circle');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.circles')).toBeTruthy();
      expect(page.global('nguiMapRef.map.circles.length')).toEqual(1);
    });
  });

  describe('Markers', () => {
    it('should display a simple marker', () => {
      browser.get('#/simple-marker');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeDefined();
      expect(page.global('nguiMapRef.map.markers.length')).toEqual(1);
    });

    it('should display a list of simple markers', () => {
      browser.get('#/marker-ng-for');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeTruthy();
      expect(page.global('nguiMapRef.map.markers.length')).toEqual(9);
      page.click('ng-component > button');
      expect(page.global('nguiMapRef.map.markers.length')).toEqual(9);
    });

    it('should display a custom marker', () => {
      browser.get('#/custom-marker');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeTruthy();
      expect(page.global('!!nguiMapRef.map.custommarkers')).toBeTruthy();
    });

    it('should display a list of custom markers', () => {
      browser.get('#/custom-marker-ng-for');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.custommarkers')).toBeTruthy();
      expect(page.global('nguiMapRef.map.custommarkers.length')).toEqual(9);
    });
  });

  describe('Simple InfoWindow', () => {
    it('should display an info window', () => {
      browser.get('#/simple-info-window');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeTruthy();

      browser.executeScript('google.maps.event.trigger(nguiMapRef.map.markers[0], "click")');

      expect(page.global('!!nguiMapRef.map.infowindows')).toBeTruthy();
      expect(page.global('!!nguiMapRef.map.infowindows[0].anchor')).toBeTruthy();
    });
  });

  describe('Polygon', () => {
    it('should display a polygon', () => {
      browser.get('#/polygon');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.polygons')).toBeTruthy();
    });
  });

  describe('Map Options', () => {
    it('should initialize center, zoom, map type and tilt', () => {
      browser.get('#/map-with-options');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('nguiMapRef.map.getZoom()')).toEqual(18);
      expect(page.global('nguiMapRef.map.getMapTypeId()')).toEqual('satellite');
      expect(page.global('nguiMapRef.map.getTilt()')).toEqual(45);
    });

    it('should set center and zoom', () => {
      browser.get('#/map-change-multiple-properties');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('nguiMapRef.map.getCenter().lat()')).toEqual(42.99);
      expect(page.global('nguiMapRef.map.getZoom()')).toEqual(11);

      page.click('button#change-props');

      browser.waitForAngularEnabled(false);

      expect(page.centerAndZoom.getText()).toContain('40.7127753');

      expect(page.global('nguiMapRef.map.getCenter().lat()')).toEqual(40.7127753);
      expect(page.global('nguiMapRef.map.getZoom()')).toEqual(8);
    });
  });

  describe('Simple Polyline', () => {
    it('should display polylines', () => {
      browser.get('#/simple-polyline');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.polylines')).toBeTruthy();
    });
  });

  describe('Simple Ground Overlay', () => {
    it('should display overlay', () => {
      browser.get('#/simple-ground-overlay');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.groundoverlays')).toBeTruthy();
    });
  });

  describe('Layers', () => {
    it('should display bicycling layer', () => {
      browser.get('#/bicycling-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.bicyclinglayers')).toBeTruthy();
    });

    it('should display traffic layer', () => {
      browser.get('#/traffic-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.trafficlayers')).toBeTruthy();
    });

    it('should display transit layer', () => {
      browser.get('#/transit-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.transitlayers')).toBeTruthy();
    });

    it('should display heatmap layer', () => {
      browser.get('#/heatmap-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.heatmaplayers')).toBeTruthy();
    });

    it('should display kml layer', () => {
      browser.get('#/kml-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.kmllayers')).toBeTruthy();
    });

    it('should display data layer', () => {
      browser.get('#/data-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.datas')).toBeTruthy();
    });
  });

  describe('Street View Panorama', () => {
    it('should display street view', () => {
      browser.get('#/data-layer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.streetView')).toBeTruthy();
    });
  });

  describe('Places Autocomplete', () => {
    it('should show selected place text', () => {
      browser.get('#/places-auto-complete');
      page.searchForPlace('Brampton, ON');
      browser.wait(ExpectedConditions.elementToBeClickable(page.pacResults.first()));
      page.pacResults.first().click();
      expect(page.getPlaceText()).toBe('Brampton, ON, Canada');
    });
  });

  describe('Directions Renderer', () => {
    it('should show desired directions', () => {
      browser.get('#/directions-renderer');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();

      expect(page.directions.getAttribute('innerHTML')).toContain('New York, NY 10119, USA');
      page.selectDestination('Grand');
      expect(page.directions.getAttribute('innerHTML')).toContain('89 E 42nd St, New York, NY 10017, USA');
    });
  });

  describe('Drawing Manager', () => {
    it('should show drawings', () => {
      browser.get('#/drawing-manager');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.drawingmanagers')).toBeTruthy();
    });
  });

  describe('Events Arguments', () => {
    it('should reiceive event arguments', () => {
      browser.get('#/event-arguments');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
    });
  });

});
