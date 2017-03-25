/**
 * return json string from json-like string
 */
export declare function jsonize(str: string): string;
/**
 * Returns string to an object by using JSON.parse()
 */
export declare function getJSON(input: any): any;
/**
 * json type definition
 */
export interface IJson {
    [x: string]: string | number | boolean | Date | IJson | Array<string | number | boolean | Date | IJson>;
}
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
export declare function toCamelCase(str: string): string;
export declare function isMapsApiLoaded(): boolean;
