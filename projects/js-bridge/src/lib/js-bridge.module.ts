import { NgModule, ModuleWithProviders } from '@angular/core';
import { JsBridgeComponent } from './js-bridge.component';
import { JsBridgeService } from './js-bridge.service';

@NgModule({
  declarations: [JsBridgeComponent],
  imports: [
  ],
  exports: []
})
export class JsBridgeModule { 

	static forRoot(): ModuleWithProviders {
    return {
      ngModule: JsBridgeModule,
      providers: [ JsBridgeService ]
    }
  }

}
