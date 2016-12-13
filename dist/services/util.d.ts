/**
 * return json string from json-like string
 */
declare const jsonize: (str: string) => string;
/**
 * Returns string to an object by using JSON.parse()
 */
declare const getJSON: (input: any) => any;
/**
 * json type definition
 */
interface IJson {
    [x: string]: string | number | boolean | Date | IJson | Array<string | number | boolean | Date | IJson>;
}
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
declare const toCamelCase: (str: string) => string;
export { jsonize, getJSON, IJson, toCamelCase };
