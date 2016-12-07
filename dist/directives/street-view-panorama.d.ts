import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class StreetViewPanorama extends BaseMapDirective {
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
    ngOnDestroy(): void;
}
