import { Injectable } from '@angular/core';
import { getJSON, IJson } from './util';

/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
@Injectable()
export class OptionBuilder {

  googlizeAllInputs(definedInputs: string[], userInputs: any) {
    let options: any = {};

    // if options given from user, only take options and ignore other inputs
    if (userInputs.options) {
      console.log('userInputs.options .................', userInputs.options);
      options = userInputs.options;
      if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
        console.error('when "options" are used, other options are ignored');
      }
    } else { // if options not given, process all user inputs
      definedInputs.forEach(input => {
        if (userInputs[input] !== undefined)  {
          options[input] = this.googlize(userInputs[input], {key: input});
        }
      });
    }
    return options;
  }

  googlizeMultiple(inputs: any[], options?: IJson): any {
    options =  options || {};
    for (let key in inputs) {
      let val = inputs[key];
      // (non-strings are fully converted)
      if (typeof val !== 'string') {
        options[key] = val;
      } // sometimes '0' needed to stay as it is
      else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
        options[key] = this.googlize(val, {key: key});
      }
    } // for(var key in attrs)
    return options;
  }

  googlize(input: any, options?: IJson): any {
    options = options || {};
    let output: any = input;
    if (typeof input === 'string') { // convert string to a google object
      if (input === 'false') {
        output = false;
      } else if (input === '0') {
        output = 0;
      } else {
        output =
          // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
          this.getJSONParsed(input, options)

          /* Foo.Bar(...) -> new google.maps.Foo.Bar(...) */
          || this.getAnyMapObject(input)

          /*  MapTypeID.HYBRID -> new google.maps.MapTypeID.HYBRID */
          || this.getAnyMapConstant(input, options)

          /*  2016-06-20 -> new Date('2016-06-20') */
          || this.getDateObject(input)

          || input;
      }
    }

    if (options['key']) {
      let key: string = <string>options['key'];
      if (output instanceof Array) { // e.g., [1, 2]
        if (key === 'bounds') {
          output = new google.maps.LatLngBounds(output[0], output[1]);
        } else if (key === 'icons') {
          output = this.getMapIcons(output);
        } else if (key === 'position' || key.match(/^geoFallback/) ) {
          output = this.getLatLng(output);
        }
      } else if (output instanceof Object) {
        if (key === 'icon') {
          output = this.getMarkerIcon(output);
        }
        else if (key.match(/ControlOptions$/)) {
          output = this.getMapControlOption(output);
        }
      }
    }

    // delete keys only for processing, not used by google
    delete output['doNotConverStringToNumber'];
    delete output['key'];

    return output;
  }

  private getLatLng(input: any): google.maps.LatLng | Array<google.maps.LatLng> {
    let output: google.maps.LatLng | Array<google.maps.LatLng>;
    if (input[0].constructor === Array) { // [[1,2],[3,4]]
      output = (<any[]>input).map((el: number[]) => new google.maps.LatLng(el[0], el[1]));
    } else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
      output = new google.maps.LatLng(input[0], input[1]);
    }
    return output;
  }

  private getJSONParsed(input: any, options: IJson): IJson {
    let output: any;
    try {
      output = getJSON(input);
      if (output instanceof Array) {
        // [{a:1}] : not lat/lng ones

        if (output[0].constructor !== Object) { // [[1,2],[3,4]] or [1,2]
          output = this.getLatLng(output);
        }
      }
      // JSON is an object (not array or null)
      else if (output === Object(output)) {
        // check for nested hashes and convert to Google API options
        let newOptions = options;
        newOptions['doNotConverStringToNumber'] = true;
        output = this.googlizeMultiple(output, newOptions);
      }
    } catch (e) {
    }
    return output;
  }

  private getAnyMapObject(input: string): any {
    let output: any;
    if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
      try {
        output = Function(`return new google.maps.${input};`)();
      } catch (e) {}
    }
    return output;
  }

  private getAnyMapConstant(input: string, options: IJson): any {
    let output: any;

    if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) { // e.g. MapTypeID.HYBRID
      try {
        let matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
        output = google.maps[matches[1]][matches[2]];
      } catch (e) {}
    } else if (input.match(/^[A-Z]+$/)) { // e.g. HYBRID
      try {
        let capitalizedKey = (<string>options['key']).charAt(0).toUpperCase() +
          (<string>options['key']).slice(1);
        output = google.maps[capitalizedKey][input];
      } catch (e) {}
    }
    return output;
  }

  /**
   * streetviewControl, panControl, etc, not a general control
   */
  private getMapControlOption(controlOptions: IJson): IJson {
    let newControlOptions: IJson = controlOptions;

    for (let key in newControlOptions) { // assign the right values
      if (newControlOptions[key]) {
        let value = newControlOptions[key];

        if (typeof value === 'string') {
          value = (<string>value).toUpperCase();
        }
        else if (key === 'mapTypeIds') {
          value = (<any[]>value).map(function (str) {
            if (str.match(/^[A-Z]+$/)) { // if constant
              return google.maps.MapTypeId[str.toUpperCase()];
            } else { // else, custom map-type
              return str;
            }
          });
        }

        if (key === 'style') {
          let objName = key.replace(/Options$/, '') + 'Style';
          newControlOptions[key] = google.maps[objName][<any>value];
        }
        else if (key === 'position') {
          newControlOptions[key] = google.maps.ControlPosition[<any>value];
        }
        else {
          newControlOptions[key] = value;
        }
      }
    }

    return newControlOptions;
  }

  private getDateObject(input: string): Date {
    let output: Date;

    if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
      try {
        output = new Date(input);
      } catch (e) {}
    }
    return output;
  }

  private getMapIcons(input: any[]): any[] {
    return input.map(el => {
      if (el.icon.path.match(/^[A-Z_]+$/)) {
        el.icon.path = google.maps.SymbolPath[el.icon.path];
      }
      return el;
    });
  }

  private getMarkerIcon(input: any): any {
    let output = input;

    if (('' + output.path).match(/^[A-Z_]+$/)) {
      output.path = google.maps.SymbolPath[output.path];
    }

    for (let key in output) {
      let arr = output[key];
      if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
        output[key] = new google.maps.Point(arr[0], arr[1]);
    } else if (key === 'size' || key === 'scaledSize') {
        output[key] = new google.maps.Size(arr[0], arr[1]);
      }
    }

    return output;
  }

  private onlyOptionsGiven(definedInputs: string[], userInputs: any): boolean {
    for (let i = 0; i < definedInputs.length; i++) {
      let input = definedInputs[i];
      if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
        return false;
      }
    }
    return true;
  }
}
