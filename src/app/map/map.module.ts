import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CapabilitiesService } from './shared/capabilities.service';
import { LayerService } from './shared/layer.service';
import { MapService } from './shared/map.service';
import { QueryService } from './shared/query.service';

import { MapComponent } from './map/map.component';
import { ZoomComponent } from './zoom/zoom.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { LayerListComponent } from './layer-list/layer-list.component';
import { LayerListItemComponent } from './layer-list-item/layer-list-item.component';
import { LayerEditorComponent } from './layer-editor/layer-editor.component';
import { LayerFormComponent } from './layer-form/layer-form.component';
import { LayerLegendComponent } from './layer-legend/layer-legend.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [MapComponent],
  declarations: [
    MapComponent,
    ZoomComponent,
    MapEditorComponent,
    LayerListComponent,
    LayerListItemComponent,
    LayerEditorComponent,
    LayerFormComponent,
    LayerLegendComponent
  ],
  entryComponents: [
    MapEditorComponent,
    LayerEditorComponent
  ],
  providers: [
    CapabilitiesService,
    LayerService,
    MapService,
    QueryService
  ]
})
export class MapModule { }
