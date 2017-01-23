import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class HeatmapLayer extends BaseMapDirective {
    data: any;
    dissipating: any;
    gradient: any;
    maxIntensity: any;
    opacity: any;
    radius: any;
    options: any;
    libraryName: string;
    constructor(ng2MapComp: Ng2MapComponent);
}
