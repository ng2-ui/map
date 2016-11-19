import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Transit Layer</h1>
    <ng2-map zoom="13" center="51.501904, -0.115871">
      <transit-layer></transit-layer>
    </ng2-map>
<pre>
&lt;ng2-map zoom="13" center="51.501904, -0.115871">
  &lt;transit-layer>&lt;/transit-layer>
&lt;/ng2-map>
</pre>
  `,
})
export class TransitLayerComponent {
}
