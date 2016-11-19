import {Component, ViewChild} from '@angular/core';
import {Ng2MapComponent, TrafficLayer} from "ng2-map";

@Component({
  template: `
    <h1>Traffic Layer</h1>
    <ng2-map zoom="13" center="34.04924594193164, -118.24104309082031">
      <traffic-layer #trafficLayer></traffic-layer>
    </ng2-map>
<pre>
&lt;ng2-map zoom="13" center="51.501904, -0.115871">
  &lt;traffic-layer>&lt;/traffic-layer>
&lt;/ng2-map>
</pre>
  `,
})
export class TrafficLayerComponent {
  @ViewChild(Ng2MapComponent) ng2Map: Ng2MapComponent;
  @ViewChild(TrafficLayer) trafficLayer: TrafficLayer;
  ngOnInit() {
    this.trafficLayer.initialized$.subscribe(trafficLayer => {
      console.log(11111111111111, trafficLayer);
    })
  }
}
