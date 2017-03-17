/**
 * return json string from json-like string
 */
export function jsonize(str: string): string {
  try {       // if parsable already, return as it is
    JSON.parse(str);
    return str;
  } catch (e) { // if not parsable, change little
    return str
      .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function(_: any, $1: any) {
          return '"' + $1 + '":';
        }
      )
      .replace(/'([^']+)'/g,   // replacing single quote to double quote
        function(_: any, $1: any) {
          return '"' + $1 + '"';
        }
      );
  }
};

/**
 * Returns string to an object by using JSON.parse()
 */
export function getJSON(input: any): any {
  if (typeof input === 'string') {
    const re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
    if (input.match(re)) {
      input = '[' + input + ']';
    }
    return JSON.parse(jsonize(input));
  } else {
    return input;
  }
};

/**
 * json type definition
 */
/* tslint:disable */
//interface IJsonArray extends Array<string|number|boolean|Date|IJson|IJsonArray> { }
export interface IJson {
  //[x: string]: string|number|boolean|Date|IJson|IJsonArray;
  [x: string]: string|number|boolean|Date|IJson|Array<string|number|boolean|Date|IJson>;
}
/* tslint:enable */


/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
export function toCamelCase(str: string): string {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

export function isMapsApiLoaded() {
  return typeof google === 'object' && typeof google.maps === 'object';
}
