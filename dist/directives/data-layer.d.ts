import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
export declare class DataLayer extends BaseMapDirective {
    controlPosition: any;
    controls: any;
    drawingMode: any;
    featureFactory: any;
    style: any;
    geoJson: any;
    addfeature: any;
    click: any;
    dblclick: any;
    mousedown: any;
    mouseout: any;
    mouseover: any;
    mouseup: any;
    removefeature: any;
    removeproperty: any;
    rightclick: any;
    setgeometry: any;
    setproperty: any;
    constructor(nguiMapComponent: NguiMapComponent);
    initialize(): void;
}
