import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
export declare class HeatmapLayer extends BaseMapDirective {
    data: any;
    dissipating: any;
    gradient: any;
    maxIntensity: any;
    opacity: any;
    radius: any;
    options: any;
    libraryName: string;
    constructor(nguiMapComp: NguiMapComponent);
}
