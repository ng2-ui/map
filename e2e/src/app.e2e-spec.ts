import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('Angular(2+) Google Maps Demo', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getTitle()).toEqual('Angular(2+) Google Maps');
  });

  describe('Simple map', () => {
    it('should display a simple map', () => {
      page.click('li[routerlink="/simple-map"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('nguiMapRef.map.getCenter().lat()')).toEqual(42.99);
    });
  });


  describe('Simple Circle', () => {
    it('should display a simple circle', () => {
      page.click('li[routerlink="/simple-circle"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.circles')).toBeTruthy();
      expect(page.global('nguiMapRef.map.circles.length')).toEqual(1);
    });
  });

  describe('Simple Marker', () => {
    it('should display a simple marker', () => {
      page.click('li[routerlink="/simple-marker"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeDefined();
      expect(page.global('nguiMapRef.map.markers.length')).toEqual(1);
    });
  });

  describe('Marker With ngFor', () => {
    it('should display all markers', () => {
      page.click('li[routerlink="/marker-ng-for"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeTruthy();
      expect(page.global('nguiMapRef.map.markers.length')).toEqual(9);
      page.click('ng-component > button');
      expect(page.global('nguiMapRef.map.markers.length')).toEqual(9);
    });
  });

  describe('Simple InfoWindow', () => {
    it('should display an info window', () => {
      page.click('li[routerlink="/simple-info-window"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.markers')).toBeTruthy();

      browser.executeScript('google.maps.event.trigger(nguiMapRef.map.markers[0], "click")');

      expect(page.global('!!nguiMapRef.map.infowindows')).toBeTruthy();
      expect(page.global('!!nguiMapRef.map.infowindows[0].anchor')).toBeTruthy();
    });
  });

  describe('Polygon', () => {
    it('should display a polygon', () => {
      page.click('li[routerlink="/polygon"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.polygons')).toBeTruthy();
    });
  });

  describe('Map With Options', () => {
    it('should initialize center, zoom, map type and tilt', () => {
      page.click('li[routerlink="/map-with-options"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('nguiMapRef.map.getZoom()')).toEqual(18);
      expect(page.global('nguiMapRef.map.getMapTypeId()')).toEqual('satellite');
      expect(page.global('nguiMapRef.map.getTilt()')).toEqual(45);
    });
  });

  describe('Map -- Change Multiple Properties', () => {
    it('should set center and zoom', () => {
      page.click('li[routerlink="/map-change-multiple-properties"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('nguiMapRef.map.getCenter().lat()')).toEqual(42.99);
      expect(page.global('nguiMapRef.map.getZoom()')).toEqual(11);

      page.click('button#change-props');

      expect(page.global('nguiMapRef.map.getCenter().lat()')).toEqual(40.7127753);
      expect(page.global('nguiMapRef.map.getZoom()')).toEqual(8);
    });
  });

  describe('Simple Polyline', () => {
    it('should display polylines', () => {
      page.click('li[routerlink="/simple-polyline"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.polylines')).toBeTruthy();
    });
  });


  // Simple Ground Overay
  // click "li[routerlink='/simple-ground-overlay']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.groundoverlays"
  //
  describe('Simple Ground Overlay', () => {
    it('should display overlay', () => {
      page.click('li[routerlink="/simple-ground-overlay"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.groundoverlays')).toBeTruthy();
    });
  });

  // Bicycling Layer
  // click "li[routerlink='/bicycling-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.bicyclinglayers"
  describe('Bicycling Layer', () => {
    it('should display bicycling layer', () => {
      page.click('li[routerlink="/bicycling-layer"]');
      expect(page.global('nguiMapRef.map.getCenter()')).toBeDefined();
      expect(page.global('!!nguiMapRef.map.bicyclinglayers')).toBeTruthy();
    });
  });

  // Traffic Layer
  // click "li[routerlink='/traffic-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.trafficlayers"
  //
  // Transit Layer
  // click "li[routerlink='/transit-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.transitlayers"
  //
  // Heatmap Layer
  // click "li[routerlink='/heatmap-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.heatmaplayers"
  //
  // Kml Layer
  // click "li[routerlink='/kml-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.kmllayers"
  //
  // Data Layer
  // click "li[routerlink='/data-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.datas
  //
  // Street View Panorama
  // click "li[routerlink='/data-layer']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.streetView"
  // --verify script "nguiMapRef.map.streetviewpanoramas"
  //
  // Places Autocomplete
  // click "li[routerlink='/places-auto-complete']"
  // enter text "Brampton, ON" into "Enter a location"
  // click ".pac-item:nth-child(1)"
  // verify element "input" value is "Brampton, ON, Canada"
  //
  // Directions Renderer
  // click "li[routerlink='/directions-renderer']"
  // verify script "nguiMapRef.map.getCenter()"
  // see 'New York, NY 10119, USA'
  // enter text "Grand" into select
  // see '89 E 42nd St, New York, NY 10017, USA'
  //
  // Drawing Manager
  // click "li[routerlink='/drawing-manager']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.drawingmanagers"
  //
  // Event Arguments
  // click "li[routerlink='/event-arguments']"
  // verify script "nguiMapRef.map.getCenter()"
  //
  // Custom Marker
  // click "li[routerlink='/custom-marker']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.markers"
  // verify script "nguiMapRef.map.custommarkers"
  //
  // Custom Marker NgFor
  // click "li[routerlink='/custom-marker-ng-for']"
  // verify script "nguiMapRef.map.getCenter()"
  // verify script "nguiMapRef.map.custommarkers"
  // verify script "nguiMapRef.map.custommarkers.length == 9"
});
