/// <reference types="googlemaps" />
import { HeatmapLayer } from "ng2-map";
export declare class HeatmapLayerComponent {
    heatmapLayer: HeatmapLayer;
    heatmap: google.maps.visualization.HeatmapLayer;
    map: google.maps.Map;
    ngOnInit(): void;
    toggleHeatmap(): void;
    changeGradient(): void;
    changeRadius(): void;
    changeOpacity(): void;
    points: google.maps.LatLng[];
}
