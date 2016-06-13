/**
 * return json string from json-like string
 */
var jsonize = function(str): string {
  try {       // if parsable already, return as it is
    JSON.parse(str);
    return str;
  } catch(e) { // if not parsable, change little
    return str
      .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function(_, $1) {
          return '"'+$1+'":';
        }
      )
      .replace(/'([^']+)'/g,   // replacing single quote to double quote
        function(_, $1) {
          return '"'+$1+'"';
        }
      );
  }
};

/**
 * Returns string to an object by using JSON.parse()
 */
var getJSON = function(str: string): any {
  var re =/^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; //lat,lng
  if (str.match(re)) {
    str = "["+str+"]";
  }
  return JSON.parse(jsonize(str));
};

/**
 * json type definition
 */
interface IJson {
  [x: string]: string|number|boolean|Date|IJson|IJsonArray;
}
interface IJsonArray extends Array<string|number|boolean|Date|IJson|IJsonArray> { }

export {jsonize, getJSON, IJson};
