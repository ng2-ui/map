import { IJson } from './util';
import { GeoCoder } from './geo-coder';
/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
export declare class OptionBuilder {
    private geoCoder;
    constructor(geoCoder: GeoCoder);
    googlizeAllInputs(definedInputs: string[], userInputs: any): any;
    googlizeMultiple(inputs: any[], options?: IJson): any;
    googlize(input: any, options?: IJson): any;
    private getLatLng(input);
    private getJSONParsed(input, options);
    private getAnyMapObject(input);
    private getAnyMapConstant(input, options);
    /**
     * streetviewControl, panControl, etc, not a general control
     */
    private getMapControlOption(controlOptions);
    private getDateObject(input);
    private getMapIcons(input);
    private getMarkerIcon(input);
}
